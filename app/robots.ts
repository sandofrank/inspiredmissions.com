import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/tina/'],
      },
    ],
    sitemap: 'https://inspiredmissions.com/sitemap.xml',
  }
}
