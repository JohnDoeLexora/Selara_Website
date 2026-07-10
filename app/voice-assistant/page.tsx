import {
  voiceCapabilities,
  getCapabilityPage,
  getPageMetadata,
  deepPageMoments,
} from '@/lib/site-data';
import { CapabilityFaqStructuredData } from '@/components/capability-structured-data';
import {
  BeforeAfterPanel,
  CTASection,
  DeepPageMoment,
  FaqList,
  FeatureGrid,
  PageHero,
  RelatedLinksRow,
  Section,
  UseCaseGrid,
} from '@/components/sections';

const page = getCapabilityPage('/voice-assistant');

export const metadata = getPageMetadata('/voice-assistant');

export default function VoiceAssistantPage() {
  return (
    <>
      <CapabilityFaqStructuredData items={page.faqs} />
      <PageHero
        className="pageHeroCapability"
        eyebrow="Voice AI personal assistant"
        title="Talk like a person. Get treated like one."
        intro="Selara’s voice AI personal assistant turns natural speech into reviewable plans — built for iOS professionals who delegate between meetings, not from a keyboard."
      />

      <Section
        eyebrow="Voice that works"
        title="Natural speech. Visible plans. Nothing runs until you say so."
        intro="Voice is how you capture intent — approval is how you stay in charge."
      >
        <FeatureGrid items={voiceCapabilities} />
      </Section>

      <Section
        eyebrow="Professional use cases"
        title="Voice for real professional moments."
        intro="Hands-free capture that respects high-stakes judgment — not command-and-pray assistants."
        className="sectionAlt"
      >
        <UseCaseGrid items={page.useCases} />
      </Section>

      <Section
        eyebrow="Before & after"
        title="From voice memos to approved action."
        intro="What changes when voice input becomes structured delegation instead of autopilot."
      >
        <BeforeAfterPanel before={page.beforeAfter.before} after={page.beforeAfter.after} />
      </Section>

      <Section
        eyebrow="Approval-first here"
        title="Say it once. Review the plan. Then it runs."
        intro="Voice turns intent into a structured plan — you approve before anything touches your calendar or inbox."
      >
        <DeepPageMoment moment={deepPageMoments.voice} />
      </Section>

      <Section
        id="faq"
        className="sectionAlt"
        eyebrow="FAQ"
        title="Voice assistant questions"
        intro="Accuracy, plans, iOS availability, and what happens after you speak."
      >
        <FaqList items={page.faqs} labelledBy="faq-heading" />
      </Section>

      <Section eyebrow="Explore further" title="Related capabilities">
        <RelatedLinksRow links={page.relatedLinks} />
      </Section>

      <CTASection />
    </>
  );
}
