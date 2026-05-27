import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

function ProductList({
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
      <div className="space-y-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`list-skeleton-${index + 1}`}
            className="overflow-hidden rounded-2xl border border-[#edbf68]/10 bg-[#31230c] animate-pulse"
          >
            <div className="flex flex-col md:flex-row">
              <div className="h-72 w-full bg-[#2d1f08] md:h-auto md:w-80 md:flex-shrink-0" />

              <div className="flex-1 space-y-4 p-6">
                <div className="h-3 w-24 rounded bg-[#2d1f08]" />
                <div className="h-6 w-2/3 rounded bg-[#2d1f08]" />
                <div className="h-4 w-40 rounded bg-[#2d1f08]" />
                <div className="h-5 w-28 rounded bg-[#2d1f08]" />
                <div className="h-11 w-40 rounded bg-[#2d1f08]" />
              </div>
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
    <section aria-label="Product list" className="space-y-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          variant="list"
          showWishlist={showWishlist}
          showQuickView={showQuickView}
          onWishlistToggle={onWishlistToggle}
          onQuickView={onQuickView}
        />
      ))}
    </section>
  );
}

ProductList.propTypes = {
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

export default ProductList;