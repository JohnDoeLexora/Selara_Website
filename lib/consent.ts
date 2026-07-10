export const CONSENT_STORAGE_KEY = 'selara-consent';
export const CONSENT_CHANGED_EVENT = 'selara-consent-changed';

export type ConsentLevel = 'accepted' | 'essential';

export function getStoredConsent(): ConsentLevel | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (value === 'accepted' || value === 'essential') return value;
  return null;
}

export function setStoredConsent(level: ConsentLevel) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, level);
  } catch {
    // Storage may be unavailable in private browsing — consent UI still dismisses.
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: { level } }));
  }
}

/** Gate future analytics initialization behind explicit consent. */
export function canTrack(): boolean {
  return getStoredConsent() === 'accepted';
}
