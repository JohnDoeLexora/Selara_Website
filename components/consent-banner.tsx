'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useState } from 'react';
import { getStoredConsent, setStoredConsent, type ConsentLevel } from '@/lib/consent';
import { initAnalytics, trackEvent } from '@/lib/analytics';
import { initErrorMonitoring } from '@/lib/monitoring';

export function ConsentBanner() {
  const headingId = useId();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!getStoredConsent()) {
      setVisible(true);
    }
  }, []);

  const dismiss = useCallback((level: ConsentLevel) => {
    setStoredConsent(level);
    setVisible(false);
    if (level === 'accepted') {
      initAnalytics(() => trackEvent('consent_accept'));
      initErrorMonitoring();
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss('essential');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [visible, dismiss]);

  if (!mounted || !visible) return null;

  return (
    <div className="consentBanner" role="region" aria-labelledby={headingId}>
      <div className="consentBannerInner shell">
        <div className="consentBannerCopy">
          <p className="consentBannerEyebrow" id={headingId}>
            Your privacy
          </p>
          <p className="consentBannerText">
            We use essential storage for your theme preference. With your consent, we use privacy-friendly analytics to
            improve the site — no creepy tracking. Read our{' '}
            <Link href="/privacy" className="consentBannerLink">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="consentBannerActions">
          <button
            type="button"
            className="secondaryButton consentBannerButton"
            onClick={() => dismiss('essential')}
          >
            Essential only
          </button>
          <button
            type="button"
            className="primaryButton consentBannerButton"
            onClick={() => dismiss('accepted')}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

