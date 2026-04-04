import type { Metadata } from 'next';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://selara.app';
export const betaUrl = process.env.NEXT_PUBLIC_BETA_URL || '#beta-link-coming-soon';
export const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@selaraillc.com';
export const socialLinks = {
  x: process.env.NEXT_PUBLIC_X_URL || 'https://x.com/selaraapp',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/selaraapp',
};

export const navigation = [
  { href: '/features', label: 'Features' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/vs-openclaw', label: 'Vs OpenClaw' },
  { href: '/download', label: 'Download Beta' },
];

export const proofPoints = [
  'Approval-first actions',
  'Voice, documents, and automations',
  'Calendar-aware by design',
  '800+ integrations and counting',
];

export const heroSignals = [
  'Open beta',
  'iOS-first',
  'Premium assistant',
  'Trustworthy automation',
];

export const editorialStats = [
  { value: '800+', label: 'connected tools and services' },
  { value: '4', label: 'core trust layers before action' },
  { value: '1', label: 'assistant across calendar, voice, docs, and memory' },
];

export const storyMoments = [
  {
    title: 'Say it naturally',
    body: 'Talk like you already have a chief of staff. Selara understands requests in plain language instead of forcing command syntax.',
  },
  {
    title: 'See the plan',
    body: 'The assistant turns intent into a visible sequence so nothing consequential disappears behind a magic trick.',
  },
  {
    title: 'Approve what matters',
    body: 'Selara stops at the moments with real stakes and gives you a clean, premium approval layer.',
  },
  {
    title: 'Get your time back',
    body: 'The result is not just AI output. It is cleaner weeks, fewer dropped follow-ups, and less admin residue.',
  },
];

export const featureHighlights = [
  {
    title: 'Calendar intelligence with taste',
    body: 'Move meetings, protect focus blocks, draft reschedules, and help your week look intentional again.',
    href: '/calendar-assistant',
  },
  {
    title: 'Voice that feels like delegation',
    body: 'Capture intent in motion and let Selara translate spoken requests into plans you can actually review.',
    href: '/voice-assistant',
  },
  {
    title: 'Memory and document context',
    body: 'Selara compounds over time, carrying preferences, files, conversations, and recurring patterns forward.',
    href: '/features',
  },
  {
    title: 'Connected automations, still supervised',
    body: 'Plug into the stack you already use and automate the repetitive parts without losing oversight.',
    href: '/ai-automations',
  },
  {
    title: 'Privacy as product behavior',
    body: 'The trust model is visible in the experience: approvals, transparency, and boundaries you can actually feel.',
    href: '/privacy-first-ai-assistant',
  },
  {
    title: 'Desirable, not just useful',
    body: 'Selara is designed to feel luxurious, calm, and serious enough for people whose time is genuinely expensive.',
    href: '/about',
  },
];

export const integrationItems = [
  'Google Calendar',
  'Gmail',
  'Google Docs',
  'Google Drive',
  'Slack',
  'Notion',
  'Linear',
  'Apple Calendar',
  'Reminders',
  'Maps',
  'Contacts',
  '800+ more',
];

export const productScenes = [
  {
    kicker: 'Scene 01',
    title: 'Navigation that keeps every surface one gesture away',
    copy: 'The live sidebar makes chat, conversations, documents, schedule, and settings feel organized instead of buried.',
  },
  {
    kicker: 'Scene 02',
    title: 'Settings built like a premium control room',
    copy: 'Profile completion, appearance, subscription, and voice controls all live in a single view that feels calm and considered.',
  },
  {
    kicker: 'Scene 03',
    title: 'Subscription management that feels clear, not transactional',
    copy: 'Plan status, billing details, and next actions stay visible without dropping the product into generic checkout styling.',
  },
];

export const comparisonRows = [
  {
    label: 'Operating philosophy',
    selara: 'Deliberate, approval-first, premium',
    claw: 'Faster to act, less careful about how it feels',
  },
  {
    label: 'Risk posture',
    selara: 'Visible intent before external action',
    claw: 'More black-box, less composed',
  },
  {
    label: 'Product taste',
    selara: 'Luxury editorial direction and calm control',
    claw: 'Utility-forward, lower-polish energy',
  },
  {
    label: 'Why it wins',
    selara: 'Makes powerful automation feel trustworthy',
    claw: 'Makes automation feel powerful first',
  },
];

export const pricingPlans = [
  {
    name: 'Select',
    description: 'Intelligent AI agents across all contexts. 800+ integrations, voice interaction, persistent memory, and large usage limits.',
    monthlyPrice: '$25',
    yearlyPrice: '$250',
    monthlyEquivalent: '$20/mo effective when billed yearly',
    monthlyPriceId: 'price_1TGSw2B8XzjWWlS6g5aQ7kv8',
    yearlyPriceId: 'price_1TGSwBB8XzjWWlS6DoL7Y8O3',
    productId: 'prod_UEwoOAUuDFlWqN',
    cta: 'Choose Select',
    href: process.env.NEXT_PUBLIC_STRIPE_SELECT_URL || '/download',
    features: ['Voice interaction', 'Persistent memory', 'Large usage limits', '800+ integrations', 'AI agents across contexts'],
  },
  {
    name: 'Premium',
    description: 'All models, all integrations. Intelligent voice synthesis & transcription, expanded memory & higher rate caps, holistic life management features, and SpouseConnect — shared assistant with your partner.',
    monthlyPrice: '$45',
    yearlyPrice: '$450',
    monthlyEquivalent: '$37.50/mo effective when billed yearly',
    monthlyPriceId: 'price_1TGSwCB8XzjWWlS6p8yyr3Lf',
    yearlyPriceId: 'price_1TGSwEB8XzjWWlS6TOWSFOI0',
    productId: 'prod_UEwo7Z3Ov3lPPf',
    cta: 'Choose Premium',
    href: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_URL || '/download',
    featured: true,
    features: ['All models', 'All integrations', 'Voice synthesis & transcription', 'Expanded memory', 'Higher rate caps'],
  },
  {
    name: 'Pinnacle',
    description: "Force Multiplier — link to a team member's account. Premium voice, no rate or memory limits, most powerful models only, early access to new features, and FamilyConnect — your entire household.",
    monthlyPrice: '$110',
    yearlyPrice: '$1,100',
    monthlyEquivalent: '$91.67/mo effective when billed yearly',
    monthlyPriceId: 'price_1TGSwFB8XzjWWlS6G3S1ImhP',
    yearlyPriceId: 'price_1TGSwGB8XzjWWlS6nMZfZKbW',
    productId: 'prod_UEwoZXUH3Nm5Kc',
    cta: 'Choose Pinnacle',
    href: process.env.NEXT_PUBLIC_STRIPE_PINNACLE_URL || '/download',
    features: ['Premium voice', 'No rate limits', 'No memory limits', 'Most powerful models only', 'Early access to new features'],
  },
];

export const faqs = [
  {
    q: 'What exactly makes Selara feel different?',
    a: 'The big difference is behavioral. Selara is not just generative AI in a luxury wrapper. It is designed to understand context, present intent clearly, and stop for approval before consequential actions.',
  },
  {
    q: 'Are the pricing tiers on this page real?',
    a: 'Yes. The current pricing content is mapped to the existing live Stripe product catalog and recurring price IDs already in your Stripe account.',
  },
  {
    q: 'Why does the site use concept stages instead of app screenshots right now?',
    a: 'You asked to avoid the prior screenshots. The site now uses polished motion-driven product theater that can accept newly uploaded assets without another layout rewrite.',
  },
  {
    q: 'Can checkout links be connected later without rebuilding pricing?',
    a: 'Yes. The pricing cards already point through stable config fields, so payment links or billing routes can be plugged in later while keeping the same design.',
  },
];

export const seoPages = [
  { slug: '', title: 'Selara | Your Personal Assistant', description: 'Selara is the premium AI personal assistant for professionals who want their time back. Approval-first, calendar-aware, voice-native, and designed to feel luxurious.' },
  { slug: '/features', title: 'Selara Features', description: 'Explore Selara features for calendar planning, voice, memory, documents, and connected automations.' },
  { slug: '/pricing', title: 'Selara Pricing', description: 'See Selara Select, Premium, and Pinnacle pricing using the live existing Stripe product catalog.' },
  { slug: '/download', title: 'Download Selara Beta', description: 'Download Selara beta and start using your premium AI personal assistant.' },
  { slug: '/calendar-assistant', title: 'AI Calendar Assistant', description: 'Selara is an AI calendar assistant for professionals who want to reclaim time and schedule with more intention.' },
  { slug: '/email-assistant', title: 'AI Email Assistant', description: 'Use Selara as an AI email assistant for follow-ups, triage, and drafted communication with control.' },
  { slug: '/voice-assistant', title: 'Voice AI Personal Assistant', description: 'Selara is a voice-first AI personal assistant built for natural delegation.' },
  { slug: '/ai-automations', title: 'AI Automations', description: 'Selara delivers connected AI automations with better context and better control.' },
  { slug: '/privacy-first-ai-assistant', title: 'Privacy-First AI Assistant', description: 'Selara is a privacy-first AI assistant built around approval-first behavior and transparent control.' },
  { slug: '/integrations', title: 'Selara Integrations', description: 'See Selara integrations and the 800+ connected tools that extend your assistant.' },
  { slug: '/vs-openclaw', title: 'Selara vs OpenClaw', description: 'Compare Selara and OpenClaw across trust, control, and premium assistant product design.' },
  { slug: '/about', title: 'About Selara', description: 'Learn why Selara is building a premium personal assistant instead of just another chatbot.' },
  { slug: '/privacy', title: 'Privacy Policy | Selara', description: 'Read the SelarAI Privacy Policy.' },
  { slug: '/terms', title: 'Terms of Service | Selara', description: 'Read the SelarAI Terms of Service.' },
];

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function createMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: 'Selara',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: absoluteUrl('/images/main.png'),
          width: 1200,
          height: 630,
          alt: 'Selara assistant product preview',
        },
        { url: absoluteUrl('/images/selara-logo.png'), width: 500, height: 500, alt: 'Selara logo' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl('/images/main.png')],
    },
  };
}
