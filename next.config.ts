import type { NextConfig } from 'next';

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://plausible.io https://*.ingest.sentry.io https://*.ingest.us.sentry.io https://vitals.vercel-insights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 390],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/press/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.selara.app' }],
        destination: 'https://selara.app/:path*',
        permanent: true,
      },
      {
        source: '/glossary',
        destination: '/how-selara-thinks',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/stories',
        permanent: true,
      },
      {
        source: '/case-studies/:slug',
        destination: '/stories/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
