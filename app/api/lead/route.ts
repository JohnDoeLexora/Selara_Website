import { NextResponse } from 'next/server';
import { reportClientError } from '@/lib/monitoring';

type LeadPayload = {
  email?: string;
  firstName?: string;
};

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase() ?? '';
  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }

  const webhook = process.env.LEAD_MAGNET_WEBHOOK_URL?.trim();
  if (!webhook) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[lead] LEAD_MAGNET_WEBHOOK_URL unset — guide unlocked without forwarding email.');
    }
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        email,
        firstName: body.firstName?.trim() || undefined,
        source: 'approval-first-guide',
        tags: ['lead-magnet', 'guide'],
      }),
    });

    if (!response.ok) {
      reportClientError(`Lead webhook failed: ${response.status}`, { email: '[redacted]' });
      return NextResponse.json({ error: 'Could not save your email. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    reportClientError(error, { source: 'lead-api' });
    return NextResponse.json({ error: 'Could not save your email. Please try again.' }, { status: 502 });
  }
}
