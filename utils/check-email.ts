/**
 * Validates whether a given string is a correctly formatted email address.
 * 
 * @param {string} email - The email address string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}