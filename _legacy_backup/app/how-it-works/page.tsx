import type { Metadata } from 'next';
import Link from 'next/link';
import { Plug, Brain, Cpu, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How Selara Works — AI Agents That Actually Do Things',
  description:
    'Selara uses intelligent AI agents that connect to 800+ apps, remember your preferences, and take real action across every part of your life.',
};

const STEPS = [
  {
    step: '01',
    icon: Plug,
    title: 'Connect',
    subtitle: '800+ apps, instant setup',
    description:
      'Link Selara to your email, calendar, contacts, messages, smart home, shopping, travel, and more. Setup takes minutes. Selara handles the rest.',
    detail:
      'From Gmail to Apple Health, Notion to Amazon — if it exists, Selara can connect to it. No complicated workflows. No code. Just connect and go.',
  },
  {
    step: '02',
    icon: Brain,
    title: 'Teach',
    subtitle: 'Builds a persistent memory profile',
    description:
      'Selara listens and learns. Every interaction deepens your profile — your preferences, patterns, relationships, and priorities.',
    detail:
      "Unlike chatbots that forget the moment you close the app, Selara's memory is persistent. It knows you ordered the same coffee every morning at 8am. It knows you hate morning meetings before 10.",
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Delegate',
    subtitle: 'Agents execute on your behalf',
    description:
      '"Book me a flight to Austin Friday under $400." Selara doesn\'t give you a list of options — it books the flight.',
    detail:
      'AI agents with real permissions to act. Send emails, schedule meetings, set reminders, order groceries, control your smart home, research, summarize, and execute — all from a single conversation.',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Evolve',
    subtitle: 'Memory compounds, context deepens',
    description:
      'The longer you use Selara, the better it works. Memory compounds. Context deepens. What took 10 words eventually takes 3.',
    detail:
      'The best assistant isn\'t one that\'s smart on day one. It\'s one that gets smarter every day. Selara builds a model of your world that improves with every interaction.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 text-center border-b border-[#2A2A38]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-4">How It Works</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF] mb-5 tracking-tight">
            AI agents that actually do things
          </h1>
          <p className="text-[#9999AA] text-lg leading-relaxed max-w-2xl mx-auto">
            Most AI tools talk. Selara acts. Here's how it goes from "hello" to handling your life.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {STEPS.map(({ step, icon: Icon, title, subtitle, description, detail }, i) => (
            <div
              key={step}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Icon side */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 rounded-3xl bg-[#111118] border border-[#2A2A38] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-[#6B4FBB]/15 flex items-center justify-center">
                    <Icon size={40} className="text-[#8B6FDB]" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-[#6B4FBB] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{step}</span>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="flex-1">
                <p className="text-[#6B4FBB] text-sm font-semibold uppercase tracking-widest mb-2">
                  Step {step}
                </p>
                <h2 className="text-3xl font-bold text-[#F8F8FF] mb-1">{title}</h2>
                <p className="text-[#8B6FDB] text-sm mb-4">{subtitle}</p>
                <p className="text-[#9999AA] text-base leading-relaxed mb-4">{description}</p>
                <p className="text-[#9999AA]/70 text-sm leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 border-t border-[#2A2A38] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F8F8FF] mb-4">Ready to get started?</h2>
          <p className="text-[#9999AA] mb-8">Join the waitlist and get early access when we launch.</p>
          <Link
            href="/pricing"
            className="inline-flex px-8 py-4 rounded-xl bg-[#6B4FBB] hover:bg-[#8B6FDB] text-[#F8F8FF] font-semibold text-base transition-all duration-200"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
