import PropTypes from "prop-types";
import {
  FaHeart,
  FaGem,
  FaArrowRight,
  FaCrown,
  FaStar,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import ProductGrid from "./ProductGrid";

function SimilarProducts({
  products = [],
  currentProductId,
  title = "You May Also Like",
  subtitle = "Curated luxury recommendations inspired by your premium selection and refined shopping preferences.",
  limit = 4,
  onWishlistToggle,
  onQuickView,
}) {
  const filteredProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, limit);

  if (!filteredProducts.length) {
    return null;
  }

  const recommendationStats = [
    {
      label: "Curated Picks",
      value: filteredProducts.length,
      icon: <HiSparkles />,
    },
    {
      label: "Luxury Match",
      value: "Premium",
      icon: <FaGem />,
    },
  ];

  return (
    <section
      aria-label="Similar products"
      className="space-y-12"
    >
      {/* Ultra Premium Header */}
      <div
        className="
          relative overflow-hidden rounded-[2.2rem]
          border border-[#d6b57b]/12
          bg-gradient-to-br from-[#19130d] via-[#120f0b] to-[#0b0805]
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
        "
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-200/5 blur-3xl" />

        {/* Border Shine */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] border border-white/[0.03]" />

        <div className="relative z-10 px-7 py-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            {/* Left Content */}
            <div className="max-w-3xl">
              {/* Top Premium Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b57b]/15 bg-[#241b13]/80 px-4 py-1.5 backdrop-blur-xl">
                <FaCrown className="text-[10px] text-[#f0c879]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a56c]">
                  Personalized Recommendations
                </span>
              </div>

              {/* Main Header */}
              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
                {/* Icon */}
                <div
                  className="
                    relative flex h-20 w-20 shrink-0
                    items-center justify-center
                    rounded-[1.8rem]
                    border border-[#f0c879]/20
                    bg-gradient-to-br from-[#f0c879] via-[#d9a84d] to-[#9c6921]
                    text-3xl text-[#241405]
                    shadow-[0_18px_40px_rgba(240,200,121,0.22)]
                  "
                >
                  <div className="absolute inset-[1px] rounded-[1.7rem] border border-white/10" />

                  <FaHeart className="relative z-10" />
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-[2rem] font-black leading-tight tracking-tight text-[#f5efe4] lg:text-[2.7rem]">
                    {title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#ae9879] lg:text-[15px]">
                    {subtitle}
                  </p>

                  {/* AI Badge */}
                  <div
                    className="
                      mt-6 inline-flex items-center gap-3
                      rounded-full
                      border border-[#f0c879]/15
                      bg-gradient-to-r from-[#2a2015] to-[#1b140d]
                      px-5 py-3
                      text-sm font-semibold
                      text-[#f0c879]
                      shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                    "
                  >
                    <HiSparkles />
                    AI-inspired premium product curation
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Stats */}
            <div className="grid grid-cols-2 gap-4">
              {recommendationStats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    relative overflow-hidden rounded-[1.8rem]
                    border border-[#d6b57b]/10
                    bg-gradient-to-br from-[#241b13] to-[#15100c]
                    px-6 py-5
                    shadow-[0_12px_30px_rgba(0,0,0,0.3)]
                    backdrop-blur-xl
                  "
                >
                  {/* Glow */}
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#f0c879]/5 blur-2xl" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="text-xl text-[#f0c879]">
                        {stat.icon}
                      </div>

                      <FaStar className="text-[10px] text-[#7c6547]" />
                    </div>

                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b7935a]">
                      {stat.label}
                    </p>

                    <p className="mt-3 text-3xl font-black tracking-tight text-[#f5efe4]">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Product Grid */}
      <div className="relative">
        {/* Decorative Background Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r from-amber-400/[0.02] via-transparent to-yellow-200/[0.02]" />

        <ProductGrid
          products={filteredProducts}
          showWishlist
          showQuickView
          onWishlistToggle={onWishlistToggle}
          onQuickView={onQuickView}
        />
      </div>

      {/* Bottom CTA */}
      <div
        className="
          relative overflow-hidden rounded-[2rem]
          border border-[#d6b57b]/10
          bg-gradient-to-r from-[#181106] via-[#120d08] to-[#0c0805]
          p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)]
        "
      >
        {/* Glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f0c879]/5 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c879]/10 bg-[#241b13]/70 px-4 py-1.5">
              <FaGem className="text-[10px] text-[#f0c879]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a56c]">
                Continue Discovery
              </span>
            </div>

            <h3 className="mt-5 text-[1.8rem] font-black tracking-tight text-[#f5efe4]">
              Continue Your Luxury Journey
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#ab9575] lg:text-[15px]">
              Explore more premium collections, iconic fashion essentials, and
              luxury discoveries tailored for modern refined lifestyles.
            </p>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            className="
              group relative overflow-hidden
              rounded-[1.5rem]
              border border-[#f0c879]/20
              bg-gradient-to-r from-[#f0c879] via-[#d9a84d] to-[#b97a1c]
              px-7 py-4
              font-bold tracking-wide
              text-[#241405]
              shadow-[0_18px_40px_rgba(240,200,121,0.22)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_25px_50px_rgba(240,200,121,0.28)]
            "
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            <span className="relative z-10 flex items-center gap-3">
              Explore More Collections

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
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
  currentProductId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  limit: PropTypes.number,
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default SimilarProducts;