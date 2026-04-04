import Link from 'next/link';
import Image from 'next/image';

const FOOTER_LINKS = {
  Product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Voice Mode', href: '/voice-mode' },
    { label: 'Safety', href: '/safety' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Company: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Philosophy', href: '/philosophy' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A38] bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Selara" width={28} height={28} className="w-7 h-7 object-contain" />
              <span className="text-[#F8F8FF] font-semibold text-base">Selara</span>
            </Link>
            <p className="text-[#9999AA] text-sm leading-relaxed">
              Your personal AI. Finally.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-[#F8F8FF] text-xs font-semibold uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#9999AA] hover:text-[#F8F8FF] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#2A2A38] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9999AA] text-sm">
            © 2025 SelarAI LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[#9999AA] hover:text-[#F8F8FF] text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#9999AA] hover:text-[#F8F8FF] text-sm transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
