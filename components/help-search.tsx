'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { HelpArticle } from '@/lib/help-articles';

type HelpSearchProps = {
  articles: HelpArticle[];
};

export function HelpSearch({ articles }: HelpSearchProps) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return articles;
    return articles.filter((article) => {
      const haystack = [article.title, article.summary, ...article.body].join(' ').toLowerCase();
      return haystack.includes(normalized);
    });
  }, [articles, query]);

  return (
    <div className="helpSearch">
      <label htmlFor="help-search-input" className="helpSearchLabel">
        Search help articles
      </label>
      <input
        id="help-search-input"
        type="search"
        className="helpSearchInput"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="e.g. calendar, voice, billing"
        autoComplete="off"
        aria-describedby="help-search-status"
      />
      <p id="help-search-status" className="helpSearchStatus" aria-live="polite">
        {query.trim()
          ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query.trim()}”`
          : `${articles.length} articles available`}
      </p>
      <ul className="helpSearchResults" role="list">
        {results.map((article) => (
          <li key={article.slug}>
            <Link href={`/help/${article.slug}`} className="helpSearchResultLink">
              <span className="helpSearchResultTitle">{article.title}</span>
              <span className="helpSearchResultSummary">{article.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
      {query.trim() && results.length === 0 ? (
        <p className="helpSearchEmpty">No articles match. Try “approval”, “calendar”, or “billing”.</p>
      ) : null}
    </div>
  );
}
