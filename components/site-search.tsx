'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import {
  searchSiteIndex,
  siteSearchSuggestions,
  type SiteSearchCategory,
  type SiteSearchResult,
} from '@/lib/site-search-index';

const CATEGORY_ORDER: SiteSearchCategory[] = ['Pages', 'Help', 'Insights'];

function groupResults(results: SiteSearchResult[]) {
  const groups = new Map<SiteSearchCategory, SiteSearchResult[]>();
  for (const category of CATEGORY_ORDER) {
    groups.set(category, []);
  }
  for (const result of results) {
    groups.get(result.category)?.push(result);
  }
  return CATEGORY_ORDER.flatMap((category) => {
    const items = groups.get(category) ?? [];
    return items.length ? [{ category, items }] : [];
  });
}

export function SiteSearch() {
  const dialogTitleId = useId();
  const inputId = useId();
  const statusId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const results = useMemo(() => searchSiteIndex(query), [query]);
  const grouped = useMemo(() => groupResults(results), [results]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    triggerRef.current?.focus();
  }, []);

  const openPalette = useCallback(() => {
    setOpen(true);
    trackEvent('site_search_open', { page: typeof window !== 'undefined' ? window.location.pathname : '' });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (open) {
          close();
        } else {
          openPalette();
        }
        return;
      }
      if (event.key === 'Escape' && open) {
        event.preventDefault();
        close();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close, open, openPalette]);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const frame = requestAnimationFrame(() => inputRef.current?.focus());

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (dialogRef.current && target && !dialogRef.current.contains(target)) {
        close();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousedown', onPointerDown);
      previousFocus?.focus();
    };
  }, [close, open]);

  const onSelect = (result: SiteSearchResult) => {
    trackEvent('site_search_select', {
      href: result.href,
      category: result.category,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    });
    close();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="siteSearchTrigger"
        onClick={openPalette}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? 'site-search-dialog' : undefined}
        data-cta="site-search-open"
      >
        <span className="siteSearchTriggerLabel">Search</span>
        <kbd className="siteSearchShortcut" aria-hidden="true">
          ⌘K
        </kbd>
      </button>

      {open ? (
        <div className="siteSearchOverlay" role="presentation">
          <div
            ref={dialogRef}
            id="site-search-dialog"
            className="siteSearchDialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
          >
            <h2 id={dialogTitleId} className="siteSearchDialogTitle">
              Search Selara
            </h2>
            <label htmlFor={inputId} className="helpSearchLabel">
              Find pages, help articles, and insights
            </label>
            <input
              ref={inputRef}
              id={inputId}
              type="search"
              className="helpSearchInput siteSearchInput"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try calendar, approval, or billing"
              autoComplete="off"
              aria-describedby={statusId}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.preventDefault();
                  close();
                }
              }}
            />
            <p id={statusId} className="helpSearchStatus" aria-live="polite">
              {query.trim()
                ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query.trim()}”`
                : 'Type to search the site — or press Esc to close'}
            </p>

            {query.trim() && grouped.length > 0 ? (
              <div className="siteSearchGroups">
                {grouped.map(({ category, items }) => (
                  <section key={category} className="siteSearchGroup" aria-label={category}>
                    <p className="siteSearchGroupLabel">{category}</p>
                    <ul className="helpSearchResults" role="list">
                      {items.map((result) => (
                        <li key={`${result.category}-${result.href}`}>
                          <Link
                            href={result.href}
                            className="helpSearchResultLink"
                            onClick={() => onSelect(result)}
                          >
                            <span className="helpSearchResultTitle">{result.title}</span>
                            <span className="helpSearchResultSummary">{result.summary}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ) : null}

            {query.trim() && results.length === 0 ? (
              <p className="helpSearchEmpty">
                No matches. Try {siteSearchSuggestions.map((term) => `“${term}”`).join(', ')}.
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
