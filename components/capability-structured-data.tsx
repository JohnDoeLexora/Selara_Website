import { buildFaqStructuredData, type FaqItem } from '@/lib/site-data';

export function CapabilityFaqStructuredData({ items }: { items: FaqItem[] }) {
  const faqData = buildFaqStructuredData(items);
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
  );
}
