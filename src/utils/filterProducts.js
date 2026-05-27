import { normalizeString } from "./helpers";

export function filterProducts(
  products = [],
  filters = {}
) {
  if (!Array.isArray(products)) {
    return [];
  }

  const {
    searchQuery = "",
    category = "all",
    subcategory = "",
    brand = "all",
    tags = [],
    minPrice = 0,
    maxPrice = Infinity,
    minRating = 0,
    featured = false,
    trending = false,
    isNew = false,
    inStock = false,
  } = filters;

  const normalizedSearch =
    normalizeString(searchQuery);

  return products.filter((product) => {
    const matchesSearch =
      !normalizedSearch ||
      normalizeString(
        product.title || product.name || ""
      ).includes(normalizedSearch) ||
      normalizeString(
        product.description || ""
      ).includes(normalizedSearch) ||
      normalizeString(
        product.brand || ""
      ).includes(normalizedSearch) ||
      normalizeString(
        product.category || ""
      ).includes(normalizedSearch) ||
      normalizeString(
        product.subcategory || ""
      ).includes(normalizedSearch) ||
      (Array.isArray(product.tags) &&
        product.tags.some((tag) =>
          normalizeString(tag).includes(
            normalizedSearch
          )
        ));

    const matchesCategory =
      category === "all" ||
      !category ||
      normalizeString(product.category || "") ===
        normalizeString(category);

    const matchesSubcategory =
      !subcategory ||
      normalizeString(
        product.subcategory || ""
      ) === normalizeString(subcategory);

    const matchesBrand =
      brand === "all" ||
      !brand ||
      normalizeString(product.brand || "") ===
        normalizeString(brand);

    const matchesTags =
      !tags.length ||
      (Array.isArray(product.tags) &&
        tags.some((selectedTag) =>
          product.tags.some(
            (productTag) =>
              normalizeString(productTag) ===
              normalizeString(selectedTag)
          )
        ));

    const productPrice =
      Number(product.price) || 0;

    const matchesPrice =
      productPrice >= Number(minPrice || 0) &&
      productPrice <=
        Number(maxPrice || Infinity);

    const matchesRating =
      Number(product.rating || 0) >=
      Number(minRating || 0);

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