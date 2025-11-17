import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://inspiredmissions.com'),
  title: {
    default: 'Inspired Missions',
    template: '%s | Inspired Missions',
  },
  description: 'Through God\'s grace we long to see the transformation of Cambodia, through the building up and training of local pastors in Biblical studies.',
  keywords: ['Cambodia missions', 'Christian ministry', 'Bible school', 'missionary work', 'pastor training', 'Cambodia church', 'jungle ministry', 'gospel outreach', 'Phnom Penh ministry'],
  authors: [{ name: 'Inspired Missions' }],
  creator: 'Inspired Missions',
  publisher: 'Inspired Missions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#1e40af',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inspiredmissions.com',
    siteName: 'Inspired Missions',
    title: 'Inspired Missions',
    description: 'Through God\'s grace we long to see the transformation of Cambodia, through the building up and training of local pastors in Biblical studies.',
    images: [
      {
        url: '/images/hero-angkor-wat.jpg',
        width: 1200,
        height: 630,
        alt: 'Inspired Missions Cambodia Ministry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inspired Missions',
    description: 'Through God\'s grace we long to see the transformation of Cambodia, through the building up and training of local pastors in Biblical studies.',
    images: ['/images/hero-angkor-wat.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Inspired Missions',
  url: 'https://inspiredmissions.com',
  logo: 'https://inspiredmissions.com/images/logo.png',
  description: 'Through God\'s grace we long to see the transformation of Cambodia, through the building up and training of local pastors in Biblical studies.',
  sameAs: [
    'https://www.facebook.com/InspiredMissions',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@inspiredmissions.com',
    contactType: 'General Inquiry',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <StructuredData data={organizationSchema} />
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
