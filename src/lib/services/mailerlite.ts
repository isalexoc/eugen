interface MailerLiteSubscriber {
  id: string
  email: string
  name?: string
  fields?: Record<string, any>
  groups?: string[]
  status: 'active' | 'unsubscribed' | 'bounced'
  subscribed_at: string
  unsubscribed_at?: string
}

interface MailerLiteGroup {
  id: string
  name: string
  total: number
  active: number
  unsubscribed: number
  bounced: number
  unconfirmed: number
  junk: number
  sent: number
  opened: number
  clicked: number
  type: string
  date_created: string
  date_updated: string
}

interface MailerLiteCampaign {
  id: string
  name: string
  type: string
  status: string
  subject: string
  from_name: string
  from_email: string
  reply_to: string
  created_at: string
  updated_at: string
  sent_at?: string
  recipients_count: number
  opened_count: number
  clicked_count: number
}

export class MailerLiteService {
  private apiKey: string
  private baseUrl = 'https://connect.mailerlite.com/api'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`MailerLite API error: ${response.status} - ${error}`)
    }

    return response.json()
  }

  // Subscriber methods
  async createSubscriber(data: {
    email: string
    name?: string
    fields?: Record<string, any>
    groups?: string[]
  }): Promise<MailerLiteSubscriber> {
    return this.request<MailerLiteSubscriber>('/subscribers', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getSubscriber(email: string): Promise<MailerLiteSubscriber | null> {
    try {
      return await this.request<MailerLiteSubscriber>(`/subscribers/${email}`)
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return null
      }
      throw error
    }
  }

  async updateSubscriber(email: string, data: {
    name?: string
    fields?: Record<string, any>
    groups?: string[]
  }): Promise<MailerLiteSubscriber> {
    return this.request<MailerLiteSubscriber>(`/subscribers/${email}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteSubscriber(email: string): Promise<void> {
    await this.request(`/subscribers/${email}`, {
      method: 'DELETE',
    })
  }

  async getSubscribers(params: {
    limit?: number
    page?: number
    filter?: {
      status?: string
      groups?: string[]
    }
  } = {}): Promise<{
    data: MailerLiteSubscriber[]
    meta: {
      total: number
      per_page: number
      current_page: number
      last_page: number
    }
  }> {
    const searchParams = new URLSearchParams()

    if (params.limit) searchParams.set('limit', params.limit.toString())
    if (params.page) searchParams.set('page', params.page.toString())
    if (params.filter?.status) searchParams.set('filter[status]', params.filter.status)
    if (params.filter?.groups) {
      params.filter.groups.forEach(group => {
        searchParams.append('filter[groups]', group)
      })
    }

    const query = searchParams.toString()
    return this.request(`/subscribers${query ? `?${query}` : ''}`)
  }

  // Group methods
  async getGroups(): Promise<{
    data: MailerLiteGroup[]
  }> {
    return this.request('/groups')
  }

  async createGroup(name: string): Promise<MailerLiteGroup> {
    return this.request<MailerLiteGroup>('/groups', {
      method: 'POST',
      body: JSON.stringify({ name }),
    })
  }

  // Campaign methods
  async createCampaign(data: {
    name: string
    type: 'regular' | 'ab'
    subject: string
    from_name: string
    from_email: string
    reply_to: string
    groups?: string[]
    content?: {
      html?: string
      plain?: string
    }
  }): Promise<MailerLiteCampaign> {
    return this.request<MailerLiteCampaign>('/campaigns', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getCampaigns(params: {
    limit?: number
    page?: number
    filter?: {
      status?: string
    }
  } = {}): Promise<{
    data: MailerLiteCampaign[]
    meta: {
      total: number
      per_page: number
      current_page: number
      last_page: number
    }
  }> {
    const searchParams = new URLSearchParams()

    if (params.limit) searchParams.set('limit', params.limit.toString())
    if (params.page) searchParams.set('page', params.page.toString())
    if (params.filter?.status) searchParams.set('filter[status]', params.filter.status)

    const query = searchParams.toString()
    return this.request(`/campaigns${query ? `?${query}` : ''}`)
  }

  async sendCampaign(campaignId: string): Promise<void> {
    await this.request(`/campaigns/${campaignId}/send`, {
      method: 'POST',
    })
  }

  async getCampaignStats(campaignId: string): Promise<{
    sent: number
    delivered: number
    opened: number
    clicked: number
    bounced: number
    unsubscribed: number
    open_rate: number
    click_rate: number
  }> {
    return this.request(`/campaigns/${campaignId}/reports`)
  }
}

// Singleton instance
let mailerLiteService: MailerLiteService | null = null

export function getMailerLiteService(): MailerLiteService {
  if (!mailerLiteService) {
    const apiKey = process.env.MAILERLITE_API_KEY
    if (!apiKey) {
      throw new Error('MAILERLITE_API_KEY environment variable is required')
    }
    mailerLiteService = new MailerLiteService(apiKey)
  }
  return mailerLiteService
}
