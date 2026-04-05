import { LegalBody, PageHero, Section } from '@/components/sections';
import { termsOfServiceText } from '@/lib/legal';
import { createMetadata } from '@/lib/site-data';

export const metadata = createMetadata('Terms of Service | Selara', 'Read the SelarAI Terms of Service.', '/terms');

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of service"
        title="SelarAI Terms of Service"
        intro="The agreement that governs your use of Selara and related services."
      />
      <Section eyebrow="Legal" title="Terms of Service" intro="Full text follows.">
        <LegalBody text={termsOfServiceText} />
      </Section>
    </>
  );
}
