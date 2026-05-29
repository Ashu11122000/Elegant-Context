import PropTypes from "prop-types";

import {
  FaBoxOpen,
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
  /* ================= LOADING ================= */

  if (loading) {
    return (
      <section className="space-y-10">
        {/* Loading Hero */}
        <div className="relative overflow-hidden rounded-[2.8rem] border border-[#342312] bg-[#0e0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.05),transparent_30%)]" />

          <div className="relative z-10 animate-pulse px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="h-3 w-44 rounded-full bg-[#2b1d10]" />

            <div className="mt-6 h-12 w-[420px] max-w-full rounded-2xl bg-[#2b1d10]" />

            <div className="mt-5 h-5 w-2/3 rounded-full bg-[#2b1d10]" />

            <div className="mt-3 h-5 w-1/2 rounded-full bg-[#2b1d10]" />

            <div className="mt-10 flex gap-4">
              <div className="h-12 w-36 rounded-full bg-[#2b1d10]" />

              <div className="h-12 w-36 rounded-full bg-[#2b1d10]" />
            </div>
          </div>
        </div>

        {/* Skeleton Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >
          {Array.from({ length: 6 }).map(
            (_, index) => (
              <div
                key={`skeleton-${
                  index + 1
                }`}
                className="
                  relative overflow-hidden
                  rounded-[2.2rem]
                  border border-[#322214]
                  bg-[linear-gradient(to_bottom,#181008,#100903)]
                  shadow-[0_25px_70px_rgba(0,0,0,0.5)]
                "
              >
                {/* Shine */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-32 top-0 h-full w-24 animate-[shine_2.6s_linear_infinite] rotate-12 bg-white/5 blur-2xl" />
                </div>

                {/* Image */}
                <div className="aspect-[4/5] w-full animate-pulse bg-[#2b1d10]" />

                {/* Content */}
                <div className="space-y-5 p-6">
                  <div className="h-3 w-28 rounded-full bg-[#2b1d10]" />

                  <div className="h-7 w-4/5 rounded-2xl bg-[#2b1d10]" />

                  <div className="h-4 w-2/3 rounded-full bg-[#2b1d10]" />

                  <div className="h-6 w-24 rounded-full bg-[#2b1d10]" />

                  <div className="h-14 w-full rounded-[1.4rem] bg-[#2b1d10]" />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    );
  }

  /* ================= EMPTY ================= */

  if (!products.length) {
    return (
      <section className="relative overflow-hidden rounded-[2.8rem] border border-[#342312] bg-[#0d0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.05),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

        <div className="relative flex min-h-[620px] items-center justify-center px-6 py-16 text-center sm:px-10">
          <div className="max-w-2xl">
            {/* Icon */}
            <div className="relative mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4cf87] via-[#dcaa4d] to-[#be7c1f] shadow-[0_25px_55px_rgba(237,191,104,0.35)]">
              <div className="absolute inset-[1px] rounded-[1.9rem] bg-[linear-gradient(to_bottom,#f4d28f,#d79735)] opacity-90" />

              <span className="relative z-10 text-5xl text-[#2d1702]">
                <FaBoxOpen />
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

              <span className="text-[10px] font-black uppercase tracking-[0.42em] text-[#d2a967]">
                Premium Discovery
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-7 text-[2.6rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[3.3rem]">
              No Products
              <span className="block text-[#ca9740]">
                Available
              </span>
            </h3>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.9] text-[#b6946a] sm:text-lg">
              {emptyMessage}
            </p>

            {/* CTA Pills */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#f0c372]/10 bg-[#1c120a] px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <HiSparkles className="text-[#f0c372]" />

                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                  Refine Search
                </span>
              </div>

              <div className="rounded-full border border-[#f0c372]/10 bg-[#1c120a] px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                  Explore Collections
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ================= MAIN ================= */

  return (
    <section className="space-y-10">
      {/* ================= GRID ================= */}
      <section
        aria-label="Product grid"
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          items-start
        "
      >
        {products.map((product) => (
          <div
            key={`${
              product.category ||
              "product"
            }-${product.id}`}
            className="w-full min-w-0"
          >
            <ProductCard
              product={product}
              variant="grid"
              showWishlist={
                showWishlist
              }
              showQuickView={
                showQuickView
              }
              onWishlistToggle={
                onWishlistToggle
              }
              onQuickView={onQuickView}
            />
          </div>
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