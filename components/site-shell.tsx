import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import {
  betaUrl,
  footerLinkGroups,
  isExternalUrl,
  socialLinks,
  supportEmail,
} from '@/lib/site-data';
import { DOWNLOAD_SELARA_LABEL, DownloadSelaraCta } from './download-cta';
import { DesktopNavLinks } from './nav-links';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from './theme-toggle';
import { TrustSignalStrip } from './sections';
import { FeedbackWidget } from './feedback-widget';
import { SiteSearch } from './site-search';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skipLink">
        Skip to main content
      </a>
      <header className="siteHeader">
        <div className="shell navShell">
          <Link href="/" className="brandMark" aria-label="Selara home">
            <Image src="/images/selara-logo.png" alt="" width={42} height={42} className="brandIcon" priority />
            <span>Selara</span>
          </Link>
          <DesktopNavLinks />
          <div className="navActions">
            <SiteSearch />
            <ThemeToggle />
            <DownloadSelaraCta className="navButton" />
            <MobileNav />
          </div>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="siteFooter">
        <div className="shell footerTrustWrap">
          <TrustSignalStrip />
        </div>
        <div className="shell footerGrid">
          <div>
            <p className="footerEyebrow">Selara</p>
            <h3>Premium AI concierge</h3>
            <p className="footerCopy">
              A calm, approval-first personal assistant built for professionals—and anyone who values time—without the
              chaos of inbox and calendar surprises.
            </p>
          </div>
          <div>
            <p className="footerEyebrow">Explore</p>
            <div className="footerLinks">
              {footerLinkGroups.explore.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              {isExternalUrl(betaUrl) ? (
                <a href={betaUrl} target="_blank" rel="noopener noreferrer">
                  {DOWNLOAD_SELARA_LABEL}
                </a>
              ) : (
                <Link href={betaUrl}>{DOWNLOAD_SELARA_LABEL}</Link>
              )}
            </div>
          </div>
          <div>
            <p className="footerEyebrow">Trust</p>
            <div className="footerLinks">
              {footerLinkGroups.trust.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </div>
          </div>
          <div>
            <p className="footerEyebrow">Company</p>
            <div className="footerLinks">
              <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="Selara on X (opens in new tab)">
                X
              </a>
              {footerLinkGroups.company.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <FeedbackWidget />
    </>
  );
}
