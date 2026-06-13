import Link from 'next/link';
import { CTASection, PageHero, Section } from '@/components/sections';
import {
  caseStudies,
  caseStudiesIntro,
  caseStudyCollectionProcess,
  getDayInLifeStudies,
} from '@/lib/case-studies';
import { getPageMetadata, supportEmail } from '@/lib/site-data';

export const metadata = getPageMetadata('/stories');

export default function StoriesPage() {
  const mailto = `mailto:${supportEmail}?subject=${encodeURIComponent(caseStudyCollectionProcess.mailtoSubject)}`;
  const dayInLifeStudies = getDayInLifeStudies();

  return (
    <>
      <PageHero
        eyebrow={caseStudiesIntro.eyebrow}
        title={caseStudiesIntro.title}
        intro={caseStudiesIntro.intro}
      />

      <Section
        eyebrow="Day in the life"
        title="See yourself in the story"
        intro="Narrative timelines from anonymized beta weeks — morning to evening, with Selara showing the plan before anything runs."
      >
        <div className="storyGrid storyGridExpanded">
          {dayInLifeStudies.map((study) => (
            <article key={study.slug} className="contentCard contentCardPremium">
              <p className="eyebrow">{study.industry} · Day in the life</p>
              <h3>{study.persona}</h3>
              <p>{study.problem.slice(0, 160)}…</p>
              {study.timeSaved ? <p className="caseStudyCardMeta">{study.timeSaved}</p> : null}
              <Link href={`/stories/${study.slug}`} className="secondaryButton">
                Read the day
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section
        className="sectionAlt"
        eyebrow="All stories"
        title="Problem, plan, results"
        intro="Every story ends with what changed — and a quote from someone who lived it."
      >
        <div className="storyGrid storyGridExpanded">
          {caseStudies.map((study) => (
            <article key={study.slug} className="contentCard contentCardPremium">
              <p className="eyebrow">{study.industry}</p>
              <h3>{study.persona}</h3>
              <p>{study.problem.slice(0, 160)}…</p>
              {study.timeSaved ? <p className="caseStudyCardMeta">{study.timeSaved}</p> : null}
              <Link href={`/stories/${study.slug}`} className="secondaryButton">
                Read story
              </Link>
            </article>
          ))}
        </div>

        <details className="shareStoryPanel contentCard contentCardPremium">
          <summary>{caseStudyCollectionProcess.title}</summary>
          <p>{caseStudyCollectionProcess.intro}</p>
          <p className="eyebrow">Interview questions we may ask</p>
          <ol className="shareStoryQuestions">
            {caseStudyCollectionProcess.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
          <a href={mailto} className="primaryButton">
            Share your story
          </a>
        </details>
      </Section>

      <CTASection />
    </>
  );
}
