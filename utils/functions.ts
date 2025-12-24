import { format } from 'date-fns';

/**
 * Format a date as "Dec 24, 2025"
 */
export function formatDate(targetDate: string) {
  if (!targetDate) {
    return '';
  }

  return format(new Date(targetDate), 'MMM dd, yyyy');
}