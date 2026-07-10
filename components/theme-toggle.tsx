'use client';

import { useState } from 'react';

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function readTheme(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(readTheme);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('selara-theme', next);
    } catch {
      // Storage may be unavailable — theme still applies for this session.
    }
    setTheme(next);
  }

  return (
    <button
      className="themeToggle themeToggleSubtle"
      onClick={toggleTheme}
      type="button"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={theme === 'light'}
      suppressHydrationWarning
    >
      <span className="themeToggleIcon themeToggleIconSun" aria-hidden>
        <SunIcon />
      </span>
      <span className="themeToggleIcon themeToggleIconMoon" aria-hidden>
        <MoonIcon />
      </span>
    </button>
  );
}
