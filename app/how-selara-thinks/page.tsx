import Link from 'next/link';
import { getPageMetadata } from '@/lib/site-data';
import { CTASection, GlossaryList, PageHero, Section } from '@/components/sections';

export const metadata = getPageMetadata('/how-selara-thinks');

export default function HowSelaraThinksPage() {
  return (
    <>
      <PageHero
        className="pageHeroGlossary"
        eyebrow="How Selara thinks"
        title="The ideas behind a calm, approval-first assistant."
        intro="Selara is built on a few clear principles. This glossary defines them in plain language — so you know what we mean before you trust us with your week."
      />

      <Section
        eyebrow="Core concepts"
        title="Words we use on purpose."
        intro="These terms show up across the site, the app, and our policies. They mean something specific."
      >
        <GlossaryList />
      </Section>

      <Section
        className="sectionAlt"
        eyebrow="Go deeper"
        title="From definitions to practice."
        intro="Understanding the philosophy is step one. Seeing it in the product is step two."
      >
        <div className="twoColumn">
          <article className="contentCard contentCardPremium">
            <h3>Security &amp; Trust</h3>
            <p>How we handle data, approvals, subprocessors, and your rights — in one place.</p>
            <Link href="/trust" className="textLink">
              Read Security &amp; Trust
            </Link>
          </article>
          <article className="contentCard contentCardPremium">
            <h3>Privacy-first AI</h3>
            <p>Why visibility before action matters for high-stakes professionals.</p>
            <Link href="/privacy-first-ai-assistant" className="textLink">
              Privacy-first AI assistant
            </Link>
          </article>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
