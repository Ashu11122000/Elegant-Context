import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

function ProductGrid({
  products = [],
  loading = false,
  emptyMessage = "No products found.",
  showWishlist = true,
  showQuickView = true,
  onWishlistToggle,
  onQuickView,
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={`skeleton-${index + 1}`}
            className="overflow-hidden rounded-2xl border border-[#edbf68]/10 bg-[#31230c] animate-pulse"
          >
            <div className="h-80 w-full bg-[#2d1f08]" />

            <div className="space-y-4 p-5">
              <div className="h-3 w-24 rounded bg-[#2d1f08]" />
              <div className="h-5 w-3/4 rounded bg-[#2d1f08]" />
              <div className="h-4 w-1/2 rounded bg-[#2d1f08]" />
              <div className="h-5 w-1/3 rounded bg-[#2d1f08]" />
              <div className="h-11 w-full rounded bg-[#2d1f08]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-[#edbf68]/10 bg-[#31230c] px-6 text-center">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-[#f5e6c8]">
            No Products Available
          </h3>
          <p className="text-[#d7c3a0]">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <section
      aria-label="Product grid"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          variant="grid"
          showWishlist={showWishlist}
          showQuickView={showQuickView}
          onWishlistToggle={onWishlistToggle}
          onQuickView={onQuickView}
        />
      ))}
    </section>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
  loading: PropTypes.bool,
  emptyMessage: PropTypes.string,
  showWishlist: PropTypes.bool,
  showQuickView: PropTypes.bool,
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default ProductGrid;