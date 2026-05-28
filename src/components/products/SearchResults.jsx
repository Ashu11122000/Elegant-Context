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

  if (String(minPrice).trim() || String(maxPrice).trim()) {
    const min = minPrice || "0";
    const max = maxPrice || "∞";

    activeFilters.push({
      label: `₹${min} - ₹${max}`,
      icon: <FaFilter />,
    });
  }

  const hasActiveFilters = activeFilters.length > 0;

  const resultMessage =
    totalResults === 0
      ? "No Premium Matches Found"
      : totalResults === 1
        ? "1 Curated Luxury Product Found"
        : `${totalResults} Curated Luxury Products Found`;

  return (
    <section
      aria-label="Search results summary"
      className="
        relative mb-10 overflow-hidden rounded-[2.2rem]
        border border-[#d6b57b]/12
        bg-gradient-to-br from-[#19130d] via-[#120f0b] to-[#0b0805]
        shadow-[0_30px_100px_rgba(0,0,0,0.55)]
      "
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-200/5 blur-3xl" />

      {/* Premium Border Shine */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] border border-white/[0.03]" />

      <div className="relative z-10 p-7 lg:p-10">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
          {/* Left Content */}
          <div className="flex flex-1 flex-col gap-7">
            {/* Header */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              {/* Premium Icon */}
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.8rem] border border-[#f0c879]/20 bg-gradient-to-br from-[#f0c879] via-[#d9a84d] to-[#9c6921] text-3xl text-[#241405] shadow-[0_18px_40px_rgba(240,200,121,0.22)]">
                <div className="absolute inset-[1px] rounded-[1.7rem] border border-white/10" />

                <FaSearch className="relative z-10" />
              </div>

              {/* Heading Content */}
              <div className="max-w-3xl">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b57b]/12 bg-[#241b13]/80 px-4 py-1.5 backdrop-blur-xl">
                  <FaCrown className="text-[10px] text-[#f0c879]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a56c]">
                    Discovery Results
                  </span>
                </div>

                <h2 className="mt-5 text-[2rem] font-black leading-tight tracking-tight text-[#f5efe4] lg:text-[2.8rem]">
                  {resultMessage}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ae9879] lg:text-[15px]">
                  Explore refined luxury selections curated according to your
                  premium shopping preferences, trusted ratings, categories, and
                  intelligent discovery filters.
                </p>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters ? (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <FaFilter className="text-[11px] text-[#f0c879]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b7935a]">
                    Active Premium Filters
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeFilters.map((filter) => (
                    <div
                      key={filter.label}
                      className="
                        group relative overflow-hidden rounded-full
                        border border-[#f0c879]/15
                        bg-gradient-to-r from-[#2a2015] to-[#1b140d]
                        px-5 py-3
                        text-sm font-semibold
                        text-[#d9bb8f]
                        shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-[#f0c879]/30
                      "
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f0c879]/0 via-[#f0c879]/5 to-[#f0c879]/0 opacity-0 transition duration-500 group-hover:opacity-100" />

                      <div className="relative z-10 flex items-center gap-3">
                        <span className="text-xs text-[#f0c879]">
                          {filter.icon}
                        </span>

                        {filter.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-[1.7rem] border border-[#d6b57b]/10 bg-[#18120d]/80 p-5 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f0c879]/10 bg-gradient-to-br from-[#f0c879]/10 to-[#f0c879]/5 text-[#f0c879]">
                    <FaGem />
                  </div>

                  <div>
                    <p className="text-sm font-bold tracking-wide text-[#f5efe4]">
                      Full Premium Collection
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-[#ab9575]">
                      Showing the complete luxury catalog with no active
                      discovery filters applied.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Insights */}
          <div className="flex flex-col gap-5 xl:min-w-[320px] xl:items-end">
            {/* Stats Cards */}
            <div className="grid w-full grid-cols-2 gap-4">
              {/* Results */}
              <div
                className="
                  relative overflow-hidden rounded-[1.7rem]
                  border border-[#d6b57b]/10
                  bg-gradient-to-br from-[#241b13] to-[#15100c]
                  p-5
                  shadow-[0_12px_30px_rgba(0,0,0,0.3)]
                "
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#f0c879]/5 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b7935a]">
                      Results
                    </p>

                    <FaChartLine className="text-[#f0c879]" />
                  </div>

                  <p className="mt-4 text-4xl font-black tracking-tight text-[#f5efe4]">
                    {totalResults}
                  </p>

                  <p className="mt-2 text-xs text-[#998366]">
                    Premium matches
                  </p>
                </div>
              </div>

              {/* Filters */}
              <div
                className="
                  relative overflow-hidden rounded-[1.7rem]
                  border border-[#d6b57b]/10
                  bg-gradient-to-br from-[#241b13] to-[#15100c]
                  p-5
                  shadow-[0_12px_30px_rgba(0,0,0,0.3)]
                "
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#f0c879]/5 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b7935a]">
                      Filters
                    </p>

                    <FaFilter className="text-[#f0c879]" />
                  </div>

                  <p className="mt-4 text-4xl font-black tracking-tight text-[#f5efe4]">
                    {activeFilters.length}
                  </p>

                  <p className="mt-2 text-xs text-[#998366]">
                    Active discovery
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            {hasActiveFilters && (
              <Button
                onClick={onClearFilters}
                className="
                  group relative overflow-hidden
                  rounded-[1.4rem]
                  border border-[#f0c879]/20
                  bg-gradient-to-r from-[#f0c879] via-[#d9a84d] to-[#b97a1c]
                  px-8 py-4
                  font-bold
                  tracking-wide
                  text-[#241405]
                  shadow-[0_18px_40px_rgba(240,200,121,0.22)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_25px_50px_rgba(240,200,121,0.28)]
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaUndoAlt />
                  Reset Discovery Filters
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

SearchResults.propTypes = {
  totalResults: PropTypes.number,
  searchQuery: PropTypes.string,
  selectedCategory: PropTypes.string,
  selectedRating: PropTypes.number,
  minPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClearFilters: PropTypes.func.isRequired,
};

export default SearchResults;