import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiClock,
  FiEye,
  FiTrendingUp,
} from "react-icons/fi";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../UI/SectionHeading";
import EmptyState from "../common/EmptyState";
import { TRENDING_PRODUCTS } from "../../data/products";
import ROUTES from "../../config/routes";

function TrendingProducts({ limit = 4 }) {
  const trendingProducts =
    TRENDING_PRODUCTS.slice(0, limit);

  const trendHighlights = [
    {
      icon: FiTrendingUp,
      title: "Trending Picks",
      description:
        "Fast-rising premium products loved by modern shoppers.",
    },
    {
      icon: FiEye,
      title: "Most Viewed",
      description:
        "High-interest fashion essentials gaining attention now.",
    },
    {
      icon: FiClock,
      title: "Limited Momentum",
      description:
        "Trending demand changes quickly—shop before it shifts.",
    },
  ];

  return (
    <section className="bg-[#241907] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              badge="Trending Now"
              title="Most Loved Luxury Picks Right Now"
              subtitle="Explore the premium fashion pieces and accessories currently gaining the most attention from style-conscious shoppers."
              align="left"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trendHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-amber-900/20 bg-white/5 p-5"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10">
                      <Icon
                        size={20}
                        className="text-amber-300"
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-amber-100">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-stone-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Link
            to={`${ROUTES.PRODUCTS}?filter=trending`}
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-amber-200 transition-all duration-300 hover:bg-white/5"
          >
            Explore Trending
            <FiArrowRight size={18} />
          </Link>
        </div>

        {/* Products */}
        {trendingProducts.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <EmptyState
              title="Trending products unavailable"
              message="Trending premium collections are being refreshed. Please check again shortly."
            />
          </div>
        )}

        {/* Bottom CTA */}
        {trendingProducts.length > 0 && (
          <div className="mt-16 rounded-3xl border border-amber-900/20 bg-gradient-to-r from-[#2b1e09] to-[#3b2a10] px-6 py-10 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300">
              Trending Momentum
            </p>

            <h3 className="mt-4 text-2xl font-bold text-amber-100 sm:text-3xl">
              {TRENDING_PRODUCTS.length}+ Trending Premium Products
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base">
              Stay ahead of fashion momentum with premium products currently
              capturing the most shopper attention across our luxury storefront.
            </p>

            <Link
              to={`${ROUTES.PRODUCTS}?filter=trending`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-stone-950 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Shop Trending Now
              <FiArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

TrendingProducts.propTypes = {
  limit: PropTypes.number,
};

export default TrendingProducts;