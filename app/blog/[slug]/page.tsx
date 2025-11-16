import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import StructuredData from '@/components/StructuredData'
import {
  IconHeart,
  IconPrayer,
  IconCommunity,
  IconBible,
  IconGlobe,
  IconStar,
  IconHome,
  IconGift,
  IconHelping,
  IconLight,
  IconTree,
  IconSun,
  IconEducation
} from '@/components/BlogIcons'

const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded-lg my-8" />,
  ssr: false
})

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Inspired Missions`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://inspiredmissions.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Inspired Missions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://inspiredmissions.com/images/logo.png',
      },
    },
  }

  return (
    <div>
      <StructuredData data={articleSchema} />
      {/* Hero Image */}
      {post.image && (
        <div className="relative h-[300px] md:h-[500px] flex items-end">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 gradient-overlay-dark z-10"></div>
          <div className="relative z-20 page-container pb-16">
            <Link
              href="/blog"
              className="inline-flex items-center text-white hover:text-yellow-300 mb-8 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Stories
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white content-wrapper text-shadow-strong">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-200 text-lg mt-3">
              <time className="font-semibold text-accent-gold">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
        </div>
      )}

      {/* No image fallback */}
      {!post.image && (
        <div className="gradient-hero py-16">
          <div className="page-container">
            <Link
              href="/blog"
              className="inline-flex items-center text-white hover:text-yellow-300 mb-8 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Stories
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white content-wrapper text-shadow-strong">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-200 text-lg mt-3">
              <time className="font-semibold text-accent-gold">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <article className="page-container blog-article">
        <div className="prose content-wrapper">
          <MDXRemote
            source={post.content}
            components={{
              Gallery,
              IconHeart,
              IconPrayer,
              IconCommunity,
              IconBible,
              IconGlobe,
              IconStar,
              IconHome,
              IconGift,
              IconHelping,
              IconLight,
              IconTree,
              IconSun,
              IconEducation
            }}
          />
        </div>

        {/* Back to blog CTA */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center section-bg-dots py-8">
            <div className="section-heading-accent mb-4">
              <h2 className="text-3xl font-bold">More Stories</h2>
            </div>
            <p className="text-gray-600 mb-5 text-lg">Discover more stories of faith and transformation from Cambodia</p>
            <Link href="/blog" className="btn-primary">
              View All Stories
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
