'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#2A2A38]">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex items-start justify-between gap-4 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="text-[#F8F8FF] text-base font-medium group-hover:text-[#8B6FDB] transition-colors">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={`text-[#9999AA] flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                openIndex === i ? 'rotate-180 text-[#8B6FDB]' : ''
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="mt-3 pr-6">
              <p className="text-[#9999AA] text-sm leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
