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
        intro="Selara is positioned now as a luxury productivity system, not a generic AI tool: sharper storytelling, stronger motion, and a more premium emotional payoff from the first screen down."
      >
        <StatRow />
      </Section>
      <Section
        eyebrow="How it works"
        title="Tell Selara what you need. Watch it turn into a plan. Approve what matters."
        intro="This is the core product story, now treated like a high-end experience instead of a basic feature explainer."
      >
        <StoryGrid />
      </Section>
      <Section
        eyebrow="Proof of ecosystem"
        title="Connected to the stack you already live in, with 800+ more waiting behind it."
        intro="The ticker returns here, but the whole section is staged like a luxury systems diagram instead of a generic logo strip."
      >
        <IntegrationTicker />
      </Section>
      <Section
        eyebrow="Trust theater"
        title="The approval-first concept gets a real premium treatment this time."
        intro="You called out the conversation and approvals idea as worth keeping. This version leans all the way into it."
      >
        <ApprovalShowcase />
      </Section>
      <Section
        eyebrow="Product runway"
        title="Motion-rich concept stages ready for your next asset drop."
        intro="The old screenshots are gone. In their place are polished placeholders designed to be replaced by future uploaded visuals without changing the structure or feel of the page."
      >
        <ProductRunway />
      </Section>
      <Section
        eyebrow="Capability surface"
        title="Everything you need to reclaim your time without giving up control."
        intro="Calendar intelligence, voice, memory, documents, and automations all show up as parts of one coherent premium assistant."
      >
        <FeatureCards />
      </Section>
      <Section
        eyebrow="Vs OpenClaw"
        title="Sharp enough to land, premium enough not to look desperate."
        intro="The contrast stays pointed: Selara is the assistant for people who want power to feel calm, not chaotic."
      >
        <ComparisonTable />
      </Section>
      <Section
        eyebrow="Pricing"
        title="Mapped to your existing live Stripe products and price IDs."
        intro="No new products or prices were created. The cards below are wired to the exact Stripe catalog already in your account, with monthly and yearly recurring price IDs shown for setup clarity."
      >
        <PricingGrid />
      </Section>
      <Section
        eyebrow="FAQ"
        title="Launch questions handled before they interrupt the vibe."
        intro="This keeps the sales energy high while still answering the trust and setup questions a serious buyer will actually have."
      >
        <FaqList />
      </Section>
      <CTASection />
    </>
  );
}
