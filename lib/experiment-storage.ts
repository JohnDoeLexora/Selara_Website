import {
  EXPERIMENT_PREFIX,
  type ExperimentId,
  pickVariantIndex,
  VISITOR_STORAGE_KEY,
  experiments,
} from '@/lib/experiments';

function readStorage(key: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private browsing — assignment still works for the session via memory fallback.
  }
}

export function getOrCreateVisitorId(): string {
  const existing = readStorage(VISITOR_STORAGE_KEY);
  if (existing) return existing;

  const visitorId =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `v-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  writeStorage(VISITOR_STORAGE_KEY, visitorId);
  return visitorId;
}

export function getExperimentVariantId(experimentId: ExperimentId): string {
  const storageKey = `${EXPERIMENT_PREFIX}${experimentId}`;
  const experiment = experiments[experimentId];
  const validIds = new Set(experiment.variants.map((variant) => variant.id));

  const stored = readStorage(storageKey);
  if (stored && validIds.has(stored)) return stored;

  const visitorId = getOrCreateVisitorId();
  const index = pickVariantIndex(experiment.variants.length, visitorId, experimentId);
  const variantId = experiment.variants[index]?.id ?? experiment.variants[0].id;
  writeStorage(storageKey, variantId);
  return variantId;
}
