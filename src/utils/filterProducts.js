import { normalizeString } from "./helpers";

export function filterProducts(products = [], filters = {}) {
  if (!Array.isArray(products)) {
    return [];
  }

  const {
    searchQuery = "",
    category = "",
    subcategory = "",
    brand = "",
    tags = [],
    minPrice = 0,
    maxPrice = Infinity,
    minRating = 0,
    featured = false,
    trending = false,
    isNew = false,
    inStock = false,
  } = filters;

  const normalizedSearch = normalizeString(searchQuery);

  return products.filter((product) => {
    const matchesSearch =
      !normalizedSearch ||
      normalizeString(product.title).includes(normalizedSearch) ||
      normalizeString(product.description).includes(normalizedSearch) ||
      normalizeString(product.brand).includes(normalizedSearch) ||
      normalizeString(product.category).includes(normalizedSearch) ||
      normalizeString(product.subcategory).includes(normalizedSearch) ||
      product.tags.some((tag) =>
        normalizeString(tag).includes(normalizedSearch)
      );

    const matchesCategory =
      !category ||
      normalizeString(product.category) ===
        normalizeString(category);

    const matchesSubcategory =
      !subcategory ||
      normalizeString(product.subcategory) ===
        normalizeString(subcategory);

    const matchesBrand =
      !brand ||
      normalizeString(product.brand) ===
        normalizeString(brand);

    const matchesTags =
      !tags.length ||
      tags.some((selectedTag) =>
        product.tags.some(
          (productTag) =>
            normalizeString(productTag) ===
            normalizeString(selectedTag)
        )
      );

    const matchesPrice =
      product.price >= minPrice &&
      product.price <= maxPrice;

    const matchesRating =
      product.rating >= minRating;

    const matchesFeatured =
      !featured || product.featured;

    const matchesTrending =
      !trending || product.trending;

    const matchesNew =
      !isNew || product.isNew;

    const matchesStock =
      !inStock || product.stock > 0;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSubcategory &&
      matchesBrand &&
      matchesTags &&
      matchesPrice &&
      matchesRating &&
      matchesFeatured &&
      matchesTrending &&
      matchesNew &&
      matchesStock
    );
  });
}

export default filterProducts;