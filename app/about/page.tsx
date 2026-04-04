import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('About Selara', 'Why Selara exists and what it is building.', '/about');

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Selara"
        title="A premium assistant for people who are tired of babysitting their own systems."
        intro="Selara is framed here less like another AI app and more like a serious product category bet: an assistant that understands context, respects control, and feels luxurious to use."
      />
      <Section eyebrow="Belief" title="The future of AI assistance should feel calmer, not more chaotic." intro="That is the core emotional and product thesis shaping both the app and the site.">
        <div className="twoColumn">
          <div className="contentCard"><h3>What Selara rejects</h3><p>Black-box automation, cheap-feeling polish, and assistants that seem powerful only because they ignore the stakes.</p></div>
          <div className="contentCard"><h3>What Selara builds toward</h3><p>Trustworthy action, genuine time recovery, and an experience that feels like it belongs in a premium product category.</p></div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
