import PropTypes from "prop-types";
import {
  FaBoxOpen,
  FaListUl,
  FaSparkles,
  FaLayerGroup,
} from "react-icons/fa";
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
      <section className="space-y-8">
        {/* Premium Loading Header */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1b1308] via-[#151005] to-[#100a04] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
          <div className="animate-pulse">
            <div className="h-3 w-36 rounded bg-[#2d1f08]" />
            <div className="mt-5 h-10 w-72 rounded bg-[#2d1f08]" />
            <div className="mt-4 h-5 w-2/3 rounded bg-[#2d1f08]" />
          </div>
        </div>

        {/* Luxury Skeleton List */}
        <div className="space-y-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`list-skeleton-${index + 1}`}
              className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1b1308] via-[#151005] to-[#100a04] shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-pulse"
            >
              <div className="flex flex-col xl:flex-row">
                <div className="aspect-[4/5] w-full bg-[#2d1f08] xl:w-[340px] xl:flex-shrink-0" />

                <div className="flex-1 space-y-5 p-8">
                  <div className="h-3 w-28 rounded bg-[#2d1f08]" />
                  <div className="h-8 w-3/4 rounded bg-[#2d1f08]" />
                  <div className="h-5 w-48 rounded bg-[#2d1f08]" />
                  <div className="h-5 w-32 rounded bg-[#2d1f08]" />
                  <div className="h-20 w-full rounded bg-[#2d1f08]" />
                  <div className="h-12 w-52 rounded-2xl bg-[#2d1f08]" />
                </div>
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
              <FaSparkles />
              Try adjusting your premium filters
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-10">
      {/* Editorial Header */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1b1308] via-[#151005] to-[#100a04] shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
        <div className="px-8 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
                Premium Browse Mode
              </p>

              <h2 className="mt-5 text-4xl font-semibold text-[#f8e8c8]">
                Editorial Product Discovery
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#a88f68]">
                Compare premium products with richer visual context, detailed
                product insights, and curated editorial browsing experiences.
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
                  View Mode
                </p>

                <div className="mt-3 text-2xl text-[#edbf68]">
                  <FaListUl />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <section
        aria-label="Product list"
        className="space-y-8"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-3xl border border-white/6 bg-white/[0.02] p-1 backdrop-blur-sm"
          >
            <ProductCard
              product={product}
              variant="list"
              showWishlist={showWishlist}
              showQuickView={showQuickView}
              onWishlistToggle={onWishlistToggle}
              onQuickView={onQuickView}
            />
          </div>
        ))}
      </section>

      {/* Bottom Discovery Note */}
      <div className="rounded-3xl border border-white/8 bg-gradient-to-r from-[#181106] to-[#100a04] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-xl text-[#1a1205] shadow-lg">
            <FaLayerGroup />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#f8e8c8]">
              Compare Premium Collections
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#a88f68]">
              List mode helps you compare product details, pricing, ratings,
              and features with greater clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
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