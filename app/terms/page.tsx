import { LegalBody, LegalLinkRow, PageHero, Section } from '@/components/sections';
import { termsOfService } from '@/lib/legal';
import { getPageMetadata } from '@/lib/site-data';

export const metadata = getPageMetadata('/terms');

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of service"
        title="SelarAI Terms of Service"
        intro="These terms govern your use of Selara. The summary here is for orientation — the binding agreement is the full text below."
      />
      <div className="shell legalPageNavWrap">
        <LegalLinkRow current="terms" />
      </div>
      <Section
        eyebrow="Legal"
        title="Full terms of service"
        intro="The complete agreement follows. Use the section links to navigate."
      >
        <LegalBody document={termsOfService} />
      </Section>
    </>
  );
}
