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
      <section className="space-y-10">
        {/* Loading Hero */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#392712] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.06),transparent_30%),linear-gradient(to_bottom,#1b1207,#130d05,#0d0703)] shadow-[0_35px_100px_rgba(0,0,0,0.6)]">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />

          <div className="relative animate-pulse px-8 py-10 lg:px-10">
            <div className="h-3 w-44 rounded-full bg-[#2d1f08]" />

            <div className="mt-6 h-12 w-[420px] max-w-full rounded-2xl bg-[#2d1f08]" />

            <div className="mt-5 h-5 w-2/3 rounded-full bg-[#2d1f08]" />

            <div className="mt-3 h-5 w-1/2 rounded-full bg-[#2d1f08]" />
          </div>
        </div>

        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 8 }).map(
            (_, index) => (
              <div
                key={`skeleton-${
                  index + 1
                }`}
                className="relative overflow-hidden rounded-[2rem] border border-[#392712] bg-[linear-gradient(to_bottom,#1b1207,#130d05,#0d0703)] shadow-[0_25px_70px_rgba(0,0,0,0.45)]"
              >
                {/* Shine */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="animate-[shine_2.5s_linear_infinite] absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
                </div>

                {/* Image */}
                <div className="aspect-[4/5] w-full animate-pulse bg-[#2d1f08]" />

                {/* Content */}
                <div className="space-y-5 p-6">
                  <div className="h-3 w-28 rounded-full bg-[#2d1f08]" />

                  <div className="h-7 w-4/5 rounded-2xl bg-[#2d1f08]" />

                  <div className="h-4 w-2/3 rounded-full bg-[#2d1f08]" />

                  <div className="h-6 w-24 rounded-full bg-[#2d1f08]" />

                  <div className="h-14 w-full rounded-[1.4rem] bg-[#2d1f08]" />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    );
  }

  if (!products.length) {
    return (
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#392712] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_32%),linear-gradient(to_bottom,#1b1207,#130d05,#0d0703)] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
        {/* Decorative Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative flex min-h-[620px] items-center justify-center px-8 text-center">
          <div className="max-w-2xl">
            {/* Icon */}
            <div className="relative mx-auto mb-10 flex h-28 w-28 items-center justify-center overflow-hidden rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f0c372] via-[#ddab4e] to-[#c78628] text-5xl text-[#2f1903] shadow-[0_20px_50px_rgba(237,191,104,0.35)]">
              <span className="absolute inset-0 bg-white/10 opacity-40" />

              <span className="relative z-10">
                <FaBoxOpen />
              </span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#caa26a]">
                Elegant Context
              </p>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-[3rem] font-black tracking-tight text-[#fff1da]">
              No Products Available
            </h3>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#b6946a]">
              {emptyMessage}
            </p>

            {/* CTA Pills */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#f0c372]/15 bg-[#241507]/90 px-6 py-4 backdrop-blur-xl">
                <HiSparkles className="text-[#f0c372]" />

                <span className="text-sm font-black uppercase tracking-[0.18em] text-[#f0c372]">
                  Refine Your Discovery
                </span>
              </div>

              <div className="rounded-full border border-[#f0c372]/15 bg-[#241507]/90 px-6 py-4 backdrop-blur-xl">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-[#f0c372]">
                  Luxury Collections
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-10">
      {/* Editorial Hero */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#392712] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.06),transparent_30%),linear-gradient(to_bottom,#1b1207,#130d05,#0d0703)] shadow-[0_35px_100px_rgba(0,0,0,0.6)]">
        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />

        {/* Floating Glow */}
        <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative z-10 px-8 py-10 lg:px-10 lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Content */}
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

                <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#cba46a]">
                  Curated Collection
                </p>
              </div>

              {/* Title */}
              <h2 className="mt-6 text-[2.8rem] font-black leading-tight tracking-tight text-[#fff1da] lg:text-[4rem]">
                Discover Premium
                <span className="block bg-gradient-to-r from-[#f0c372] via-[#ffe1a8] to-[#c78628] bg-clip-text text-transparent">
                  Luxury Fashion
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#b59469]">
                Explore elevated essentials,
                curated designer pieces, and
                premium collections crafted for
                refined modern lifestyles and
                luxury fashion experiences.
              </p>

              {/* Pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Premium Quality",
                  "Luxury Fashion",
                  "Curated Essentials",
                  "Modern Elegance",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#f0c372]/10 bg-[#241507]/90 px-5 py-3"
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-5 lg:justify-end">
              {/* Product Count */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#392712] bg-gradient-to-br from-[#241608]/95 to-[#1a1007]/95 px-8 py-7 text-center shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c372]/25">
                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                </div>

                <p className="relative text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                  Products
                </p>

                <h3 className="relative mt-4 text-[3.5rem] font-black tracking-tight text-[#fff0d7]">
                  {products.length}
                </h3>

                <p className="relative mt-2 text-xs text-[#aa8961]">
                  Luxury selections
                </p>
              </div>

              {/* Shopping */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#392712] bg-gradient-to-br from-[#241608]/95 to-[#1a1007]/95 px-8 py-7 text-center shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c372]/25">
                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                </div>

                <p className="relative text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
                  Shopping
                </p>

                <div className="relative mt-5 flex justify-center text-5xl text-[#f0c372]">
                  <FaShoppingBag />
                </div>

                <p className="relative mt-3 text-xs text-[#aa8961]">
                  Premium experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section
        aria-label="Product grid"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {products.map((product) => (
          <ProductCard
            key={`${
              product.category ||
              "product"
            }-${product.id}`}
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