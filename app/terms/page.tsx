import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Selara',
  description: 'Terms of Service for Selara by SelarAI LLC.',
};

export default function TermsPage() {
  const effectiveDate = 'January 1, 2025';

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#8B6FDB] text-sm font-medium uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-bold text-[#F8F8FF] mb-3 tracking-tight">Terms of Service</h1>
        <p className="text-[#9999AA] text-sm mb-12">Effective date: {effectiveDate}</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">1. Acceptance of Terms</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              By accessing or using the Selara application or selara.app (the &quot;Service&quot;), operated by
              SelarAI LLC (&quot;Selara,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of
              Service. If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">2. Description of Service</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              Selara is an AI-powered personal assistant that integrates with third-party applications
              and services to perform tasks on your behalf. The Service includes voice interaction,
              persistent memory, task execution, and related features as described on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">3. Accounts and Registration</h2>
            <div className="space-y-3 text-[#9999AA] text-sm leading-relaxed">
              <p>You must provide accurate, complete, and current information when creating an account. You are responsible for maintaining the security of your account credentials.</p>
              <p>You must be at least 13 years of age to use the Service. If you are under 18, you represent that you have parental or guardian consent.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">4. Subscriptions and Billing</h2>
            <div className="space-y-3 text-[#9999AA] text-sm leading-relaxed">
              <p>Selara offers paid subscription plans billed monthly or annually. Your subscription automatically renews unless cancelled before the renewal date.</p>
              <p>We offer a 7-day money-back guarantee for new subscribers. After 7 days, all payments are final unless otherwise required by law.</p>
              <p>We reserve the right to change pricing with 30 days&apos; advance notice. Price changes will not apply to active annual subscribers until their renewal date.</p>
              <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">5. Acceptable Use</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 text-[#9999AA] text-sm leading-relaxed">
              <li>Violate any applicable law or regulation</li>
              <li>Infringe the rights of others</li>
              <li>Transmit harmful, offensive, or abusive content</li>
              <li>Attempt to gain unauthorized access to any system</li>
              <li>Use the Service for automated or bulk operations not intended by Selara</li>
              <li>Resell or sublicense access to the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">6. Third-Party Integrations</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              Selara integrates with third-party services. Your use of those services is governed by
              their own terms of service and privacy policies. Selara is not responsible for the
              actions, content, or policies of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">7. Intellectual Property</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              The Service, including its design, code, and content, is owned by SelarAI LLC and
              protected by intellectual property laws. You are granted a limited, non-exclusive,
              non-transferable license to use the Service for personal, non-commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">8. Disclaimer of Warranties</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. SELARAI LLC DOES NOT
              WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL
              COMPONENTS. AI-GENERATED RESPONSES MAY BE INACCURATE AND SHOULD BE VERIFIED BEFORE
              RELYING ON THEM FOR IMPORTANT DECISIONS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">9. Limitation of Liability</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SELARAI LLC SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY
              SHALL NOT EXCEED THE AMOUNT YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">10. Termination</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              We reserve the right to suspend or terminate your account for violation of these Terms.
              You may terminate your account at any time by contacting support@selara.app. Upon
              termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">11. Governing Law</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              These Terms are governed by the laws of the United States. Any disputes shall be
              resolved in the courts of competent jurisdiction in the United States.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">12. Changes to Terms</h2>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              We may update these Terms from time to time. We will notify you of material changes by
              email or through the Service. Continued use of the Service after changes constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#F8F8FF] mb-3">13. Contact</h2>
            <div className="p-4 rounded-xl bg-[#111118] border border-[#2A2A38] text-sm text-[#9999AA]">
              <p>SelarAI LLC</p>
              <p>
                Email:{' '}
                <a href="mailto:legal@selara.app" className="text-[#8B6FDB] hover:text-[#F8F8FF] transition-colors">
                  legal@selara.app
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
