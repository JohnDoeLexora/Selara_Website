/**
 * Shared tracking surface for consent-gated events.
 * SEL-263 can extend this module without duplicating init logic.
 */
export { initAnalytics, trackEvent, trackCtaClick } from '@/lib/analytics';
export { initErrorMonitoring, reportClientError } from '@/lib/monitoring';
