'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, CheckCircle, Loader2, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const unsubscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type UnsubscribeFormData = z.infer<typeof unsubscribeSchema>

export function UnsubscribeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UnsubscribeFormData>({
    resolver: zodResolver(unsubscribeSchema),
  })

  const onSubmit = async (data: UnsubscribeFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/newsletter/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('You have been successfully unsubscribed from our newsletter.')
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email address"
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
        className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Unsubscribing...</span>
          </>
        ) : (
          <span>Unsubscribe</span>
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
  )
}
