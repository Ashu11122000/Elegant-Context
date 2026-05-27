import PropTypes from "prop-types";
import {
  FaSearch,
  FaSparkles,
  FaFilter,
  FaTags,
  FaUndoAlt,
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
      ? "No premium matches found"
      : totalResults === 1
        ? "1 curated premium product found"
        : `${totalResults} curated premium products found`;

  return (
    <section
      aria-label="Search results summary"
      className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1308] via-[#151005] to-[#100a04] shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
    >
      <div className="p-8 lg:p-10">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-2xl text-[#1a1205] shadow-[0_15px_40px_rgba(237,191,104,0.25)]">
                <FaSearch />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
                  Discovery Results
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-[#f8e8c8] lg:text-4xl">
                  {resultMessage}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#a88f68]">
                  Explore premium selections curated according to your shopping
                  preferences, trust filters, and luxury discovery criteria.
                </p>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters ? (
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
                  Active Filters
                </p>

                <div className="flex flex-wrap gap-3">
                  {activeFilters.map((filter) => (
                    <div
                      key={filter.label}
                      className="flex items-center gap-3 rounded-full border border-amber-300/15 bg-amber-400/10 px-5 py-3 text-sm font-medium text-[#edbf68]"
                    >
                      <span className="text-xs">{filter.icon}</span>
                      {filter.label}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/8 bg-white/5 px-5 py-4">
                <p className="text-sm text-[#d7c3a0]">
                  Showing the complete premium collection with no active filters.
                </p>
              </div>
            )}
          </div>

          {/* Right Insights */}
          <div className="flex flex-col gap-5 xl:items-end">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/8 bg-white/5 px-6 py-5 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7855]">
                  Results
                </p>

                <p className="mt-3 text-3xl font-semibold text-[#f8e8c8]">
                  {totalResults}
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/5 px-6 py-5 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7855]">
                  Filters
                </p>

                <p className="mt-3 text-3xl font-semibold text-[#f8e8c8]">
                  {activeFilters.length}
                </p>
              </div>
            </div>

            {/* Clear CTA */}
            {hasActiveFilters && (
              <Button
                onClick={onClearFilters}
                className="rounded-2xl bg-gradient-to-r from-[#edbf68] to-[#d79b35] px-8 py-4 font-semibold text-[#1a1205] shadow-[0_12px_35px_rgba(237,191,104,0.25)] hover:scale-[1.02]"
              >
                <span className="flex items-center gap-3">
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