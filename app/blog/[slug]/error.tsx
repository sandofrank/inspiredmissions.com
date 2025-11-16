'use client'

import Link from 'next/link'

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="page-container py-12">
      <div className="text-center max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Blog post not found
        </h2>
        <p className="text-gray-600 mb-6">
          The blog post you're looking for doesn't exist or couldn't be loaded.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/blog"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            View all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
