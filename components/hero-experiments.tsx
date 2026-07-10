'use client';

import Link from 'next/link';
import { ExperimentVariant } from '@/components/experiment-variant';
import { heroCtaExperiment, heroHeadlineExperiment } from '@/lib/experiments';
import { betaUrl, heroLead, isExternalUrl } from '@/lib/site-data';

export function HeroLeadExperiment() {
  const variants = Object.fromEntries(
    heroHeadlineExperiment.variants.map((variant) => [variant.id, <p className="heroLead">{variant.lead}</p>]),
  );

  return (
    <ExperimentVariant
      experimentId="hero_headline"
      variants={variants}
      fallback={<p className="heroLead">{heroLead}</p>}
    />
  );
}

export function HeroCtaExperiment() {
  const variants = Object.fromEntries(
    heroCtaExperiment.variants.map((variant) => [
      variant.id,
      isExternalUrl(betaUrl) ? (
        <a
          className="primaryButton"
          href={betaUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="hero-download"
        >
          {variant.label}
        </a>
      ) : (
        <Link className="primaryButton" href={betaUrl} data-cta="hero-download">
          {variant.label}
        </Link>
      ),
    ]),
  );

  const fallback = isExternalUrl(betaUrl) ? (
    <a className="primaryButton" href={betaUrl} target="_blank" rel="noopener noreferrer" data-cta="hero-download">
      Download now
    </a>
  ) : (
    <Link className="primaryButton" href={betaUrl} data-cta="hero-download">
      Download now
    </Link>
  );

  return <ExperimentVariant experimentId="hero_cta" variants={variants} fallback={fallback} />;
}
