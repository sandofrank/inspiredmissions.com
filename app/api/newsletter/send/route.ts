import { NextResponse } from 'next/server'
import { resend, RESEND_CONFIG } from '@/lib/resend'
import { generateBlogPostEmail } from '@/components/emails/BlogPostEmail'
import { getPostBySlug } from '@/lib/blog'

export async function POST(request: Request) {
  try {
    const { slug, apiKey } = await request.json()

    // Simple API key protection - you should set this in your environment variables
    if (apiKey !== process.env.NEWSLETTER_API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (!slug) {
      return NextResponse.json(
        { error: 'Blog post slug is required' },
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

    // Get all contacts from Resend audience
    let contacts: string[] = []

    if (RESEND_CONFIG.audienceId) {
      try {
        const audienceContacts = await resend.contacts.list({
          audienceId: RESEND_CONFIG.audienceId,
        })
        contacts = audienceContacts.data?.data?.map((contact: any) => contact.email) || []
      } catch (error) {
        console.error('Error fetching contacts:', error)
      }
    }

    if (contacts.length === 0) {
      return NextResponse.json(
        {
          error: 'No subscribers found. Either configure RESEND_AUDIENCE_ID or add contacts to your Resend audience.',
          contacts: 0
        },
        { status: 400 }
      )
    }

    // Generate email HTML
    const emailHtml = generateBlogPostEmail({
      title: post.title,
      excerpt: post.description || '',
      date: post.date,
      slug: post.slug,
      image: post.image,
      content: post.content,
    })

    // Send email to all contacts
    // Note: Resend has a batch send limit, so we'll send in batches if needed
    const batchSize = 50
    const batches = []

    for (let i = 0; i < contacts.length; i += batchSize) {
      const batch = contacts.slice(i, i + batchSize)
      batches.push(batch)
    }

    let successCount = 0
    let errorCount = 0

    for (const batch of batches) {
      try {
        await resend.emails.send({
          from: `${RESEND_CONFIG.fromName} <${RESEND_CONFIG.fromEmail}>`,
          to: batch,
          subject: `New Post: ${post.title}`,
          html: emailHtml,
        })
        successCount += batch.length
      } catch (error) {
        console.error('Error sending batch:', error)
        errorCount += batch.length
      }
    }

    return NextResponse.json({
      message: 'Newsletter sent successfully',
      postTitle: post.title,
      totalRecipients: contacts.length,
      successCount,
      errorCount,
    })
  } catch (error: any) {
    console.error('Newsletter send error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send newsletter' },
      { status: 500 }
    )
  }
}
