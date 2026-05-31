import { automationOutcomes, createMetadata, deepPageMoments } from '@/lib/site-data';
import { CTASection, DeepPageMoment, FeatureGrid, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'AI Automations',
  'Repetitive work stops being your problem. Selara handles the routine with context and only surfaces the things that actually need your judgment.',
  '/ai-automations'
);

export default function AutomationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Automations"
        title="Repetitive work stops being your problem."
        intro="It handles the repetitive stuff across your tools. The moment it would touch something important, it stops and shows you the plan."
      />

      <Section
        eyebrow="Automation that actually helps"
        title="The boring work just happens. You stay in charge of the real stuff."
        intro="It knows your world well enough that the repetitive things don’t need you — until they do."
      >
        <FeatureGrid items={automationOutcomes} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="Speed without surprise on the work that matters."
        intro="Automations run in the background until stakes rise — then you see the plan and decide."
      >
        <DeepPageMoment moment={deepPageMoments.automations} />
      </Section>

      <CTASection />
    </>
  );
}
