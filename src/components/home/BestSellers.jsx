import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiHeart,
  FiTrendingUp,
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
        "Luxury essentials consistently chosen by premium shoppers worldwide.",
    },
    {
      icon: FiAward,
      title: "Exceptional Quality",
      description:
        "Crafted with refined materials, elegant detailing, and timeless design.",
    },
    {
      icon: FiHeart,
      title: "Most Loved Collection",
      description:
        "Highly appreciated collections with remarkable customer satisfaction.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#120f0a] py-20 md:py-28">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:85px_85px]" />

      {/* Blur Effects */}
      <div className="absolute left-[-120px] top-20 h-[260px] w-[260px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[260px] w-[260px] rounded-full bg-yellow-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              badge="Best Sellers"
              title="Most Loved Luxury Collections"
              subtitle="Explore premium fashion pieces consistently admired, purchased, and recommended by our sophisticated shoppers who value timeless elegance and exceptional quality."
              align="left"
            />

            {/* Highlights */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {bestSellerHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
                  >
                    {/* Glow */}
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl transition-all duration-500 group-hover:bg-amber-400/20" />

                    <div className="relative z-10">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 shadow-inner">
                        <Icon
                          size={22}
                          className="text-amber-300"
                        />
                      </div>

                      <h3 className="text-[15px] font-bold tracking-wide text-[#f4e7d2]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-stone-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA BUTTON */}
          <div>
            <Link
              to={ROUTES.PRODUCTS}
              className="group inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-white/[0.03] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#dcc29a] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.06] hover:text-amber-200"
            >
              Explore Best Sellers

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* PRODUCTS */}
        {bestSellingProducts.length > 0 ? (
          <>
            <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {bestSellingProducts.map((product) => (
                <div
                  key={product.id}
                  className="transition-transform duration-300 hover:-translate-y-2"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* PREMIUM STATS BAR */}
            <div className="mt-14 grid gap-5 rounded-[34px] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:grid-cols-3">
              {[
                {
                  title: "Top Rated Products",
                  value: `${bestSellingProducts.length}+`,
                  icon: FiAward,
                },
                {
                  title: "Trusted Customers",
                  value: "10K+",
                  icon: FiUsers,
                },
                {
                  title: "Trending Collections",
                  value: "2026",
                  icon: FiTrendingUp,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-5 rounded-3xl border border-white/5 bg-black/10 p-5"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
                      <Icon
                        size={24}
                        className="text-[#23180a]"
                      />
                    </div>

                    <div>
                      <h4 className="text-2xl font-black tracking-tight text-amber-300">
                        {item.value}
                      </h4>

                      <p className="mt-1 text-sm text-stone-400">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="mt-16">
            <EmptyState
              title="Best sellers unavailable"
              message="Our premium best-selling collections are currently being refreshed for an elevated shopping experience."
            />
          </div>
        )}

        {/* BOTTOM CTA */}
        {bestSellingProducts.length > 0 && (
          <div className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#241707] via-[#33220d] to-[#4a3010] px-6 py-14 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:px-10">
            {/* Glow */}
            <div className="absolute right-[-60px] top-[-60px] h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="absolute bottom-[-80px] left-[-80px] h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-black/20 px-5 py-2 backdrop-blur-xl">
                <FiHeart className="text-sm text-amber-300" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                  Trusted by Luxury Shoppers
                </span>
              </div>

              <h3 className="mx-auto mt-6 max-w-3xl font-serif text-3xl font-black leading-tight tracking-tight text-[#f7f1e7] sm:text-5xl">
                Discover Premium Collections Loved by Thousands
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.9] text-stone-300 sm:text-base">
                Elevate your wardrobe with luxurious fashion essentials crafted
                for elegance, sophistication, and lasting premium comfort.
              </p>

              <Link
                to={ROUTES.PRODUCTS}
                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400 to-yellow-500 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#23180a] shadow-[0_15px_40px_rgba(245,158,11,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(245,158,11,0.35)]"
              >
                Shop Customer Favorites

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
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