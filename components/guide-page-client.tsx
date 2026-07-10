'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LeadCaptureForm, GUIDE_UNLOCK_STORAGE_KEY } from '@/components/lead-capture-form';
import { PrintSaveButton } from '@/components/print-save-button';
import { leadMagnet } from '@/lib/site-data';

function readGuideUnlocked() {
  return localStorage.getItem(GUIDE_UNLOCK_STORAGE_KEY) === 'true';
}

export function GuidePageClient() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setUnlocked(readGuideUnlocked()));
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    const target = document.getElementById('guide-content');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [unlocked]);

  return (
    <>
      <div className="guideFormLayout">
        <div className="contentCard contentCardPremium">
          <p className="pageHeroIntro">{leadMagnet.formIntro}</p>
          <LeadCaptureForm submitted={unlocked} onSuccess={() => setUnlocked(true)} />
        </div>
      </div>

      {unlocked ? (
        <article className="guideArticle" id="guide-content">
          <div className="chipGrid guideArticleActions">
            <PrintSaveButton />
            <Link href="/download" className="secondaryButton" data-cta="guide-download">
              Try Selara in open beta
            </Link>
          </div>
          {leadMagnet.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.bullets ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      ) : null}
    </>
  );
}
