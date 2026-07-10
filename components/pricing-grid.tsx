'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { PricingBillingToggle, type BillingPeriod } from '@/components/pricing-comparison';
import { pricingBetaNote, pricingPlans } from '@/lib/site-data';

export function PricingGridWithToggle() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const reduce = useReducedMotion();
  const showAnnual = billingPeriod === 'annual';

  return (
    <div className="pricingSectionFrame">
      <PricingBillingToggle value={billingPeriod} onChange={setBillingPeriod} />
      <div className="pricingGrid pricingGridExpanded">
        {pricingPlans.map((plan) => {
          const nameId = `plan-name-${plan.name.toLowerCase()}`;
          const priceId = `plan-price-${plan.name.toLowerCase()}`;
          const ctaId = `plan-cta-${plan.name.toLowerCase()}`;
          const planKey = plan.name.toLowerCase();

          return (
            <motion.article
              key={plan.name}
              className={`pricingCard pricingCardExpanded${plan.featured ? ' featured' : ''}`}
              aria-labelledby={`${nameId} ${priceId} ${ctaId}`}
              aria-label={plan.featured ? `${plan.name} plan, recommended` : `${plan.name} plan`}
              whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="pricingTopline">
                <p className="eyebrow" id={nameId}>
                  {plan.name}
                </p>
                {plan.featured ? (
                  <span className="planBadge planBadgeFeatured" aria-hidden="true">
                    Recommended
                  </span>
                ) : null}
              </div>
              <h3 id={priceId} className={showAnnual ? 'pricingPriceAnnualEmphasis' : undefined}>
                {showAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                <span>/{showAnnual ? 'yr' : 'mo'}</span>
              </h3>
              {showAnnual ? (
                <>
                  <p className="annualHeadline annualHeadlineProminent">{plan.monthlyEquivalent}</p>
                  {'annualSavings' in plan && plan.annualSavings ? (
                    <p className="annualSavings annualSavingsProminent">{plan.annualSavings}</p>
                  ) : null}
                </>
              ) : (
                <>
                  <p className="annualHeadline">{plan.yearlyPrice}/year</p>
                  {'annualSavings' in plan && plan.annualSavings ? (
                    <p className="annualSavings">{plan.annualSavings}</p>
                  ) : null}
                  <p className="annualNote">{plan.monthlyEquivalent}</p>
                </>
              )}
              <p className="pricingBetaNote">{pricingBetaNote}</p>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                id={ctaId}
                href={plan.href}
                className={plan.featured ? 'primaryButton' : 'secondaryButton'}
                data-cta={`pricing-${planKey}`}
              >
                {plan.cta}
              </Link>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
