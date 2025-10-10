import { prisma } from '@/lib/prisma'
import { getImprovMXService } from '@/lib/services/improvmx'
import { getMailerLiteService } from '@/lib/services/mailerlite'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json({
        success: false,
        message: 'Email address is required.',
      }, { status: 400 })
    }

    // Find subscriber
    const subscriber = await prisma.subscriber.findUnique({
      where: { email }
    })

    if (!subscriber) {
      return NextResponse.json({
        success: false,
        message: 'Email address not found in our newsletter list.',
      }, { status: 404 })
    }

    if (subscriber.status === 'UNSUBSCRIBED') {
      return NextResponse.json({
        success: true,
        message: 'This email is already unsubscribed.',
      })
    }

    // Update subscriber status
    await prisma.subscriber.update({
      where: { email },
      data: {
        status: 'UNSUBSCRIBED',
        updatedAt: new Date(),
      }
    })

    // Remove from MailerLite
    try {
      const mailerLite = getMailerLiteService()
      await mailerLite.deleteSubscriber(email)
    } catch (error) {
      console.error('MailerLite unsubscribe error:', error)
      // Continue even if MailerLite fails
    }

    // Send unsubscribe confirmation email
    if (process.env.IMPROVMX_SMTP_HOST && process.env.IMPROVMX_SMTP_USER && process.env.IMPROVMX_SMTP_PASS) {
      try {
        const improvmx = getImprovMXService()
        await improvmx.sendUnsubscribeConfirmation(email)
      } catch (error) {
        console.error('Unsubscribe confirmation email error:', error)
        // Continue even if email fails
      }
    } else {
      console.log('ImprovMX SMTP not configured, skipping unsubscribe confirmation email')
    }

    // Log the unsubscription
    await prisma.emailLog.create({
      data: {
        subscriberId: subscriber.id,
        type: 'TRANSACTIONAL',
        status: 'SENT',
        subject: 'Unsubscribe Confirmation',
      }
    })

    return NextResponse.json({
      success: true,
      message: 'You have been successfully unsubscribed from our newsletter.',
    })

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)

    return NextResponse.json({
      success: false,
      message: 'An error occurred while unsubscribing. Please try again later.',
    }, { status: 500 })
  }
}

// Handle GET requests for unsubscribe links
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json({
        success: false,
        message: 'Email parameter is required.',
      }, { status: 400 })
    }

    // Find subscriber
    const subscriber = await prisma.subscriber.findUnique({
      where: { email }
    })

    if (!subscriber) {
      return NextResponse.json({
        success: false,
        message: 'Email address not found in our newsletter list.',
      }, { status: 404 })
    }

    if (subscriber.status === 'UNSUBSCRIBED') {
      return NextResponse.json({
        success: true,
        message: 'This email is already unsubscribed.',
      })
    }

    // Update subscriber status
    await prisma.subscriber.update({
      where: { email },
      data: {
        status: 'UNSUBSCRIBED',
        updatedAt: new Date(),
      }
    })

    // Remove from MailerLite
    try {
      const mailerLite = getMailerLiteService()
      await mailerLite.deleteSubscriber(email)
    } catch (error) {
      console.error('MailerLite unsubscribe error:', error)
    }

    // Send unsubscribe confirmation email
    if (process.env.IMPROVMX_SMTP_HOST && process.env.IMPROVMX_SMTP_USER && process.env.IMPROVMX_SMTP_PASS) {
      try {
        const improvmx = getImprovMXService()
        await improvmx.sendUnsubscribeConfirmation(email)
      } catch (error) {
        console.error('Unsubscribe confirmation email error:', error)
      }
    } else {
      console.log('ImprovMX SMTP not configured, skipping unsubscribe confirmation email')
    }

    // Log the unsubscription
    await prisma.emailLog.create({
      data: {
        subscriberId: subscriber.id,
        type: 'TRANSACTIONAL',
        status: 'SENT',
        subject: 'Unsubscribe Confirmation',
      }
    })

    return NextResponse.json({
      success: true,
      message: 'You have been successfully unsubscribed from our newsletter.',
    })

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)

    return NextResponse.json({
      success: false,
      message: 'An error occurred while unsubscribing. Please try again later.',
    }, { status: 500 })
  }
}
