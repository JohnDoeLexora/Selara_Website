import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('AI Email Assistant', 'Selara helps with email drafts, follow-ups, and message triage.', '/email-assistant');

export default function EmailAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI email assistant"
        title="Follow-up without letting it haunt the back of your mind."
        intro="Selara turns email from a low-grade source of mental residue into a cleaner, more controlled workflow."
      />
      <Section eyebrow="Email workflow" title="Drafts, nudges, and message control with better taste." intro="This page gives the category story enough weight to rank and convert without devolving into keyword sludge.">
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded"><h3>Draft with context</h3><p>Turn rough intent into polished communication that still sounds like you.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Actually remember the follow-up</h3><p>Selara helps the “I’ll send that next week” promise become a real future action instead of a forgotten one.</p></article>
          <article className="featureCard featureCardExpanded"><h3>Review before sending</h3><p>Consequential outward communication remains visible, editable, and calm.</p></article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
