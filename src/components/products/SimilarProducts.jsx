import PropTypes from "prop-types";
import {
  FaHeart,
  FaGem,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import ProductGrid from "./ProductGrid";

function SimilarProducts({
  products = [],
  currentProductId,
  title = "You May Also Like",
  subtitle = "Curated luxury recommendations based on your selection.",
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
      label: "Luxury Discovery",
      value: "Premium",
      icon: <FaGem />,
    },
  ];

  return (
    <section
      aria-label="Similar products"
      className="space-y-12"
    >
      {/* Premium Recommendation Header */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1308] via-[#151005] to-[#100a04] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <div className="px-8 py-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Left Content */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-2xl text-[#1a1205] shadow-[0_15px_40px_rgba(237,191,104,0.25)]">
                  <FaHeart />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
                    Personalized Recommendations
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold text-[#f8e8c8]">
                    {title}
                  </h2>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#a88f68]">
                {subtitle}
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-amber-300/15 bg-amber-400/10 px-5 py-3 text-sm font-medium text-[#edbf68]">
                <HiSparkles />
                AI-inspired premium product curation
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {recommendationStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/8 bg-white/5 px-6 py-5 backdrop-blur-xl"
                >
                  <div className="text-xl text-[#edbf68]">
                    {stat.icon}
                  </div>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7855]">
                    {stat.label}
                  </p>

                  <p className="mt-3 text-2xl font-semibold text-[#f8e8c8]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Recommendations */}
      <ProductGrid
        products={filteredProducts}
        showWishlist
        showQuickView
        onWishlistToggle={onWishlistToggle}
        onQuickView={onQuickView}
      />

      {/* Bottom Premium CTA */}
      <div className="rounded-3xl border border-white/8 bg-gradient-to-r from-[#181106] to-[#100a04] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[#f8e8c8]">
              Continue Your Luxury Discovery
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
              Explore more curated premium collections tailored to refined
              shopping preferences.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-2xl border border-amber-300/20 bg-amber-400/10 px-6 py-4 font-semibold text-[#edbf68] transition-all duration-300 hover:bg-amber-400/20"
          >
            Explore More Collections
            <FaArrowRight />
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