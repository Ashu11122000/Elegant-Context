import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiClock,
  FiEye,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

import ProductCard from "../products/ProductCard";
import SectionHeading from "../UI/SectionHeading";
import EmptyState from "../common/EmptyState";

import {
  TRENDING_PRODUCTS,
} from "../../data/products";

import ROUTES from "../../config/routes";

function TrendingProducts({ limit = 4 }) {
  const trendingProducts =
    TRENDING_PRODUCTS.slice(0, limit);

  const trendHighlights = [
    {
      icon: FiTrendingUp,
      title: "Trending Luxury Picks",
      description:
        "Fast-rising premium collections loved by modern luxury shoppers.",
    },
    {
      icon: FiEye,
      title: "Most Viewed Products",
      description:
        "High-demand fashion essentials currently capturing attention.",
    },
    {
      icon: FiClock,
      title: "Limited Momentum",
      description:
        "Trending demand evolves quickly—discover premium picks before they shift.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#110e09] py-20 md:py-28">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.14),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_34%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-0 h-[260px] w-[260px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[260px] w-[260px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              badge="Trending Now"
              title="Luxury Products Dominating Fashion Trends"
              subtitle="Explore the premium fashion essentials and refined luxury accessories currently attracting the highest shopper interest across our curated storefront."
              align="left"
            />

            {/* TREND HIGHLIGHTS */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {trendHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
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

          {/* CTA */}
          <div className="shrink-0">
            <Link
              to={`${ROUTES.PRODUCTS}?filter=trending`}
              className="group inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-white/[0.03] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#dcc39c] shadow-[0_12px_35px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.06] hover:text-amber-200"
            >
              Explore Trending

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* PRODUCTS */}
        {trendingProducts.length > 0 ? (
          <>
            <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {trendingProducts.map((product) => (
                <div
                  key={product.id}
                  className="transition-transform duration-300 hover:-translate-y-2"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* TRENDING STATS */}
            <div className="mt-16 grid gap-5 rounded-[34px] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:grid-cols-3">
              {[
                {
                  title: "Trending Products",
                  value: `${TRENDING_PRODUCTS.length}+`,
                  icon: FiTrendingUp,
                },
                {
                  title: "Most Viewed Picks",
                  value: "24/7",
                  icon: FiEye,
                },
                {
                  title: "Luxury Momentum",
                  value: "HOT",
                  icon: FiZap,
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
              title="Trending products unavailable"
              message="Our trending luxury collections are currently being refreshed for a more elevated premium shopping experience."
            />
          </div>
        )}

        {/* BOTTOM CTA */}
        {trendingProducts.length > 0 && (
          <div className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#241706] via-[#33220d] to-[#4a3110] px-6 py-14 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:px-10">
            {/* Glow Effects */}
            <div className="absolute right-[-70px] top-[-70px] h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="absolute bottom-[-90px] left-[-70px] h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-5 py-2.5 backdrop-blur-xl">
                <FiZap className="text-sm text-amber-300" />

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
                  Trending Momentum
                </span>
              </div>

              {/* Title */}
              <h3 className="mx-auto mt-6 max-w-4xl font-serif text-3xl font-black leading-tight tracking-tight text-[#f8f1e8] sm:text-5xl">
                Explore Premium Products Capturing Luxury Fashion Attention
              </h3>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.9] text-stone-300 sm:text-base">
                Stay ahead of evolving fashion momentum with premium luxury
                products currently admired, viewed, and loved by modern
                style-conscious shoppers.
              </p>

              {/* Button */}
              <Link
                to={`${ROUTES.PRODUCTS}?filter=trending`}
                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400 to-yellow-500 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#23180a] shadow-[0_18px_45px_rgba(245,158,11,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(245,158,11,0.35)]"
              >
                Shop Trending Now

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
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