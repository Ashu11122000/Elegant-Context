// src/config/filters.js

const FILTER_CONFIG = {
  categories: [
    {
      label: "All Categories",
      value: "all",
    },
    {
      label: "Fashion",
      value: "fashion",
    },
    {
      label: "Accessories",
      value: "accessories",
    },
  ],

  sortOptions: [
    {
      label: "Featured",
      value: "featured",
    },
    {
      label: "Newest",
      value: "newest",
    },
    {
      label: "Trending",
      value: "trending",
    },
    {
      label: "Best Sellers",
      value: "best-sellers",
    },
    {
      label: "Price: Low to High",
      value: "price-asc",
    },
    {
      label: "Price: High to Low",
      value: "price-desc",
    },
    {
      label: "Highest Rated",
      value: "rating-desc",
    },
    {
      label: "Name: A to Z",
      value: "name-asc",
    },
    {
      label: "Name: Z to A",
      value: "name-desc",
    },
  ],

  ratings: [
    {
      label: "4★ & above",
      value: 4,
    },
    {
      label: "3★ & above",
      value: 3,
    },
    {
      label: "2★ & above",
      value: 2,
    },
    {
      label: "1★ & above",
      value: 1,
    },
  ],

  priceRanges: [
    {
      label: "All Prices",
      min: 0,
      max: Infinity,
      value: "all",
    },
    {
      label: "Under ₹1,000",
      min: 0,
      max: 1000,
      value: "under-1000",
    },
    {
      label: "₹1,000 - ₹2,500",
      min: 1000,
      max: 2500,
      value: "1000-2500",
    },
    {
      label: "₹2,500 - ₹5,000",
      min: 2500,
      max: 5000,
      value: "2500-5000",
    },
    {
      label: "Above ₹5,000",
      min: 5000,
      max: Infinity,
      value: "above-5000",
    },
  ],

  availability: [
    {
      label: "In Stock",
      value: "in-stock",
    },
    {
      label: "Out of Stock",
      value: "out-of-stock",
    },
  ],

  tags: [
    {
      label: "Featured",
      value: "featured",
    },
    {
      label: "Trending",
      value: "trending",
    },
    {
      label: "New Arrival",
      value: "new",
    },
    {
      label: "Best Seller",
      value: "best-seller",
    },
  ],

  defaults: {
    category: "all",
    sortBy: "featured",
    rating: null,
    priceRange: "all",
    availability: null,
    searchQuery: "",
  },
};

export default FILTER_CONFIG;