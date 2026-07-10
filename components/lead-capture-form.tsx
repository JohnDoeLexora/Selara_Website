'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { leadMagnet } from '@/lib/site-data';
import { trackEvent } from '@/lib/tracking';

type FormData = {
  email: string;
  firstName?: string;
};

const STORAGE_KEY = 'selara-guide-unlocked';

export function LeadCaptureForm({
  onSuccess,
  submitted: submittedProp,
}: {
  onSuccess?: () => void;
  submitted?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    if (submittedProp !== undefined) {
      setSubmitted(submittedProp);
      return;
    }
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setSubmitted(true);
    }
  }, [submittedProp]);

  const isSubmitted = submittedProp ?? submitted;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setServerError('');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setServerError(payload.error ?? 'Something went wrong. Please try again.');
        trackEvent('lead_form_error', { status: response.status });
        return;
      }
      localStorage.setItem(STORAGE_KEY, 'true');
      setSubmitted(true);
      trackEvent('lead_form_success', { source: 'guide' });
      onSuccess?.();
    } catch {
      setServerError('Network error. Check your connection and try again.');
      trackEvent('lead_form_error', { status: 'network' });
    }
  }

  if (isSubmitted) {
    return (
      <div className="leadCaptureSuccess" role="status">
        <p className="eyebrow">{leadMagnet.successTitle}</p>
        <p>{leadMagnet.successIntro}</p>
      </div>
    );
  }

  return (
    <form className="leadCaptureForm" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="leadCaptureField">
        <label htmlFor="lead-first-name">First name (optional)</label>
        <input
          id="lead-first-name"
          type="text"
          autoComplete="given-name"
          {...register('firstName')}
        />
      </div>
      <div className="leadCaptureField">
        <label htmlFor="lead-email">Email</label>
        <input
          id="lead-email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'lead-email-error' : undefined}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
            setValueAs: (value: string) => value.trim(),
          })}
        />
        {errors.email ? (
          <p id="lead-email-error" className="leadCaptureError" role="alert">
            {errors.email.message}
          </p>
        ) : null}
      </div>
      {serverError ? (
        <p className="leadCaptureError" role="alert">
          {serverError}
        </p>
      ) : null}
      <button type="submit" className="primaryButton" disabled={isSubmitting} data-cta="lead-guide-submit">
        {isSubmitting ? 'Sending…' : 'Unlock the guide'}
      </button>
      <p className="leadCaptureFinePrint">
        By submitting, you agree to receive the guide and occasional Selara updates.{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </form>
  );
}

export function isGuideUnlocked(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export { STORAGE_KEY as GUIDE_UNLOCK_STORAGE_KEY };
