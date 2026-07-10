'use client';

import { homeSectionNavItems } from '@/lib/site-data';
import { useCallback, useEffect, useState } from 'react';

export function HomeSectionNav() {
  const [activeId, setActiveId] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mqDesktop = window.matchMedia('(min-width: 1100px)');

    const updateVisible = () => {
      setVisible(mqDesktop.matches);
    };
    updateVisible();
    mqDesktop.addEventListener('change', updateVisible);
    return () => {
      mqDesktop.removeEventListener('change', updateVisible);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const sections = homeSectionNavItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const updateActiveFromScroll = () => {
      const marker = window.innerHeight * 0.42;
      let bestId = sections[0].id;
      let bestDistance = Infinity;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - marker);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = section.id;
        }
      }

      setActiveId(bestId);
    };

    updateActiveFromScroll();

    const observer = new IntersectionObserver(
      () => {
        updateActiveFromScroll();
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', updateActiveFromScroll, { passive: true });
    window.addEventListener('resize', updateActiveFromScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveFromScroll);
      window.removeEventListener('resize', updateActiveFromScroll);
    };
  }, [visible]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      setActiveId(id);
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      let nextIndex = index;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        nextIndex = Math.min(index + 1, homeSectionNavItems.length - 1);
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        nextIndex = Math.max(index - 1, 0);
      } else if (event.key === 'Home') {
        event.preventDefault();
        nextIndex = 0;
      } else if (event.key === 'End') {
        event.preventDefault();
        nextIndex = homeSectionNavItems.length - 1;
      } else {
        return;
      }
      const target = homeSectionNavItems[nextIndex];
      scrollTo(target.id);
      const btn = document.querySelector<HTMLButtonElement>(`[data-section-nav="${target.id}"]`);
      btn?.focus();
    },
    [scrollTo],
  );

  if (!visible) return null;

  return (
    <nav className="homeSectionNav" aria-label="Page sections">
      <ol className="homeSectionNavList">
        {homeSectionNavItems.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                data-section-nav={item.id}
                className={isActive ? 'homeSectionNavDot homeSectionNavDotActive' : 'homeSectionNavDot'}
                aria-label={item.label}
                aria-current={isActive ? 'true' : undefined}
                title={item.label}
                onClick={() => scrollTo(item.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
