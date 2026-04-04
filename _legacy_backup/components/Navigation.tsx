'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

const NAV_GROUPS = [
  {
    label: 'Product',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Voice Mode', href: '/voice-mode' },
      { label: 'Safety', href: '/safety' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Philosophy', href: '/philosophy' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

function DropdownGroup({ group }: { group: typeof NAV_GROUPS[0] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-[#9999AA] hover:text-[#F8F8FF] transition-colors py-2"
      >
        {group.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-[#111118] border border-[#2A2A38] rounded-lg shadow-xl overflow-hidden z-50">
          {group.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-[#9999AA] hover:text-[#F8F8FF] hover:bg-[#1A1A24] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#2A2A38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="Selara" width={32} height={32} className="w-8 h-8 object-contain" />
            <span className="text-[#F8F8FF] font-semibold text-lg tracking-tight">Selara</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_GROUPS.map((group) => (
              <DropdownGroup key={group.label} group={group} />
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[#6B4FBB] hover:bg-[#8B6FDB] text-[#F8F8FF] text-sm font-medium transition-colors"
            >
              Join Waitlist
            </Link>
            <button
              className="md:hidden text-[#9999AA] hover:text-[#F8F8FF] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111118] border-t border-[#2A2A38]">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold text-[#9999AA] uppercase tracking-widest px-2 py-1 mt-3 mb-1">
                  {group.label}
                </p>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-2 py-2 text-sm text-[#F8F8FF]/80 hover:text-[#F8F8FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-lg bg-[#6B4FBB] hover:bg-[#8B6FDB] text-[#F8F8FF] text-sm font-medium transition-colors"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
