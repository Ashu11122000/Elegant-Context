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
  /* ================= LOADING ================= */

  if (loading) {
    return (
      <section className="space-y-10">
        {/* Hero Skeleton */}
        <div className="relative overflow-hidden rounded-[2.8rem] border border-[#342312] bg-[#0d0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.04),transparent_30%)]" />

          <div className="relative z-10 animate-pulse px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="h-3 w-40 rounded-full bg-[#2b1d10]" />

            <div className="mt-6 h-12 w-[420px] max-w-full rounded-2xl bg-[#2b1d10]" />

            <div className="mt-5 h-5 w-2/3 rounded-full bg-[#2b1d10]" />

            <div className="mt-3 h-5 w-1/2 rounded-full bg-[#2b1d10]" />

            <div className="mt-10 flex gap-4">
              <div className="h-12 w-40 rounded-full bg-[#2b1d10]" />

              <div className="h-12 w-40 rounded-full bg-[#2b1d10]" />
            </div>
          </div>
        </div>

        {/* Skeleton List */}
        <div className="space-y-7">
          {Array.from({ length: 6 }).map(
            (_, index) => (
              <div
                key={`list-skeleton-${
                  index + 1
                }`}
                className="relative overflow-hidden rounded-[2.5rem] border border-[#322214] bg-[linear-gradient(to_bottom,#181008,#100903)] shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
              >
                {/* Shine */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -left-32 top-0 h-full w-24 animate-[shine_2.6s_linear_infinite] rotate-12 bg-white/5 blur-2xl" />
                </div>

                <div className="flex flex-col xl:flex-row">
                  {/* Image */}
                  <div className="aspect-[4/5] w-full animate-pulse bg-[#2b1d10] xl:w-[360px] xl:flex-shrink-0" />

                  {/* Content */}
                  <div className="flex-1 space-y-6 p-8">
                    <div className="h-3 w-28 rounded-full bg-[#2b1d10]" />

                    <div className="h-8 w-3/4 rounded-2xl bg-[#2b1d10]" />

                    <div className="h-5 w-52 rounded-full bg-[#2b1d10]" />

                    <div className="h-5 w-36 rounded-full bg-[#2b1d10]" />

                    <div className="h-24 w-full rounded-2xl bg-[#2b1d10]" />

                    <div className="h-14 w-56 rounded-[1.5rem] bg-[#2b1d10]" />
                  </div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.04),transparent_30%)]" />

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
                Editorial Discovery
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-7 text-[2.7rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[3.4rem]">
              No Products
              <span className="block text-[#c99640]">
                Available
              </span>
            </h3>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.9] text-[#b6946a] sm:text-lg">
              {emptyMessage}
            </p>

            {/* CTA */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#f0c372]/10 bg-[#1c120a] px-7 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <FaSparkles className="text-[#f0c372]" />

              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                Refine Your Search
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ================= MAIN ================= */

  return (
    <section className="space-y-10">
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden rounded-[2.8rem] border border-[#342312] bg-[#0d0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.04),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            {/* Left */}
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

                <span className="text-[10px] font-black uppercase tracking-[0.42em] text-[#d2a967]">
                  Editorial Browse Mode
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-6 text-[2.5rem] font-black leading-[1.05] tracking-tight text-[#fff3df] sm:text-[3.2rem] xl:text-[4.2rem]">
                Luxury Editorial
                <span className="block bg-gradient-to-r from-[#f3cb82] via-[#ffe4b3] to-[#c8862b] bg-clip-text text-transparent">
                  Product Discovery
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-sm leading-[2] text-[#b69469] sm:text-base">
                Compare premium products through immersive
                editorial layouts, detailed insights, refined
                storytelling, and elevated luxury shopping
                experiences designed for modern discovery.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Editorial Browse",
                  "Luxury Comparison",
                  "Premium Insights",
                  "Modern Discovery",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#f0c372]/10 bg-[#1c120a] px-5 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-5">
              {/* Products */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#1a1209,#130b06)] px-7 py-6 text-center shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c372]/20">
                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                </div>

                <p className="relative text-[10px] font-black uppercase tracking-[0.26em] text-[#8d6d43]">
                  Products
                </p>

                <h3 className="relative mt-4 text-[3rem] font-black leading-none tracking-tight text-[#fff1db]">
                  {products.length}
                </h3>

                <p className="relative mt-3 text-xs text-[#ad8b62]">
                  Curated selections
                </p>
              </div>

              {/* Mode */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#1a1209,#130b06)] px-7 py-6 text-center shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c372]/20">
                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                </div>

                <p className="relative text-[10px] font-black uppercase tracking-[0.26em] text-[#8d6d43]">
                  View Mode
                </p>

                <div className="relative mt-5 flex justify-center text-4xl text-[#f0c372]">
                  <FaListUl />
                </div>

                <p className="relative mt-3 text-xs text-[#ad8b62]">
                  Editorial layout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT LIST ================= */}
      <section
        aria-label="Product list"
        className="space-y-7"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-[2.4rem] border border-[#322214] bg-[linear-gradient(to_bottom,#171007,#0f0904)] p-1.5 shadow-[0_30px_70px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-[#f0c372]/18 hover:shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
          >
            {/* Shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
            </div>

            {/* Inner */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <ProductCard
                product={product}
                variant="list"
                showWishlist={
                  showWishlist
                }
                showQuickView={
                  showQuickView
                }
                onWishlistToggle={
                  onWishlistToggle
                }
                onQuickView={
                  onQuickView
                }
              />
            </div>
          </div>
        ))}
      </section>

      {/* ================= BOTTOM NOTE ================= */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#322214] bg-[linear-gradient(to_bottom,#171007,#0f0904)] p-7 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:p-8">
        {/* Glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dcaa4d] to-[#c8872c] text-2xl text-[#2d1702] shadow-[0_15px_35px_rgba(237,191,104,0.28)]">
            <FaLayerGroup />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d0a664]">
                Luxury Comparison Experience
              </span>
            </div>

            <h3 className="mt-4 text-[2rem] font-black leading-tight tracking-tight text-[#fff3df]">
              Compare Premium Collections
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-[1.9] text-[#b69469] sm:text-[15px]">
              Editorial list mode helps you compare product
              specifications, pricing, verified reviews,
              premium features, and curated collections with
              enhanced readability and luxury presentation.
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