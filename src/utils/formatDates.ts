export function formatDate(date: Date) {
  date.setUTCHours(0);
  return date;
}
