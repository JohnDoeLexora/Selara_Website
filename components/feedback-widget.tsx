'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useId, useState } from 'react';
import { feedbackEmail } from '@/lib/site-data';

type FeedbackFormData = {
  category: 'feature' | 'bug' | 'general';
  message: string;
  email?: string;
};

const categoryLabels: Record<FeedbackFormData['category'], string> = {
  feature: 'Feature request',
  bug: 'Bug report',
  general: 'General feedback',
};

function buildFeedbackMailto(data: FeedbackFormData, pageUrl: string) {
  const subject = `[Website ${categoryLabels[data.category]}] Selara beta feedback`;
  const body = [
    `Category: ${categoryLabels[data.category]}`,
    data.email ? `From: ${data.email}` : 'From: (not provided)',
    `Page: ${pageUrl}`,
    '',
    data.message,
  ].join('\n');
  return `mailto:${feedbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function FeedbackWidget() {
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const panelId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    defaultValues: { category: 'feature' },
  });

  useEffect(() => {
    if (!expanded) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setExpanded(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [expanded]);

  function onSubmit(data: FeedbackFormData) {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    window.location.href = buildFeedbackMailto(data, pageUrl);
    setSubmitted(true);
    reset({ category: 'feature', message: '', email: '' });
  }

  function handleToggle() {
    setExpanded((prev) => !prev);
    setSubmitted(false);
  }

  return (
    <div className={`feedbackWidget ${expanded ? 'feedbackWidgetExpanded' : ''}`}>
      {expanded ? (
        <div className="feedbackWidgetPanel contentCard" id={panelId} role="dialog" aria-label="Send feedback">
          <div className="feedbackWidgetHeader">
            <p className="eyebrow">Beta feedback</p>
            <button type="button" className="feedbackWidgetClose" onClick={handleToggle} aria-label="Close feedback">
              ×
            </button>
          </div>
          {submitted ? (
            <div className="feedbackWidgetSuccess">
              <p>
                <strong>Thank you.</strong> Your email app should open with your message addressed to{' '}
                {feedbackEmail}. Send it when you are ready — we read every note during open beta.
              </p>
              <button type="button" className="secondaryButton" onClick={() => setSubmitted(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form className="feedbackWidgetForm" onSubmit={handleSubmit(onSubmit)} noValidate>
              <label htmlFor={`${panelId}-category`}>Category</label>
              <select id={`${panelId}-category`} {...register('category', { required: true })}>
                <option value="feature">Request a feature</option>
                <option value="bug">Report a bug</option>
                <option value="general">General feedback</option>
              </select>

              <label htmlFor={`${panelId}-message`}>Message</label>
              <textarea
                id={`${panelId}-message`}
                rows={4}
                placeholder="What would make Selara indispensable in your week?"
                {...register('message', {
                  required: 'Please enter a message.',
                  validate: (value) => {
                    const trimmed = value.trim();
                    if (trimmed.length < 10) return 'At least 10 characters.';
                    if (trimmed.length > 2000) return 'Maximum 2000 characters.';
                    return true;
                  },
                  setValueAs: (value) => value.trim(),
                })}
              />
              {errors.message ? <p className="formError">{errors.message.message}</p> : null}

              <label htmlFor={`${panelId}-email`}>
                Email <span className="formOptional">(optional)</span>
              </label>
              <input
                id={`${panelId}-email`}
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                {...register('email')}
              />

              <p className="feedbackWidgetHint">Opens your email app to send to {feedbackEmail}.</p>

              <button type="submit" className="primaryButton">
                Send feedback
              </button>
            </form>
          )}
        </div>
      ) : null}

      <button
        type="button"
        className="feedbackWidgetTrigger"
        onClick={handleToggle}
        aria-expanded={expanded}
        aria-controls={expanded ? panelId : undefined}
      >
        Feedback
      </button>
    </div>
  );
}
