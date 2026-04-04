'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const SUBJECTS = ['General', 'Support', 'Enterprise', 'Press', 'Other'];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    setError('');
    try {
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      reset();
    } catch {
      setError('Something went wrong. Please email us directly at hello@selara.app.');
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#111118] border border-[#2A2A38] p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[#6B4FBB]/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#6B4FBB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#F8F8FF] font-semibold text-lg mb-2">Message sent</h3>
        <p className="text-[#9999AA] text-sm">We&apos;ll get back to you within 1–2 business days.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-[#8B6FDB] hover:text-[#F8F8FF] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full bg-[#1A1A24] border border-[#2A2A38] rounded-xl px-4 py-3 text-[#F8F8FF] text-sm placeholder-[#9999AA]/60 focus:outline-none focus:border-[#6B4FBB] focus:ring-1 focus:ring-[#6B4FBB]/30 transition-colors';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-[#9999AA] mb-1.5">Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs text-[#9999AA] mb-1.5">Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
            })}
            type="email"
            placeholder="you@example.com"
            className={inputClass}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs text-[#9999AA] mb-1.5">Subject</label>
        <select
          {...register('subject', { required: true })}
          className={`${inputClass} appearance-none cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            Select a topic
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-[#9999AA] mb-1.5">Message</label>
        <textarea
          {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Please provide more detail' } })}
          rows={5}
          placeholder="Tell us how we can help..."
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl bg-[#6B4FBB] hover:bg-[#8B6FDB] text-[#F8F8FF] text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
