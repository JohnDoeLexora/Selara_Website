import type { Metadata, Viewport } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { getPageMetadata } from '@/lib/site-data';
import { SiteShell } from '@/components/site-shell';
import { StructuredData } from '@/components/structured-data';

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
  ...getPageMetadata(''),
  keywords: [
    'Selara',
    'Selara app',
    'AI personal assistant',
    'premium AI personal assistant for professionals',
    'approval-first AI assistant',
    'executive AI assistant',
    'premium AI concierge iOS',
    'calendar intelligence AI',
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
  return (
    <html lang="en" data-theme="dark" className={`${fraunces.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('selara-theme');var t=s||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');document.documentElement.dataset.theme=t;})();`,
          }}
        />
      </head>
      <body>
        <StructuredData />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
