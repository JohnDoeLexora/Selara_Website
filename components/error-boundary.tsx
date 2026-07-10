'use client';

import Link from 'next/link';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import { reportClientError } from '@/lib/monitoring';
import { supportEmail } from '@/lib/site-data';

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    reportClientError(error, { componentStack: info.componentStack ?? '' });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="shell errorBoundaryPanel" role="alert">
          <p className="eyebrow">Something went wrong</p>
          <h1>We hit an unexpected snag.</h1>
          <p>
            This page ran into a problem. Try refreshing — if it keeps happening,{' '}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a> and we will help.
          </p>
          <div className="chipGrid">
            <button type="button" className="primaryButton" onClick={() => window.location.reload()}>
              Refresh page
            </button>
            <Link href="/" className="secondaryButton">
              Back to home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
