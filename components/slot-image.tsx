'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { imageSlots, type ImageSlotKey } from '@/lib/site-data';

type SlotImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  slotKey: ImageSlotKey;
};

/** Prefer real-app PNG at `target`; fall back to legacy placeholder if missing. */
export function SlotImage({ slotKey, unoptimized, priority, loading, className, ...props }: SlotImageProps) {
  const slot = imageSlots[slotKey];
  const [src, setSrc] = useState<string>(slot.target);
  const isSvg = src.endsWith('.svg');

  if (process.env.NODE_ENV === 'development' && !slot.alt.trim()) {
    console.warn(`[SlotImage] Missing alt text for slot "${slotKey}". See docs/image-guidelines.md`);
  }

  const mergedClassName = isSvg
    ? ['productScreenshotSvg', className].filter(Boolean).join(' ')
    : className;

  return (
    <Image
      {...props}
      className={mergedClassName}
      src={src}
      alt={slot.alt}
      priority={priority}
      loading={priority ? undefined : (loading ?? 'lazy')}
      unoptimized={unoptimized ?? isSvg}
      onError={() => {
        if (src !== slot.placeholder) setSrc(slot.placeholder);
      }}
    />
  );
}
