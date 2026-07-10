/**
 * Consent-gated error monitoring via Sentry.
 * Set NEXT_PUBLIC_SENTRY_DSN in production to enable capture.
 */
import { canTrack } from '@/lib/consent';

let sentryInitialized = false;
let vitalsBound = false;

function sentryDsn() {
  return process.env.NEXT_PUBLIC_SENTRY_DSN?.trim() || '';
}

function bindWebVitals() {
  if (typeof window === 'undefined' || vitalsBound || !canTrack() || !sentryDsn()) return;
  vitalsBound = true;

  void import('web-vitals').then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
    void import('@sentry/nextjs').then((Sentry) => {
      const report = (metric: { name: string; value: number; rating: string }) => {
        Sentry.addBreadcrumb({
          category: 'web-vital',
          message: `${metric.name}: ${Math.round(metric.value)} (${metric.rating})`,
          level: 'info',
          data: { value: metric.value, rating: metric.rating },
        });
      };
      onCLS(report);
      onINP(report);
      onLCP(report);
      onFCP(report);
      onTTFB(report);
    });
  });
}

export function initErrorMonitoring() {
  if (typeof window === 'undefined' || sentryInitialized || !canTrack()) return;
  const dsn = sentryDsn();
  if (!dsn) return;

  void import('@sentry/nextjs').then((Sentry) => {
    if (Sentry.getClient()) {
      sentryInitialized = true;
      bindWebVitals();
      return;
    }
    Sentry.init({
      dsn,
      environment: process.env.NEXT_PUBLIC_SENTRY_ENV ?? process.env.NODE_ENV,
      tracesSampleRate: 0.1,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
    });
    sentryInitialized = true;
    bindWebVitals();
  });
}

export function reportClientError(error: unknown, context?: Record<string, string>) {
  if (typeof window === 'undefined' || !canTrack()) return;
  const dsn = sentryDsn();
  if (!dsn) return;

  void import('@sentry/nextjs').then((Sentry) => {
    if (!Sentry.getClient()) initErrorMonitoring();
    if (error instanceof Error) {
      Sentry.captureException(error, context ? { extra: context } : undefined);
    } else {
      Sentry.captureMessage(String(error), context ? { extra: context } : undefined);
    }
  });
}

export function bindClientErrorHandlers() {
  if (typeof window === 'undefined') return () => {};

  const onError = (event: ErrorEvent) => {
    if (!canTrack()) return;
    reportClientError(event.error ?? event.message, { source: 'window.onerror' });
  };

  const onRejection = (event: PromiseRejectionEvent) => {
    if (!canTrack()) return;
    reportClientError(event.reason ?? 'Unhandled rejection', { source: 'unhandledrejection' });
  };

  window.addEventListener('error', onError);
  window.addEventListener('unhandledrejection', onRejection);

  return () => {
    window.removeEventListener('error', onError);
    window.removeEventListener('unhandledrejection', onRejection);
  };
}
