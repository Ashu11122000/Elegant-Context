import { useMemo, useState } from "react";
import PropTypes from "prop-types";

import FilterPanel from "./FilterPanel";
import ProductGrid from "./ProductGrid";
import NoDataFound from "../UI/NoDataFound";
import filterProducts from "../../utils/filterProducts";
import sortProducts from "../../utils/sortProducts";

function ProductFilter({
  products = [],
  children,
}) {
  const [searchQuery, setSearchQuery] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("all");

  const [selectedBrand, setSelectedBrand] =
    useState("all");

  const [selectedSort, setSelectedSort] =
    useState("featured");

  const [
    selectedRating,
    setSelectedRating,
  ] = useState(0);

  const [minPrice, setMinPrice] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

  const [
    appliedMinPrice,
    setAppliedMinPrice,
  ] = useState("");

  const [
    appliedMaxPrice,
    setAppliedMaxPrice,
  ] = useState("");

  const categories = useMemo(
    () => [
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ],
    [products]
  );

  const brands = useMemo(
    () => [
      ...new Set(
        products
          .map((product) => product.brand)
          .filter(Boolean)
      ),
    ],
    [products]
  );

  const handleApplyPriceFilter = () => {
    setAppliedMinPrice(minPrice);

    setAppliedMaxPrice(maxPrice);
  };

  const handleClearPriceFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    setAppliedMinPrice("");
    setAppliedMaxPrice("");
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSelectedSort("featured");
    setSelectedRating(0);

    setMinPrice("");
    setMaxPrice("");

    setAppliedMinPrice("");
    setAppliedMaxPrice("");
  };

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(
      products,
      {
        searchQuery,
        category: selectedCategory,
        brand: selectedBrand,
        rating: selectedRating,
        minPrice: appliedMinPrice,
        maxPrice: appliedMaxPrice,
      }
    );

    return sortProducts(
      filtered,
      selectedSort
    );
  }, [
    products,
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedRating,
    appliedMinPrice,
    appliedMaxPrice,
    selectedSort,
  ]);

  const activeFilters = useMemo(() => {
    let count = 0;

    if (searchQuery) count++;

    if (selectedCategory !== "all") {
      count++;
    }

    if (selectedBrand !== "all") {
      count++;
    }

    if (selectedRating > 0) {
      count++;
    }

    if (
      appliedMinPrice ||
      appliedMaxPrice
    ) {
      count++;
    }

    return count;
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedRating,
    appliedMinPrice,
    appliedMaxPrice,
  ]);

  const filterState = {
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedSort,
    selectedRating,
    minPrice: appliedMinPrice,
    maxPrice: appliedMaxPrice,
  };

  const discoveryStats = [
    {
      label: "Products Found",
      value: filteredProducts.length,
      icon: "✦",
      description:
        "Luxury products discovered",
    },
    {
      label: "Collections",
      value: categories.length,
      icon: "◈",
      description:
        "Curated premium categories",
    },
    {
      label: "Designer Brands",
      value: brands.length,
      icon: "⬢",
      description:
        "Exclusive fashion houses",
    },
    {
      label: "Active Filters",
      value: activeFilters,
      icon: "⚡",
      description:
        "Smart luxury refinements",
    },
  ];

  return (
    <section className="space-y-12">
      {/* Luxury Discovery Hero */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#392712] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_32%),linear-gradient(to_bottom,#1b1207,#130d05,#0d0703)] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />

        {/* Floating Glow */}
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative z-10 px-8 py-10 lg:px-12 lg:py-14">
          {/* Header */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

                <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#cba46a]">
                  Elegant Context Discovery
                </p>
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-[2.8rem] font-black leading-tight tracking-tight text-[#fff1da] lg:text-[4rem]">
                Curated Luxury Shopping
                <span className="block bg-gradient-to-r from-[#f0c372] via-[#ffe1a8] to-[#c78628] bg-clip-text text-transparent">
                  Experience
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#b59469]">
                Discover premium fashion,
                intelligent filtering,
                personalized recommendations,
                and refined shopping tools
                crafted for modern luxury
                experiences and elevated
                lifestyle aesthetics.
              </p>

              {/* Pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Premium Collections",
                  "Luxury Brands",
                  "AI Discovery",
                  "Smart Filters",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#f0c372]/10 bg-[#241507]/90 px-5 py-3 backdrop-blur-xl"
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            {activeFilters > 0 && (
              <button
                type="button"
                onClick={
                  handleResetFilters
                }
                className="group relative overflow-hidden rounded-full border border-[#f0c372]/20 bg-gradient-to-r from-[#2b1a0b] to-[#1f1308] px-7 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#f0c372] transition-all duration-300 hover:border-[#f0c372]/35 hover:bg-[#2d1c0b]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10">
                  Reset All Filters
                </span>
              </button>
            )}
          </div>

          {/* Discovery Stats */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {discoveryStats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#392712] bg-gradient-to-br from-[#241608]/95 to-[#1a1007]/95 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#e0b161]/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              >
                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                </div>

                {/* Icon */}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.3rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f0c372] via-[#ddab4e] to-[#c78628] text-xl font-black text-[#2f1903] shadow-[0_12px_35px_rgba(237,191,104,0.3)]">
                  <span className="absolute inset-0 bg-white/10 opacity-40" />

                  <span className="relative z-10">
                    {stat.icon}
                  </span>
                </div>

                {/* Label */}
                <p className="relative text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                  {stat.label}
                </p>

                {/* Value */}
                <h3 className="relative mt-4 text-[2.4rem] font-black tracking-tight text-[#fff0d7]">
                  {stat.value}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-relaxed text-[#ad8b62]">
                  {stat.description}
                </p>

                {/* Footer Pill */}
                <div className="relative mt-5 inline-flex rounded-full border border-[#f0c372]/10 bg-[#2a190b] px-3 py-1.5">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                    Live Data
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
        {/* Filters */}
        <FilterPanel
          categories={categories}
          brands={brands}
          searchQuery={searchQuery}
          selectedCategory={
            selectedCategory
          }
          selectedBrand={selectedBrand}
          selectedSort={selectedSort}
          selectedRating={
            selectedRating
          }
          minPrice={minPrice}
          maxPrice={maxPrice}
          onSearchChange={
            setSearchQuery
          }
          onClearSearch={() =>
            setSearchQuery("")
          }
          onCategoryChange={
            setSelectedCategory
          }
          onBrandChange={
            setSelectedBrand
          }
          onSortChange={
            setSelectedSort
          }
          onRatingChange={
            setSelectedRating
          }
          onMinPriceChange={
            setMinPrice
          }
          onMaxPriceChange={
            setMaxPrice
          }
          onApplyPriceFilter={
            handleApplyPriceFilter
          }
          onClearPriceFilter={
            handleClearPriceFilter
          }
          onResetFilters={
            handleResetFilters
          }
        />

        {/* Products Area */}
        <div className="min-w-0">
          {/* Results Header */}
          <div className="mb-8 flex flex-col gap-5 rounded-[2rem] border border-[#392712] bg-[linear-gradient(to_bottom,#181106,#100a04)] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

                <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#caa26a]">
                  Premium Results
                </p>
              </div>

              <h2 className="mt-4 text-[2rem] font-black tracking-tight text-[#fff1da]">
                Refined Luxury Products
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#b59368]">
                Showing curated premium
                collections tailored to your
                luxury discovery preferences.
              </p>
            </div>

            {/* Result Summary */}
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full border border-[#f0c372]/10 bg-[#241507] px-5 py-3">
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                  {filteredProducts.length} Results
                </span>
              </div>

              <div className="rounded-full border border-[#f0c372]/10 bg-[#241507] px-5 py-3">
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                  {activeFilters} Filters Active
                </span>
              </div>
            </div>
          </div>

          {/* Product Content */}
          {typeof children === "function" ? (
            children({
              filteredProducts,
              filterState,
              resetFilters:
                handleResetFilters,
              activeFilters,
              totalProducts:
                products.length,
            })
          ) : filteredProducts.length >
            0 ? (
            <ProductGrid
              products={filteredProducts}
            />
          ) : (
            <div className="rounded-[2rem] border border-[#392712] bg-[linear-gradient(to_bottom,#181106,#100a04)] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
              <NoDataFound
                title="No Luxury Products Found"
                message="Try adjusting your filters, price range, or search preferences to discover premium curated collections."
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

ProductFilter.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      name: PropTypes.string,
      category: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
    })
  ),
  children: PropTypes.func,
};

export default ProductFilter;