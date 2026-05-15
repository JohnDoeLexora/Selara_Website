import { createMetadata } from '@/lib/site-data';
import { CTASection, ComparisonTable, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'Selara vs OpenClaw',
  'Two AI assistants. Very different philosophies. Only one is built for people whose time and reputation are genuinely expensive.',
  '/vs-openclaw'
);

export default function VsOpenClawPage() {
  return (
    <>
      <PageHero
        eyebrow="Vs OpenClaw"
        title="Same category. Completely different feeling."
        intro="Both tools can move your calendar and send messages. One makes you feel powerful and calm. The other makes you feel like you’re riding a very fast, slightly drunk robot."
      />

      <Section
        eyebrow="The real difference"
        title="One is built for people who can’t afford to look reckless."
        intro="When your weeks are expensive and your reputation matters, the product philosophy shows up in every interaction."
      >
        <ComparisonTable />
      </Section>

      <Section
        eyebrow="What it actually feels like"
        title="Speed is easy. Calm power is rare."
        intro="OpenClaw optimizes for throughput. Selara optimizes for people who want the leverage without the constant low-grade anxiety that something just did something stupid on their behalf."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>The OpenClaw experience</h3>
            <p>Fast. Aggressive. Sometimes brilliant, sometimes terrifying. You spend a lot of mental energy wondering what it just did and whether you need to clean it up.</p>
          </div>
          <div className="contentCard">
            <h3>The Selara experience</h3>
            <p>Fast where it should be. Careful where it counts. You delegate real work and still feel like you’re the one running your life.</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
