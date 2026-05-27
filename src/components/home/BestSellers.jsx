import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiHeart,
  FiUsers,
} from "react-icons/fi";
import ProductCard from "../products/ProductCard";
import SectionHeading from "../UI/SectionHeading";
import EmptyState from "../common/EmptyState";
import PRODUCTS from "../../data/products";
import ROUTES from "../../config/routes";

function BestSellers({ limit = 4 }) {
  const bestSellingProducts = [...PRODUCTS]
    .sort(
      (a, b) =>
        (b.reviewCount || 0) -
        (a.reviewCount || 0)
    )
    .slice(0, limit);

  const bestSellerHighlights = [
    {
      icon: FiUsers,
      title: "Customer Favorites",
      description:
        "Highly purchased premium products trusted by our shoppers.",
    },
    {
      icon: FiAward,
      title: "Top Rated Quality",
      description:
        "Luxury-crafted fashion essentials chosen for exceptional quality.",
    },
    {
      icon: FiHeart,
      title: "Loved Collection",
      description:
        "Products consistently earning strong shopper appreciation.",
    },
  ];

  return (
    <section className="bg-[#2d1f08] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              badge="Best Sellers"
              title="Customer Favorites & Top Luxury Picks"
              subtitle="Shop the premium fashion products consistently loved, purchased, and recommended by our discerning shoppers."
              align="left"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {bestSellerHighlights.map((item) => {
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
            to={ROUTES.PRODUCTS}
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-amber-200 transition-all duration-300 hover:bg-white/5"
          >
            Explore Best Sellers
            <FiArrowRight size={18} />
          </Link>
        </div>

        {/* Products */}
        {bestSellingProducts.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <EmptyState
              title="Best sellers unavailable"
              message="Our best-selling luxury collections are currently being refreshed."
            />
          </div>
        )}

        {/* Bottom CTA */}
        {bestSellingProducts.length > 0 && (
          <div className="mt-16 rounded-3xl border border-amber-900/20 bg-gradient-to-r from-[#35240c] to-[#4a3111] px-6 py-10 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300">
              Trusted by Premium Shoppers
            </p>

            <h3 className="mt-4 text-2xl font-bold text-amber-100 sm:text-3xl">
              Shop Our Most Purchased Premium Collections
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base">
              Explore the luxury fashion pieces our customers consistently
              choose for elegance, quality, and timeless style.
            </p>

            <Link
              to={ROUTES.PRODUCTS}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-stone-950 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Shop Customer Favorites
              <FiArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

BestSellers.propTypes = {
  limit: PropTypes.number,
};

export default BestSellers;