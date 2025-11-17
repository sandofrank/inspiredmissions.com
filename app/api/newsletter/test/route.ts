import { NextResponse } from 'next/server'
import { resend, RESEND_CONFIG, isResendConfigured } from '@/lib/resend'
import { generateBlogPostEmail } from '@/components/emails/BlogPostEmail'
import { getPostBySlug } from '@/lib/blog'

export async function POST(request: Request) {
  try {
    const { slug, testEmail, apiKey } = await request.json()

    // Simple API key protection - trim both values to handle whitespace
    const receivedKey = apiKey?.trim()
    const expectedKey = process.env.NEWSLETTER_API_KEY?.trim()

    if (receivedKey !== expectedKey) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check if Resend is properly configured
    if (!isResendConfigured()) {
      return NextResponse.json(
        { error: 'Newsletter service is not configured' },
        { status: 503 }
      )
    }

    if (!slug || !testEmail) {
      return NextResponse.json(
        { error: 'Blog post slug and test email are required' },
        { status: 400 }
      )
    }

    // Get the blog post
    const post = getPostBySlug(slug)
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    // Generate email HTML with production URL for images
    const emailHtml = generateBlogPostEmail({
      title: post.title,
      excerpt: post.description || '',
      date: post.date,
      slug: post.slug,
      image: post.image,
      content: post.content,
      baseUrl: 'https://inspiredmissions.com',
    })

    // Send email to test address only
    await resend.emails.send({
      from: `${RESEND_CONFIG.fromName} <${RESEND_CONFIG.fromEmail}>`,
      to: testEmail,
      subject: `[TEST] New Post: ${post.title}`,
      html: emailHtml,
    })

    return NextResponse.json({
      message: 'Test email sent successfully',
      postTitle: post.title,
      sentTo: testEmail,
    })
  } catch (error: any) {
    console.error('Test email error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send test email' },
      { status: 500 }
    )
  }
}
