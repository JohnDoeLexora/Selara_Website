import type { Metadata, Viewport } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { absoluteUrl, createMetadata, siteUrl, socialLinks } from '@/lib/site-data';
import { SiteShell } from '@/components/site-shell';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  ...createMetadata(
    'Selara — Premium AI assistant app for iOS',
    'Selara is the premium AI personal assistant app for iOS—built for professionals who want their time back, with approval-first automation.',
    '/',
  ),
  keywords: [
    'Selara',
    'Selara app',
    'AI personal assistant',
    'iOS AI assistant',
    'calendar assistant',
    'voice assistant',
    'AI automations',
    'privacy-first assistant',
  ],
  formatDetection: { telephone: false },
  appleWebApp: { capable: true, title: 'Selara', statusBarStyle: 'black-translucent' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5eee2' },
    { media: '(prefers-color-scheme: dark)', color: '#040507' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const themeScript = `(() => {
    const stored = localStorage.getItem('selara-theme');
    const theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
  })();`;

  const orgId = `${siteUrl}/#organization`;
  const webId = `${siteUrl}/#website`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'SelarAI LLC',
        url: siteUrl,
        logo: absoluteUrl('/images/selara-logo.png'),
        sameAs: [socialLinks.x, socialLinks.instagram],
      },
      {
        '@type': 'WebSite',
        '@id': webId,
        url: siteUrl,
        name: 'Selara',
        description:
          'Selara is a premium AI personal assistant app for iOS—calendar-aware, voice-native, and approval-first.',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#software`,
        name: 'Selara',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'iOS',
        url: siteUrl,
        description: 'Selara is a premium AI personal assistant for professionals who want more time back and more trust in how automation works.',
        publisher: { '@id': orgId },
        offers: [
          { '@type': 'Offer', name: 'Selara Select', price: '25', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Selara Premium', price: '45', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Selara Pinnacle', price: '110', priceCurrency: 'USD' },
        ],
      },
    ],
  };

  return (
    <html lang="en" data-theme="dark" className={`${fraunces.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
