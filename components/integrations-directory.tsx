'use client';

import { useMemo, useState } from 'react';
import { integrationCategories, supportEmail } from '@/lib/site-data';

type FlatIntegration = {
  name: string;
  category: string;
  initials: string;
};

function getInitials(name: string) {
  const words = name.replace(/[^a-zA-Z0-9\s+]/g, '').trim().split(/\s+/);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0] ?? ''}${words[1][0] ?? ''}`.toUpperCase();
}

function flattenIntegrations(): FlatIntegration[] {
  return integrationCategories.flatMap((group) =>
    group.items
      .filter((item) => !item.startsWith('800+'))
      .map((name) => ({
        name,
        category: group.category,
        initials: getInitials(name),
      })),
  );
}

const ALL_INTEGRATIONS = flattenIntegrations();
const CATEGORIES = integrationCategories.map((group) => group.category);

export function IntegrationsDirectory() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return ALL_INTEGRATIONS.filter((item) => {
      const matchesCategory = !activeCategory || item.category === activeCategory;
      const matchesQuery =
        !normalized ||
        item.name.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="integrationsDirectory">
      <div className="integrationsDirectoryControls">
        <label className="integrationsSearchLabel" htmlFor="integrations-search">
          Search integrations
        </label>
        <input
          id="integrations-search"
          className="integrationsSearchInput"
          type="search"
          placeholder="Search by tool or category…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
        <div className="integrationsFilterChips" role="group" aria-label="Filter by category">
          <button
            type="button"
            className={`chip integrationsFilterChip${activeCategory === null ? ' integrationsFilterChipActive' : ''}`}
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
          >
            All
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`chip integrationsFilterChip${activeCategory === category ? ' integrationsFilterChipActive' : ''}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="integrationsEmptyState">
          No integrations match that search. Try another term or{' '}
          <a href="#request-integration">request one below</a>.
        </p>
      ) : (
        <ul className="integrationsResultsGrid">
          {filtered.map((item) => (
            <li key={`${item.category}-${item.name}`} className="integrationResultCard">
              <span className="integrationResultBadge" aria-hidden>
                {item.initials}
              </span>
              <div>
                <p className="integrationResultName">{item.name}</p>
                <p className="integrationResultCategory">{item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function IntegrationRequestSection() {
  const subject = encodeURIComponent('Integration request for Selara');
  const body = encodeURIComponent(
    'Tool name:\nCategory (calendar, mail, docs, etc.):\nWhy it matters to my workflow:\n',
  );
  const mailto = `mailto:${supportEmail}?subject=${subject}&body=${body}`;

  return (
    <div className="integrationRequestFrame" id="request-integration">
      <article className="contentCard contentCardPremium">
        <h3>Request an integration</h3>
        <p>
          Selara connects to 800+ tools with approval-first guardrails — nothing consequential runs without your review.
          If your stack is not listed, tell us what you need and how you use it.
        </p>
        <a className="primaryButton integrationRequestButton" href={mailto}>
          Request integration
        </a>
      </article>
    </div>
  );
}
