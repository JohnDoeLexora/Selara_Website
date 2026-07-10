import { absoluteUrl, buildFaqStructuredData, trustFaqs } from '@/lib/site-data';

export function TrustStructuredData() {
  const faqData = buildFaqStructuredData(trustFaqs);
  const webPageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Security & Trust — Selara',
    url: absoluteUrl('/trust'),
    description:
      'How Selara protects your data with approval-first design, transparent practices, and clear user rights.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }} />
    </>
  );
}
