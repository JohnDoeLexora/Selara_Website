'use client';

import Link from 'next/link';
import { forwardRef, type MouseEventHandler } from 'react';
import { betaUrl, isExternalUrl } from '@/lib/site-data';

export const DOWNLOAD_SELARA_LABEL = 'Download Selara';

type DownloadSelaraCtaProps = {
  className: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  'data-cta'?: string;
};

export const DownloadSelaraCta = forwardRef<HTMLAnchorElement, DownloadSelaraCtaProps>(
  function DownloadSelaraCta({ className, onClick, 'data-cta': dataCta = 'download-selara' }, ref) {
    const shared = {
      className,
      onClick,
      'data-cta': dataCta,
    } as const;

    if (isExternalUrl(betaUrl)) {
      return (
        <a
          ref={ref}
          {...shared}
          href={betaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {DOWNLOAD_SELARA_LABEL}
        </a>
      );
    }
    return (
      <Link ref={ref} {...shared} href={betaUrl}>
        {DOWNLOAD_SELARA_LABEL}
      </Link>
    );
  }
);
