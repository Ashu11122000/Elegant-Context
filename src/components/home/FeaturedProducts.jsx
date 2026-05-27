import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../UI/SectionHeading";
import EmptyState from "../common/EmptyState";
import {
  FEATURED_PRODUCTS,
} from "../../data/products";
import ROUTES from "../../config/routes";

function FeaturedProducts({ limit = 8 }) {
  const featuredProducts =
    FEATURED_PRODUCTS.slice(0, limit);

  const sectionHighlights = [
    {
      icon: FiAward,
      title: "Premium Quality",
      description:
        "Luxury-crafted products curated for modern elegance.",
    },
    {
      icon: FiTrendingUp,
      title: "Trending Selection",
      description:
        "Highly sought-after premium fashion essentials.",
    },
    {
      icon: FiStar,
      title: "Customer Favorites",
      description:
        "Handpicked pieces loved by our premium shoppers.",
    },
  ];

  return (
    <section className="bg-stone-950 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              title="Featured Collection"
              subtitle="Discover handpicked luxury fashion essentials, curated for timeless sophistication, premium craftsmanship, and elevated modern style."
              align="left"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {sectionHighlights.map((item) => {
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

          <div className="shrink-0">
            <Link
              to={ROUTES.PRODUCTS}
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-amber-200 transition-all duration-300 hover:bg-white/5"
            >
              View All Products
              <FiArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Products */}
        {featuredProducts.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <EmptyState
              title="Featured products unavailable"
              message="We’re currently refreshing our premium featured collection. Please check back shortly."
            />
          </div>
        )}

        {/* Bottom CTA */}
        {featuredProducts.length > 0 && (
          <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-amber-900/20 bg-gradient-to-r from-[#2a1d08] to-[#3a2a10] px-6 py-10 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300">
              Premium Luxury Fashion
            </p>

            <h3 className="mt-4 text-2xl font-bold text-amber-100 sm:text-3xl">
              Explore {FEATURED_PRODUCTS.length}+ Featured Premium Picks
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base">
              Shop exclusive premium collections designed to elevate your
              wardrobe with timeless elegance and refined craftsmanship.
            </p>

            <Link
              to={ROUTES.PRODUCTS}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-stone-950 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Shop Full Collection
              <FiArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

FeaturedProducts.propTypes = {
  limit: PropTypes.number,
};

export default FeaturedProducts;