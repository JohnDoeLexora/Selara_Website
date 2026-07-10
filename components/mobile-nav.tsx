'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { DownloadSelaraCta } from './download-cta';
import { MobileNavLinks } from './nav-links';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true',
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      const focusable = getFocusableElements(panelRef.current);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    queueMicrotask(() => ctaRef.current?.focus());
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  useEffect(() => {
    if (open) return;
    queueMicrotask(() => toggleRef.current?.focus());
  }, [open]);

  const overlay = (
    <>
      {open ? <div className="mobileNavScrim" aria-hidden onClick={close} /> : null}
      <nav
        ref={panelRef}
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
        <DownloadSelaraCta ref={ctaRef} className="primaryButton mobileNavCta" data-cta="download-mobile" onClick={close} />
        <MobileNavLinks onNavigate={close} />
      </nav>
    </>
  );

  return (
    <div className="mobileNavRoot">
      <button
        ref={toggleRef}
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
