import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('About Selara', 'Why Selara exists and what it is building.', '/about');

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Selara"
        title="A premium assistant for people who are tired of babysitting their own systems."
        intro="Selara is built for professionals who need real help with time, not another chat window that guesses at context and skips the stakes."
      />
      <Section
        eyebrow="Belief"
        title="The future of AI assistance should feel calmer, not more chaotic."
        intro="We think the best assistants earn trust through visible intent, clear approvals, and product craft that respects how expensive your attention already is."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>What Selara rejects</h3>
            <p>Black-box automation, shallow polish, and tools that feel powerful only because they hide what they are about to do.</p>
          </div>
          <div className="contentCard">
            <h3>What Selara builds toward</h3>
            <p>Trustworthy action, genuine time back, and software that feels like it belongs in a premium category.</p>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
