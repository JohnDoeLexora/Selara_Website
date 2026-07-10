import { openClawIntro, getPageMetadata } from '@/lib/site-data';
import { CTASection, ComparisonTable, OpenClawContrastVisual, PageHero, Section } from '@/components/sections';

export const metadata = getPageMetadata('/vs-openclaw');

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
        intro="OpenClaw is built for raw speed. Selara is built so you don’t get surprised by something stupid happening on your behalf."
      >
        <OpenClawContrastVisual />
      </Section>

      <CTASection />
    </>
  );
}
