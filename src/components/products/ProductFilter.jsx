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
      label: "Products",
      value: filteredProducts.length,
      icon: "✦",
      description:
        "Luxury items available",
    },
    {
      label: "Collections",
      value: categories.length,
      icon: "◈",
      description:
        "Curated categories",
    },
    {
      label: "Brands",
      value: brands.length,
      icon: "⬢",
      description:
        "Premium labels",
    },
    {
      label: "Filters",
      value: activeFilters,
      icon: "⚡",
      description:
        "Smart refinements",
    },
  ];

  return (
    <section className="space-y-14 lg:space-y-16">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden rounded-[2.8rem] border border-[#352412] bg-[#0d0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.05),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

        <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 xl:px-12 xl:py-14">
          {/* Header */}
          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            {/* Left */}
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

                <span className="text-[10px] font-black uppercase tracking-[0.42em] text-[#d2a967]">
                  Luxury Product Discovery
                </span>
              </div>

              {/* Title */}
              <h1 className="mt-6 text-[2.5rem] font-black leading-[1.05] tracking-tight text-[#fff3df] sm:text-[3.3rem] xl:text-[4.4rem]">
                Premium Shopping
                <span className="block bg-gradient-to-r from-[#f3cb82] via-[#ffe5b5] to-[#c8872d] bg-clip-text text-transparent">
                  Collection
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-sm leading-[2] text-[#b89467] sm:text-base">
                Explore luxury fashion collections with intelligent
                filtering, premium discovery tools, curated
                recommendations, and elevated shopping experiences
                designed for modern lifestyles.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Curated Fashion",
                  "Premium Brands",
                  "Luxury Shopping",
                  "Smart Discovery",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#f0c372]/10 bg-[#1c130b]/90 px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-4 xl:flex-col xl:items-end">
              <div className="rounded-[1.8rem] border border-[#3a2815] bg-[linear-gradient(to_bottom,#1b1209,#140c06)] px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#8e6c44]">
                  Total Products
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-tight text-[#fff1db]">
                  {products.length}
                </h3>
              </div>

              {activeFilters > 0 && (
                <button
                  type="button"
                  onClick={
                    handleResetFilters
                  }
                  className="group relative overflow-hidden rounded-full border border-[#f0c372]/15 bg-[linear-gradient(to_right,#2a190b,#1d1208)] px-7 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c372] transition-all duration-300 hover:border-[#f0c372]/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="relative z-10">
                    Reset Filters
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {discoveryStats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[2rem] border border-[#302012] bg-[linear-gradient(to_bottom,#1b1209,#130b06)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e1b261]/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-16 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
                </div>

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-[1.3rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dca84b] to-[#bf7c1f] shadow-[0_15px_40px_rgba(237,191,104,0.28)]">
                  <span className="text-2xl font-black text-[#2d1702]">
                    {stat.icon}
                  </span>
                </div>

                {/* Label */}
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                  {stat.label}
                </p>

                {/* Value */}
                <h3 className="mt-4 text-[2.6rem] font-black leading-none tracking-tight text-[#fff1db]">
                  {stat.value}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-[1.8] text-[#b18c61]">
                  {stat.description}
                </p>

                {/* Footer */}
                <div className="mt-5 inline-flex rounded-full border border-[#f0c372]/10 bg-[#22160b] px-4 py-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
                    Real-Time
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="grid gap-8 xl:grid-cols-[360px_1fr]">
        {/* FILTER PANEL */}
        <div className="min-w-0">
          <div className="sticky top-6">
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
          </div>
        </div>

        {/* ================= PRODUCTS AREA ================= */}
        <div className="min-w-0">
          {/* Results Header */}
          <div className="relative mb-8 overflow-hidden rounded-[2.2rem] border border-[#342313] bg-[linear-gradient(to_bottom,#171006,#100903)] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.5)] sm:p-7">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#f0c372]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              {/* Left */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

                  <span className="text-[10px] font-black uppercase tracking-[0.36em] text-[#d0a765]">
                    Search Results
                  </span>
                </div>

                <h2 className="mt-5 text-[2rem] font-black tracking-tight text-[#fff3df] sm:text-[2.4rem]">
                  Curated Product Results
                </h2>

                <p className="mt-4 text-sm leading-[1.9] text-[#b59368]">
                  Explore refined luxury collections matched to
                  your search preferences, premium filters, and
                  personalized shopping selections.
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-[#f0c372]/10 bg-[#1f140a] px-5 py-3">
                  <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                    {filteredProducts.length} Products
                  </span>
                </div>

                <div className="rounded-full border border-[#f0c372]/10 bg-[#1f140a] px-5 py-3">
                  <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                    {activeFilters} Active Filters
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= PRODUCT GRID ================= */}
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
            <div className="rounded-[2.3rem] border border-[#342313] bg-[linear-gradient(to_bottom,#140d07,#0f0905)] p-4 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
              <ProductGrid
                products={filteredProducts}
              />
            </div>
          ) : (
            <div className="rounded-[2.3rem] border border-[#342313] bg-[linear-gradient(to_bottom,#171006,#100903)] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
              <NoDataFound
                title="No Products Found"
                message="Try adjusting your filters, categories, price range, or search preferences to discover more premium collections."
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