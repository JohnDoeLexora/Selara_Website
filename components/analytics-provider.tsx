'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { canTrack, CONSENT_CHANGED_EVENT, CONSENT_STORAGE_KEY, getStoredConsent } from '@/lib/consent';
import {
  bindAnalyticsListeners,
  bindScrollDepthTracking,
  initAnalytics,
} from '@/lib/analytics';
import { bindClientErrorHandlers, initErrorMonitoring } from '@/lib/monitoring';

export function AnalyticsProvider() {
  const pathname = usePathname();
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setTrackingEnabled(canTrack());
    sync();
    window.addEventListener('storage', sync);
    window.addEventListener(CONSENT_CHANGED_EVENT, sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener(CONSENT_CHANGED_EVENT, sync);
    };
  }, []);

  useEffect(() => {
    if (canTrack()) {
      initAnalytics();
      initErrorMonitoring();
    }
  }, [trackingEnabled]);

  useEffect(() => {
    if (!trackingEnabled) return;
    const unbindClick = bindAnalyticsListeners();
    const unbindScroll = bindScrollDepthTracking(pathname);
    const unbindErrors = bindClientErrorHandlers();
    return () => {
      unbindClick();
      unbindScroll();
      unbindErrors();
    };
  }, [pathname, trackingEnabled]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === CONSENT_STORAGE_KEY && getStoredConsent() === 'accepted') {
        initAnalytics();
        initErrorMonitoring();
        setTrackingEnabled(true);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return trackingEnabled ? <SpeedInsights /> : null;
}
