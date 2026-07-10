import { LegalBody, LegalLinkRow, PageHero, Section } from '@/components/sections';
import { privacyPolicy } from '@/lib/legal';
import { getPageMetadata } from '@/lib/site-data';

export const metadata = getPageMetadata('/privacy');

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title="SelarAI Privacy Policy"
        intro="This page explains, in plain language, how SelarAI collects and uses information when you use Selara — and links to our full attorney-drafted policy below."
      />
      <div className="shell legalPageNavWrap">
        <LegalLinkRow current="privacy" />
      </div>
      <Section
        eyebrow="Legal"
        title="Full privacy policy"
        intro="The complete policy follows. Section links help you jump to what you need."
      >
        <LegalBody document={privacyPolicy} />
      </Section>
    </>
  );
}
