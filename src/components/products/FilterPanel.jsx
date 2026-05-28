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

  if (searchQuery) {
    activeFilters.push(`Search: "${searchQuery}"`);
  }

  if (selectedCategory !== "all") {
    activeFilters.push(selectedCategory);
  }

  if (selectedBrand !== "all") {
    activeFilters.push(selectedBrand);
  }

  if (selectedRating > 0) {
    activeFilters.push(`${selectedRating}+ Stars`);
  }

  if (minPrice || maxPrice) {
    activeFilters.push(
      `₹${minPrice || 0} - ₹${maxPrice || "Any"}`
    );
  }

  return (
    <aside
      aria-label="Product filters"
      className="sticky top-24 space-y-7"
    >
      {/* Main Luxury Shell */}
      <div className="relative overflow-hidden rounded-[2.2rem] border border-[#3b2912] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_28%),linear-gradient(to_bottom,#1b1207,#130d05,#0d0703)] shadow-[0_35px_100px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        {/* Decorative Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />

        {/* Header */}
        <div className="relative border-b border-[#352410] px-7 py-8">
          <div className="flex items-start justify-between gap-5">
            <div className="max-w-[85%]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

                <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#cba46a]">
                  Elegant Context
                </p>
              </div>

              <h2 className="mt-5 text-[2rem] font-black leading-tight tracking-tight text-[#fff2dd]">
                Luxury Discovery Filters
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#b49267]">
                Refine your premium shopping experience using
                intelligent discovery tools, luxury sorting,
                curated categories, and advanced fashion filters.
              </p>
            </div>

            <button
              type="button"
              onClick={onResetFilters}
              className="group relative overflow-hidden rounded-full border border-[#e0b161]/15 bg-[#241507] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-[#ddb97c] transition-all duration-300 hover:border-[#e0b161]/40 hover:bg-[#2c1b0c] hover:text-[#fff1d6]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative z-10">
                Reset
              </span>
            </button>
          </div>

          {/* Active Filter Summary */}
          <div className="mt-7 overflow-hidden rounded-[1.7rem] border border-[#453018] bg-gradient-to-br from-[#241507] via-[#1a1007] to-[#120b04] p-5 shadow-inner">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9c7849]">
                  Active Filters
                </p>

                <h3 className="mt-2 text-lg font-extrabold text-[#fff0d7]">
                  Personalized Discovery
                </h3>
              </div>

              <div className="rounded-full border border-[#f0c372]/15 bg-[#2a190b] px-4 py-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0c372]">
                  {activeFilters.length} Active
                </span>
              </div>
            </div>

            {activeFilters.length ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {activeFilters.map((filter) => (
                  <span
                    key={filter}
                    className="group relative overflow-hidden rounded-full border border-[#e0b161]/15 bg-gradient-to-r from-[#33200e] to-[#261708] px-4 py-2 text-[11px] font-bold capitalize tracking-wide text-[#f0c372] shadow-inner transition-all duration-300 hover:border-[#f0c372]/30 hover:bg-[#3a240d]"
                  >
                    <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="relative z-10">
                      {filter}
                    </span>
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-dashed border-[#4a3418] bg-[#1a1007]/80 px-5 py-4">
                <p className="text-sm leading-relaxed text-[#aa8961]">
                  No filters selected. Browse the complete
                  luxury collection with unrestricted premium
                  discovery.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Filter Sections */}
        <div className="relative">
          {/* Search */}
          <section className="border-b border-[#2f200d] px-7 py-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                  Smart Search
                </p>

                <h4 className="mt-2 text-lg font-extrabold text-[#f9ead1]">
                  Find Premium Products
                </h4>
              </div>

              <div className="rounded-full border border-[#f0c372]/10 bg-[#261709] px-3 py-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d5ae72]">
                  AI Discovery
                </span>
              </div>
            </div>

            <ProductSearch
              searchQuery={searchQuery}
              onSearchChange={onSearchChange}
              onClearSearch={onClearSearch}
            />
          </section>

          {/* Sort */}
          <section className="border-b border-[#2f200d] px-7 py-7">
            <div className="mb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                Smart Sorting
              </p>

              <h4 className="mt-2 text-lg font-extrabold text-[#f9ead1]">
                Organize Your Experience
              </h4>
            </div>

            <SortDropdown
              selectedSort={selectedSort}
              onSortChange={onSortChange}
            />
          </section>

          {/* Rating */}
          <section className="border-b border-[#2f200d] px-7 py-7">
            <div className="mb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                Customer Ratings
              </p>

              <h4 className="mt-2 text-lg font-extrabold text-[#f9ead1]">
                Trusted Luxury Picks
              </h4>
            </div>

            <RatingFilter
              selectedRating={selectedRating}
              onRatingChange={onRatingChange}
            />
          </section>

          {/* Price */}
          <section className="border-b border-[#2f200d] px-7 py-7">
            <div className="mb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                Price Range
              </p>

              <h4 className="mt-2 text-lg font-extrabold text-[#f9ead1]">
                Luxury Budget Control
              </h4>
            </div>

            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinPriceChange={onMinPriceChange}
              onMaxPriceChange={onMaxPriceChange}
              onApplyPriceFilter={
                onApplyPriceFilter
              }
              onClearPriceFilter={
                onClearPriceFilter
              }
            />
          </section>

          {/* Brand */}
          <section className="px-7 py-7">
            <div className="mb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                Designer Brands
              </p>

              <h4 className="mt-2 text-lg font-extrabold text-[#f9ead1]">
                Curated Fashion Houses
              </h4>
            </div>

            <BrandFilter
              brands={brands}
              selectedBrand={selectedBrand}
              onBrandChange={onBrandChange}
            />
          </section>
        </div>
      </div>

      {/* Category Sidebar */}
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
  categories: PropTypes.arrayOf(
    PropTypes.string
  ),
  brands: PropTypes.arrayOf(
    PropTypes.string
  ),
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