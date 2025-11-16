import { NextResponse } from 'next/server'
import { resend, RESEND_CONFIG } from '@/lib/resend'
import { generateBlogPostEmail } from '@/components/emails/BlogPostEmail'
import { getPostBySlug } from '@/lib/blog'

export async function POST(request: Request) {
  try {
    const { slug, testEmail, apiKey } = await request.json()

    // Simple API key protection
    if (apiKey !== process.env.NEWSLETTER_API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
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

    // Generate email HTML (use localhost for now - images need to be on production for email testing)
    const emailHtml = generateBlogPostEmail({
      title: post.title,
      excerpt: post.description || '',
      date: post.date,
      slug: post.slug,
      image: post.image,
      content: post.content,
      baseUrl: 'http://localhost:3000', // For now - switch to https://inspiredmissions.com when images are deployed
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
