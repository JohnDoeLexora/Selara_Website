/**
 * Consent-gated analytics via Plausible.
 *
 * Event catalog:
 * - cta_click { cta, href, page }
 * - consent_accept | consent_essential
 * - banner_show | banner_dismiss | banner_click
 * - pricing_plan_click { plan, billing }
 * - faq_open { question }
 * - scroll_depth { percent, page } (home only, throttled)
 * - lead_form_success | lead_form_error { source, status? }
 * - experiment_exposure { experiment, variant, page }
 * - site_search_open { page }
 * - site_search_select { href, category, page }
 *
 * Plausible funnel setup (dashboard):
 * 1. Goal: cta_click where cta contains "download"
 * 2. Goal: consent_accept
 * 3. Funnel: pageview / → cta_click → outbound link to TestFlight
 * 4. Funnel: experiment_exposure (hero_headline) → cta_click hero-download
 */
import { canTrack } from '@/lib/consent';

declare global {
  interface Window {
    plausible?: {
      (event: string, options?: { props?: Record<string, string | number | boolean> }): void;
      q?: unknown[][];
    };
  }
}

let initialized = false;

function plausibleDomain() {
  return process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim() || '';
}

function ensurePlausibleQueue() {
  if (typeof window === 'undefined') return;
  if (window.plausible) return;
  window.plausible = function (...args: unknown[]) {
    (window.plausible!.q = window.plausible!.q || []).push(args);
  };
}

export function initAnalytics(onReady?: () => void) {
  if (typeof window === 'undefined' || initialized || !canTrack()) return;
  const domain = plausibleDomain();
  if (!domain) return;

  const existing = document.querySelector('script[data-plausible="true"]');
  if (existing) {
    initialized = true;
    onReady?.();
    return;
  }

  ensurePlausibleQueue();

  const script = document.createElement('script');
  script.dataset.plausible = 'true';
  script.src = 'https://plausible.io/js/script.tagged-events.js';
  script.setAttribute('data-domain', domain);
  script.onload = () => onReady?.();
  document.head.appendChild(script);
  initialized = true;
}

export function trackEvent(name: string, props?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined' || !canTrack()) return;
  ensurePlausibleQueue();
  window.plausible?.(name, props ? { props } : undefined);
}

export function trackCtaClick(cta: string, href?: string) {
  trackEvent('cta_click', {
    cta,
    href: href ?? '',
    page: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

export function bindAnalyticsListeners() {
  if (typeof window === 'undefined') return () => {};

  const onClick = (event: MouseEvent) => {
    if (!canTrack()) return;
    const target = (event.target as Element | null)?.closest<HTMLElement>('[data-cta]');
    if (!target) return;
    const cta = target.dataset.cta ?? 'unknown';
    if (cta.startsWith('consent-')) return;
    const href =
      target instanceof HTMLAnchorElement ? target.href : target.querySelector('a')?.href ?? '';
    trackCtaClick(cta, href);
  };

  const onToggle = (event: Event) => {
    if (!canTrack()) return;
    const details = event.target as HTMLDetailsElement | null;
    if (!details?.matches('details.faqItem') || !details.open) return;
    const question = details.querySelector('.faqQuestion')?.textContent?.trim();
    if (question) trackEvent('faq_open', { question });
  };

  document.addEventListener('click', onClick);
  document.addEventListener('toggle', onToggle, true);

  return () => {
    document.removeEventListener('click', onClick);
    document.removeEventListener('toggle', onToggle, true);
  };
}

const SCROLL_THRESHOLDS = [25, 50, 75, 90] as const;

export function bindScrollDepthTracking(pathname: string) {
  if (typeof window === 'undefined' || pathname !== '/' || !canTrack()) return () => {};

  const fired = new Set<number>();
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.round((window.scrollY / scrollable) * 100);
      for (const threshold of SCROLL_THRESHOLDS) {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackEvent('scroll_depth', { percent: threshold, page: pathname });
        }
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}
