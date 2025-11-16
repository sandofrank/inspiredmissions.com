import { NextResponse } from 'next/server'
import { generateBlogPostEmail } from '@/components/emails/BlogPostEmail'
import { getPostBySlug } from '@/lib/blog'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug') || 'our-return-to-cambodia'

  const post = getPostBySlug(slug)
  if (!post) {
    return new NextResponse('Blog post not found', { status: 404 })
  }

  const emailHtml = generateBlogPostEmail({
    title: post.title,
    excerpt: post.description || '',
    date: post.date,
    slug: post.slug,
    image: post.image,
    content: post.content,
    baseUrl: 'http://localhost:3000',
  })

  return new NextResponse(emailHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
