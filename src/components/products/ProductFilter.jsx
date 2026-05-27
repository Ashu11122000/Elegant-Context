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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");
  const [selectedBrand, setSelectedBrand] =
    useState("all");
  const [selectedSort, setSelectedSort] =
    useState("featured");
  const [selectedRating, setSelectedRating] =
    useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [appliedMinPrice, setAppliedMinPrice] =
    useState("");
  const [appliedMaxPrice, setAppliedMaxPrice] =
    useState("");

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
    const filtered = filterProducts(products, {
      searchQuery,
      category: selectedCategory,
      brand: selectedBrand,
      rating: selectedRating,
      minPrice: appliedMinPrice,
      maxPrice: appliedMaxPrice,
    });

    return sortProducts(filtered, selectedSort);
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
    if (selectedCategory !== "all") count++;
    if (selectedBrand !== "all") count++;
    if (selectedRating > 0) count++;
    if (appliedMinPrice || appliedMaxPrice) count++;

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
    },
    {
      label: "Collections",
      value: categories.length,
    },
    {
      label: "Brands",
      value: brands.length,
    },
    {
      label: "Active Filters",
      value: activeFilters,
    },
  ];

  return (
    <section className="space-y-10">
      {/* Premium Discovery Header */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1308] via-[#151005] to-[#100a04] shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
        <div className="px-8 py-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
                Elegant Context Discovery
              </p>

              <h1 className="mt-5 text-4xl font-semibold text-[#f8e8c8] lg:text-5xl">
                Curated Premium Shopping Experience
              </h1>

              <p className="mt-5 text-base leading-relaxed text-[#a88f68]">
                Explore refined collections with intelligent filtering,
                personalized discovery, and premium luxury shopping tools
                designed for confident purchasing.
              </p>
            </div>

            {activeFilters > 0 && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="rounded-full border border-amber-300/20 bg-amber-400/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#edbf68] transition-all duration-300 hover:bg-amber-400/20"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Discovery Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {discoveryStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-300/15 hover:bg-white/[0.07]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
                  {stat.label}
                </p>

                <p className="mt-3 text-3xl font-semibold text-[#f8e8c8]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
        <FilterPanel
          categories={categories}
          brands={brands}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          selectedBrand={selectedBrand}
          selectedSort={selectedSort}
          selectedRating={selectedRating}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onSearchChange={setSearchQuery}
          onClearSearch={() => setSearchQuery("")}
          onCategoryChange={setSelectedCategory}
          onBrandChange={setSelectedBrand}
          onSortChange={setSelectedSort}
          onRatingChange={setSelectedRating}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          onApplyPriceFilter={handleApplyPriceFilter}
          onClearPriceFilter={handleClearPriceFilter}
          onResetFilters={handleResetFilters}
        />

        <div className="min-w-0">
          {typeof children === "function" ? (
            children({
              filteredProducts,
              filterState,
              resetFilters: handleResetFilters,
              activeFilters,
              totalProducts: products.length,
            })
          ) : filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <NoDataFound
              title="No Products Found"
              message="Try adjusting your filters or search criteria to discover premium products."
            />
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