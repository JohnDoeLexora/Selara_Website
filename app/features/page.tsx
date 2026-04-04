import { createMetadata } from '@/lib/site-data';
import { CTASection, FeatureCards, PageHero, ProductRunway, Section, StoryGrid } from '@/components/sections';

export const metadata = createMetadata('Selara Features', 'Explore the premium feature surface behind Selara.', '/features');

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="A premium assistant should feel expansive, not busy."
        intro="Selara’s feature set is framed here as a coherent operating system for your time: calendar, voice, memory, documents, automations, and approval-first action."
      />
      <Section eyebrow="Feature map" title="A wider capability surface without losing the core story." intro="The point is not to shout every feature at once. It is to make the product feel broad, controlled, and high-leverage.">
        <FeatureCards />
      </Section>
      <Section eyebrow="Flow" title="From request to action without the usual friction." intro="This sequence anchors the whole site because it expresses what Selara actually is, not just what it can list on a page.">
        <StoryGrid />
      </Section>
      <Section eyebrow="Asset-ready" title="Ready for the final product-shot pass." intro="These motion-first stages are where your asset agent can replace concept visuals with exported screenshots or short loops.">
        <ProductRunway />
      </Section>
      <CTASection />
    </>
  );
}
