import Link from 'next/link';
import { getPageMetadata, trustFaqs } from '@/lib/site-data';
import { CTASection, FaqList, PageHero, Section, TrustPillarGrid } from '@/components/sections';
import { TrustStructuredData } from '@/components/trust-structured-data';

export const metadata = getPageMetadata('/trust');

export default function TrustPage() {
  return (
    <>
      <TrustStructuredData />
      <PageHero
        className="pageHeroTrust"
        eyebrow="Security & Trust"
        title="Built for professionals who cannot afford surprises."
        intro="Selara handles calendar, mail, and connected tools — so trust is not a footnote. Here is how we think about your data, your control, and your rights."
      />

      <Section
        eyebrow="Principles"
        title="Privacy by design, not privacy theater."
        intro="Approval-first is how the product works — not a marketing line. You see the plan before anything important runs."
      >
        <TrustPillarGrid />
      </Section>

      <Section
        className="sectionAlt"
        eyebrow="Compliance posture"
        title="Honest about where we are."
        intro="We never sell Personal Data. We comply with applicable U.S. laws and will update our policies as our business evolves."
      >
        <div className="twoColumn">
          <article className="contentCard contentCardPremium">
            <h3>Model training</h3>
            <p>
              SelarAI does not sell or share Your Content with third-party model providers for independent training. We
              do not retrain models on Your Content unless you expressly authorize us to do so.
            </p>
          </article>
          <article className="contentCard contentCardPremium">
            <h3>Going deeper</h3>
            <p>
              This page summarizes our practices. For legal detail, read our{' '}
              <Link href="/privacy" className="textLink">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="textLink">
                Terms of Service
              </Link>
              . Questions: privacy@selaraillc.com.
            </p>
          </article>
        </div>
        <p className="sectionInlineLink">
          <Link href="/how-selara-thinks" className="secondaryButton">
            How Selara thinks — glossary
          </Link>
        </p>
      </Section>

      <Section
        id="trust-faq"
        eyebrow="FAQ"
        title="Trust questions, answered plainly."
        intro="Short answers — with links to the full policies where it matters."
      >
        <FaqList items={trustFaqs} labelledBy="trust-faq-heading" />
      </Section>

      <CTASection />
    </>
  );
}
