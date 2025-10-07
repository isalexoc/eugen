# API Endpoints - Red Lotus International LLC

## Authentication Endpoints
- **POST** `/api/auth/signin` - User sign in
- **POST** `/api/auth/signup` - User registration
- **POST** `/api/auth/signout` - User sign out
- **GET** `/api/auth/session` - Get current session
- **POST** `/api/auth/forgot-password` - Password reset request
- **POST** `/api/auth/reset-password` - Password reset

## Stripe Payment Endpoints
- **POST** `/api/stripe/create-payment-intent` - Create payment intent
- **POST** `/api/stripe/confirm-payment` - Confirm payment
- **POST** `/api/stripe/create-subscription` - Create subscription
- **POST** `/api/stripe/cancel-subscription` - Cancel subscription
- **GET** `/api/stripe/subscription-status` - Get subscription status
- **POST** `/api/stripe/webhook` - Stripe webhook handler

## Newsletter Endpoints
- **POST** `/api/newsletter/subscribe` - Subscribe to newsletter
- **POST** `/api/newsletter/unsubscribe` - Unsubscribe from newsletter
- **GET** `/api/newsletter/subscribers` - Get newsletter subscribers
- **POST** `/api/newsletter/send` - Send newsletter
- **GET** `/api/newsletter/campaigns` - Get newsletter campaigns

## Sanity CMS Endpoints
- **GET** `/api/sanity/posts` - Get blog posts
- **GET** `/api/sanity/posts/[slug]` - Get single blog post
- **GET** `/api/sanity/products` - Get products
- **GET** `/api/sanity/products/[id]` - Get single product
- **GET** `/api/sanity/pages` - Get pages
- **GET** `/api/sanity/pages/[slug]` - Get single page

## Cloudinary Endpoints
- **POST** `/api/cloudinary/upload` - Upload media
- **DELETE** `/api/cloudinary/delete` - Delete media
- **GET** `/api/cloudinary/list` - List media files
- **POST** `/api/cloudinary/transform` - Transform media
- **GET** `/api/cloudinary/url` - Get optimized media URL

## Contact Endpoints
- **POST** `/api/contact/inquiry` - Submit contact inquiry
- **POST** `/api/contact/quote` - Request quote
- **POST** `/api/contact/support` - Submit support request
- **GET** `/api/contact/inquiries` - Get contact inquiries
- **PUT** `/api/contact/inquiries/[id]` - Update inquiry status

## User Management Endpoints
- **GET** `/api/users/profile` - Get user profile
- **PUT** `/api/users/profile` - Update user profile
- **GET** `/api/users/dashboard` - Get dashboard data
- **POST** `/api/users/preferences` - Update user preferences
- **GET** `/api/users/activity` - Get user activity

## Product Endpoints
- **GET** `/api/products` - Get all products
- **GET** `/api/products/[id]` - Get single product
- **GET** `/api/products/category/[category]` - Get products by category
- **GET** `/api/products/search` - Search products
- **POST** `/api/products/favorite` - Add to favorites
- **DELETE** `/api/products/favorite/[id]` - Remove from favorites

## Service Endpoints
- **GET** `/api/services` - Get all services
- **GET** `/api/services/[id]` - Get single service
- **GET** `/api/services/category/[category]` - Get services by category
- **POST** `/api/services/request` - Request service quote

## Analytics Endpoints
- **GET** `/api/analytics/visitors` - Get visitor analytics
- **GET** `/api/analytics/pages` - Get page analytics
- **GET** `/api/analytics/conversions` - Get conversion analytics
- **GET** `/api/analytics/revenue` - Get revenue analytics

## Email Endpoints
- **POST** `/api/email/send` - Send email
- **POST** `/api/email/template` - Create email template
- **GET** `/api/email/templates` - Get email templates
- **PUT** `/api/email/templates/[id]` - Update email template
- **DELETE** `/api/email/templates/[id]` - Delete email template

## File Upload Endpoints
- **POST** `/api/upload/image` - Upload image
- **POST** `/api/upload/document` - Upload document
- **POST** `/api/upload/video` - Upload video
- **DELETE** `/api/upload/[id]` - Delete uploaded file
- **GET** `/api/upload/[id]` - Get uploaded file

## Search Endpoints
- **GET** `/api/search` - Global search
- **GET** `/api/search/products` - Search products
- **GET** `/api/search/posts` - Search blog posts
- **GET** `/api/search/services` - Search services
- **GET** `/api/search/suggestions` - Get search suggestions

## Utility Endpoints
- **GET** `/api/health` - Health check
- **GET** `/api/version` - Get API version
- **GET** `/api/config` - Get configuration
- **POST** `/api/feedback` - Submit feedback
- **GET** `/api/sitemap` - Generate sitemap
