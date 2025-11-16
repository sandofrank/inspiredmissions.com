import { getAllPosts } from '@/lib/blog'
import NewsletterAdmin from '@/components/NewsletterAdmin'

export default function NewsletterPage() {
  const posts = getAllPosts().map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    excerpt: post.description,
    image: post.image,
  }))

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="page-container max-w-4xl">
        <NewsletterAdmin posts={posts} />
      </div>
    </div>
  )
}
