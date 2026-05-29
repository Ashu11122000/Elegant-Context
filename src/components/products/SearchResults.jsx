import PropTypes from "prop-types";

import {
  FaSearch,
  FaSparkles,
  FaFilter,
  FaTags,
  FaUndoAlt,
  FaCrown,
  FaChartLine,
  FaGem,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import Button from "../UI/Button";

function SearchResults({
  totalResults = 0,
  searchQuery = "",
  selectedCategory = "all",
  selectedRating = 0,
  minPrice = "",
  maxPrice = "",
  onClearFilters,
}) {
  const activeFilters = [];

  if (searchQuery.trim()) {
    activeFilters.push({
      label: `Search: "${searchQuery}"`,
      icon: <FaSearch />,
    });
  }

  if (selectedCategory !== "all") {
    activeFilters.push({
      label: `Category: ${selectedCategory}`,
      icon: <FaTags />,
    });
  }

  if (selectedRating > 0) {
    activeFilters.push({
      label: `${selectedRating}★ & Up`,
      icon: <FaSparkles />,
    });
  }

  if (
    String(minPrice).trim() ||
    String(maxPrice).trim()
  ) {
    const min = minPrice || "0";
    const max = maxPrice || "∞";

    activeFilters.push({
      label: `₹${min} - ₹${max}`,
      icon: <FaFilter />,
    });
  }

  const hasActiveFilters =
    activeFilters.length > 0;

  const resultMessage =
    totalResults === 0
      ? "No Products Found"
      : totalResults === 1
        ? "1 Product Found"
        : `${totalResults} Products Found`;

  return (
    <section
      aria-label="Search results summary"
      className="
        relative mb-10 overflow-hidden rounded-[2.6rem]
        border border-[#352514]
        bg-[#0d0906]
        shadow-[0_45px_120px_rgba(0,0,0,0.75)]
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.04),transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#f0c372]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#f0c372]/5 blur-3xl" />

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
          {/* ================= LEFT SECTION ================= */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Icon */}
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dca94b] to-[#c8862b] shadow-[0_20px_40px_rgba(237,191,104,0.25)]">
                <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/10" />

                <FaSearch className="relative z-10 text-3xl text-[#2d1702]" />
              </div>

              {/* Content */}
              <div className="max-w-4xl">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c372]/10 bg-[#1c120a] px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
                  <FaCrown className="text-[10px] text-[#f0c372]" />

                  <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#d2a967]">
                    Discovery Results
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-[2.1rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[2.8rem]">
                  {resultMessage}
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-3xl text-sm leading-[2] text-[#b69469] sm:text-base">
                  Explore premium collections, refined
                  fashion pieces, curated essentials, and
                  luxury discoveries tailored to your
                  intelligent shopping preferences.
                </p>
              </div>
            </div>

            {/* ================= ACTIVE FILTERS ================= */}
            {hasActiveFilters ? (
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0c372]/10 bg-[#1d130a] text-[#f0c372]">
                    <FaFilter className="text-sm" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d0a664]">
                      Active Filters
                    </p>

                    <p className="mt-1 text-sm text-[#9f8059]">
                      Intelligent refinement applied
                    </p>
                  </div>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-3">
                  {activeFilters.map((filter) => (
                    <div
                      key={filter.label}
                      className="
                        group relative overflow-hidden rounded-full
                        border border-[#f0c372]/10
                        bg-[linear-gradient(to_bottom,#1d130a,#140d07)]
                        px-5 py-3
                        shadow-[0_12px_25px_rgba(0,0,0,0.25)]
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-[#f0c372]/20
                      "
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                      </div>

                      <div className="relative z-10 flex items-center gap-3">
                        <span className="text-xs text-[#f0c372]">
                          {filter.icon}
                        </span>

                        <span className="text-sm font-semibold text-[#d8ba8f]">
                          {filter.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* ================= FULL COLLECTION ================= */
              <div className="relative overflow-hidden rounded-[2rem] border border-[#352514] bg-[linear-gradient(to_bottom,#171007,#100903)] p-6 shadow-[0_25px_55px_rgba(0,0,0,0.35)]">
                {/* Accent */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c372] to-[#9c6b23]" />

                {/* Glow */}
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#f0c372]/5 blur-3xl" />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.5rem] border border-[#f0c372]/15 bg-gradient-to-br from-[#f0c372]/15 to-[#f0c372]/5 text-[#f0c372]">
                    <FaGem className="text-lg" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-black tracking-wide text-[#fff1db]">
                        Complete Luxury Collection
                      </p>

                      <FaArrowRight className="text-[10px] text-[#f0c372]" />
                    </div>

                    <p className="mt-3 max-w-4xl text-sm leading-[1.9] text-[#ae8d62]">
                      Showing the complete premium
                      collection with no active filters,
                      allowing full product discovery and
                      unrestricted browsing experiences.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="flex flex-col gap-5 xl:w-[360px]">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Results Card */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#352514] bg-[linear-gradient(to_bottom,#1a120b,#120c07)] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c372]/15">
                {/* Glow */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#f0c372]/5 blur-2xl" />

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                </div>

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c69e61]">
                      Results
                    </p>

                    <FaChartLine className="text-[#f0c372]" />
                  </div>

                  {/* Value */}
                  <p className="mt-5 text-[3rem] font-black leading-none tracking-tight text-[#fff1db]">
                    {totalResults}
                  </p>

                  {/* Label */}
                  <p className="mt-3 text-xs text-[#9e7f59]">
                    Matching Products
                  </p>
                </div>
              </div>

              {/* Filters Card */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#352514] bg-[linear-gradient(to_bottom,#1a120b,#120c07)] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c372]/15">
                {/* Glow */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#f0c372]/5 blur-2xl" />

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                </div>

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c69e61]">
                      Filters
                    </p>

                    <FaFilter className="text-[#f0c372]" />
                  </div>

                  {/* Value */}
                  <p className="mt-5 text-[3rem] font-black leading-none tracking-tight text-[#fff1db]">
                    {activeFilters.length}
                  </p>

                  {/* Label */}
                  <p className="mt-3 text-xs text-[#9e7f59]">
                    Active Refinements
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RESET BUTTON ================= */}
            {hasActiveFilters && (
              <Button
                onClick={onClearFilters}
                className="
                  group relative overflow-hidden
                  rounded-[1.7rem]
                  border border-[#f0c372]/20
                  bg-gradient-to-r from-[#f4ce85] via-[#dca94b] to-[#c8862b]
                  px-8 py-5
                  text-sm font-black
                  uppercase
                  tracking-[0.12em]
                  text-[#2d1702]
                  shadow-[0_20px_45px_rgba(237,191,104,0.22)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_28px_60px_rgba(237,191,104,0.28)]
                "
              >
                {/* Shine */}
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaUndoAlt />

                  Reset All Filters
                </span>
              </Button>
            )}

            {/* ================= TRUST NOTE ================= */}
            <div className="rounded-[1.8rem] border border-[#352514] bg-[#130c07] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f0c372]/15 bg-gradient-to-br from-[#f0c372]/15 to-[#f0c372]/5 text-[#f0c372]">
                  <FaCheckCircle />
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-black tracking-wide text-[#fff1db]">
                    Smart Discovery Insights
                  </p>

                  <p className="mt-2 text-sm leading-[1.8] text-[#aa8b63]">
                    Results dynamically adapt using
                    intelligent filtering, premium
                    categories, verified ratings, and
                    luxury shopping preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SearchResults.propTypes = {
  totalResults: PropTypes.number,
  searchQuery: PropTypes.string,
  selectedCategory:
    PropTypes.string,
  selectedRating:
    PropTypes.number,
  minPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClearFilters:
    PropTypes.func.isRequired,
};

export default SearchResults;