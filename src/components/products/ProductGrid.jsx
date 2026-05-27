import PropTypes from "prop-types";
import {
  FaBoxOpen,
  FaShoppingBag,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
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
      <section className="space-y-8">
        {/* Loading Header */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1b1308] via-[#151005] to-[#100a04] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
          <div className="animate-pulse">
            <div className="h-3 w-40 rounded bg-[#2d1f08]" />
            <div className="mt-5 h-10 w-80 rounded bg-[#2d1f08]" />
            <div className="mt-4 h-5 w-2/3 rounded bg-[#2d1f08]" />
          </div>
        </div>

        {/* Premium Skeleton Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={`skeleton-${index + 1}`}
              className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1d1408] via-[#161005] to-[#100a04] shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-pulse"
            >
              <div className="aspect-[4/5] w-full bg-[#2d1f08]" />

              <div className="space-y-5 p-6">
                <div className="h-3 w-28 rounded bg-[#2d1f08]" />
                <div className="h-6 w-4/5 rounded bg-[#2d1f08]" />
                <div className="h-4 w-2/3 rounded bg-[#2d1f08]" />
                <div className="h-6 w-24 rounded bg-[#2d1f08]" />
                <div className="h-12 w-full rounded-2xl bg-[#2d1f08]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!products.length) {
    return (
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1308] via-[#151005] to-[#100a04] shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
        <div className="flex min-h-[500px] items-center justify-center px-8 text-center">
          <div className="max-w-xl">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-4xl text-[#1a1205] shadow-[0_15px_40px_rgba(237,191,104,0.3)]">
              <FaBoxOpen />
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
              Elegant Context
            </p>

            <h3 className="mt-5 text-4xl font-semibold text-[#f8e8c8]">
              No Products Available
            </h3>

            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[#d7c3a0]">
              {emptyMessage}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-amber-300/15 bg-amber-400/10 px-6 py-3 text-sm font-medium text-[#edbf68]">
              <HiSparkles />
              Try refining your discovery filters
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-10">
      {/* Editorial Collection Header */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1b1308] via-[#151005] to-[#100a04] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
        <div className="px-8 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
                Curated Collection
              </p>

              <h2 className="mt-5 text-4xl font-semibold text-[#f8e8c8]">
                Discover Premium Fashion
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#a88f68]">
                Explore elevated essentials, statement pieces, and curated
                premium collections tailored for refined modern lifestyles.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/8 bg-white/5 px-6 py-5 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7855]">
                  Products
                </p>

                <p className="mt-3 text-3xl font-semibold text-[#f8e8c8]">
                  {products.length}
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/5 px-6 py-5 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7855]">
                  Shopping
                </p>

                <div className="mt-3 text-2xl text-[#edbf68]">
                  <FaShoppingBag />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Product Grid */}
      <section
        aria-label="Product grid"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {products.map((product) => (
          <ProductCard
            key={`${product.category || "product"}-${product.id}`}
            product={product}
            variant="grid"
            showWishlist={showWishlist}
            showQuickView={showQuickView}
            onWishlistToggle={onWishlistToggle}
            onQuickView={onQuickView}
          />
        ))}
      </section>
    </section>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      category: PropTypes.string,
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