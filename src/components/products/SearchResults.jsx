import PropTypes from "prop-types";
import Button from "../common/Button";

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
    activeFilters.push(`Search: "${searchQuery}"`);
  }

  if (selectedCategory !== "all") {
    activeFilters.push(`Category: ${selectedCategory}`);
  }

  if (selectedRating > 0) {
    activeFilters.push(`${selectedRating}★ & up`);
  }

  if (String(minPrice).trim() || String(maxPrice).trim()) {
    const min = minPrice || "0";
    const max = maxPrice || "∞";

    activeFilters.push(`Price: ₹${min} - ₹${max}`);
  }

  return (
    <section
      aria-label="Search results summary"
      className="mb-8 rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-5 md:p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-[#f5e6c8]">
            {totalResults} Product{totalResults !== 1 ? "s" : ""} Found
          </h2>

          {activeFilters.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="rounded-full border border-[#edbf68]/15 bg-[#2d1f08] px-4 py-2 text-sm text-[#d7c3a0]"
                >
                  {filter}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-[#d7c3a0]">
              Showing all available luxury products.
            </p>
          )}
        </div>

        {activeFilters.length > 0 && (
          <Button onClick={onClearFilters}>
            Clear All Filters
          </Button>
        )}
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