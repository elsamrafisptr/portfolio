import type { NextConfig } from 'next'

import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})(nextConfig)
