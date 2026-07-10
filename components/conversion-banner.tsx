'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { getStoredConsent } from '@/lib/consent';
import { betaUrl, conversionBannerCopy, isExternalUrl } from '@/lib/site-data';

const DISMISS_KEY = 'selara-cta-dismissed';
const SCROLL_THRESHOLD = 0.55;

const ELIGIBLE_PATHS = new Set(['/', '/pricing', '/features', '/download']);
const LEGAL_PATHS = new Set(['/privacy', '/terms']);

function isDismissed() {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

function isEligiblePath(pathname: string) {
  if (LEGAL_PATHS.has(pathname)) return false;
  return ELIGIBLE_PATHS.has(pathname);
}

function canShowBanner() {
  return Boolean(getStoredConsent());
}

function isTouchDevice() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

export function ConversionBanner() {
  const pathname = usePathname();
  const headingId = useId();
  const dismissButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [trigger, setTrigger] = useState<'scroll' | 'exit' | null>(null);
  const [mounted, setMounted] = useState(false);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* storage blocked */
    }
    setVisible(false);
    setTrigger(null);
    previousFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isEligiblePath(pathname)) {
      setVisible(false);
      setTrigger(null);
      return;
    }

    if (isDismissed()) return;

    const onScroll = () => {
      if (isDismissed() || !canShowBanner()) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const ratio = window.scrollY / scrollable;
      if (ratio >= SCROLL_THRESHOLD) {
        setTrigger((current) => current ?? 'scroll');
        setVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [mounted, pathname]);

  useEffect(() => {
    if (!mounted || !isEligiblePath(pathname) || isTouchDevice()) return;
    if (isDismissed()) return;

    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY > 0) return;
      if (isDismissed() || !canShowBanner()) return;
      setTrigger('exit');
      setVisible(true);
    };

    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, [mounted, pathname]);

  useEffect(() => {
    if (!visible) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const frame = requestAnimationFrame(() => dismissButtonRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('keydown', onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [visible, dismiss]);

  if (!mounted || !visible || !isEligiblePath(pathname)) return null;

  const ctaAttr = trigger === 'exit' ? 'exit-banner' : 'scroll-banner';

  const primaryCta = isExternalUrl(betaUrl) ? (
    <a
      className="primaryButton conversionBannerButton"
      href={betaUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={ctaAttr}
      onClick={dismiss}
    >
      {conversionBannerCopy.primaryLabel}
    </a>
  ) : (
    <Link
      className="primaryButton conversionBannerButton"
      href={betaUrl}
      data-cta={ctaAttr}
      onClick={dismiss}
    >
      {conversionBannerCopy.primaryLabel}
    </Link>
  );

  return (
    <div
      className="conversionBanner"
      role="dialog"
      aria-labelledby={headingId}
      aria-modal="false"
    >
      <div className="conversionBannerInner shell">
        <div className="conversionBannerCopy">
          <p className="conversionBannerEyebrow" id={headingId}>
            Open beta
          </p>
          <p className="conversionBannerTitle">{conversionBannerCopy.title}</p>
          <p className="conversionBannerText">{conversionBannerCopy.body}</p>
        </div>
        <div className="conversionBannerActions">
          {primaryCta}
          <button
            ref={dismissButtonRef}
            type="button"
            className="secondaryButton conversionBannerButton"
            onClick={dismiss}
            data-cta="dismiss-banner"
          >
            {conversionBannerCopy.dismissLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
