// src/config/routes.js

const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_DETAILS: "/products/:slug",
  CATEGORY_PRODUCTS: "/products/category/:category",
  SEARCH_RESULTS: "/search",

  CART: "/cart",
  CHECKOUT: "/checkout",
  CHECKOUT_SUCCESS: "/checkout/success",

  WISHLIST: "/wishlist",

  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",

  ACCOUNT: "/account",
  PROFILE: "/account/profile",
  ORDERS: "/account/orders",
  ORDER_DETAILS: "/account/orders/:orderId",
  ADDRESSES: "/account/addresses",

  ABOUT: "/about",
  CONTACT: "/contact",
  FAQ: "/faq",
  TERMS: "/terms",
  PRIVACY: "/privacy-policy",

  NOT_FOUND: "*",
};

export function generateProductDetailsPath(slug) {
  if (!slug) {
    return ROUTES.PRODUCTS;
  }

  return `/products/${slug}`;
}

export function generateCategoryPath(category) {
  if (!category) {
    return ROUTES.PRODUCTS;
  }

  return `/products/category/${category}`;
}

export function generateOrderDetailsPath(orderId) {
  if (!orderId) {
    return ROUTES.ORDERS;
  }

  return `/account/orders/${orderId}`;
}

export default ROUTES;