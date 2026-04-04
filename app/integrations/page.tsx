import { createMetadata, integrationItems } from '@/lib/site-data';
import { CTASection, IntegrationTicker, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Selara Integrations', 'See Selara integrations and ecosystem coverage.', '/integrations');

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="800+ more is not a throwaway line. It is one of the strongest proofs on the site."
        intro="This page takes the ticker you liked and turns it into a more premium ecosystem story about reach, context, and real workflow depth."
      />
      <Section eyebrow="Ecosystem" title="Connected enough to matter in the actual shape of your day." intro="An assistant becomes dramatically more credible when it can move through your tools instead of bouncing off them.">
        <IntegrationTicker />
        <div className="chipGrid">
          {integrationItems.map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
