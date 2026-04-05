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
        intro="How SelarAI collects, uses, and protects information when you use Selara."
      />
      <Section eyebrow="Legal" title="Privacy Policy" intro="Full text follows.">
        <LegalBody text={privacyPolicyText} />
      </Section>
    </>
  );
}
