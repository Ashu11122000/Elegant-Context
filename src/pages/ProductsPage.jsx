import { useState } from "react";
import { FaThLarge, FaList } from "react-icons/fa";
import products from "../data/products";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import ProductList from "../components/products/ProductList";
import SearchResults from "../components/products/SearchResults";
import Button from "../components/common/Button";

function ProductsPage() {
  const [viewMode, setViewMode] = useState("grid");

  const handleWishlistToggle = (product) => {
    console.log("Wishlist toggle:", product);
  };

  const handleQuickView = (product) => {
    console.log("Quick view:", product);
  };

  return (
    <section className="min-h-screen bg-[#271e07] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#d7c3a0]">
            Luxury Collection
          </p>

          <h1 className="mb-4 text-4xl font-bold text-[#f5e6c8] md:text-5xl">
            Discover Premium Fashion
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-[#d7c3a0]">
            Explore curated luxury fashion and accessories crafted for modern elegance.
          </p>
        </div>

        <ProductFilter products={products}>
          {({
            filteredProducts,
            filterState,
            resetFilters,
          }) => (
            <>
              <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <SearchResults
                  totalResults={filteredProducts.length}
                  searchQuery={filterState.searchQuery}
                  selectedCategory={filterState.selectedCategory}
                  selectedRating={filterState.selectedRating}
                  minPrice={filterState.minPrice}
                  maxPrice={filterState.maxPrice}
                  onClearFilters={resetFilters}
                />

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => setViewMode("grid")}
                    className={`px-4 py-3 ${
                      viewMode === "grid"
                        ? ""
                        : "bg-[#31230c] text-[#edbf68] hover:bg-[#3a2a0f]"
                    }`}
                  >
                    <FaThLarge size={16} />
                  </Button>

                  <Button
                    onClick={() => setViewMode("list")}
                    className={`px-4 py-3 ${
                      viewMode === "list"
                        ? ""
                        : "bg-[#31230c] text-[#edbf68] hover:bg-[#3a2a0f]"
                    }`}
                  >
                    <FaList size={16} />
                  </Button>
                </div>
              </div>

              {viewMode === "grid" ? (
                <ProductGrid
                  products={filteredProducts}
                  showWishlist
                  showQuickView
                  onWishlistToggle={handleWishlistToggle}
                  onQuickView={handleQuickView}
                />
              ) : (
                <ProductList
                  products={filteredProducts}
                  showWishlist
                  showQuickView
                  onWishlistToggle={handleWishlistToggle}
                  onQuickView={handleQuickView}
                />
              )}
            </>
          )}
        </ProductFilter>
      </div>
    </section>
  );
}

export default ProductsPage;