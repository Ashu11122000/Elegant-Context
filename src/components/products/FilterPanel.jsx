import PropTypes from "prop-types";
import ProductSearch from "./ProductSearch";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import SortDropdown from "./SortDropdown";
import CategorySidebar from "./CategorySidebar";

function FilterPanel({
  categories = [],
  brands = [],
  searchQuery = "",
  selectedCategory = "all",
  selectedBrand = "all",
  selectedSort = "featured",
  selectedRating = 0,
  minPrice = "",
  maxPrice = "",
  onSearchChange,
  onClearSearch,
  onCategoryChange,
  onBrandChange,
  onSortChange,
  onRatingChange,
  onMinPriceChange,
  onMaxPriceChange,
  onApplyPriceFilter,
  onClearPriceFilter,
  onResetFilters,
}) {
  const activeFilters = [];

  if (searchQuery) activeFilters.push(`Search: "${searchQuery}"`);
  if (selectedCategory !== "all") activeFilters.push(selectedCategory);
  if (selectedBrand !== "all") activeFilters.push(selectedBrand);
  if (selectedRating > 0) activeFilters.push(`${selectedRating}+ Stars`);
  if (minPrice || maxPrice) {
    activeFilters.push(
      `₹${minPrice || 0} - ₹${maxPrice || "Any"}`
    );
  }

  return (
    <aside
      aria-label="Product filters"
      className="sticky top-24 space-y-6"
    >
      {/* Master Shell */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1b1308]/95 via-[#161005]/95 to-[#100a04]/95 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
        {/* Header */}
        <div className="border-b border-white/8 px-6 py-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8f7855]">
                Elegant Context
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#f8e8c8]">
                Refine Your Discovery
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
                Curate your premium shopping journey with intelligent filters,
                tailored sorting, and luxury discovery tools.
              </p>
            </div>

            <button
              type="button"
              onClick={onResetFilters}
              className="rounded-full border border-amber-300/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d7c3a0] transition-all duration-300 hover:border-amber-300/30 hover:bg-amber-400/10 hover:text-[#edbf68]"
            >
              Reset
            </button>
          </div>

          {/* Active Filter Summary */}
          <div className="mt-6 rounded-2xl border border-white/8 bg-white/5 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
              Active Filters
            </p>

            {activeFilters.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-amber-300/15 bg-amber-400/10 px-3 py-2 text-[11px] font-medium capitalize tracking-wide text-[#edbf68]"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm text-[#9e8864]">
                No active filters. Explore the full premium collection.
              </p>
            )}
          </div>
        </div>

        {/* Search */}
        <section className="border-b border-white/6 px-6 py-6">
          <ProductSearch
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            onClearSearch={onClearSearch}
          />
        </section>

        {/* Sort */}
        <section className="border-b border-white/6 px-6 py-6">
          <SortDropdown
            selectedSort={selectedSort}
            onSortChange={onSortChange}
          />
        </section>

        {/* Rating */}
        <section className="border-b border-white/6 px-6 py-6">
          <RatingFilter
            selectedRating={selectedRating}
            onRatingChange={onRatingChange}
          />
        </section>

        {/* Price */}
        <section className="border-b border-white/6 px-6 py-6">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={onMinPriceChange}
            onMaxPriceChange={onMaxPriceChange}
            onApplyPriceFilter={onApplyPriceFilter}
            onClearPriceFilter={onClearPriceFilter}
          />
        </section>

        {/* Brand */}
        <section className="px-6 py-6">
          <BrandFilter
            brands={brands}
            selectedBrand={selectedBrand}
            onBrandChange={onBrandChange}
          />
        </section>
      </div>

      {/* Category Discovery */}
      <CategorySidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        onResetFilters={onResetFilters}
      />
    </aside>
  );
}

FilterPanel.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  brands: PropTypes.arrayOf(PropTypes.string),
  searchQuery: PropTypes.string,
  selectedCategory: PropTypes.string,
  selectedBrand: PropTypes.string,
  selectedSort: PropTypes.string,
  selectedRating: PropTypes.number,
  minPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onSearchChange: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onBrandChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onMinPriceChange: PropTypes.func.isRequired,
  onMaxPriceChange: PropTypes.func.isRequired,
  onApplyPriceFilter: PropTypes.func.isRequired,
  onClearPriceFilter: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
};

export default FilterPanel;