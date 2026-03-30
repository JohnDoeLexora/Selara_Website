import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Selara — Your AI Personal Assistant',
    template: '%s | Selara',
  },
  description:
    'Selara is the AI personal assistant that connects to 800+ apps, remembers everything, and actually runs your life.',
  metadataBase: new URL('https://selara.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://selara.app',
    siteName: 'Selara',
    title: 'Selara — Your AI Personal Assistant',
    description:
      'Selara is the AI personal assistant that connects to 800+ apps, remembers everything, and actually runs your life.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selara — Your AI Personal Assistant',
    description:
      'Selara is the AI personal assistant that connects to 800+ apps, remembers everything, and actually runs your life.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0F] text-[#F8F8FF] min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
