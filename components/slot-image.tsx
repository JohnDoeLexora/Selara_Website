'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { imageSlots, type ImageSlotKey } from '@/lib/site-data';

type SlotImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  slotKey: ImageSlotKey;
};

/** Prefer real-app PNG at `target`; fall back to legacy placeholder if missing. */
export function SlotImage({ slotKey, unoptimized, ...props }: SlotImageProps) {
  const slot = imageSlots[slotKey];
  const [src, setSrc] = useState<string>(slot.target);
  const isSvg = src.endsWith('.svg');

  return (
    <Image
      {...props}
      src={src}
      alt={slot.alt}
      unoptimized={unoptimized ?? isSvg}
      onError={() => {
        if (src !== slot.placeholder) setSrc(slot.placeholder);
      }}
    />
  );
}
