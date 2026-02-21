import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'

import '../assets/globals.css'

import { cn } from '@/lib/utils'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin']
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elsamrafisptr.vercel.app'),
  title: {
    default: 'Elsam Rafi Saputra | Designer & Developer',
    template: '%s | Elsam Rafi Saputra'
  },
  description:
    'Designer & Developer with 3+ years of experience crafting mobile apps, websites, and conversion-driven interfaces. Specialized in Full Stack development.',
  keywords: [
    'UI/UX Design',
    'Full Stack Developer',
    'Product Design',
    'Mobile App Design',
    'Web Developer',
    'Portfolio',
    'Next.js',
    'React',
    'Sanity CMS',
    'Tailwind CSS'
  ],
  authors: [{ name: 'Elsam Rafi Saputra' }],
  creator: 'Elsam Rafi Saputra',
  publisher: 'Elsam Rafi Saputra',
  alternates: {
    canonical: '/'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elsamrafisptr.vercel.app',
    title: 'Elsam Rafi Saputra | Designer & Developer',
    description:
      'Designer & Developer with 3+ years of experience crafting mobile apps, websites, and conversion-driven interfaces. Specialized in Full Stack development.',
    siteName: 'Elsam Rafi Saputra Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elsam Rafi Saputra Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elsam Rafi Saputra | Designer & Developer',
    description:
      'Designer & Developer with 3+ years of experience crafting mobile apps, websites, and conversion-driven interfaces. Specialized in Full Stack development.',
    images: ['/og-image.png']
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Elsam Rafi Saputra',
    url: 'https://elsamrafisptr.vercel.app',
    jobTitle: 'Designer & Developer',
    description:
      'Designer & Developer with 3+ years of experience crafting mobile apps, websites, and conversion-driven interfaces.',
    sameAs: [
      'https://github.com/elsamrafisptr',
      'https://linkedin.com/in/elsamrafisptr'
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          outfit.variable,
          inter.variable,
          'scrollbar-hide font-sans antialiased selection:bg-black selection:text-white'
        )}
      >
        {children}
      </body>
    </html>
  )
}
