'use client';

import Link from 'next/link';
import { forwardRef, type MouseEventHandler } from 'react';
import { betaUrl, isExternalUrl } from '@/lib/site-data';

export const DOWNLOAD_SELARA_LABEL = 'Download Selara';

type DownloadSelaraCtaProps = {
  className: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export const DownloadSelaraCta = forwardRef<HTMLAnchorElement, DownloadSelaraCtaProps>(
  function DownloadSelaraCta({ className, onClick }, ref) {
    if (isExternalUrl(betaUrl)) {
      return (
        <a
          ref={ref}
          className={className}
          href={betaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {DOWNLOAD_SELARA_LABEL}
        </a>
      );
    }
    return (
      <Link ref={ref} className={className} href={betaUrl} onClick={onClick}>
        {DOWNLOAD_SELARA_LABEL}
      </Link>
    );
  }
);
