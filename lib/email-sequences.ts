import { supportEmail } from '@/lib/site-data';

export type EmailAudience = 'beta-welcome' | 'beta-nurture' | 'guide-bridge';

export type EmailMessage = {
  id: string;
  sequenceId: string;
  audience: EmailAudience;
  dayOffset: number;
  subject: string;
  preheader: string;
  body: string[];
  bullets?: string[];
  cta?: { label: string; href: string };
  inAppTieIn?: string;
  sourceRefs?: string[];
  espTags: string[];
};

export const emailSequencesIntro = {
  eyebrow: 'Beta email sequences',
  title: 'Welcome and nurture copy for open beta users.',
  intro:
    'Canonical email content for the beta welcome series and engaged-user nurture flows. Import into your ESP; triggers and webhook wiring live in docs/email-sequence-process.md.',
};

const betaWelcomeEmails: EmailMessage[] = [
  {
    id: 'beta-welcome-01',
    sequenceId: 'beta-welcome',
    audience: 'beta-welcome',
    dayOffset: 0,
    subject: 'Welcome to the Selara open beta',
    preheader: 'Install on your iPhone, connect calendar and mail, and you are ready.',
    body: [
      'You are in. Thank you for joining the Selara open beta.',
      'Selara is an approval-first assistant for professionals. It shows you the plan before anything touches your calendar, inbox, or reputation.',
      'Start on the Download page. Tap the beta link, follow Apple’s prompts, and install Selara on your iPhone. Sign in with the account you plan to use for calendar and mail.',
      'After install, open Settings and connect calendar and mail when you are ready. Nothing external runs until you approve a plan.',
    ],
    bullets: [
      'Real calendar help from day one — not another chat that just adds to your to-do list',
      'Say what you need out loud and get back a plan you can actually approve or change',
      'A bespoke assistant that learns how you work — so you stop explaining the same things over and over',
      'Anything important waits for you to look at it first — no surprises that ruin your week',
      'A calm app that does not make you feel like you are managing yet another piece of software',
    ],
    cta: { label: 'Download Selara', href: '/download' },
    inAppTieIn: 'Open Settings to connect your calendar and mail when you are ready.',
    sourceRefs: ['help/install-open-beta', 'site-data/downloadBenefits'],
    espTags: ['beta-user', 'open-beta'],
  },
  {
    id: 'beta-welcome-02',
    sequenceId: 'beta-welcome',
    audience: 'beta-welcome',
    dayOffset: 2,
    subject: 'Run your first approval',
    preheader: 'Start small. Read the plan. Nothing runs until you say so.',
    body: [
      'You have had a couple of days with Selara. The best next step is a small first approval.',
      'Ask for something low-stakes — “What does my afternoon look like?” or “Draft a short follow-up I can review.” Selara responds with a visible plan, not immediate action.',
      'Read each step: what would change, which tools are involved, and what would be sent or scheduled. Edit anything that looks wrong before you approve.',
      'If you reject, nothing runs. That is normal. Rejection is how you train Selara to your standards without damage.',
    ],
    bullets: [
      'Tell it what you need — just say it in normal words',
      'See the plan first — clear steps before anything happens',
      'Approve before it acts — yes, change it, or stop it',
      'Get your time back — without babysitting every move',
    ],
    cta: { label: 'Read the first-approval guide', href: '/help/first-approval' },
    inAppTieIn: 'Try a low-stakes request in chat and review the plan before you approve.',
    sourceRefs: ['help/first-approval', 'site-data/storyMoments'],
    espTags: ['beta-user', 'open-beta'],
  },
  {
    id: 'beta-welcome-03',
    sequenceId: 'beta-welcome',
    audience: 'beta-welcome',
    dayOffset: 5,
    subject: 'Your calendar, with a plan first',
    preheader: 'See every move before anything hits your schedule.',
    body: [
      'By now you have seen how Selara works. Calendar intelligence is where it earns trust.',
      'When Selara wants to move something that affects travel or other people, you see exactly what changes before it does it. No surprise shuffles. No finding out from someone else’s assistant.',
      'Focus blocks stay protected unless you explicitly approve a change. When something tries to intrude, you see the tradeoff — what moves, who is affected, and what alternatives exist.',
      'Approve only the moves you would have accepted yourself, with full visibility.',
    ],
    cta: { label: 'Explore calendar intelligence', href: '/calendar-assistant' },
    inAppTieIn: 'Ask Selara to review your week or draft a reschedule plan — then approve what looks right.',
    sourceRefs: ['site-data/deepPageMoments.calendar', 'help/protect-focus-blocks'],
    espTags: ['beta-user', 'open-beta'],
  },
  {
    id: 'beta-welcome-04',
    sequenceId: 'beta-welcome',
    audience: 'beta-welcome',
    dayOffset: 9,
    subject: 'Voice on the go. Email that waits for you.',
    preheader: 'Talk normally, see the plan, approve before it runs.',
    body: [
      'Selara is built for the moments between meetings — and for the inbox work that usually lives in your head.',
      'Tap the microphone and talk the way you would to a trusted assistant. Selara transcribes, structures a plan, and waits. Review the written plan before approving. If something was misheard, fix it in the plan instead of cleaning up after the fact.',
      'On email, routine messages can move fast. When something would affect a client or something sensitive, you see the draft first and decide. Nothing important sends under your name without your approval.',
      'Voice works best for capture on the go. Heavy calendar weeks still benefit from reading the full plan on screen.',
    ],
    cta: { label: 'See how voice works', href: '/voice-assistant' },
    inAppTieIn: 'Use voice to capture a request between meetings, then review and approve the plan on screen.',
    sourceRefs: [
      'site-data/deepPageMoments.voice',
      'site-data/deepPageMoments.email',
      'help/using-voice',
      'insights/voice-as-input-approval-as-action',
    ],
    espTags: ['beta-user', 'open-beta'],
  },
  {
    id: 'beta-welcome-05',
    sequenceId: 'beta-welcome',
    audience: 'beta-welcome',
    dayOffset: 14,
    subject: 'How others are using Selara — and we want your take',
    preheader: 'Real stories from the beta. Tell us what is working.',
    body: [
      'You have been in the beta for two weeks. We hope Selara is starting to feel calm, visible, and trustworthy.',
      'Other professionals are already seeing results. A litigation partner stopped finding out about moved depos from someone else’s assistant. A clinical leader kept protected clinic blocks through a month of reactive scheduling. A COO described Selara as luxury software — calm, visible, and actually trustworthy.',
      'Read the full stories on our site. They are anonymized early beta examples — problem, how Selara helped, and what changed.',
      `Your feedback shapes what we build next. Reply to this email or write to ${supportEmail} with subject “Beta feedback.” Tell us what is working, what is confusing, and what would make Selara indispensable in your week.`,
    ],
    cta: { label: 'Read success stories', href: '/stories' },
    inAppTieIn: 'If Selara saved you time this week, note the moment — we would love to hear it.',
    sourceRefs: ['lib/case-studies', 'site-data/testimonials', 'stories/STORY_COLLECTION.md'],
    espTags: ['beta-user', 'open-beta'],
  },
];

