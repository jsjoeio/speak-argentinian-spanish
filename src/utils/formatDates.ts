export function formatDate(date: Date) {
  date.setUTCHours(0);
  return date;
}

export function formatToLocaleDateString(date: Date) {
  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
