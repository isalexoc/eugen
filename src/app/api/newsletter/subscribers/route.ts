import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')
    const status = searchParams.get('status')
    const search = searchParams.get('search')

    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {}

    if (status && ['ACTIVE', 'UNSUBSCRIBED', 'BOUNCED', 'COMPLAINED'].includes(status)) {
      where.status = status
    }

    if (search) {
      where.OR = [
        { email: { contains: search, mode: 'insensitive' } },
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
      ]
    }

    // Get subscribers with pagination
    const [subscribers, total] = await Promise.all([
      prisma.subscriber.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          status: true,
          tags: true,
          source: true,
          createdAt: true,
          updatedAt: true,
        }
      }),
      prisma.subscriber.count({ where })
    ])

    // Get statistics
    const stats = await prisma.subscriber.groupBy({
      by: ['status'],
      _count: {
        status: true
      }
    })

    const statusCounts = stats.reduce((acc: Record<string, number>, stat: { status: string; _count: { status: number } }) => {
      acc[stat.status] = stat._count.status
      return acc
    }, {} as Record<string, number>)

    const totalPages = Math.ceil(total / limit)

    return NextResponse.json({
      success: true,
      data: {
        subscribers,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
        stats: {
          total,
          active: statusCounts.ACTIVE || 0,
          unsubscribed: statusCounts.UNSUBSCRIBED || 0,
          bounced: statusCounts.BOUNCED || 0,
          complained: statusCounts.COMPLAINED || 0,
        }
      }
    })

  } catch (error) {
    console.error('Get subscribers error:', error)

    return NextResponse.json({
      success: false,
      message: 'An error occurred while fetching subscribers.',
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { emails, tags, source } = body

    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'Emails array is required.',
      }, { status: 400 })
    }

    const results = []
    const errors = []

    for (const emailData of emails) {
      try {
        const email = typeof emailData === 'string' ? emailData : emailData.email
        const firstName = typeof emailData === 'object' ? emailData.firstName : undefined
        const lastName = typeof emailData === 'object' ? emailData.lastName : undefined

        if (!email || typeof email !== 'string') {
          errors.push({ email: emailData, error: 'Invalid email format' })
          continue
        }

        // Check if subscriber already exists
        const existingSubscriber = await prisma.subscriber.findUnique({
          where: { email }
        })

        if (existingSubscriber) {
          errors.push({ email, error: 'Email already exists' })
          continue
        }

        // Create subscriber
        const subscriber = await prisma.subscriber.create({
          data: {
            email,
            firstName,
            lastName,
            tags: tags || [],
            source: source || 'bulk_import',
            status: 'ACTIVE',
          }
        })

        results.push(subscriber)
      } catch (error) {
        errors.push({
          email: emailData,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully imported ${results.length} subscribers.`,
      data: {
        imported: results,
        errors,
        summary: {
          total: emails.length,
          successful: results.length,
          failed: errors.length,
        }
      }
    })

  } catch (error) {
    console.error('Bulk import error:', error)

    return NextResponse.json({
      success: false,
      message: 'An error occurred while importing subscribers.',
    }, { status: 500 })
  }
}
