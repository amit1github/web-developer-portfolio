/**
 * Converts an ISO time string into a human-readable relative time string (e.g., "5 minutes ago").
 * 
 * @param {string} isoTime - The ISO formatted time string.
 * @returns {string} A relative time string representation.
 */
export function timeConverter(isoTime: string): string {
  const currentTime = new Date().getTime();
  const pastTime = new Date(isoTime).getTime();
  const timeDifferenceInMs = currentTime - pastTime;

  const seconds = Math.floor(timeDifferenceInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
}