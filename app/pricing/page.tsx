'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PricingToggle from '@/components/PricingToggle';
import PricingCard from '@/components/PricingCard';

const PLANS = [
  {
    key: 'select' as const,
    name: 'Select',
    price: { monthly: 25, annual: 250 },
    features: [
      'AI agents across all contexts',
      '800+ integrations',
      'Voice Mode',
      'Persistent memory',
      'Large usage limits',
    ],
    recommended: false,
  },
  {
    key: 'premium' as const,
    name: 'Premium',
    price: { monthly: 45, annual: 450 },
    features: [
      'All models & integrations',
      'Voice synthesis & transcription',
      'Expanded memory & rate caps',
      'Life management features',
      'SpouseConnect',
    ],
    recommended: true,
  },
  {
    key: 'pinnacle' as const,
    name: 'Pinnacle',
    price: { monthly: 110, annual: 1100 },
    features: [
      'Force Multiplier (team link)',
      'Premium voice',
      'No limits',
      'Most powerful models',
      'Early access to new features',
      'FamilyConnect',
    ],
    recommended: false,
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 text-center border-b border-[#2A2A38]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF] mb-5 tracking-tight">
            Plans for every life
          </h1>
          <p className="text-[#9999AA] text-lg mb-8">
            7-day money-back guarantee. Cancel anytime, no fees.
          </p>
          <PricingToggle value={billing} onChange={setBilling} />
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <PricingCard
                key={plan.key}
                plan={plan.key}
                billing={billing}
                name={plan.name}
                price={plan.price}
                features={plan.features}
                recommended={plan.recommended}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise — separated to preserve Goldilocks effect */}
      <section className="py-10 px-4 sm:px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="h-px bg-[#2A2A38] mb-10" />
          <div className="text-center">
            <p className="text-[#9999AA] text-sm mb-2">
              Running a team or organization?
            </p>
            <p className="text-[#F8F8FF] font-medium mb-4">
              Selara Enterprise is built for that.
            </p>
            <a
              href="mailto:enterprise@selara.app"
              className="inline-flex items-center gap-2 text-[#8B6FDB] hover:text-[#F8F8FF] text-sm font-medium transition-colors"
            >
              Contact us for Enterprise →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
