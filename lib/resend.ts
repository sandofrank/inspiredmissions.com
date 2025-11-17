import { Resend } from 'resend'

// Initialize Resend with a placeholder during build time
// The actual API key validation happens at runtime in API routes
const apiKey = process.env.RESEND_API_KEY || 'placeholder-for-build'

export const resend = new Resend(apiKey)

// Configuration
export const RESEND_CONFIG = {
  fromEmail: 'noreply@inspiredmissions.com', // You'll need to verify this domain in Resend
  fromName: 'Inspired Missions',
  audienceId: process.env.RESEND_AUDIENCE_ID, // Legacy - no longer used in new Resend API (2025+)
}

// Helper to check if Resend is properly configured
export function isResendConfigured(): boolean {
  return !!process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'placeholder-for-build'
}
