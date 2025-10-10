import { prisma } from '@/lib/prisma'
import { getImprovMXService } from '@/lib/services/improvmx'
import { getMailerLiteService } from '@/lib/services/mailerlite'
import { newsletterSubscriptionSchema } from '@/lib/types/newsletter'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = newsletterSubscriptionSchema.parse(body)
    console.log('validatedData', validatedData)

    // Check if subscriber already exists
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email: validatedData.email }
    })

    if (existingSubscriber) {
      if (existingSubscriber.status === 'UNSUBSCRIBED') {
        // Reactivate unsubscribed user
        await prisma.subscriber.update({
          where: { email: validatedData.email },
          data: {
            status: 'ACTIVE',
            firstName: validatedData.firstName,
            lastName: validatedData.lastName,
            source: validatedData.source,
            updatedAt: new Date(),
          }
        })

        // Update in MailerLite
        try {
          const mailerLite = getMailerLiteService()
          await mailerLite.updateSubscriber(validatedData.email, {
            name: validatedData.firstName ? `${validatedData.firstName} ${validatedData.lastName || ''}`.trim() : undefined,
            fields: {
              first_name: validatedData.firstName,
              last_name: validatedData.lastName,
              source: validatedData.source,
            }
          })
        } catch (error) {
          console.error('MailerLite update error:', error)
        }

        return NextResponse.json({
          success: true,
          message: 'Welcome back! You have been resubscribed to our newsletter.',
        })
      } else {
        return NextResponse.json({
          success: false,
          message: 'This email is already subscribed to our newsletter.',
        }, { status: 400 })
      }
    }

    // Create new subscriber in database
    const subscriber = await prisma.subscriber.create({
      data: {
        email: validatedData.email,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        source: validatedData.source || 'website',
        status: 'ACTIVE',
      }
    })

    // Add to MailerLite (only if API key is configured)
    let mailerLiteId: string | null = null
    if (process.env.MAILERLITE_API_KEY && process.env.MAILERLITE_API_KEY !== 'your_mailerlite_api_key') {
      try {
        const mailerLite = getMailerLiteService()
        const mailerLiteSubscriber = await mailerLite.createSubscriber({
          email: validatedData.email,
          name: validatedData.firstName ? `${validatedData.firstName} ${validatedData.lastName || ''}`.trim() : undefined,
          fields: {
            first_name: validatedData.firstName,
            last_name: validatedData.lastName,
            source: validatedData.source || 'website',
          }
        })

        mailerLiteId = mailerLiteSubscriber.id

        // Update database with MailerLite ID
        await prisma.subscriber.update({
          where: { id: subscriber.id },
          data: { mailerLiteId }
        })
      } catch (error) {
        console.error('MailerLite error:', error)
        // Continue even if MailerLite fails - we have the subscriber in our database
      }
    } else {
      console.log('MailerLite API key not configured, skipping MailerLite integration')
    }

    // Send welcome email (only if SMTP is configured)
    if (process.env.IMPROVMX_SMTP_HOST && process.env.IMPROVMX_SMTP_USER && process.env.IMPROVMX_SMTP_PASS) {
      try {
        const improvmx = getImprovMXService()
        console.log('improvmx', improvmx)
        await improvmx.sendWelcomeEmail(validatedData.email, validatedData.firstName)

      } catch (error) {
        console.error('Welcome email error:', error)
        // Continue even if welcome email fails
      }
    } else {
      console.log('ImprovMX SMTP not configured, skipping welcome email')
    }

    // Log the subscription
    await prisma.emailLog.create({
      data: {
        subscriberId: subscriber.id,
        type: 'WELCOME',
        status: 'SENT',
        subject: 'Welcome to Red Lotus International Newsletter!',
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter! Check your email for a welcome message.',
      data: {
        id: subscriber.id,
        email: subscriber.email,
        mailerLiteId,
      }
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        message: 'Invalid input data. Please check your email address.',
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      message: 'An error occurred while subscribing. Please try again later.',
    }, { status: 500 })
  }
}
