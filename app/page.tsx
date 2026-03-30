import type { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Mic, Plug, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selara — Your AI Personal Assistant',
  description:
    'Selara is the AI personal assistant that connects to 800+ apps, remembers everything, and actually runs your life.',
};

const FEATURES = [
  {
    icon: Zap,
    title: 'Always on, always aware',
    description:
      'Selara runs in the background, keeping track of what matters — so you never have to repeat yourself.',
  },
  {
    icon: Mic,
    title: 'Voice-first',
    description:
      'Talk to Selara like a person. Advanced synthesis and transcription mean no buttons, no friction.',
  },
  {
    icon: Plug,
    title: '800+ integrations',
    description:
      'Email, calendar, messaging, smart home, commerce, travel — Selara connects to everything you use.',
  },
  {
    icon: TrendingUp,
    title: 'Scales with your life',
    description:
      'The more you use Selara, the better it understands you. Persistent memory compounds over time.',
  },
];

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Selara',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS',
  description:
    'Selara is an AI-powered personal assistant with persistent memory, voice mode, and 800+ integrations.',
  url: 'https://selara.app',
  offers: [
    { '@type': 'Offer', name: 'Select', price: '25.00', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Premium', price: '45.00', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pinnacle', price: '110.00', priceCurrency: 'USD' },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        {/* Purple radial gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(107,79,187,0.18) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2A2A38] bg-[#111118] text-[#8B6FDB] text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B4FBB] animate-pulse" />
            Invite-only beta — join the waitlist
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F8F8FF] tracking-tight mb-6 leading-[1.05]">
            Your personal AI.
            <br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #8B6FDB 0%, #6B4FBB 100%)' }}>
              Finally.
            </span>
          </h1>

          <p className="text-[#9999AA] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Selara connects every corner of your life — your apps, your schedule, your people —
            and handles it all with the intelligence to know what matters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-xl bg-[#6B4FBB] hover:bg-[#8B6FDB] text-[#F8F8FF] font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-[#6B4FBB]/25 hover:-translate-y-0.5"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-4 rounded-xl border border-[#2A2A38] hover:border-[#6B4FBB] text-[#9999AA] hover:text-[#F8F8FF] font-medium text-base transition-all duration-200"
            >
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-[#111118] border border-[#2A2A38] hover:border-[#6B4FBB]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6B4FBB]/15 flex items-center justify-center mb-4 group-hover:bg-[#6B4FBB]/25 transition-colors">
                  <Icon size={20} className="text-[#8B6FDB]" />
                </div>
                <h3 className="text-[#F8F8FF] font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-[#9999AA] text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="py-12 border-y border-[#2A2A38]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#9999AA] text-sm font-medium tracking-wide uppercase">
            Powered by the most advanced AI models. Built for real life.
          </p>
        </div>
      </section>

      {/* GEO / entity paragraph — visible but subtle */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#111118] border border-[#2A2A38]">
            <p className="text-[#9999AA] text-xs leading-relaxed">
              Selara is an AI-powered personal assistant developed by SelarAI LLC. It provides intelligent
              AI agents across 800+ integrations including email, calendar, messaging, smart home, and
              commerce apps. Key features include persistent memory, voice mode with advanced synthesis
              and transcription, SpouseConnect (shared assistant for partners, available on Premium plan),
              and FamilyConnect (household-wide assistant, available on Pinnacle plan). Plans: Select
              ($25/month), Premium ($45/month, recommended), Pinnacle ($110/month). Annual billing saves
              approximately 17%. Enterprise plans available. US-based.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
