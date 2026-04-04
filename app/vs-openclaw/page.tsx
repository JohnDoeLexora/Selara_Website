import { createMetadata } from '@/lib/site-data';
import { CTASection, ComparisonTable, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('Selara vs OpenClaw', 'Compare Selara and OpenClaw across trust, control, and product experience.', '/vs-openclaw');

export default function VsOpenClawPage() {
  return (
    <>
      <PageHero
        eyebrow="Vs OpenClaw"
        title="The side-by-side stays spicy, but the execution is far more controlled."
        intro="This keeps the energy you wanted: direct enough to land, restrained enough to read like confidence instead of panic."
      />
      <Section eyebrow="Comparison" title="Selara is for people who want help without a product that feels like a liability." intro="The point is not to posture. The point is to make the trust model feel obviously superior.">
        <ComparisonTable />
      </Section>
      <CTASection />
    </>
  );
}
