import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PRICE_IDS, type PlanKey, type BillingCycle } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const { plan, billing, email } = await req.json();

    const planKey = plan as PlanKey;
    const billingCycle = billing as BillingCycle;

    if (!PRICE_IDS[planKey] || !PRICE_IDS[planKey][billingCycle]) {
      return NextResponse.json({ error: 'Invalid plan or billing cycle' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: PRICE_IDS[planKey][billingCycle], quantity: 1 }],
      ...(email && { customer_email: email }),
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      subscription_data: { trial_period_days: 7 },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
