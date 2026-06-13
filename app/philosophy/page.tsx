import Link from 'next/link';
import { philosophyContent, getPageMetadata } from '@/lib/site-data';
import { CTASection, PageHero, Section } from '@/components/sections';

export const metadata = getPageMetadata('/philosophy');

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow={philosophyContent.hero.eyebrow}
        title={philosophyContent.hero.title}
        intro={philosophyContent.hero.intro}
      />

      {philosophyContent.sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          className={index % 2 === 1 ? 'sectionAlt' : undefined}
          eyebrow={section.eyebrow}
          title={section.title}
        >
          <div className="philosophySectionBody">
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            {section.pullQuote ? (
              <blockquote className="philosophyPullQuote">
                <p>&ldquo;{section.pullQuote}&rdquo;</p>
              </blockquote>
            ) : null}
          </div>
        </Section>
      ))}

      <Section
        className="sectionAlt"
        eyebrow="Go deeper"
        title={philosophyContent.closingCta.title}
        intro={philosophyContent.closingCta.intro}
      >
        <div className="chipGrid">
          <Link href="/how-selara-thinks" className="secondaryButton">
            How Selara thinks
          </Link>
          <Link href="/trust" className="secondaryButton">
            Security &amp; trust
          </Link>
          <Link href="/insights/luxury-of-calm-software" className="secondaryButton">
            The luxury of calm software
          </Link>
          <Link href="/stories" className="secondaryButton">
            Day-in-the-life stories
          </Link>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
