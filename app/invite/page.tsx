import { getPageMetadata, referralFaqs, referralProgram } from '@/lib/site-data';
import { CapabilityFaqStructuredData } from '@/components/capability-structured-data';
import { ReferralSection } from '@/components/referral-section';
import { CTASection, FaqList, PageHero, Section } from '@/components/sections';

export const metadata = getPageMetadata('/invite');

export default function InvitePage() {
  return (
    <>
      <CapabilityFaqStructuredData items={referralFaqs} />
      <PageHero
        eyebrow={referralProgram.eyebrow}
        title={referralProgram.title}
        intro={referralProgram.intro}
      />

      <Section
        eyebrow="How it works"
        title="Three steps. Both of you benefit."
        intro="Invite links live in the app — this page explains what happens when you share one."
      >
        <ReferralSection id="how-invite-works" />
      </Section>

      <Section
        id="faq"
        className="sectionAlt"
        eyebrow="FAQ"
        title="Invite program questions"
        intro="Who to invite, when perks apply, and where to find your link."
      >
        <FaqList items={referralFaqs} labelledBy="faq-heading" />
      </Section>

      <CTASection />
    </>
  );
}
