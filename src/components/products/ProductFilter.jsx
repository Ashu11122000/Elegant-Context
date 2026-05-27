import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import FilterPanel from "./FilterPanel";
import filterProducts from "../../utils/filterProducts";
import sortProducts from "../../utils/sortProducts";

function ProductFilter({
  products = [],
  children,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedSort, setSelectedSort] = useState("featured");
  const [selectedRating, setSelectedRating] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [appliedMinPrice, setAppliedMinPrice] = useState("");
  const [appliedMaxPrice, setAppliedMaxPrice] = useState("");

  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ];
  }, [products]);

  const brands = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.brand)
          .filter(Boolean)
      ),
    ];
  }, [products]);

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

  const filterState = {
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedSort,
    selectedRating,
    minPrice: appliedMinPrice,
    maxPrice: appliedMaxPrice,
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
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

      <div>
        {children({
          filteredProducts,
          filterState,
          resetFilters: handleResetFilters,
        })}
      </div>
    </div>
  );
}

ProductFilter.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      brand: PropTypes.string,
    })
  ),
  children: PropTypes.func.isRequired,
};

export default ProductFilter;