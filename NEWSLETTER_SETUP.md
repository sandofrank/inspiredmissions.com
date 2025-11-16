# Newsletter System Setup Guide

Your newsletter system is now fully implemented using Resend. Here's how to set it up and use it.

## Features

✅ Newsletter signup form on blog page
✅ Welcome email sent to new subscribers
✅ Beautiful blog post email template
✅ Manual newsletter sending via admin interface
✅ Subscriber management through Resend dashboard

## Setup Instructions

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Free tier includes: 3,000 emails/month, 100 emails/day

### 2. Verify Your Domain

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add `inspiredmissions.com`
4. Add the DNS records provided by Resend to your domain registrar
5. Wait for verification (usually takes a few minutes)

### 3. Create an Audience

1. In Resend dashboard, go to **Audiences**
2. Click **Create Audience**
3. Name it "Inspired Missions Newsletter" or similar
4. Copy the Audience ID (starts with `aud_`)

### 4. Generate API Keys

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Name it "Inspired Missions Website"
4. Copy the API key (starts with `re_`)

### 5. Configure Environment Variables

Create a `.env.local` file in your project root with these variables:

```bash
# Resend API Key
RESEND_API_KEY=re_your_api_key_here

# Resend Audience ID
RESEND_AUDIENCE_ID=aud_your_audience_id_here

# Newsletter Admin API Key (generate a random string)
NEWSLETTER_API_KEY=generate_a_random_secure_key_here
```

**To generate a random API key:**
```bash
openssl rand -hex 32
```

### 6. Update Email Configuration

In `lib/resend.ts`, update the `fromEmail` if needed:

```typescript
export const RESEND_CONFIG = {
  fromEmail: 'noreply@inspiredmissions.com', // Must match verified domain
  fromName: 'Inspired Missions',
  audienceId: process.env.RESEND_AUDIENCE_ID,
}
```

## How to Use

### Subscribing to Newsletter

1. Users can subscribe at: `/blog` (at the bottom of the page)
2. They'll receive an automated welcome email
3. Their email is stored in your Resend audience

### Sending a Newsletter

1. Navigate to `/newsletter` in your browser
2. Enter the `NEWSLETTER_API_KEY` you configured
3. Select a blog post from the dropdown
4. Review the preview
5. Click "Send Newsletter"

The system will:
- Fetch all subscribers from your Resend audience
- Generate a beautiful HTML email with the blog post
- Send to all subscribers in batches of 50
- Show you the results (success/error counts)

### Managing Subscribers

You can manage subscribers in two ways:

1. **Resend Dashboard:**
   - View all contacts
   - Manually add/remove subscribers
   - Export contact list
   - View analytics

2. **Automatic Unsubscribe:**
   - All emails include an unsubscribe link
   - Resend handles unsubscribes automatically

## Email Template

The blog post email includes:
- Featured image
- Post title and date
- Excerpt
- "Read Full Article" button
- "Support Our Mission" section with donate button
- Social media links
- Automatic unsubscribe link

## Files Created

```
app/
  api/
    newsletter/
      subscribe/
        route.ts              # Handles newsletter subscriptions
      send/
        route.ts              # Sends newsletters to all subscribers
  newsletter/
    page.tsx                  # Admin interface for sending newsletters
  blog/
    page.tsx                  # Updated with newsletter signup form

components/
  NewsletterSignup.tsx        # Newsletter signup form component
  emails/
    BlogPostEmail.tsx         # Email template for blog posts

lib/
  resend.ts                   # Resend configuration

.env.local.example            # Environment variables template
```

## Testing

### Test Subscription

1. Go to `/blog`
2. Enter your email in the newsletter signup form
3. Check your inbox for the welcome email
4. Verify you appear in the Resend dashboard under Audiences

### Test Newsletter Send

1. Go to `/newsletter`
2. Enter your API key
3. Select a blog post
4. Send to yourself first (make sure you're subscribed)
5. Check the email in your inbox

## Troubleshooting

### "RESEND_API_KEY environment variable is not set"
- Make sure `.env.local` exists in your project root
- Restart your development server after adding environment variables

### "Failed to send newsletter"
- Check that your domain is verified in Resend
- Verify the `fromEmail` matches your verified domain
- Check Resend API logs in the dashboard

### "No subscribers found"
- Make sure `RESEND_AUDIENCE_ID` is set correctly
- Add at least one subscriber through the signup form
- Check the Resend dashboard to verify contacts exist

### Emails going to spam
- Make sure your domain is fully verified with SPF, DKIM, and DMARC records
- Ask subscribers to whitelist your email address
- Avoid spam trigger words in subject lines

## Limits

**Resend Free Tier:**
- 3,000 emails per month
- 100 emails per day
- Unlimited API requests

**To upgrade:** Visit Resend dashboard → Settings → Billing

## Next Steps

Optional enhancements you could add:
- Add newsletter signup to footer
- Create email preference center
- Add email scheduling (send later feature)
- Add A/B testing for email subject lines
- Track email open rates and clicks
- Create different email templates for different post categories

## Support

- Resend Documentation: https://resend.com/docs
- Resend Status: https://status.resend.com
- This implementation uses Resend's API v1

---

🎉 Your newsletter system is ready to use!
