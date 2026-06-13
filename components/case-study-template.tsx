import Link from 'next/link';
import { DownloadSelaraCta } from '@/components/download-cta';
import type { CaseStudy } from '@/lib/case-studies';

export function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  const isDayInLife = study.format === 'day-in-the-life' && study.timeline && study.timeline.length > 0;

  return (
    <article className="caseStudyArticle">
      <header className="caseStudyHeader">
        <p className="eyebrow">{study.industry}</p>
        <h1>{study.persona}</h1>
        {study.format === 'day-in-the-life' ? <p className="caseStudyFormatLabel">Day in the life</p> : null}
        {study.anonymized ? <p className="caseStudyAnonymized">Anonymized beta example</p> : null}
        {study.timeSaved ? <p className="caseStudyTimeSaved">{study.timeSaved}</p> : null}
      </header>

      <section className="caseStudySection" aria-labelledby="case-problem">
        <h2 id="case-problem">Problem</h2>
        <p>{study.problem}</p>
      </section>

      {isDayInLife ? (
        <section className="caseStudySection" aria-labelledby="case-timeline">
          <h2 id="case-timeline">A day with Selara</h2>
          <ol className="dayTimeline">
            {study.timeline!.map((moment) => (
              <li key={`${moment.time}-${moment.title}`} className="dayTimelineItem">
                <div className="dayTimelineMarker" aria-hidden />
                <div className="dayTimelineContent">
                  <p className="dayTimelineTime">{moment.time}</p>
                  <h3>{moment.title}</h3>
                  <p>{moment.narrative}</p>
                  {moment.selaraAction ? (
                    <div className="dayTimelineSelara contentCard">
                      <p className="eyebrow">Selara</p>
                      <p>{moment.selaraAction}</p>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className="caseStudySection" aria-labelledby="case-solution">
        <h2 id="case-solution">How Selara helped</h2>
        <p>{study.solution}</p>
      </section>

      <section className="caseStudySection" aria-labelledby="case-results">
        <h2 id="case-results">Results</h2>
        <ul className="caseStudyResults">
          {study.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </section>

      <blockquote className="testimonialCard caseStudyQuote">
        <p className="testimonialQuote">&ldquo;{study.quote}&rdquo;</p>
        <footer className="testimonialMeta">
          <cite className="testimonialRole">{study.persona}</cite>
          <span className="testimonialContext">{study.industry}</span>
        </footer>
      </blockquote>

      <div className="ctaPanel ctaPanelExpanded caseStudyCta">
        <div>
          <p className="eyebrow">Try Selara</p>
          <h3>See the plan before anything runs.</h3>
          <p>Open beta on iOS — calendar intelligence, voice, and approval-first control.</p>
        </div>
        <div className="chipGrid">
          <DownloadSelaraCta className="primaryButton" />
          <Link href="/stories" className="secondaryButton">
            More stories
          </Link>
        </div>
      </div>
    </article>
  );
}
