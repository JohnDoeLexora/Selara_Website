import { LegalBody, PageHero, Section } from '@/components/sections';
import { privacyPolicyText } from '@/lib/legal';
import { createMetadata } from '@/lib/site-data';

export const metadata = createMetadata('Privacy Policy | Selara', 'Read the SelarAI Privacy Policy.', '/privacy');

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title="SelarAI Privacy Policy"
        intro="Rendered verbatim from the exact text you supplied."
      />
      <Section eyebrow="Legal" title="Privacy Policy" intro="Exact copy below.">
        <LegalBody text={privacyPolicyText} />
      </Section>
    </>
  );
}
