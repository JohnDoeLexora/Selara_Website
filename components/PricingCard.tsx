'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: 'select' | 'premium' | 'pinnacle';
  billing: 'monthly' | 'annual';
  name: string;
  price: { monthly: number; annual: number };
  features: string[];
  recommended?: boolean;
  ctaLabel?: string;
}

async function startCheckout(plan: string, billing: string) {
  const res = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan, billing }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
}

export default function PricingCard({
  plan,
  billing,
  name,
  price,
  features,
  recommended,
  ctaLabel = 'Join Waitlist',
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  const displayPrice = billing === 'annual' ? price.annual : price.monthly;
  const period = billing === 'annual' ? '/yr' : '/mo';

  async function handleClick() {
    setLoading(true);
    await startCheckout(plan, billing);
    setLoading(false);
  }

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-200 ${
        recommended
          ? 'bg-[#111118] border-2 border-[#6B4FBB] shadow-[0_0_40px_rgba(107,79,187,0.15)]'
          : 'bg-[#111118] border border-[#2A2A38]'
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full bg-[#6B4FBB] text-[#F8F8FF] text-xs font-semibold uppercase tracking-widest shadow-lg">
            Recommended
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-[#F8F8FF] text-lg font-semibold mb-1">{name}</h3>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold text-[#F8F8FF]">${displayPrice}</span>
          <span className="text-[#9999AA] text-sm mb-1">{period}</span>
        </div>
        {billing === 'annual' && (
          <p className="text-[#8B6FDB] text-sm mt-1">
            ${price.monthly}/mo billed annually
          </p>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check size={16} className="text-[#6B4FBB] mt-0.5 flex-shrink-0" />
            <span className="text-[#9999AA] text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        disabled={loading}
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
          recommended
            ? 'bg-[#6B4FBB] hover:bg-[#8B6FDB] text-[#F8F8FF] shadow-lg'
            : 'bg-[#1A1A24] hover:bg-[#2A2A38] text-[#F8F8FF] border border-[#2A2A38] hover:border-[#6B4FBB]'
        } disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {loading ? 'Loading...' : ctaLabel}
      </button>
    </div>
  );
}
