import { env } from '@/lib/env';

export function useReportError(message: string, meta?: any) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('Error reported:', message, meta);
  }
  // In a real app, you would report this to a service like Sentry, LogRocket, etc.
}
