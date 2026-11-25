export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function readingTime(text: string): number {
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}
