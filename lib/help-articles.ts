export type HelpCategoryId =
  | 'getting-started'
  | 'voice'
  | 'calendar'
  | 'approvals'
  | 'billing'
  | 'troubleshooting';

export type HelpCategory = {
  id: HelpCategoryId;
  label: string;
  description: string;
};

export type HelpArticle = {
  slug: string;
  title: string;
  category: HelpCategoryId;
  summary: string;
  body: string[];
  relatedLinks?: { href: string; label: string }[];
};

export const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting started',
    description: 'Install the beta, connect tools, and run your first approval.',
  },
  {
    id: 'voice',
    label: 'Voice',
    description: 'Talk normally and review plans before anything runs.',
  },
  {
    id: 'calendar',
    label: 'Calendar',
    description: 'Protect focus time and approve schedule changes.',
  },
  {
    id: 'approvals',
    label: 'Approvals',
    description: 'What happens when you approve, edit, or reject a plan.',
  },
  {
    id: 'billing',
    label: 'Billing',
    description: 'Plans, upgrades, and what changes when you go paid.',
  },
  {
    id: 'troubleshooting',
    label: 'Troubleshooting',
    description: 'Connection issues and when to reach support.',
  },
];

export const helpArticles: HelpArticle[] = [
  {
    slug: 'install-open-beta',
    title: 'Install the open beta on iOS',
    category: 'getting-started',
    summary: 'Get Selara from the live open beta link and sign in on your iPhone.',
    body: [
      'Visit the Download page and tap the beta link. You land in TestFlight or the public beta flow — follow Apple’s prompts to install Selara on your iPhone.',
      'Sign in with the account you plan to use for calendar and mail connections. Your preferences and memory stay tied to that account as you upgrade later.',
      'After install, open Settings to connect calendar and mail when you are ready. Nothing external runs until you approve a plan.',
    ],
    relatedLinks: [
      { href: '/download', label: 'Download Selara' },
      { href: '/pricing', label: 'View pricing' },
    ],
  },
  {
    slug: 'first-approval',
    title: 'Run your first approval',
    category: 'getting-started',
    summary: 'Ask Selara for something small, read the plan, and approve or reject.',
    body: [
      'Start with a low-stakes request — “What does my afternoon look like?” or “Draft a short follow-up I can review.” Selara responds with a visible plan, not immediate action.',
      'Read each step: what would change, which tools are involved, and what would be sent or scheduled. Edit anything that looks wrong before you approve.',
      'If you reject, nothing runs. That is normal — rejection is how you train Selara to your standards without damage.',
    ],
    relatedLinks: [
      { href: '/how-selara-thinks', label: 'How Selara thinks' },
      { href: '/privacy-first-ai-assistant', label: 'Privacy-first AI' },
    ],
  },
  {
    slug: 'using-voice',
    title: 'Using voice on the go',
    category: 'voice',
    summary: 'Speak naturally; Selara turns speech into a plan you approve.',
    body: [
      'Tap the microphone and talk the way you would to a trusted assistant — no special syntax. Selara transcribes, structures a plan, and waits.',
      'Review the written plan before approving. If something misheard, fix it in the plan instead of cleaning up after the fact.',
      'Voice works best for capture between meetings. Heavy calendar weeks still benefit from reading the full plan on screen.',
    ],
    relatedLinks: [{ href: '/voice-assistant', label: 'Voice assistant' }],
  },
  {
    slug: 'voice-accuracy',
    title: 'Improving voice accuracy',
    category: 'voice',
    summary: 'Tips when transcription misses a name or detail.',
    body: [
      'Speak names and times clearly once; Selara keeps context in the plan for you to fix before approval.',
      'If a proper noun is wrong, edit it in the plan — Selara learns your corrections in-session without sending anything prematurely.',
      'Noisy environments: pause, retry, or switch to typing for sensitive wording. Approval-first means you always get a written checkpoint.',
    ],
    relatedLinks: [{ href: '/voice-assistant', label: 'Voice assistant' }],
  },
  {
    slug: 'protect-focus-blocks',
    title: 'Protect focus blocks on your calendar',
    category: 'calendar',
    summary: 'Treat focus time as a constraint Selara must respect.',
    body: [
      'Mark focus blocks in your calendar the way you already do. Selara reads them as hard constraints unless you explicitly approve a change.',
      'When a request would intrude, Selara shows the tradeoff — what moves, who is affected, and suggested alternatives — before anything shifts.',
      'Use approval to accept only the intrusions you would have accepted yourself, with full visibility.',
    ],
    relatedLinks: [{ href: '/calendar-assistant', label: 'Calendar assistant' }],
  },
  {
    slug: 'approve-calendar-changes',
    title: 'Approve calendar changes safely',
    category: 'calendar',
    summary: 'See every move before it lands on your calendar.',
    body: [
      'Calendar plans list each event change: time, attendees, and notifications that would fire. Nothing applies until you approve.',
      'For changes involving other people, Selara includes draft messages or holds for your review when appropriate.',
      'Rejected plans leave your calendar untouched — use rejection freely when the tradeoff is not worth it.',
    ],
    relatedLinks: [{ href: '/calendar-assistant', label: 'Calendar assistant' }],
  },
  {
    slug: 'when-you-reject',
    title: 'What happens when you reject a plan',
    category: 'approvals',
    summary: 'Rejection stops execution — it is not an error.',
    body: [
      'Rejecting a plan cancels that run entirely. Your accounts, calendar, and messages stay as they were.',
      'You can edit the plan and ask Selara to try again, or rephrase your original request. Rejection is part of the workflow.',
      'Selara does not silently retry rejected actions. You stay in control of when something external happens.',
    ],
    relatedLinks: [{ href: '/privacy-first-ai-assistant', label: 'Privacy-first AI' }],
  },
  {
    slug: 'external-actions',
    title: 'External actions and guardrails',
    category: 'approvals',
    summary: 'Understand what “external” means before you approve.',
    body: [
      'External actions include sending mail, moving calendar events others depend on, or writing to connected tools like Slack or Notion.',
      'Selara labels these clearly in the plan. Low-risk read-only steps may appear without external impact — still visible in the plan.',
      'Integration guardrails mean partial failures surface in the plan before anything half-completes.',
    ],
    relatedLinks: [
      { href: '/integrations', label: 'Integrations' },
      { href: '/trust', label: 'Security & Trust' },
    ],
  },
  {
    slug: 'plans-overview',
    title: 'Plans overview: Select, Premium, Pinnacle',
    category: 'billing',
    summary: 'What each tier includes and how beta relates to paid.',
    body: [
      'The open beta includes full product capability today. When you choose paid, your setup, memory, and connections carry over.',
      'Select covers a solid personal workload. Premium adds capacity and shared access. Pinnacle is for teams or households that need headroom.',
      'Compare voice limits, memory, integrations, and models on the pricing page before you upgrade.',
    ],
    relatedLinks: [{ href: '/pricing', label: 'Pricing' }],
  },
  {
    slug: 'upgrading-your-plan',
    title: 'Upgrading or downgrading your plan',
    category: 'billing',
    summary: 'Switch tiers without starting over.',
    body: [
      'Change plans from your account when self-serve checkout is enabled. Memory, preferences, and integrations move with you.',
      'Billing adjusts on the next cycle — no lock-in and no reset of what Selara already knows about your work.',
      'For teams or custom arrangements, email support from the footer. We read every message.',
    ],
    relatedLinks: [{ href: '/pricing#faq', label: 'Pricing FAQ' }],
  },
  {
    slug: 'connection-issues',
    title: 'Fix connection issues',
    category: 'troubleshooting',
    summary: 'When calendar or mail will not connect.',
    body: [
      'Confirm you are on the latest beta build from the Download page. Older builds may lack current OAuth fixes.',
      'Revoke and reconnect the account from Settings if a connection stalls. Selara never acts on disconnected tools without a fresh plan.',
      'Check iOS permissions for calendar and mail. Selara only accesses what you explicitly connect.',
    ],
    relatedLinks: [{ href: '/integrations', label: 'Integrations' }],
  },
  {
    slug: 'contact-support',
    title: 'Contact support',
    category: 'troubleshooting',
    summary: 'When self-service is not enough.',
    body: [
      'Email support from the address in the site footer. Include what you tried to do, what the plan showed, and whether you approved or rejected.',
      'For billing or account access issues, use the same address — we route internally to the right person.',
      'Urgent calendar mistakes after approval: reject stopped future runs, but contact us if something external already completed so we can help you assess next steps.',
    ],
    relatedLinks: [{ href: '/trust', label: 'Security & Trust' }],
  },
];

export function getHelpArticle(slug: string) {
  return helpArticles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: HelpCategoryId) {
  return helpArticles.filter((article) => article.category === category);
}

export const helpHubIntro = {
  eyebrow: 'Help center',
  title: 'Answers when you need them — without the runaround.',
  intro: 'Search guides for getting started, voice, calendar, approvals, billing, and troubleshooting.',
};
