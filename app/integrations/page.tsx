import { createMetadata, deepPageMoments, integrationCategories, integrationPrinciples } from '@/lib/site-data';
import { CTASection, DeepPageMoment, PageHero, Section, StatRow } from '@/components/sections';

export const metadata = createMetadata(
  'Selara Integrations',
  '800+ connected tools for professionals — calendar, mail, docs, and more — with approval-first control through one calm AI concierge.',
  '/integrations'
);

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        className="pageHeroIntegrations"
        eyebrow="Integrations"
        title="Your tools. One calm concierge."
        intro="Selara moves through the calendar, mail, and documents you already rely on — with 800+ connections and approval-first guardrails when the stakes are real."
      />

      <Section
        eyebrow="Breadth"
        title="It works where your real work already happens."
        intro="It connects to the email, calendar, and tools you actually use — so it knows what’s going on."
      >
        <StatRow />
      </Section>

      <Section
        eyebrow="How it connects"
        title="Integrations that respect your judgment."
        intro="It works across the tools you already use — and shows you the plan before anything important happens."
      >
        <div className="integrationsPrinciplesFrame">
          <div className="twoColumn">
            {integrationPrinciples.map((item) => (
              <article key={item.title} className="contentCard contentCardPremium">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="In the app"
        title="One hub for the tools that run your week."
        intro="See what is connected, what Selara can act on, and where approval applies — without leaving the calm product surface."
      >
        <DeepPageMoment moment={deepPageMoments.integrations} />
      </Section>

      <Section
        eyebrow="Categories"
        title="The surfaces that matter most."
        intro="These are the categories professionals live in every day. Selara treats them as one system — not a pile of one-off tricks."
      >
        <div className="integrationCategories integrationCategoriesPremium">
          {integrationCategories.map((cat) => (
            <article key={cat.category} className="integrationCategoryCard">
              <h3>{cat.category}</h3>
              <div className="chipGrid">
                {cat.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
