'use client'

import { newsletterSubscriptionSchema, type NewsletterSubscription } from '@/lib/types/newsletter'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, CheckCircle, Loader2, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface NewsletterSignupProps {
  source?: string
  showFirstName?: boolean
  showLastName?: boolean
  className?: string
  buttonText?: string
  placeholder?: string
  successMessage?: string
}

export function NewsletterSignup({
  source = 'website',
  showFirstName = false,
  showLastName = false,
  className = '',
  buttonText = 'Subscribe',
  placeholder = 'Enter your email',
  successMessage = 'Successfully subscribed! Check your email for confirmation.',
}: NewsletterSignupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterSubscription>({
    resolver: zodResolver(newsletterSubscriptionSchema),
    defaultValues: {
      source,
    },
  })

  const onSubmit = async (data: NewsletterSubscription) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(successMessage)
        reset()
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.message || 'An error occurred. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`newsletter-signup ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {showFirstName && (
          <div>
            <input
              {...register('firstName')}
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
        )}

        {showLastName && (
          <div>
            <input
              {...register('lastName')}
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        )}

        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              {...register('email')}
              type="email"
              placeholder={placeholder}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-800 to-green-700 text-white px-6 py-3 rounded-lg hover:from-amber-900 hover:to-green-800 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <span>{buttonText}</span>
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
            <CheckCircle className="h-5 w-5" />
            <p className="text-sm font-medium">{submitMessage}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-medium">{submitMessage}</p>
          </div>
        )}
      </form>
    </div>
  )
}
