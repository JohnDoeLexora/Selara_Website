import { createMetadata } from '@/lib/site-data';
import { CTASection, ComparisonTable, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Selara vs OpenClaw', 'Compare Selara and OpenClaw across trust, control, and product experience.', '/vs-openclaw');

export default function VsOpenClawPage() {
  return (
    <>
      <PageHero
        eyebrow="Vs OpenClaw"
        title="Same category, different philosophy."
        intro="Selara optimizes for trust, legibility, and premium product craft. If you want automation that feels safe to hand your week to, the differences below matter."
      />
      <Section
        eyebrow="Comparison"
        title="Selara is for people who want help without a product that feels like a liability."
        intro="The goal is not noise—it is a clearer trust model and a calmer surface while you delegate real work."
      >
        <ComparisonTable />
      </Section>
      <CTASection />
    </>
  );
}
