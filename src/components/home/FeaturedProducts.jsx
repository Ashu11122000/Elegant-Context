import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiPackage,
  FiLayers,
  FiHeart,
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

  // REMOVED REFINED CRAFTSMANSHIP CARD
  const sectionHighlights = [
    {
      icon: FiTrendingUp,
      title: "Trending Fashion",
      description:
        "Discover globally inspired fashion essentials curated for modern lifestyles, elegant styling, and elevated contemporary aesthetics.",
    },

    {
      icon: FiStar,
      title: "Customer Favorites",
      description:
        "Most-loved collections selected by shoppers for premium quality, versatile styling, exceptional comfort, and sophisticated appeal.",
    },
  ];

  const statistics = [
    {
      title: "Featured Products",
      value: `${FEATURED_PRODUCTS.length}+`,
      description:
        "Carefully selected premium collections designed for modern luxury shopping.",
      icon: FiPackage,
    },

    {
      title: "Secure Shopping",
      value: "100%",
      description:
        "Trusted payments, encrypted checkout, and protected shopping experience.",
      icon: FiShield,
    },

    {
      title: "Luxury Collections",
      value: "2026",
      description:
        "Fresh modern arrivals inspired by elevated luxury fashion aesthetics.",
      icon: FiTrendingUp,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070707] py-24 sm:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.12),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.08),_transparent_32%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:95px_95px]" />

      {/* GLOWS */}
      <div className="absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[280px] w-[280px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        {/* HERO SECTION */}
        <div className="grid items-start gap-16 xl:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            <SectionHeading
              badge="Featured Collection"
              title="Luxury Fashion Collections Designed For Modern Elegance"
              subtitle="Discover refined premium collections crafted with timeless sophistication, luxurious comfort, elevated aesthetics, and modern lifestyle inspiration."
              align="left"
            />

            {/* DIVIDER */}
            <div className="mt-10 h-[2px] w-40 bg-gradient-to-r from-amber-400 via-yellow-300 to-transparent" />

            {/* UPDATED 2 CARDS ALIGNMENT */}
            <div className="mt-20 grid gap-8 md:grid-cols-2">
              {sectionHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative flex h-full overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#121212]/95 to-[#090909]/95 p-8 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/20 min-h-[420px]"
                  >
                    {/* GLOW */}
                    <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl transition-all duration-500 group-hover:bg-amber-400/20" />

                    <div className="relative z-10 flex h-full flex-col">
                      {/* ICON */}
                      <div className="flex h-24 w-24 items-center justify-center rounded-[30px] border border-amber-400/20 bg-gradient-to-br from-amber-400/20 via-yellow-500/10 to-transparent">
                        <Icon
                          size={34}
                          className="text-amber-300"
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-10 text-[28px] sm:text-[32px] font-black leading-[1.25] tracking-tight text-[#f8f1e8]">
                        {item.title}
                      </h3>

                      {/* DIVIDER */}
                      <div className="mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-transparent" />

                      {/* DESCRIPTION */}
                      <p className="mt-8 text-[16px] sm:text-[17px] leading-[2] text-stone-400">
                        {item.description}
                      </p>

                      {/* FOOTER */}
                      <div className="mt-auto pt-10">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />

                          <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-amber-200">
                            Modern Luxury Edit
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PREMIUM CARD */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#101010] via-[#090909] to-[#050505] p-10 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
              {/* GLOW */}
              <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

              <div className="relative z-10">
                {/* BADGE */}
                <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-6 py-3 backdrop-blur-xl">
                  <FiPackage className="text-amber-300" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-200">
                    Elevated Fashion Experience
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-10 text-5xl font-black leading-[1.1] tracking-tight text-[#f8f1e8] xl:text-6xl">
                  Curated Collections

                  <span className="mt-3 block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Crafted For
                  </span>

                  Modern Luxury
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-10 text-lg leading-[2] text-stone-400">
                  Explore premium fashion collections inspired by timeless
                  elegance, elevated aesthetics, and contemporary lifestyle
                  essentials designed for sophisticated everyday styling.
                </p>

                {/* FEATURES */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
                      <FiLayers
                        size={24}
                        className="text-amber-300"
                      />
                    </div>

                    <h4 className="mt-5 text-xl font-bold text-[#f8f1e8]">
                      Premium Styling
                    </h4>

                    <p className="mt-3 text-sm leading-[1.9] text-stone-400">
                      Curated collections inspired by modern luxury aesthetics.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
                      <FiHeart
                        size={24}
                        className="text-amber-300"
                      />
                    </div>

                    <h4 className="mt-5 text-xl font-bold text-[#f8f1e8]">
                      Loved By Shoppers
                    </h4>

                    <p className="mt-3 text-sm leading-[1.9] text-stone-400">
                      Trusted by customers for comfort and elevated quality.
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  to={ROUTES.PRODUCTS}
                  className="group mt-12 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-10 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#23180a] shadow-[0_20px_50px_rgba(245,158,11,0.30)] transition-all duration-300 hover:-translate-y-1"
                >
                  View All Products

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {featuredProducts.length > 0 ? (
          <>
            <div className="mt-28">
              {/* SECTION TOP */}
              <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="text-4xl font-black tracking-tight text-[#f8f1e8]">
                    Featured Product Showcase
                  </h2>

                  <p className="mt-4 max-w-3xl text-base leading-[2] text-stone-400">
                    Explore elevated fashion selections designed with premium
                    quality, luxurious detailing, and modern sophistication for
                    refined everyday styling.
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-stone-300 backdrop-blur-xl">
                  Showing {featuredProducts.length} Featured Products
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {featuredProducts.map((product) => (
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
                      className="group relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/20"
                    >
                      <div className="absolute right-[-30px] top-[-30px] h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

                      <div className="relative z-10">
                        <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
                          <Icon
                            size={30}
                            className="text-[#23180a]"
                          />
                        </div>

                        <h3 className="mt-8 text-5xl font-black tracking-tight text-amber-300">
                          {item.value}
                        </h3>

                        <h4 className="mt-4 text-2xl font-bold text-[#f7ead8]">
                          {item.title}
                        </h4>

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
              title="Featured Products Unavailable"
              message="We are currently refreshing our featured collections for a more elevated luxury shopping experience."
            />
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