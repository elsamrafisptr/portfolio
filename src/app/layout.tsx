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
  title: 'Elsam Rafi Saputra | Designer & Developer',
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elsamrafi.com',
    title: 'Elsam Rafi Saputra | Designer & Developer',
    description:
      'Designer & Developer with 3+ years of experience crafting mobile apps, websites, and conversion-driven interfaces. Specialized in Full Stack development.',
    siteName: 'Elsam Rafi Saputra Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elsam Rafi Saputra | Designer & Developer',
    description:
      'Designer & Developer with 3+ years of experience crafting mobile apps, websites, and conversion-driven interfaces. Specialized in Full Stack development.'
  },
  category: 'technology'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
