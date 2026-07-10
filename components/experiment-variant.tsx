'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { CONSENT_CHANGED_EVENT, canTrack } from '@/lib/consent';
import { trackEvent } from '@/lib/tracking';
import { getExperimentVariantId } from '@/lib/experiment-storage';
import type { ExperimentId } from '@/lib/experiments';

const exposureFired = new Set<string>();

function fireExposure(experimentId: ExperimentId, variant: string) {
  const exposureKey = `${experimentId}:${variant}`;
  if (exposureFired.has(exposureKey) || !canTrack()) return;
  exposureFired.add(exposureKey);
  trackEvent('experiment_exposure', {
    experiment: experimentId,
    variant,
    page: window.location.pathname,
  });
}

type ExperimentVariantProps<T extends string> = {
  experimentId: ExperimentId;
  variants: Record<T, ReactNode>;
  fallback: ReactNode;
};

export function ExperimentVariant<T extends string>({
  experimentId,
  variants,
  fallback,
}: ExperimentVariantProps<T>) {
  const [variantId, setVariantId] = useState<string | null>(null);

  useEffect(() => {
    const assigned = getExperimentVariantId(experimentId);
    setVariantId(assigned);
    fireExposure(experimentId, assigned);

    const onConsentChanged = () => fireExposure(experimentId, assigned);
    window.addEventListener(CONSENT_CHANGED_EVENT, onConsentChanged);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onConsentChanged);
  }, [experimentId]);

  if (!variantId) return <>{fallback}</>;
  const content = variants[variantId as T];
  return <>{content ?? fallback}</>;
}
