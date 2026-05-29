import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiHeart,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiShoppingBag,
  FiStar,
  FiEye,
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
      title: "Customer Favorite Collections",
      description:
        "Luxury fashion essentials consistently admired and purchased by modern shoppers who value elegance, timeless styling, and elevated aesthetics.",
    },

    {
      icon: FiHeart,
      title: "Most Loved Fashion Picks",
      description:
        "Highly appreciated collections selected for their remarkable comfort, refined design aesthetics, and sophisticated everyday styling.",
    },
  ];

  const statistics = [
    {
      title: "Top Rated Products",
      value: `${bestSellingProducts.length}+`,
      description:
        "Best-selling collections selected for refined styling and modern elegance.",
      icon: FiStar,
    },

    {
      title: "Trusted Shoppers",
      value: "10K+",
      description:
        "Thousands of satisfied shoppers trust our collections for comfort and refined styling.",
      icon: FiUsers,
    },

    {
      title: "Trending Collections",
      value: "2026",
      description:
        "Contemporary collections inspired by timeless elegance and modern aesthetics.",
      icon: FiTrendingUp,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070707] py-28 sm:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.10),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:95px_95px]" />

      {/* GLOWS */}
      <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        {/* HERO SECTION */}
        <div className="grid gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
          {/* LEFT SIDE */}
          <div className="max-w-5xl">
            <SectionHeading
              badge="Best Sellers"
              title="Most Loved Luxury Fashion Collections"
              subtitle="Explore refined fashion pieces consistently admired and purchased by modern shoppers who appreciate timeless elegance, elevated comfort, and sophisticated contemporary styling."
              align="left"
            />

            {/* DIVIDER */}
            <div className="mt-10 h-[2px] w-40 bg-gradient-to-r from-amber-400 via-yellow-300 to-transparent" />

            {/* HIGHLIGHT CARDS */}
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {bestSellerHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/20"
                  >
                    {/* GLOW */}
                    <div className="absolute right-[-30px] top-[-30px] h-40 w-40 rounded-full bg-amber-400/10 blur-3xl transition-all duration-500 group-hover:bg-amber-400/20" />

                    <div className="relative z-10 flex h-full flex-col">
                      {/* ICON */}
                      <div className="flex h-20 w-20 items-center justify-center rounded-[26px] border border-amber-400/20 bg-gradient-to-br from-amber-400/20 to-yellow-500/10">
                        <Icon
                          size={30}
                          className="text-amber-300"
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-8 text-2xl font-black leading-[1.3] tracking-tight text-[#f8ead7]">
                        {item.title}
                      </h3>

                      {/* DIVIDER */}
                      <div className="mt-5 h-[2px] w-20 bg-gradient-to-r from-amber-400 to-transparent" />

                      {/* DESCRIPTION */}
                      <p className="mt-6 text-base leading-[2] text-stone-400">
                        {item.description}
                      </p>

                      {/* FOOTER */}
                      <div className="mt-auto pt-10">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl">
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />

                          <span className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200">
                            Loved By Shoppers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE - FILLED SPACE */}
          <div className="relative flex flex-col gap-8">
            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#121212] via-[#0b0b0b] to-[#050505] p-9 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
              {/* GLOW */}
              <div className="absolute right-[-90px] top-[-90px] h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

              <div className="relative z-10">
                {/* TOP */}
                <div className="flex items-start gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[26px] bg-gradient-to-br from-amber-400 to-yellow-500 shadow-[0_20px_40px_rgba(245,158,11,0.35)]">
                    <FiCheckCircle
                      size={34}
                      className="text-[#23180a]"
                    />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2">
                      <span className="h-2 w-2 rounded-full bg-amber-300" />

                      <span className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-200">
                        Customer Favorites
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#f8f1e8]">
                      Best-Selling Fashion Collections
                    </h3>

                    <p className="mt-5 text-[15px] leading-[2] text-stone-400">
                      Discover customer-loved collections designed with refined
                      elegance, elevated aesthetics, and sophisticated modern
                      styling.
                    </p>
                  </div>
                </div>

                {/* MINI FEATURES */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
                    <h4 className="text-lg font-bold text-[#f8f1e8]">
                      Timeless Styling
                    </h4>

                    <p className="mt-3 text-sm leading-[1.9] text-stone-400">
                      Elegant collections inspired by refined aesthetics.
                    </p>
                  </div>

                  <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
                    <h4 className="text-lg font-bold text-[#f8f1e8]">
                      Trusted Comfort
                    </h4>

                    <p className="mt-3 text-sm leading-[1.9] text-stone-400">
                      Designed for sophisticated modern lifestyles.
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  to={ROUTES.PRODUCTS}
                  className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-5 text-sm font-black uppercase tracking-[0.20em] text-[#23180a] shadow-[0_20px_50px_rgba(245,158,11,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(245,158,11,0.40)]"
                >
                  Explore Best Sellers

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* EXTRA STATS ROW TO FILL EMPTY SPACE */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* CARD 1 */}
              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.30)] backdrop-blur-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-amber-400 to-yellow-500">
                  <FiEye
                    size={26}
                    className="text-[#23180a]"
                  />
                </div>

                <h3 className="mt-7 text-4xl font-black text-amber-300">
                  24K+
                </h3>

                <h4 className="mt-3 text-xl font-bold text-[#f8ead7]">
                  Collection Views
                </h4>

                <p className="mt-4 text-sm leading-[1.9] text-stone-400">
                  Fashion collections explored daily by modern shoppers seeking refined elegance.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.30)] backdrop-blur-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-amber-400 to-yellow-500">
                  <FiShoppingBag
                    size={26}
                    className="text-[#23180a]"
                  />
                </div>

                <h3 className="mt-7 text-4xl font-black text-amber-300">
                  Daily
                </h3>

                <h4 className="mt-3 text-xl font-bold text-[#f8ead7]">
                  New Arrivals
                </h4>

                <p className="mt-4 text-sm leading-[1.9] text-stone-400">
                  Fresh fashion essentials inspired by modern luxury and contemporary trends.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        {bestSellingProducts.length > 0 ? (
          <>
            <div className="mt-24">
              {/* SECTION HEADER */}
              <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-[#f8f1e8]">
                    Best Seller Product Showcase
                  </h2>

                  <p className="mt-4 max-w-3xl text-base leading-[2] text-stone-400">
                    Explore our most admired collections designed with elevated
                    comfort, refined craftsmanship, and timeless fashion
                    aesthetics for sophisticated modern lifestyles.
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-stone-300 backdrop-blur-xl">
                  Showing {bestSellingProducts.length} Best-Selling Products
                </div>
              </div>

              {/* PRODUCT GRID */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {bestSellingProducts.map((product) => (
                  <div
                    key={product.id}
                    className="transition-all duration-500 hover:-translate-y-2"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            {/* STATS */}
            <div className="mt-24">
              <div className="grid gap-8 lg:grid-cols-3">
                {statistics.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/20"
                    >
                      {/* GLOW */}
                      <div className="absolute right-[-20px] top-[-20px] h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

                      <div className="relative z-10">
                        {/* ICON */}
                        <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
                          <Icon
                            size={30}
                            className="text-[#23180a]"
                          />
                        </div>

                        {/* VALUE */}
                        <h3 className="mt-8 text-5xl font-black tracking-tight text-amber-300">
                          {item.value}
                        </h3>

                        {/* TITLE */}
                        <h4 className="mt-4 text-2xl font-bold text-[#f8ead7]">
                          {item.title}
                        </h4>

                        {/* DESCRIPTION */}
                        <p className="mt-5 text-base leading-[2] text-stone-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="mt-20">
            <EmptyState
              title="Best Sellers Unavailable"
              message="Our best-selling collections are currently being refreshed to deliver a more refined shopping experience."
            />
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