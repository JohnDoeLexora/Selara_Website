import {
  ApprovalShowcase,
  CTASection,
  ComparisonTable,
  FaqList,
  FeatureCards,
  Hero,
  IntegrationTicker,
  ProductRunway,
  Section,
  StatRow,
  StoryGrid,
  PricingGrid,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="Momentum"
        title="A personal assistant for people whose time is too expensive to keep bleeding into admin."
        intro="Selara is built as a luxury productivity system: calm motion, clear narrative, and an experience that feels as serious as the work you do."
      >
        <StatRow />
      </Section>
      <Section
        eyebrow="How it works"
        title="Tell Selara what you need. Watch it turn into a plan. Approve what matters."
        intro="The story is simple: intent becomes a visible sequence, and you stay in control when stakes are real."
      >
        <StoryGrid />
      </Section>
      <Section
        eyebrow="Proof of ecosystem"
        title="Connected to the stack you already live in, with 800+ more waiting behind it."
        intro="Your assistant should move through the tools you already trust—not bounce off them."
      >
        <IntegrationTicker />
      </Section>
      <Section
        eyebrow="Trust"
        title="Conversation and approvals, treated like they belong in a premium product."
        intro="When automation can change your calendar, messages, or workflows, the interface should feel steady—not noisy or evasive."
      >
        <ApprovalShowcase />
      </Section>
      <Section
        eyebrow="Product"
        title="A guided tour through the surfaces you will live in every day."
        intro="Chat, navigation, settings, and subscription—shown the way a serious product should present itself: clear hierarchy, restrained chrome, room to breathe."
      >
        <ProductRunway />
      </Section>
      <Section
        eyebrow="Capability surface"
        title="Everything you need to reclaim your time without giving up control."
        intro="Calendar intelligence, voice, memory, documents, and automations—one coherent assistant instead of a pile of disconnected tricks."
      >
        <FeatureCards />
      </Section>
      <Section
        eyebrow="Vs OpenClaw"
        title="Sharp comparison, premium tone."
        intro="Selara is for people who want power to feel calm and legible—not chaotic or black-box."
      >
        <ComparisonTable />
      </Section>
      <Section
        eyebrow="Pricing"
        title="Select, Premium, and Pinnacle—straightforward plans."
        intro="Monthly or yearly billing, clear feature tiers, and CTAs that take you where you need to go next."
      >
        <PricingGrid />
      </Section>
      <Section
        eyebrow="FAQ"
        title="Answers before you need to ask."
        intro="Pricing, behavior, and billing—covered in plain language so you can decide with confidence."
      >
        <FaqList />
      </Section>
      <CTASection />
    </>
  );
}
