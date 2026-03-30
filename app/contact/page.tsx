import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Selara',
  description: 'Get in touch with the Selara team.',
};

const EMAIL_CARDS = [
  { label: 'General', address: 'hello@selara.app', description: 'Questions, feedback, ideas' },
  { label: 'Support', address: 'support@selara.app', description: 'Account & subscription help' },
  { label: 'Enterprise', address: 'enterprise@selara.app', description: 'Teams & organizations' },
  { label: 'Press', address: 'press@selara.app', description: 'Media & press inquiries' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 text-center border-b border-[#2A2A38]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF] mb-5 tracking-tight">
            Get in touch.
          </h1>
          <p className="text-[#9999AA] text-lg">
            We read every email and respond within 1–2 business days.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Email cards */}
            <div>
              <h2 className="text-[#F8F8FF] font-semibold text-lg mb-6">Email us directly</h2>
              <div className="space-y-3">
                {EMAIL_CARDS.map(({ label, address, description }) => (
                  <a
                    key={address}
                    href={`mailto:${address}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#111118] border border-[#2A2A38] hover:border-[#6B4FBB]/50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#6B4FBB]/15 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[#8B6FDB]" />
                    </div>
                    <div>
                      <p className="text-[#9999AA] text-xs mb-0.5">{label}</p>
                      <p className="text-[#F8F8FF] text-sm font-medium group-hover:text-[#8B6FDB] transition-colors">
                        {address}
                      </p>
                      <p className="text-[#9999AA]/60 text-xs mt-0.5">{description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-[#F8F8FF] font-semibold text-lg mb-6">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
