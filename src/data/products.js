import fashionProducts from "./fashion";
import accessoriesProducts from "./accessories";

const PRODUCTS = [
  ...fashionProducts,
  ...accessoriesProducts,
];

// Featured products
export const FEATURED_PRODUCTS = PRODUCTS.filter(
  (product) => product.featured
);

// Trending products
export const TRENDING_PRODUCTS = PRODUCTS.filter(
  (product) => product.trending
);

// Newly launched products
export const NEW_PRODUCTS = PRODUCTS.filter(
  (product) => product.isNew
);

// Unique top-level categories
export const PRODUCT_CATEGORIES = [
  ...new Set(PRODUCTS.map((product) => product.category)),
];

// Unique subcategories
export const PRODUCT_SUBCATEGORIES = [
  ...new Set(PRODUCTS.map((product) => product.subcategory)),
];

// Unique brands
export const PRODUCT_BRANDS = [
  ...new Set(PRODUCTS.map((product) => product.brand)),
];

// In-stock products
export const IN_STOCK_PRODUCTS = PRODUCTS.filter(
  (product) => product.stock > 0
);

// Out-of-stock products
export const OUT_OF_STOCK_PRODUCTS = PRODUCTS.filter(
  (product) => product.stock === 0
);

// Products grouped by category
export const PRODUCTS_BY_CATEGORY = PRODUCT_CATEGORIES.reduce(
  (accumulator, category) => {
    accumulator[category] = PRODUCTS.filter(
      (product) => product.category === category
    );
    return accumulator;
  },
  {}
);

// Products grouped by brand
export const PRODUCTS_BY_BRAND = PRODUCT_BRANDS.reduce(
  (accumulator, brand) => {
    accumulator[brand] = PRODUCTS.filter(
      (product) => product.brand === brand
    );
    return accumulator;
  },
  {}
);

// Products grouped by subcategory
export const PRODUCTS_BY_SUBCATEGORY = PRODUCT_SUBCATEGORIES.reduce(
  (accumulator, subcategory) => {
    accumulator[subcategory] = PRODUCTS.filter(
      (product) => product.subcategory === subcategory
    );
    return accumulator;
  },
  {}
);

export default PRODUCTS;