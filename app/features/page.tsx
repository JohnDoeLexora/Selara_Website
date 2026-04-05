import { createMetadata } from '@/lib/site-data';
import { CTASection, FeatureCards, PageHero, ProductRunway, Section, StoryGrid } from '@/components/sections';

export const metadata = createMetadata('Selara Features', 'Explore the premium feature surface behind Selara.', '/features');

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="A premium assistant should feel expansive, not busy."
        intro="Selara’s feature set is framed as one system for your time: calendar, voice, memory, documents, automations, and approval-first action."
      />
      <Section
        eyebrow="Feature map"
        title="A wide capability surface without losing the thread."
        intro="Breadth matters—but so does control. Here is how the pieces fit together."
      >
        <FeatureCards />
      </Section>
      <Section
        eyebrow="Flow"
        title="From request to action without the usual friction."
        intro="This sequence is the spine of the product: say what you need, see the plan, approve what matters."
      >
        <StoryGrid />
      </Section>
      <Section
        eyebrow="In the app"
        title="Screens you will actually live in."
        intro="Navigation, preferences, and subscription—presented with the same calm hierarchy as the rest of Selara."
      >
        <ProductRunway />
      </Section>
      <CTASection />
    </>
  );
}
