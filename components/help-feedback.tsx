'use client';

import { useCallback, useState } from 'react';
import { supportEmail } from '@/lib/site-data';

const feedbackKey = (slug: string) => `selara-help-feedback-${slug}`;

function readStoredFeedback(slug: string): 'yes' | 'no' | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = sessionStorage.getItem(feedbackKey(slug));
    if (stored === 'yes' || stored === 'no') return stored;
  } catch {
    /* storage blocked */
  }
  return null;
}

type HelpFeedbackProps = {
  slug: string;
};

export function HelpFeedback({ slug }: HelpFeedbackProps) {
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(() => readStoredFeedback(slug));

  const submit = useCallback(
    (value: 'yes' | 'no') => {
      setFeedback(value);
      try {
        sessionStorage.setItem(feedbackKey(slug), value);
      } catch {
        /* storage blocked */
      }
    },
    [slug],
  );

  return (
    <div className="helpFeedback" role="region" aria-label="Article feedback">
      <p className="helpFeedbackPrompt" id={`help-feedback-${slug}`}>
        Was this helpful?
      </p>
      {feedback === null ? (
        <div className="chipGrid" role="group" aria-labelledby={`help-feedback-${slug}`}>
          <button type="button" className="secondaryButton" onClick={() => submit('yes')}>
            Yes
          </button>
          <button type="button" className="secondaryButton" onClick={() => submit('no')}>
            No
          </button>
        </div>
      ) : feedback === 'yes' ? (
        <p className="helpFeedbackThanks" aria-live="polite">
          Thanks — glad it helped.
        </p>
      ) : (
        <div className="helpFeedbackEscalation" aria-live="polite">
          <p>Sorry it missed the mark. Email us and we will get you sorted.</p>
          <a className="primaryButton" href={`mailto:${supportEmail}?subject=${encodeURIComponent(`Help: ${slug}`)}`}>
            Contact support
          </a>
        </div>
      )}
    </div>
  );
}
