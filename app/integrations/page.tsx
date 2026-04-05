import { createMetadata, integrationItems } from '@/lib/site-data';
import { CTASection, IntegrationTicker, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Selara Integrations', 'See Selara integrations and ecosystem coverage.', '/integrations');

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="800+ connections is not a throwaway line."
        intro="It is proof that Selara can move through the tools that already run your day—calendar, mail, docs, chat, and hundreds more."
      />
      <Section
        eyebrow="Ecosystem"
        title="Connected enough to match the real shape of your work."
        intro="An assistant is only credible if it can act where your information already lives—not beside it."
      >
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
