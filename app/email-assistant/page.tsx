import { createMetadata, emailCapabilities } from '@/lib/site-data';
import { CTASection, FeatureGrid, PageHero, Section } from '@/components/sections';

export const metadata = createMetadata(
  'AI Email Assistant',
  'Your inbox stops living in your head. Selara surfaces what matters, drafts the rest, and makes sure follow-ups actually happen.',
  '/email-assistant'
);

export default function EmailAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Email assistant"
        title="The inbox stops living in your head."
        intro="Selara surfaces what actually needs you, drafts what doesn’t, and turns vague “I’ll get to that” promises into tracked work that actually closes."
      />

      <Section
        eyebrow="Email that doesn’t leak"
        title="Drafts in your voice. Follow-ups that actually happen. Nothing important disappears."
        intro="This is what email assistance looks like when the assistant knows your priorities and protects your reputation."
      >
        <FeatureGrid items={emailCapabilities} />
      </Section>

      <Section
        eyebrow="The real relief"
        title="You spend time deciding, not digging or chasing."
        intro="Every rough note, every “send this next week,” every CC that needs a reply gets structure and a due date. You only touch the substance."
      >
        <div className="twoColumn">
          <div className="contentCard">
            <h3>Follow-ups that close themselves</h3>
            <p>“I’ll send that next week” becomes a real tracked action with the right context. You stop being the person who drops balls.</p>
          </div>
          <div className="contentCard">
            <h3>Still sounds like a human wrote it</h3>
            <p>Drafts come out in your voice and style. You edit the thinking, not the personality. Recipients never feel like they got AI slop.</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
