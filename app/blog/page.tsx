import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: "Inspired News",
  description: "Updates from our mission work in Cambodia, featuring stories of transformation, ministry updates, and prayer requests.",
  openGraph: {
    title: "Inspired News",
    description: "Updates from our mission work in Cambodia, featuring stories of transformation, ministry updates, and prayer requests.",
    images: ['/images/blog/happy-new-year-2025.jpg'],
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-section hero-section-medium">
        <Image
          src="/images/about-cambodia/support-03.jpg"
          alt="Supporting Ministry in Cambodia"
          fill
          priority
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="font-semibold text-sm uppercase tracking-wider text-secondary-light">Stories from the Field</span>
          <h1 className="hero-title mt-3">
            Inspired News
          </h1>
          <p className="hero-subtitle">
            Follow our journey and witness God's transformative work in Cambodia
          </p>
        </div>
      </div>

      <div className="page-container">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No blog posts yet.</p>
            <p className="text-sm text-gray-500">
              Run <code className="bg-gray-100 px-2 py-1 rounded">npm run convert</code> to convert your archived blog posts.
            </p>
          </div>
        ) : (
          <section className="content-section">
            <div className="text-center">
              <span className="font-semibold text-sm uppercase tracking-wider block mb-3 text-accent-gold">Latest Updates</span>
              <div className="flex items-center justify-center gap-3 mb-4 title-with-icon">
                <svg className="w-10 h-10 flex-shrink-0 icon-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h2 className="section-title mb-0">Stories of Faith</h2>
              </div>
              <p className="section-subtitle">
                <span className="text-3xl font-bold text-primary-blue">{posts.length}</span> stories of faith and service from the field
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.slug} className="group hover-lift bg-white rounded-xl shadow-lg overflow-hidden">
                  {post.image && (
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </Link>
                  )}
                  <div className="p-6">
                    <time className="text-sm font-semibold transition-colors text-accent-gold">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <h2 className="text-xl font-bold mt-2 mb-3">
                      <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:opacity-70 transition-opacity">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">{post.description}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center font-semibold group/link transition-colors text-primary-blue"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
