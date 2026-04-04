'use client';

import { useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document === 'undefined') {
      return 'dark';
    }

    return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  });

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('selara-theme', next);
    setTheme(next);
  }

  return (
    <button className="themeToggle" onClick={toggleTheme} aria-label="Toggle color theme" type="button">
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
