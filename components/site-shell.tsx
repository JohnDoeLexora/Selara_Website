import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { navigation, socialLinks, supportEmail } from '@/lib/site-data';
import { ThemeToggle } from './theme-toggle';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="siteHeader">
        <div className="shell navShell">
          <Link href="/" className="brandMark" aria-label="Selara home">
            <Image src="/images/selara-logo.png" alt="Selara" width={42} height={42} className="brandIcon" />
            <span>Selara</span>
          </Link>
          <nav className="siteNav">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="navActions">
            <ThemeToggle />
            <Link className="navButton" href="/download">
              Download Beta
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="siteFooter">
        <div className="shell footerGrid">
          <div>
            <p className="footerEyebrow">Selara</p>
            <h3>Your Personal Assistant</h3>
            <p className="footerCopy">A premium AI personal assistant designed to help professionals reclaim time without giving up control.</p>
          </div>
          <div>
            <p className="footerEyebrow">Explore</p>
            <div className="footerLinks">
              <Link href="/features">Features</Link>
              <Link href="/integrations">Integrations</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/download">Download Beta</Link>
            </div>
          </div>
          <div>
            <p className="footerEyebrow">Trust</p>
            <div className="footerLinks">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy-first-ai-assistant">Privacy-first AI</Link>
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </div>
          </div>
          <div>
            <p className="footerEyebrow">Social</p>
            <div className="footerLinks">
              <a href={socialLinks.x} target="_blank" rel="noreferrer">X</a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <Link href="/about">About</Link>
              <Link href="/vs-openclaw">Vs OpenClaw</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
