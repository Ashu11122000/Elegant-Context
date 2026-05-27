import { normalizeString } from "./helpers";

function filterProducts(products = [], filters = {}) {
  if (!Array.isArray(products)) {
    return [];
  }

  const {
    searchQuery = "",
    category = "",
    subcategory = "",
    brand = "",
    tags = [],
    minPrice,
    maxPrice,
    rating = 0,
    featured = false,
    trending = false,
    isNew = false,
    inStock = false,
  } = filters;

  const normalizedSearch = normalizeString(searchQuery);

  const parsedMinPrice =
    minPrice === "" || minPrice === null || minPrice === undefined
      ? 0
      : Number(minPrice);

  const parsedMaxPrice =
    maxPrice === "" || maxPrice === null || maxPrice === undefined
      ? Infinity
      : Number(maxPrice);

  return products.filter((product) => {
    const matchesSearch =
      !normalizedSearch ||
      normalizeString(product.title || product.name || "").includes(
        normalizedSearch
      ) ||
      normalizeString(product.description || "").includes(normalizedSearch) ||
      normalizeString(product.brand || "").includes(normalizedSearch) ||
      normalizeString(product.category || "").includes(normalizedSearch) ||
      normalizeString(product.subcategory || "").includes(normalizedSearch) ||
      (product.tags || []).some((tag) =>
        normalizeString(tag).includes(normalizedSearch)
      );

    const matchesCategory =
      !category ||
      category === "all" ||
      normalizeString(product.category || "") === normalizeString(category);

    const matchesSubcategory =
      !subcategory ||
      subcategory === "all" ||
      normalizeString(product.subcategory || "") ===
        normalizeString(subcategory);

    const matchesBrand =
      !brand ||
      brand === "all" ||
      normalizeString(product.brand || "") === normalizeString(brand);

    const matchesTags =
      !tags.length ||
      tags.some((selectedTag) =>
        (product.tags || []).some(
          (productTag) =>
            normalizeString(productTag) === normalizeString(selectedTag)
        )
      );

    const matchesPrice =
      product.price >= parsedMinPrice &&
      product.price <= parsedMaxPrice;

    const matchesRating =
      product.rating >= rating;

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