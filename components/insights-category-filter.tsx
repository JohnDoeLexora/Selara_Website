'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  getInsightCategoryLabel,
  insightCategories,
  insightPosts,
  type InsightCategoryId,
} from '@/lib/insights-posts';

type FilterId = 'all' | InsightCategoryId;

export function InsightsCategoryFilter() {
  const [active, setActive] = useState<FilterId>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return insightPosts;
    return insightPosts.filter((post) => post.category === active);
  }, [active]);

  return (
    <>
      <div className="insightCategoryRow" role="group" aria-label="Filter insights by category">
        <button
          type="button"
          className={`chip chipButton${active === 'all' ? ' chipActive' : ''}`}
          aria-pressed={active === 'all'}
          onClick={() => setActive('all')}
        >
          All
        </button>
        {insightCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`chip chipButton${active === category.id ? ' chipActive' : ''}`}
            aria-pressed={active === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="insightPostGrid">
        {filtered.map((post) => (
          <article key={post.slug} className="contentCard contentCardPremium">
            <p className="eyebrow">{getInsightCategoryLabel(post.category)}</p>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <p className="caseStudyCardMeta">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}{' '}
              · {post.readingTimeMinutes} min read
            </p>
            <Link href={`/insights/${post.slug}`} className="secondaryButton">
              Read article
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
