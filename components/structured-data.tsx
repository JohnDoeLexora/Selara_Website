import { absoluteUrl, siteUrl, socialLinks } from '@/lib/site-data';

export function StructuredData() {
  const orgId = `${siteUrl}/#organization`;
  const webId = `${siteUrl}/#website`;
  const softwareId = `${siteUrl}/#software`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'SelarAI LLC',
        url: siteUrl,
        logo: absoluteUrl('/images/selara-logo.png'),
        sameAs: [socialLinks.x],
      },
      {
        '@type': 'WebSite',
        '@id': webId,
        url: siteUrl,
        name: 'Selara',
        description:
          'Selara is a premium AI personal assistant for professionals—approval-first AI concierge for iOS with calendar intelligence and follow-through.',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': softwareId,
        name: 'Selara',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'iOS',
        url: siteUrl,
        description:
          'Selara is a premium AI personal assistant for professionals who want more time back and more trust in how automation works.',
        publisher: { '@id': orgId },
        offers: [
          {
            '@type': 'Offer',
            name: 'Selara Select',
            price: '25',
            priceCurrency: 'USD',
            url: absoluteUrl('/pricing'),
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '25',
              priceCurrency: 'USD',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            name: 'Selara Premium',
            price: '45',
            priceCurrency: 'USD',
            url: absoluteUrl('/pricing'),
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '45',
              priceCurrency: 'USD',
              billingDuration: 'P1M',
            },
          },
          {
            '@type': 'Offer',
            name: 'Selara Pinnacle',
            price: '110',
            priceCurrency: 'USD',
            url: absoluteUrl('/pricing'),
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '110',
              priceCurrency: 'USD',
              billingDuration: 'P1M',
            },
          },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
