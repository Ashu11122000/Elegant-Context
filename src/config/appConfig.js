// src/config/appConfig.js

import { ENV } from "./env";

const APP_CONFIG = {
  app: {
    name: ENV.APP_NAME || "Elegant Context",
    version: ENV.APP_VERSION || "1.0.0",
    apiBaseUrl: ENV.API_BASE_URL || "",
    environment: ENV.NODE_ENV || "development",
  },

  pagination: {
    defaultProductsPerPage: 12,
    relatedProductsLimit: 4,
    featuredProductsLimit: 8,
    trendingProductsLimit: 8,
    bestSellersLimit: 8,
    testimonialsLimit: 6,
  },

  search: {
    debounceDelay: 400,
    minSearchCharacters: 2,
    maxRecentSearches: 8,
  },

  cart: {
    maxQuantityPerItem: 10,
    minQuantityPerItem: 1,
    shippingThreshold: 4999,
    shippingFee: 199,
    taxRate: 0.18,
  },

  wishlist: {
    maxItems: 100,
  },

  product: {
    defaultImageFallback: "/images/fallback-product.jpg",
    ratingScale: 5,
    maxGalleryImages: 6,
  },

  ui: {
    toastDuration: 3000,
    loaderDelay: 300,
    animationDuration: 300,
  },

  auth: {
    tokenExpiryHours: 24,
    rememberMeDays: 30,
  },
};

export default APP_CONFIG;