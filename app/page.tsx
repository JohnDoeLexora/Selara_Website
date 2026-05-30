import Link from 'next/link';
import {
  ApprovalShowcase,
  CTASection,
  FaqList,
  FeatureCards,
  FutureTeaser,
  Hero,
  PricingGrid,
  Section,
  StoryGrid,
  WhoThisIsFor,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        eyebrow="Who it's for"
        title="Built for people whose reputation is part of the job."
        intro="Selara is the calm, approval-first concierge for high-stakes weeks — not another agent that moves fast and hopes you notice."
      >
        <WhoThisIsFor />
      </Section>
      <Section
        eyebrow="How it works"
        title="Tell Selara what you need. Watch it turn into a plan. Approve what matters."
        intro="The story is simple: intent becomes a visible sequence, and you stay in control when stakes are real."
      >
        <StoryGrid />
      </Section>
      <Section
        eyebrow="Trust"
        title="Conversation and approvals, treated like they belong in a premium product."
        intro="When automation can change your calendar, messages, or workflows, the interface should feel steady—not noisy or evasive."
      >
        <ApprovalShowcase />
      </Section>
      <Section
        eyebrow="Core capabilities"
        title="Everything you need to reclaim your time without giving up control."
        intro="Calendar intelligence, voice, memory, documents, and automations—one coherent assistant instead of a pile of disconnected tricks."
      >
        <FeatureCards />
        <div className="chipGrid" style={{ justifyContent: 'center', marginTop: 16 }}>
          <Link href="/features" className="secondaryButton">
            Explore the full capability map
          </Link>
        </div>
      </Section>
      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Select, Premium, and Pinnacle — plans for serious weeks."
        intro="Every tier includes the full concierge experience in the open beta today. Upgrade to paid whenever you are ready — no lock-in."
      >
        <PricingGrid />
      </Section>
      <Section
        id="faq"
        eyebrow="FAQ"
        title="Answers before you need to ask."
        intro="Pricing, behavior, and billing—covered in plain language so you can decide with confidence."
      >
        <FaqList />
      </Section>
      <section className="section sectionCompact" aria-labelledby="future-teaser-heading">
        <div className="shell">
          <FutureTeaser />
        </div>
      </section>
      <CTASection />
    </>
  );
}
