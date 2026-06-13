import { absoluteUrl } from '@/lib/site-data';
import type { CaseStudy } from '@/lib/case-studies';

export function CaseStudyStructuredData({ study }: { study: CaseStudy }) {
  const url = absoluteUrl(`/stories/${study.slug}`);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.persona} — Selara success story`,
    description: study.problem,
    author: { '@type': 'Organization', name: 'SelarAI LLC' },
    publisher: { '@type': 'Organization', name: 'Selara', url: absoluteUrl('') },
    mainEntityOfPage: url,
    url,
    articleSection: study.industry,
    about: study.persona,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
