'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { betaUrl, isExternalUrl, navigation } from '@/lib/site-data';

function navIsActive(pathname: string, href: string) {
  if (href === betaUrl || href === '/download') {
    return pathname === '/download';
  }
  if (isExternalUrl(href)) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavLinks() {
  const pathname = usePathname();

  return (
    <nav className="siteNav siteNavDesktop" aria-label="Primary">
      {navigation.map((item) => {
        const active = navIsActive(pathname, item.href);
        const className = active ? 'navLinkActive' : undefined;
        if (isExternalUrl(item.href)) {
          return (
            <a
              key={item.label}
              href={item.href}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </a>
          );
        }
        return (
          <Link key={item.href} href={item.href} className={className} aria-current={active ? 'page' : undefined}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNavLinks({
  onNavigate,
  omitLabels = [],
}: {
  onNavigate: () => void;
  omitLabels?: string[];
}) {
  const pathname = usePathname();

  return (
    <div className="mobileNavLinks">
      {navigation
        .filter((item) => !omitLabels.includes(item.label))
        .map((item) => {
        const active = navIsActive(pathname, item.href);
        const className = active ? 'navLinkActive' : undefined;
        if (isExternalUrl(item.href)) {
          return (
            <a
              key={item.label}
              href={item.href}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </a>
          );
        }
        return (
          <Link
            key={item.href}
            href={item.href}
            className={className}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
