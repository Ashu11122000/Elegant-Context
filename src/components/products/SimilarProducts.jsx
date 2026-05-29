import PropTypes from "prop-types";

import {
  FaHeart,
  FaGem,
  FaArrowRight,
  FaCrown,
  FaStar,
  FaCheckCircle,
  FaMagic,
  FaLayerGroup,
} from "react-icons/fa";

import ProductGrid from "./ProductGrid";

function SimilarProducts({
  products = [],
  currentProductId,
  title = "You May Also Like",
  subtitle = "Curated recommendations inspired by your selection and refined shopping preferences.",
  limit = 4,
  onWishlistToggle,
  onQuickView,
}) {
  const filteredProducts = products
    .filter(
      (product) =>
        product.id !== currentProductId
    )
    .slice(0, limit);

  if (!filteredProducts.length) {
    return null;
  }

  const recommendationStats = [
    {
      label: "Curated Picks",
      value: filteredProducts.length,
      icon: <FaMagic />,
      note: "Handpicked luxury products",
    },
    {
      label: "Match Quality",
      value: "Premium",
      icon: <FaGem />,
      note: "AI-powered recommendations",
    },
  ];

  return (
    <section
      aria-label="Similar products"
      className="space-y-12"
    >
      {/* ================= HEADER ================= */}
      <div
        className="
          relative overflow-hidden rounded-[2.7rem]
          border border-[#352514]
          bg-[#0d0906]
          shadow-[0_45px_120px_rgba(0,0,0,0.75)]
        "
      >
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.05),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.02),transparent)]" />

        {/* Glow */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#f0c372]/5 blur-3xl" />

        <div className="relative z-10 px-6 py-7 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            {/* ================= LEFT ================= */}
            <div className="max-w-4xl">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c372]/10 bg-[#1a120b] px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
                <FaCrown className="text-[10px] text-[#f0c372]" />

                <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#d2a967]">
                  Personalized Recommendations
                </span>
              </div>

              {/* Main Content */}
              <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Icon */}
                <div
                  className="
                    relative flex h-20 w-20 shrink-0
                    items-center justify-center
                    rounded-[2rem]
                    border border-[#f0c372]/20
                    bg-gradient-to-br from-[#f4ce85] via-[#dca94b] to-[#c8862b]
                    shadow-[0_22px_45px_rgba(237,191,104,0.25)]
                  "
                >
                  <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/10" />

                  <FaHeart className="relative z-10 text-3xl text-[#2d1702]" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h2 className="text-[2rem] font-black leading-tight tracking-tight text-[#fff3df] lg:text-[3rem]">
                    {title}
                  </h2>

                  <p className="mt-5 max-w-3xl text-sm leading-[2] text-[#b69469] lg:text-[15px]">
                    {subtitle}
                  </p>

                  {/* Premium Pills */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    {[
                      "Luxury Essentials",
                      "AI Curated",
                      "Premium Fashion",
                      "Modern Collections",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          rounded-full
                          border border-[#f0c372]/10
                          bg-[linear-gradient(to_bottom,#1d130a,#140d07)]
                          px-5 py-3
                          shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                        "
                      >
                        <span className="text-[11px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:w-[420px]">
              {recommendationStats.map(
                (stat) => (
                  <div
                    key={stat.label}
                    className="
                      group relative overflow-hidden rounded-[2rem]
                      border border-[#352514]
                      bg-[linear-gradient(to_bottom,#1a120b,#120c07)]
                      p-6
                      shadow-[0_20px_45px_rgba(0,0,0,0.35)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#f0c372]/15
                    "
                  >
                    {/* Glow */}
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#f0c372]/5 blur-2xl" />

                    {/* Shine */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                    </div>

                    <div className="relative">
                      {/* Top */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[1.2rem] border border-[#f0c372]/15 bg-[#1c120a] text-[#f0c372]">
                          {stat.icon}
                        </div>

                        <FaStar className="text-[11px] text-[#6f593f]" />
                      </div>

                      {/* Label */}
                      <p className="mt-5 text-[10px] font-black uppercase tracking-[0.24em] text-[#c69e61]">
                        {stat.label}
                      </p>

                      {/* Value */}
                      <h3 className="mt-3 text-[2.8rem] font-black leading-none tracking-tight text-[#fff1db]">
                        {stat.value}
                      </h3>

                      {/* Note */}
                      <p className="mt-3 text-xs leading-relaxed text-[#9f8059]">
                        {stat.note}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <div className="relative">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#f0c372]/[0.03] via-transparent to-[#f0c372]/[0.03]" />

        <ProductGrid
          products={filteredProducts}
          showWishlist
          showQuickView
          onWishlistToggle={
            onWishlistToggle
          }
          onQuickView={onQuickView}
        />
      </div>

      {/* ================= BOTTOM CTA ================= */}
      <div
        className="
          relative overflow-hidden rounded-[2.4rem]
          border border-[#352514]
          bg-[linear-gradient(to_bottom,#171007,#0f0904)]
          shadow-[0_30px_70px_rgba(0,0,0,0.45)]
        "
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

        {/* Glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[#f0c372]/5 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          {/* ================= LEFT ================= */}
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c372]/10 bg-[#1b120b] px-4 py-2">
              <FaGem className="text-[10px] text-[#f0c372]" />

              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#cfa664]">
                Continue Discovery
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-[2rem] font-black tracking-tight text-[#fff1db]">
              Continue Your Luxury Journey
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-[2] text-[#aa8b63] lg:text-[15px]">
              Explore iconic collections,
              premium essentials, elevated
              fashion pieces, and curated
              discoveries tailored for refined
              modern lifestyles.
            </p>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                "Verified Collections",
                "Exclusive Matches",
                "Luxury Fashion",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#d0ab74]"
                >
                  <FaCheckCircle className="text-[11px]" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CTA BUTTON ================= */}
          <button
            type="button"
            className="
              group relative overflow-hidden
              rounded-[1.7rem]
              border border-[#f0c372]/20
              bg-gradient-to-r from-[#f4ce85] via-[#dca94b] to-[#c8862b]
              px-8 py-5
              font-black tracking-[0.08em]
              text-[#2d1702]
              shadow-[0_22px_50px_rgba(237,191,104,0.22)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_30px_60px_rgba(237,191,104,0.28)]
            "
          >
            {/* Shine */}
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative z-10 flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/10">
                <FaLayerGroup />
              </span>

              <span className="flex flex-col items-start">
                <span className="text-sm uppercase tracking-[0.14em]">
                  Explore Collections
                </span>

                <span className="mt-1 text-xs font-semibold text-[#4a2d08]">
                  Discover premium recommendations
                </span>
              </span>

              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

SimilarProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })
  ),
  currentProductId:
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  limit: PropTypes.number,
  onWishlistToggle:
    PropTypes.func,
  onQuickView:
    PropTypes.func,
};

export default SimilarProducts;