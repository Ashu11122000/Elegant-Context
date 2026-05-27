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
  return (
    <aside
      aria-label="Product filters"
      className="space-y-6"
    >
      <div className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-6">
        <ProductSearch
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onClearSearch={onClearSearch}
        />
      </div>

      <div className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-6">
        <SortDropdown
          selectedSort={selectedSort}
          onSortChange={onSortChange}
        />
      </div>

      <div className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-6">
        <RatingFilter
          selectedRating={selectedRating}
          onRatingChange={onRatingChange}
        />
      </div>

      <div className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-6">
        <PriceFilter
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={onMinPriceChange}
          onMaxPriceChange={onMaxPriceChange}
          onApplyPriceFilter={onApplyPriceFilter}
          onClearPriceFilter={onClearPriceFilter}
        />
      </div>

      <div className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-6">
        <BrandFilter
          brands={brands}
          selectedBrand={selectedBrand}
          onBrandChange={onBrandChange}
        />
      </div>

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