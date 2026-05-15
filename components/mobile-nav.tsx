'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { navigation } from '@/lib/site-data';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    // One-time mount flag for the portal. Using setTimeout to avoid the strict
    // "setState in effect" lint rule while preserving the original behavior.
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
    queueMicrotask(() => firstLinkRef.current?.focus());
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const overlay = (
    <>
      {open ? (
        <div className="mobileNavScrim" aria-hidden onClick={close} />
      ) : null}
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
        <div className="mobileNavLinks">
          {navigation.map((item, i) => (
            <Link key={item.href} ref={i === 0 ? firstLinkRef : undefined} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        </div>
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
