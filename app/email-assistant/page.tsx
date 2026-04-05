import { createMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata('AI Email Assistant', 'Selara helps with email drafts, follow-ups, and message triage.', '/email-assistant');

export default function EmailAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI email assistant"
        title="Follow-up without letting it haunt the back of your mind."
        intro="Selara helps you draft, triage, and close loops with a calmer workflow—so email stops being ambient stress."
      />
      <Section
        eyebrow="Email workflow"
        title="Drafts, nudges, and sends—with judgment."
        intro="Keep tone and quality high while Selara handles structure, reminders, and the busywork around the message."
      >
        <div className="featureGrid featureGridExpanded">
          <article className="featureCard featureCardExpanded">
            <h3>Draft with context</h3>
            <p>Turn rough intent into clear communication that still sounds like you.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Remember the follow-up</h3>
            <p>Turn “I’ll send that next week” into a tracked action instead of a vague promise.</p>
          </article>
          <article className="featureCard featureCardExpanded">
            <h3>Review before sending</h3>
            <p>Consequential outbound mail stays visible and editable before it leaves your account.</p>
          </article>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
