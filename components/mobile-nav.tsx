'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { DOWNLOAD_SELARA_LABEL, DownloadSelaraCta } from './download-cta';
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
        <DownloadSelaraCta ref={ctaRef} className="primaryButton mobileNavCta" onClick={close} />
        <MobileNavLinks onNavigate={close} omitLabels={[DOWNLOAD_SELARA_LABEL]} />
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