const betaNurtureEmails: EmailMessage[] = [
  // dayOffset is relative to signedUpAt (beta-signup webhook). Require tag beta-engaged before send.
  {
    id: 'beta-nurture-01',
    sequenceId: 'beta-nurture',
    audience: 'beta-nurture',
    dayOffset: 21,
    subject: 'Know someone whose calendar runs their week?',
    preheader: 'Invite a colleague from Settings → Invite. You both get extended beta access.',
    body: [
      'By now Selara probably knows your rhythm — focus blocks, how you like drafts handled, what waits for your approval. The beta gets better when someone you trust is on it too.',
      'Know someone whose week looks like yours? A colleague, partner, or friend who would benefit from calm, approval-first help — not a blast to everyone.',
      'Open Settings → Invite in the app. Your personal link is ready to share. When they join through it, you both receive extended beta access. No codes to chase, no awkward follow-ups.',
    ],
    bullets: [
      'Extended beta access for you and your invitee',
      'Help someone you respect try software that shows its work',
      'One thoughtful invite at a time',
    ],
    cta: { label: 'Learn about invites', href: '/invite' },
    inAppTieIn: 'Settings → Invite',
    sourceRefs: ['site-data/referralProgram', '/invite'],
    espTags: ['beta-engaged', 'beta-nurture'],
  },
  {
    id: 'beta-nurture-02',
    sequenceId: 'beta-nurture',
    audience: 'beta-nurture',
    dayOffset: 30,
    subject: 'Calm software is not fewer features',
    preheader: 'Premium means less noise. The open beta is free — and your setup comes with you.',
    body: [
      'Luxury in software is often misunderstood as visual polish alone. What actually matters is whether the product respects your attention — or demands more of it.',
      'Calm software reduces decisions per minute. It presents a plan, waits for your judgment, and gets out of the way. For weeks that are already cognitively expensive, that restraint is capacity preservation — not aesthetic preference.',
      'The open beta is free and gives you everything. When you want to keep going, pick a plan. Everything you have set up comes with you.',
      'You receive occasional updates like this because you are in the open beta. Unsubscribe anytime using the link in this email.',
    ],
    cta: { label: 'See pricing', href: '/pricing' },
    sourceRefs: ['insights/luxury-of-calm-software', 'site-data/pricingBetaUpgradeCopy', '/pricing'],
    espTags: ['beta-engaged', 'beta-nurture'],
  },
  {
    id: 'beta-nurture-03',
    sequenceId: 'beta-nurture',
    audience: 'beta-nurture',
    dayOffset: 45,
    subject: 'Delegate the chain — and memory you can show someone',
    preheader: 'Real weeks span calendar, mail, and chat. Good memory is explicit, not mysterious.',
    body: [
      'Most assistants handle one task at a time. Real weeks do not work that way. Calendar, mail, docs, and team chat are one chain — and a personal assistant worth trusting carries context across all of it, then shows you one coherent plan.',
      'Memory is where many tools feel magical — and where trust breaks fastest. Useful memory looks like a briefing book: who matters, how you like meetings structured, what never runs without review. It should be inspectable, editable, and deletable without a support ticket.',
      'Selara ties both ideas together: delegation across the chain, memory you would be proud to explain on a slow Tuesday afternoon. The glossary on our site defines the terms we use on purpose — approval-first, calendar intelligence, visible intent — so you know what we mean before you trust us with your week.',
    ],
    bullets: [
      'Delegate the chain, not just the task — one plan across tools',
      'Build memory from explicit preferences and people, not mystery context',
      'See how context shapes what you approve, not what hides behind the scenes',
    ],
    cta: { label: 'How Selara thinks', href: '/how-selara-thinks' },
    sourceRefs: ['site-data/leadMagnet.section-3', 'site-data/leadMagnet.section-5', '/how-selara-thinks'],
    espTags: ['beta-engaged', 'beta-nurture'],
  },
  {
    id: 'beta-nurture-04',
    sequenceId: 'beta-nurture',
    audience: 'beta-nurture',
    dayOffset: 60,
    subject: 'This month from Insights',
    preheader: 'Short essays on approval-first AI, calendar intelligence, and calm professional judgment.',
    body: [
      'We publish short essays for professionals who need control — not another dashboard. Here is what is on Insights right now.',
      'Each piece stands alone. Read one over coffee, or save the rest for later.',
      'You receive occasional updates like this because you are in the open beta. Unsubscribe anytime using the link in this email.',
    ],
    bullets: [
      'Why Approval-First AI Matters for High-Stakes Professionals — when your calendar and inbox touch clients or boards, silent automation is a liability.',
      'How Calendar Intelligence Saves Hours Without the Chaos — defend focus and explain tradeoffs, not just find open slots.',
      'The Luxury of Calm Software — premium means less noise, not more features.',
      'Building Memory That Actually Works — explicit preferences and people, not mystery context.',
      'Voice as Input, Approval as Action — talk between meetings; review on screen.',
      'Delegation Without Anxiety — a practical framework for delegating without the dread of silent mistakes.',
    ],
    cta: { label: 'Read Insights', href: '/insights' },
    sourceRefs: [
      'insights/why-approval-first-ai-matters',
      'insights/calendar-intelligence-without-chaos',
      'insights/luxury-of-calm-software',
      'insights/building-memory-that-works',
      'insights/voice-as-input-approval-as-action',
      'insights/delegation-without-anxiety',
      '/insights',
    ],
    espTags: ['beta-engaged', 'beta-nurture'],
  },
];

export const emailMessages: EmailMessage[] = [...betaWelcomeEmails, ...betaNurtureEmails];

export function getWelcomeSequence(): EmailMessage[] {
  return betaWelcomeEmails;
}

export function getNurtureSequence(): EmailMessage[] {
  return betaNurtureEmails;
}

export function getEmailById(id: string): EmailMessage | undefined {
  return emailMessages.find((message) => message.id === id);
}

export function getEmailsBySequence(sequenceId: string): EmailMessage[] {
  return emailMessages.filter((message) => message.sequenceId === sequenceId);
}
