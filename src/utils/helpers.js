/**
 * Capitalizes first character of a string
 *
 * "fashion" -> "Fashion"
 */
export function capitalize(text = "") {
  if (typeof text !== "string") {
    return "";
  }

  if (!text.trim()) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Capitalizes every word
 *
 * "premium leather jacket" -> "Premium Leather Jacket"
 */
export function capitalizeWords(text = "") {
  if (typeof text !== "string") {
    return "";
  }

  return text
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * Truncates long text safely
 *
 * "Premium luxury leather jacket"
 * -> "Premium luxury..."
 */
export function truncateText(text = "", maxLength = 50) {
  if (typeof text !== "string") {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Generates random lightweight ID
 */
export function generateRandomId(prefix = "id") {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

/**
 * Normalizes strings for safe comparisons
 *
 * " Men Jacket " -> "men jacket"
 */
export function normalizeString(text = "") {
  if (typeof text !== "string") {
    return "";
  }

  return text.trim().toLowerCase();
}

/**
 * Removes duplicate items from array
 */
export function uniqueArray(items = []) {
  if (!Array.isArray(items)) {
    return [];
  }

  return [...new Set(items)];
}

/**
 * Checks if value is empty
 */
export function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "string") {
    return value.trim() === "";
  }

  return value === null || value === undefined;
}