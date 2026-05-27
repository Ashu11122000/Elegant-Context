import fashionProducts from "./fashion";
import accessoriesProducts from "./accessories";

const normalizeProduct = (product, categoryPrefix) => ({
  ...product,
  id: `${categoryPrefix}-${product.id}`,
  name: product.title,
});

const PRODUCTS = [
  ...fashionProducts.map((product) => normalizeProduct(product, "fashion")),
  ...accessoriesProducts.map((product) =>
    normalizeProduct(product, "accessories")
  ),
];

export const FEATURED_PRODUCTS = PRODUCTS.filter(
  (product) => product.featured
);

export const TRENDING_PRODUCTS = PRODUCTS.filter(
  (product) => product.trending
);

export const NEW_PRODUCTS = PRODUCTS.filter(
  (product) => product.isNew
);

export const PRODUCT_CATEGORIES = [
  ...new Set(PRODUCTS.map((product) => product.category)),
];

export const PRODUCT_SUBCATEGORIES = [
  ...new Set(PRODUCTS.map((product) => product.subcategory)),
];

export const PRODUCT_BRANDS = [
  ...new Set(PRODUCTS.map((product) => product.brand)),
];

export const IN_STOCK_PRODUCTS = PRODUCTS.filter(
  (product) => product.stock > 0
);

export const OUT_OF_STOCK_PRODUCTS = PRODUCTS.filter(
  (product) => product.stock === 0
);

export const PRODUCTS_BY_CATEGORY = PRODUCT_CATEGORIES.reduce(
  (accumulator, category) => {
    accumulator[category] = PRODUCTS.filter(
      (product) => product.category === category
    );
    return accumulator;
  },
  {}
);

export const PRODUCTS_BY_BRAND = PRODUCT_BRANDS.reduce(
  (accumulator, brand) => {
    accumulator[brand] = PRODUCTS.filter(
      (product) => product.brand === brand
    );
    return accumulator;
  },
  {}
);

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