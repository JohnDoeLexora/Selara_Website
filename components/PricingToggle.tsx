'use client';

import { useState } from 'react';

interface PricingToggleProps {
  value: 'monthly' | 'annual';
  onChange: (value: 'monthly' | 'annual') => void;
}

export default function PricingToggle({ value, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onChange('monthly')}
        className={`text-sm font-medium transition-colors ${
          value === 'monthly' ? 'text-[#F8F8FF]' : 'text-[#9999AA] hover:text-[#F8F8FF]'
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => onChange(value === 'monthly' ? 'annual' : 'monthly')}
        className="relative w-12 h-6 rounded-full bg-[#2A2A38] transition-colors focus:outline-none"
        aria-label="Toggle billing cycle"
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-[#6B4FBB] shadow transition-all duration-200 ${
            value === 'annual' ? 'left-[26px]' : 'left-0.5'
          }`}
        />
      </button>

      <button
        onClick={() => onChange('annual')}
        className={`text-sm font-medium flex items-center gap-2 transition-colors ${
          value === 'annual' ? 'text-[#F8F8FF]' : 'text-[#9999AA] hover:text-[#F8F8FF]'
        }`}
      >
        Annual
        <span className="text-xs px-1.5 py-0.5 rounded-full bg-[#6B4FBB]/20 text-[#8B6FDB] font-semibold">
          Save 2 months
        </span>
      </button>
    </div>
  );
}
