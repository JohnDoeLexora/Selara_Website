import { heroLead } from '@/lib/site-data';

export type ExperimentId = 'hero_headline' | 'hero_cta';

export type ExperimentVariant = {
  id: string;
};

export type HeroHeadlineVariant = ExperimentVariant & {
  lead: string;
};

export type HeroCtaVariant = ExperimentVariant & {
  label: string;
};

export const VISITOR_STORAGE_KEY = 'selara-visitor-id';
export const EXPERIMENT_PREFIX = 'selara_exp_';

export const heroHeadlineExperiment = {
  id: 'hero_headline' as const,
  variants: [
    { id: 'control', lead: heroLead },
    {
      id: 'approval',
      lead: 'Approval-first AI for professionals who cannot afford calendar or inbox surprises.',
    },
    {
      id: 'calendar',
      lead: 'Calendar intelligence that asks before it acts — a premium AI concierge for iOS.',
    },
  ] satisfies HeroHeadlineVariant[],
};

export const heroCtaExperiment = {
  id: 'hero_cta' as const,
  variants: [
    { id: 'control', label: 'Download now' },
    { id: 'start', label: 'Start free in open beta' },
  ] satisfies HeroCtaVariant[],
};

export const experiments = {
  hero_headline: heroHeadlineExperiment,
  hero_cta: heroCtaExperiment,
} as const;

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function pickVariantIndex(variantCount: number, visitorId: string, experimentId: ExperimentId): number {
  if (variantCount <= 0) return 0;
  return hashString(`${visitorId}:${experimentId}`) % variantCount;
}

export function getVariantById<T extends ExperimentVariant>(variants: T[], variantId: string): T {
  return variants.find((variant) => variant.id === variantId) ?? variants[0];
}
