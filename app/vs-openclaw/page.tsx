import { openClawIntro, createMetadata } from '@/lib/site-data';
import { CTASection, ComparisonTable, OpenClawContrastVisual, PageHero, Section } from '@/components/sections';

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
        intro="Both tools can move your calendar and send messages. One makes you feel powerful and calm. The other makes you wonder what just happened to your inbox."
      />

      <Section
        eyebrow="The real difference"
        title="One is built for people who cannot afford to look reckless."
        intro={openClawIntro}
      >
        <ComparisonTable />
      </Section>

      <Section
        eyebrow="What it actually feels like"
        title="Speed is easy. Calm power is rare."
        intro="OpenClaw optimizes for throughput. Selara optimizes for people who want the leverage without the constant low-grade anxiety that something just did something stupid on their behalf."
      >
        <OpenClawContrastVisual />
      </Section>

      <CTASection />
    </>
  );
}
