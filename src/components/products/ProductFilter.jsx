import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import FilterPanel from "./FilterPanel";
import ProductGrid from "./ProductGrid";
import NoDataFound from "../UI/NoDataFound";
import filterProducts from "../../utils/filterProducts";
import sortProducts from "../../utils/sortProducts";

function ProductFilter({ products = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedSort, setSelectedSort] = useState("featured");
  const [selectedRating, setSelectedRating] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [appliedMinPrice, setAppliedMinPrice] = useState("");
  const [appliedMaxPrice, setAppliedMaxPrice] = useState("");

  const categories = useMemo(
    () => [
      ...new Set(
        products.map((product) => product.category).filter(Boolean)
      ),
    ],
    [products]
  );

  const brands = useMemo(
    () => [
      ...new Set(
        products.map((product) => product.brand).filter(Boolean)
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

  return (
    <section className="grid gap-10 lg:grid-cols-[320px_1fr]">
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
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <NoDataFound
            title="No Products Found"
            message="Try adjusting filters or search for something else."
            actionLabel="Reset Filters"
            onAction={handleResetFilters}
          />
        )}
      </div>
    </section>
  );
}

ProductFilter.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      category: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
    })
  ),
};

export default ProductFilter;