export function sortProducts(products = [], sortBy = "") {
  if (!Array.isArray(products)) {
    return [];
  }

  const sortedProducts = [...products];

  switch (sortBy) {
    case "featured":
      return sortedProducts.sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );

    case "trending":
      return sortedProducts.sort(
        (a, b) => Number(b.trending) - Number(a.trending)
      );

    case "newest":
      return sortedProducts.sort(
        (a, b) => Number(b.isNew) - Number(a.isNew)
      );

    case "price-low-high":
      return sortedProducts.sort(
        (a, b) => a.price - b.price
      );

    case "price-high-low":
      return sortedProducts.sort(
        (a, b) => b.price - a.price
      );

    case "discount-high-low":
      return sortedProducts.sort(
        (a, b) =>
          (b.originalPrice - b.price) -
          (a.originalPrice - a.price)
      );

    case "rating":
      return sortedProducts.sort(
        (a, b) => b.rating - a.rating
      );

    case "most-reviewed":
      return sortedProducts.sort(
        (a, b) => b.reviewCount - a.reviewCount
      );

    case "stock-high-low":
      return sortedProducts.sort(
        (a, b) => b.stock - a.stock
      );

    case "alphabetical":
      return sortedProducts.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

    case "alphabetical-desc":
      return sortedProducts.sort((a, b) =>
        b.title.localeCompare(a.title)
      );

    default:
      return sortedProducts;
  }
}

export default sortProducts;