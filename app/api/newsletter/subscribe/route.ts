import { NextResponse } from 'next/server'
import { resend, RESEND_CONFIG, isResendConfigured } from '@/lib/resend'

export async function POST(request: Request) {
  try {
    // Check if Resend is properly configured
    if (!isResendConfigured()) {
      return NextResponse.json(
        { error: 'Newsletter service is not configured' },
        { status: 503 }
      )
    }

    const { firstName, lastName, email } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Please provide first name, last name, and email address' },
        { status: 400 }
      )
    }

    // Validate email
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Add contact to Resend (Resend 2025 API - audienceId is no longer used in contacts.create)
    try {
      const contactResponse = await resend.contacts.create({
        email,
        firstName,
        lastName,
        unsubscribed: false,
      })
      console.log('Contact created successfully:', contactResponse)
    } catch (contactError: any) {
      console.error('Error creating contact:', contactError)
      // If it's a duplicate error, that's okay - continue to send welcome email
      if (!contactError.message?.includes('already exists') && !contactError.message?.includes('Contact already exists')) {
        throw contactError
      }
      console.log('Contact already exists, continuing with welcome email')
    }

    // Send welcome email
    await resend.emails.send({
      from: `${RESEND_CONFIG.fromName} <${RESEND_CONFIG.fromEmail}>`,
      to: email,
      subject: 'Welcome to Inspired Missions Newsletter',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Inspired Missions</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #021e6b 0%, #032EA1 50%, #1e5dc7 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
              <img src="https://inspiredmissions.com/images/logo.png" alt="Inspired Missions" style="height: 60px; width: auto; margin-bottom: 20px; filter: brightness(0) invert(1);" />
              <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Inspired Missions</h1>
            </div>

            <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Hi ${firstName},</p>
              <p style="font-size: 16px; margin-bottom: 20px;">Thank you for subscribing to our newsletter!</p>

              <p style="font-size: 16px; margin-bottom: 20px;">
                You'll now receive updates about our ministry in Cambodia, including:
              </p>

              <ul style="font-size: 16px; margin-bottom: 20px; padding-left: 20px;">
                <li>New blog posts and ministry updates</li>
                <li>Stories from the field</li>
                <li>Prayer requests and answered prayers</li>
                <li>Upcoming events and opportunities</li>
              </ul>

              <p style="font-size: 16px; margin-bottom: 20px;">
                Through God's grace we long to see the transformation of Cambodia, through the building up and training of local pastors in Biblical studies.
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://inspiredmissions.com/blog" style="background: linear-gradient(135deg, #D4AF37 0%, #f4cf5d 100%); color: #021e6b; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                  Read Our Latest Stories
                </a>
              </div>

              <p style="font-size: 14px; color: #6b7280; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                You're receiving this email because you subscribed to Inspired Missions newsletter.
                <br>
                <a href="{{unsubscribe_url}}" style="color: #032EA1;">Unsubscribe</a> if you no longer wish to receive these emails.
              </p>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json(
      { message: 'Successfully subscribed! Check your email for confirmation.' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)

    // Handle duplicate email error from Resend
    if (error.message?.includes('already exists')) {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    )
  }
}
