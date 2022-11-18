export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-us', {
    day: 'numeric',
    year: 'numeric',
    month: 'short',
  });
