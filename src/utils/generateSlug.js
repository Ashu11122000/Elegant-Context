/**
 * Converts any string into SEO-friendly slug
 *
 * Example:
 * "Men Premium Leather Jacket"
 * -> "men-premium-leather-jacket"
 */

export function generateSlug(text = "") {
  if (typeof text !== "string") {
    return "";
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove duplicate hyphens
}

export default generateSlug;