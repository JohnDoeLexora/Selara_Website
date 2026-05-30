'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { betaUrl, isExternalUrl } from '@/lib/site-data';
import { MobileNavLinks } from './nav-links';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    queueMicrotask(() => ctaRef.current?.focus());
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const overlay = (
    <>
      {open ? <div className="mobileNavScrim" aria-hidden onClick={close} /> : null}
      <nav
        id={panelId}
        className="mobileNavPanel"
        data-open={open}
        aria-label="Mobile primary"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="mobileNavPanelHead">
          <p className="mobileNavPanelTitle">Menu</p>
          <button type="button" className="mobileNavClose" onClick={close} aria-label="Close navigation">
            Close
          </button>
        </div>
        {isExternalUrl(betaUrl) ? (
          <a
            ref={ctaRef}
            className="primaryButton mobileNavCta"
            href={betaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Open Beta
          </a>
        ) : (
          <Link ref={ctaRef} className="primaryButton mobileNavCta" href={betaUrl} onClick={close}>
            Open Beta
          </Link>
        )}
        <MobileNavLinks onNavigate={close} omitLabels={['Open Beta']} />
      </nav>
    </>
  );

  return (
    <div className="mobileNavRoot">
      <button
        type="button"
        className="mobileNavToggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mobileNavToggleLines" aria-hidden>
          <span data-open={open} />
          <span data-open={open} />
          <span data-open={open} />
        </span>
      </button>
      {mounted ? createPortal(overlay, document.body) : null}
    </div>
  );
}
