'use client';

import { pricingComparisonRows } from '@/lib/site-data';

export function PricingComparisonMatrix({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'comparisonSectionFrame comparisonSectionFrameCompact' : 'comparisonSectionFrame'}>
      <div
        className="comparisonTable comparisonTableExpanded comparisonTableEditorial comparisonTablePricing"
        role="region"
        aria-label="Plan feature comparison"
        id={compact ? undefined : 'compare'}
      >
        <div className="comparisonHead comparisonRow">
          <span className="comparisonCategoryLabel">Feature</span>
          <span className="comparisonColSelect">Select</span>
          <span className="comparisonColPremium comparisonColFeatured">Premium</span>
          <span className="comparisonColPinnacle">Pinnacle</span>
        </div>
        {pricingComparisonRows.map((row, index) => (
          <div
            key={row.label}
            className={`comparisonRow comparisonRowInteractive${index % 2 === 1 ? ' comparisonRowZebra' : ''}`}
          >
            <span className="comparisonCategoryLabel">{row.label}</span>
            <span className="comparisonColSelect" data-comparison-col="Select">
              {row.select}
            </span>
            <span className="comparisonColPremium comparisonColFeatured" data-comparison-col="Premium">
              {row.premium}
            </span>
            <span className="comparisonColPinnacle" data-comparison-col="Pinnacle">
              {row.pinnacle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export type BillingPeriod = 'monthly' | 'annual';

export function PricingBillingToggle({
  value,
  onChange,
}: {
  value: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
}) {
  return (
    <div className="billingToggle" role="group" aria-label="Billing period">
      <button
        type="button"
        className={value === 'monthly' ? 'billingToggleOption billingToggleOptionActive' : 'billingToggleOption'}
        aria-pressed={value === 'monthly'}
        onClick={() => onChange('monthly')}
      >
        Monthly
      </button>
      <button
        type="button"
        className={value === 'annual' ? 'billingToggleOption billingToggleOptionActive' : 'billingToggleOption'}
        aria-pressed={value === 'annual'}
        onClick={() => onChange('annual')}
      >
        Annual
        <span className="billingToggleSavings">Save up to 20%</span>
      </button>
    </div>
  );
}
