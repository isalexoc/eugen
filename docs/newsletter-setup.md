# Newsletter Functionality Setup Guide

This guide will help you set up the newsletter functionality for Red Lotus International using ImprovMX and MailerLite.

## 🏗️ Architecture Overview

The newsletter system uses a hybrid approach:
- **ImprovMX**: Email forwarding and professional email addresses
- **MailerLite**: Newsletter automation and bulk email sending
- **Resend**: Transactional emails (welcome, unsubscribe confirmations)
- **PostgreSQL + Prisma**: Local subscriber database and analytics

## 📋 Prerequisites

1. **PostgreSQL Database**: Set up a PostgreSQL database
2. **MailerLite Account**: Sign up at [mailerlite.com](https://mailerlite.com)
3. **Resend Account**: Sign up at [resend.com](https://resend.com)
4. **ImprovMX Account**: Already configured in your project

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Copy `env.example` to `.env` and configure:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/redlotus_newsletter?schema=public"

# MailerLite Newsletter
MAILERLITE_API_KEY=your_mailerlite_api_key
MAILERLITE_GROUP_ID=your_mailerlite_group_id

# Resend Email Service
RESEND_API_KEY=your_resend_api_key

# ImprovMX (already configured)
IMPROVMX_DOMAIN=redlotusinternational.com
IMPROVMX_API_KEY=your_improvmx_api_key
FROM_EMAIL=info@redlotusinternational.com
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Seed initial data
npx prisma db seed
```

### 4. Get API Keys

#### MailerLite Setup
1. Go to [MailerLite Dashboard](https://dashboard.mailerlite.com)
2. Navigate to Integrations → API
3. Create a new API key
4. Create a group for your subscribers
5. Note the group ID

#### Resend Setup
1. Go to [Resend Dashboard](https://resend.com)
2. Navigate to API Keys
3. Create a new API key
4. Verify your domain (optional but recommended)

## 📊 Features

### ✅ Implemented Features

- **Newsletter Subscription**: Email signup with validation
- **Unsubscribe Functionality**: One-click unsubscribe with confirmation
- **Subscriber Management**: Admin dashboard for managing subscribers
- **Bulk Import**: CSV import for existing subscriber lists
- **Email Templates**: Welcome and unsubscribe confirmation emails
- **Analytics**: Basic subscriber statistics and tracking
- **Responsive Design**: Mobile-friendly signup forms

### 🔄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/newsletter/subscribe` | Subscribe to newsletter |
| POST | `/api/newsletter/unsubscribe` | Unsubscribe from newsletter |
| GET | `/api/newsletter/unsubscribe?email=...` | Unsubscribe via link |
| GET | `/api/newsletter/subscribers` | Get subscribers (admin) |
| POST | `/api/newsletter/subscribers` | Bulk import subscribers |

### 📄 Pages

- `/newsletter` - Newsletter signup page
- `/unsubscribe` - Unsubscribe page
- `/admin/newsletter` - Admin dashboard

## 🎨 Components

### NewsletterSignup
Reusable newsletter signup component with:
- Email validation
- Optional first/last name fields
- Loading states
- Success/error messages
- Customizable styling

```tsx
<NewsletterSignup
  source="footer"
  showFirstName={true}
  showLastName={true}
  placeholder="Enter your email"
  buttonText="Subscribe"
/>
```

### UnsubscribeForm
Unsubscribe form component with:
- Email validation
- Confirmation messages
- Error handling

## 🔧 Customization

### Email Templates
Edit email templates in `lib/services/resend.ts`:
- Welcome email template
- Unsubscribe confirmation template

### Styling
The components use Tailwind CSS and can be customized by:
- Modifying className props
- Updating the component styles
- Using CSS custom properties

### Database Schema
The Prisma schema in `prisma/schema.prisma` includes:
- Subscribers table
- Email templates table
- Campaigns table
- Automation workflows table
- Email logs table

## 📈 Analytics

The system tracks:
- Total subscribers
- Active vs unsubscribed
- New subscribers per month
- Email delivery status
- Source tracking (where subscribers came from)

## 🔒 Security

- Email validation using Zod schemas
- Rate limiting (recommended to add)
- CSRF protection via Next.js
- Secure API key storage
- GDPR-compliant unsubscribe process

## 🚀 Deployment

### Production Checklist
- [ ] Set up production PostgreSQL database
- [ ] Configure production environment variables
- [ ] Set up domain verification for Resend
- [ ] Configure MailerLite production settings
- [ ] Test all email flows
- [ ] Set up monitoring and logging

### Environment Variables for Production
```env
DATABASE_URL="postgresql://..."
MAILERLITE_API_KEY="ml_..."
RESEND_API_KEY="re_..."
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check DATABASE_URL format
   - Ensure PostgreSQL is running
   - Verify database exists

2. **MailerLite API Error**
   - Verify API key is correct
   - Check group ID exists
   - Ensure API key has proper permissions

3. **Resend Email Error**
   - Verify API key is correct
   - Check domain verification status
   - Review email content for issues

### Debug Mode
Set `NODE_ENV=development` to see detailed error messages.

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review API documentation
3. Check service status pages
4. Contact support for each service

## 🔄 Future Enhancements

Planned features:
- Advanced email templates with visual editor
- A/B testing for campaigns
- Advanced automation workflows
- Detailed analytics and reporting
- Integration with more email services
- Webhook support for real-time updates
