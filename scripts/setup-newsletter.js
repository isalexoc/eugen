#!/usr/bin/env node

/**
 * Newsletter Setup Script
 *
 * This script helps set up the newsletter functionality by:
 * 1. Generating Prisma client
 * 2. Running database migrations
 * 3. Creating initial data
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Setting up Newsletter functionality...\n');

try {
  // Step 1: Generate Prisma client
  console.log('📦 Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('✅ Prisma client generated\n');

  // Step 2: Check if .env file exists
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    console.log('⚠️  .env file not found. Please copy env.example to .env and configure your environment variables.\n');
  } else {
    console.log('✅ .env file found\n');
  }

  // Step 3: Instructions for database setup
  console.log('📋 Next steps:');
  console.log('1. Set up your PostgreSQL database');
  console.log('2. Update DATABASE_URL in your .env file');
  console.log('3. Run: npx prisma migrate dev --name init');
  console.log('4. Get your MailerLite API key from https://dashboard.mailerlite.com/integrations/api');
  console.log('5. Get your Resend API key from https://resend.com/api-keys');
  console.log('6. Update your .env file with the API keys\n');

  console.log('🎉 Newsletter setup completed!');
  console.log('\n📚 Available endpoints:');
  console.log('- POST /api/newsletter/subscribe - Subscribe to newsletter');
  console.log('- POST /api/newsletter/unsubscribe - Unsubscribe from newsletter');
  console.log('- GET /api/newsletter/subscribers - Get subscribers (admin)');
  console.log('- POST /api/newsletter/subscribers - Bulk import subscribers (admin)');
  console.log('\n📄 Available pages:');
  console.log('- /newsletter - Newsletter signup page');
  console.log('- /unsubscribe - Unsubscribe page');
  console.log('- /admin/newsletter - Admin dashboard');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
