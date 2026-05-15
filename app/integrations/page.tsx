import { createMetadata, integrationCategories } from '@/lib/site-data';
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
      </Section>

      <Section
        eyebrow="Where Selara actually shows up"
        title="Not just a long list — the tools that actually run your days."
        intro="These are the categories that matter. Selara moves through them with context instead of treating every integration like a one-off trick."
      >
        <div className="integrationCategories">
          {integrationCategories.map((cat) => (
            <div key={cat.category} className="integrationCategory">
              <h3>{cat.category}</h3>
              <div className="chipGrid">
                {cat.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
