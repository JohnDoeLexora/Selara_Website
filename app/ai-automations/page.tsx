import { automationOutcomes, createMetadata } from '@/lib/site-data';
import { CTASection, FeatureGrid, PageHero, Section } from '@/components/sections';

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
        intro="Selara knows your tools, your preferences, and what “done well” looks like for you. Routine updates, status reports, and cross-tool busywork just happen — until they wouldn’t."
      />

      <Section
        eyebrow="Automation that actually helps"
        title="Context travels with the work. You only touch the exceptions."
        intro="This is what connected automation feels like when it’s built for people who can’t afford for something to go wrong without them knowing."
      >
        <FeatureGrid items={automationOutcomes} />
      </Section>

      <Section
        eyebrow="The premium part"
        title="Speed without surprise. Power without the anxiety."
        intro="When something would affect your calendar, your team, or your reputation, you see the plan first. Everything else moves faster because you trust the guardrails."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>It gets better the more you use it</h3>
            <p>Repeated work improves over time. Selara learns your standards instead of staying a brittle rules engine.</p>
          </div>
          <div className="contentCard">
            <h3>You stay the decider on what matters</h3>
            <p>Routine flow stays fast. Anything consequential pauses for your review. That combination is what makes real leverage feel calm.</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
