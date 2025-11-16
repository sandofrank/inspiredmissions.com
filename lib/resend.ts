import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

// Configuration
export const RESEND_CONFIG = {
  fromEmail: 'noreply@inspiredmissions.com', // You'll need to verify this domain in Resend
  fromName: 'Inspired Missions',
  audienceId: process.env.RESEND_AUDIENCE_ID, // Optional: for managing subscribers in Resend
}
