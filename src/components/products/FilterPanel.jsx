import PropTypes from "prop-types";
import {
  FiCheckCircle,
  FiFilter,
  FiLayers,
  FiRefreshCw,
  FiSearch,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

import ProductSearch from "./ProductSearch";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";
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

  const sections = [
    {
      label: "Smart Search",
      title: "Find Luxury Products",
      badge: "AI Discovery",
      icon: FiSearch,
      content: (
        <ProductSearch
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onClearSearch={onClearSearch}
        />
      ),
    },
    {
      label: "Smart Sorting",
      title: "Organize Your Experience",
      badge: "Realtime",
      icon: FiLayers,
      content: (
        <SortDropdown
          selectedSort={selectedSort}
          onSortChange={onSortChange}
        />
      ),
    },
    {
      label: "Customer Ratings",
      title: "Trusted Premium Picks",
      badge: "Verified",
      icon: FiStar,
      content: (
        <RatingFilter
          selectedRating={selectedRating}
          onRatingChange={onRatingChange}
        />
      ),
    },
    {
      label: "Price Range",
      title: "Luxury Budget Control",
      badge: "Flexible",
      icon: FiTrendingUp,
      content: (
        <PriceFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={onMinPriceChange}
          onMaxPriceChange={onMaxPriceChange}
          onApplyPriceFilter={onApplyPriceFilter}
          onClearPriceFilter={onClearPriceFilter}
        />
      ),
    },
  ];

  return (
    <aside
      aria-label="Product filters"
      className="sticky top-24 space-y-7"
    >
      <div className="relative overflow-hidden rounded-[2.4rem] border border-[#3b2912] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_30%),linear-gradient(to_bottom,#1a1108,#120c05,#0c0703)] shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />

        <div className="pointer-events-none absolute -top-24 right-[-90px] h-72 w-72 rounded-full bg-[#f0c372]/10 blur-3xl" />

        {/* HEADER STARTS HERE */}
                {/* ================= PREMIUM HEADER ================= */}
        <div className="relative border-b border-[#34230f] px-7 py-8 sm:px-8">
          <div className="flex flex-col items-center justify-center gap-7 text-center">
            {/* Discovery Badge */}
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

              <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#cba46a]">
                Elegant Discovery
              </p>
            </div>

            {/* Title */}
            <div className="mx-auto max-w-[280px]">
              <h2 className="text-[2.25rem] font-black leading-[1.05] tracking-[-0.04em] text-[#fff2dd]">
                Premium Shopping

                <span className="block bg-gradient-to-r from-[#f0c372] via-[#ffe1a8] to-[#c8862b] bg-clip-text text-transparent">
                  Filters & Discovery
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[260px] text-sm leading-[1.9] text-[#b49267]">
                Refine your shopping journey
                using intelligent discovery
                tools, curated categories,
                advanced sorting, luxury
                ratings, and personalized
                recommendations.
              </p>
            </div>

            {/* Reset */}
            <button
              type="button"
              onClick={onResetFilters}
              className="
                group relative overflow-hidden
                rounded-full
                border border-[#e0b161]/15
                bg-[#241507]
                px-7 py-3
                text-[10px]
                font-black
                uppercase
                tracking-[0.22em]
                text-[#ddb97c]
                transition-all duration-300
                hover:border-[#e0b161]/40
                hover:bg-[#2c1b0c]
                hover:text-[#fff1d6]
              "
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative z-10 flex items-center gap-2">
                <FiRefreshCw size={12} />
                Reset Filters
              </span>
            </button>

            {/* ================= STATS ================= */}
            <div className="grid w-full grid-cols-3 gap-3">
            {[
              {
                label: "Active",
                value: activeFilters.length,
                icon: FiFilter,
              },
              {
                label: "Categories",
                value: categories.length,
                icon: FiLayers,
              },
              {
                label: "Brands",
                value: brands.length,
                icon: FiCheckCircle,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  flex min-h-[120px] flex-col
                  items-center justify-center
                  rounded-[1.8rem]
                  border border-[#3d2a15]
                bg-[#1b1208]/80
                  px-3 py-5
                  text-center
                  shadow-inner
                "
              >
              <item.icon
                  size={18}
                  className="text-[#f0c372]"
              />

              <span className="mt-3 text-[1.7rem] font-black leading-none text-[#fff1d6]">
                {item.value}
              </span>

              <p className="mt-3 text-center text-[9px] font-black uppercase tracking-[0.14em] text-[#a7865d]">
                  {item.label}
              </p>
            </div>
          ))}
        </div>

            {/* ================= ACTIVE FILTERS ================= */}
            <div className="w-full overflow-hidden rounded-[1.9rem] border border-[#453018] bg-gradient-to-br from-[#241507] via-[#1a1007] to-[#120b04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex flex-col items-center justify-center gap-5 text-center">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9c7849]">
                    Active Filters
                  </p>

                  <h3 className="mt-3 text-[1.4rem] font-black text-[#fff0d7]">
                    Personalized Discovery
                  </h3>
                </div>

                <div className="rounded-full border border-[#f0c372]/15 bg-[#2a190b] px-5 py-2">
                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
                    {activeFilters.length} Active
                  </span>
                </div>
              </div>

              {activeFilters.length ? (
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  {activeFilters.map((filter) => (
                    <span
                      key={filter}
                      className="
                        rounded-full
                        border border-[#e0b161]/15
                        bg-gradient-to-r
                        from-[#33200e]
                        to-[#261708]
                        px-4 py-2
                        text-[11px]
                        font-bold
                        tracking-wide
                        text-[#f0c372]
                      "
                    >
                      {filter}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-[1.5rem] border border-dashed border-[#4a3418] bg-[#1a1007]/80 px-5 py-5 text-center">
                  <p className="mx-auto max-w-[240px] text-sm leading-[1.9] text-[#aa8961]">
                    No filters selected.
                    Explore the complete
                    collection with unrestricted
                    premium discovery.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
                {/* ================= FILTER SECTIONS ================= */}
        <div className="relative px-6 py-6 sm:px-7">
          <div className="space-y-5">
            {sections.map((section) => (
              <section
                key={section.title}
                className="
                  overflow-hidden
                  rounded-[1.9rem]
                  border border-[#32210f]
                  bg-gradient-to-b
                  from-[#1b1208]
                  to-[#140c05]
                  shadow-[0_12px_35px_rgba(0,0,0,0.22)]
                "
              >
                {/* Section Header */}
                <div className="border-b border-[#2b1d0d] px-6 py-6">
                  <div className="flex flex-col items-center justify-center gap-4 text-center">
                    {/* Label */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <section.icon
                          size={14}
                          className="text-[#f0c372]"
                        />

                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                          {section.label}
                        </p>
                      </div>

                      <h4 className="mt-3 text-[1.15rem] font-extrabold leading-tight text-[#f9ead1]">
                        {section.title}
                      </h4>
                    </div>

                    {/* Badge */}
                    <div className="mx-auto rounded-full border border-[#f0c372]/10 bg-[#261709] px-4 py-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d5ae72]">
                        {section.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className="px-6 py-6">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
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
