export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.round((duration % 3600) / 60);
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export const formatDateTime = (datetime: string) => {
  return new Date(datetime).toLocaleString();
};
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const formatAsYear = (date: string) => {
  return new Date(date).getFullYear().toString();
};

export const formatAsFullRange = (
  startDate?: string | null,
  endDate?: string | null,
) => {
  const startPart = startDate ? formatDate(startDate) : '...';
  const endPart = endDate ? formatDate(endDate) : '...';

  return `${startPart}-${endPart}`;
};

export const formatAsYearRange = (startDate?: string, endDate?: string) => {
  const startPart = startDate ? new Date(startDate).getFullYear() : '...';
  const endPart = endDate ? new Date(endDate).getFullYear() : '...';

  return `${startPart}-${endPart}`;
};
