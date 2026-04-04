import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { createMetadata, siteUrl } from '@/lib/site-data';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  ...createMetadata('Selara | Your Personal Assistant', 'Selara is the premium AI personal assistant for professionals who want their time back.', '/'),
  keywords: ['Selara', 'AI personal assistant', 'calendar assistant', 'voice assistant', 'AI automations', 'privacy-first assistant'],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const themeScript = `(() => {
    const stored = localStorage.getItem('selara-theme');
    const theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
  })();`;

  const appLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Selara',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'iOS',
    url: siteUrl,
    description: 'Selara is a premium AI personal assistant for professionals who want more time back and more trust in how automation works.',
    offers: [
      { '@type': 'Offer', name: 'Selara Select', price: '25', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Selara Premium', price: '45', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Selara Pinnacle', price: '110', priceCurrency: 'USD' },
    ],
  };

  return (
    <html lang="en" data-theme="dark">
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
