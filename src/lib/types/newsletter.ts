import { z } from 'zod'

// Newsletter subscription schema
export const newsletterSubscriptionSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  source: z.string().optional(),
})

export type NewsletterSubscription = z.infer<typeof newsletterSubscriptionSchema>

// Email template schema
export const emailTemplateSchema = z.object({
  name: z.string().min(1, 'Template name is required'),
  subject: z.string().min(1, 'Subject is required'),
  htmlContent: z.string().min(1, 'HTML content is required'),
  textContent: z.string().optional(),
  variables: z.record(z.string()).optional(),
})

export type EmailTemplate = z.infer<typeof emailTemplateSchema>

// Campaign schema
export const campaignSchema = z.object({
  name: z.string().min(1, 'Campaign name is required'),
  description: z.string().optional(),
  templateId: z.string().min(1, 'Template is required'),
  workflowId: z.string().optional(),
  scheduledAt: z.date().optional(),
})

export type Campaign = z.infer<typeof campaignSchema>

// Automation workflow schema
export const automationWorkflowSchema = z.object({
  name: z.string().min(1, 'Workflow name is required'),
  description: z.string().optional(),
  triggerType: z.enum(['IMMEDIATE', 'SCHEDULED', 'EVENT_BASED', 'SUBSCRIBER_ADDED', 'SUBSCRIBER_TAGGED']),
  triggerConfig: z.record(z.any()),
  steps: z.array(z.record(z.any())),
})

export type AutomationWorkflow = z.infer<typeof automationWorkflowSchema>

// API Response types
export interface NewsletterResponse {
  success: boolean
  message: string
  data?: any
}

export interface SubscriberStats {
  total: number
  active: number
  unsubscribed: number
  bounced: number
  newThisMonth: number
}

export interface CampaignStats {
  sent: number
  delivered: number
  opened: number
  clicked: number
  bounced: number
  unsubscribed: number
  openRate: number
  clickRate: number
}
