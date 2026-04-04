import type { Metadata } from 'next';
import Link from 'next/link';
import { Mic, Waves, MessageSquare, Eye, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Voice Mode — Talk to Selara Like a Person',
  description:
    'Advanced voice synthesis and transcription. No buttons, no typing, no friction.',
};

const FEATURES = [
  {
    icon: Waves,
    title: 'Intelligent voice synthesis',
    description:
      "Selara's voice is natural, paced, and expressive. Not robotic. Not canned. It sounds like someone actually listening and responding — because it is.",
  },
  {
    icon: Mic,
    title: 'Accurate transcription',
    description:
      "Best-in-class speech-to-text means Selara catches what you say even in noisy environments, with accents, or speaking quickly. It doesn't make you repeat yourself.",
  },
  {
    icon: MessageSquare,
    title: 'Context-aware',
    description:
      "Voice Mode carries your full conversation history and memory profile. Selara knows what you were talking about five minutes ago and five months ago.",
  },
  {
    icon: Eye,
    title: 'Eyes-free operation',
    description:
      "Built for real life: driving, cooking, walking. Trigger Selara by voice, get things done without looking at a screen. Perfect for when your hands are full.",
  },
  {
    icon: Star,
    title: 'Premium voice on Pinnacle',
    description:
      "Pinnacle subscribers get access to our most advanced voice model — richer, more natural, with better prosody and a wider emotional range.",
  },
];

export default function VoiceModePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 text-center border-b border-[#2A2A38]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(107,79,187,0.15) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-[#6B4FBB]/20 flex items-center justify-center mx-auto mb-8">
            <Mic size={32} className="text-[#8B6FDB]" />
          </div>
          <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-4">Voice Mode</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF] mb-6 tracking-tight leading-tight">
            Talk to Selara the way you'd talk to
            <br className="hidden sm:block" /> your smartest friend.
          </h1>
          <p className="text-[#9999AA] text-lg leading-relaxed max-w-2xl mx-auto">
            No buttons. No typing. No friction. Just speak — and Selara handles the rest.
          </p>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={`p-7 rounded-2xl bg-[#111118] border border-[#2A2A38] hover:border-[#6B4FBB]/50 transition-colors ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#6B4FBB]/15 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#8B6FDB]" />
                </div>
                <h3 className="text-[#F8F8FF] font-semibold mb-3">{title}</h3>
                <p className="text-[#9999AA] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 border-t border-[#2A2A38] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F8F8FF] mb-4">Experience Voice Mode</h2>
          <p className="text-[#9999AA] mb-8">
            Voice Mode is available on all Selara plans. Join the waitlist to get early access.
          </p>
          <Link
            href="/pricing"
            className="inline-flex px-8 py-4 rounded-xl bg-[#6B4FBB] hover:bg-[#8B6FDB] text-[#F8F8FF] font-semibold text-base transition-all duration-200"
          >
            See Plans →
          </Link>
        </div>
      </section>
    </div>
  );
}
