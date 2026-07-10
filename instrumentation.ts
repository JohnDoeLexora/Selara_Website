export async function register() {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN?.trim()) {
    await import('./sentry.server.config');
  }
}
