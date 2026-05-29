import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiAward,
  FiBox,
  FiShoppingBag,
  FiStar,
  FiZap,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";

import SectionHeading from "../UI/SectionHeading";

import PRODUCTS, {
  PRODUCT_CATEGORIES,
} from "../../data/products";

import ROUTES from "../../config/routes";

const categoryConfig = {
  fashion: {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=100",

    description:
      "Discover refined luxury fashion collections crafted with timeless sophistication, elevated comfort, premium quality, and modern elegance for contemporary lifestyles.",

    highlight: "Luxury Apparel",

    icon: FiAward,

    features: [
      "Modern Luxury Styling",
      "Premium Quality Fabrics",
      "Timeless Fashion Aesthetics",
    ],
  },

  accessories: {
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1600&q=100",

    description:
      "Explore statement accessories designed with iconic elegance, luxurious detailing, and elevated sophistication tailored for premium modern lifestyles.",

    highlight: "Premium Accessories",

    icon: FiStar,

    features: [
      "Elegant Premium Accessories",
      "Refined Luxury Details",
      "Sophisticated Everyday Styling",
    ],
  },
};

function CategoryGrid() {
  if (!PRODUCT_CATEGORIES.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 sm:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.10),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.08),_transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOWS */}
      <div className="absolute left-[-120px] top-0 h-[340px] w-[340px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-120px] h-[340px] w-[340px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        {/* TOP SECTION */}
        <div className="grid gap-16 xl:grid-cols-[1fr_520px] xl:items-end">
          {/* LEFT */}
          <div className="max-w-4xl">
            <SectionHeading
              badge="Shop Categories"
              title="Curated Luxury Shopping Experience"
              subtitle="Browse premium collections designed for modern fashion enthusiasts seeking timeless sophistication, elevated craftsmanship, luxurious comfort, and refined everyday elegance."
              align="left"
            />

            {/* DIVIDER */}
            <div className="mt-10 h-[2px] w-44 bg-gradient-to-r from-amber-400 via-yellow-300 to-transparent" />

            {/* FEATURE PILLS */}
            <div className="mt-12 flex flex-wrap gap-5">
              {[
                {
                  icon: FiZap,
                  label: "Premium Fashion",
                },

                {
                  icon: FiAward,
                  label: "Luxury Quality",
                },

                {
                  icon: FiShoppingBag,
                  label: "Exclusive Collections",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-3xl transition-all duration-300 hover:border-amber-400/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 shadow-lg">
                      <Icon
                        size={16}
                        className="text-[#23180a]"
                      />
                    </div>

                    <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#e5c996]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT PREMIUM CARD */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#121212] via-[#0a0a0a] to-[#050505] p-9 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
              {/* GLOW */}
              <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

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
                        Elevated Shopping
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#f8f1e8]">
                      Premium Luxury Collections
                    </h3>

                    <p className="mt-5 text-[15px] leading-[2] text-stone-400">
                      Explore refined categories designed with elevated
                      aesthetics, modern luxury styling, and sophisticated
                      premium detailing.
                    </p>
                  </div>
                </div>

                {/* MINI FEATURES */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
                    <h4 className="text-lg font-bold text-[#f8f1e8]">
                      Modern Styling
                    </h4>

                    <p className="mt-3 text-sm leading-[1.9] text-stone-400">
                      Refined collections inspired by luxury aesthetics.
                    </p>
                  </div>

                  <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
                    <h4 className="text-lg font-bold text-[#f8f1e8]">
                      Exclusive Quality
                    </h4>

                    <p className="mt-3 text-sm leading-[1.9] text-stone-400">
                      Elevated premium essentials tailored for modern lifestyles.
                    </p>
                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  to={ROUTES.PRODUCTS}
                  className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-5 text-sm font-black uppercase tracking-[0.20em] text-[#23180a] shadow-[0_20px_50px_rgba(245,158,11,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(245,158,11,0.40)]"
                >
                  Explore All Products

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="mt-24 grid gap-10 xl:grid-cols-2">
          {PRODUCT_CATEGORIES.map((category) => {
            const config =
              categoryConfig[category];

            if (!config) {
              return null;
            }

            const Icon = config.icon;

            const categoryCount = PRODUCTS.filter(
              (product) =>
                product.category === category
            ).length;

            return (
              <Link
                key={category}
                to={`${ROUTES.PRODUCTS}?category=${category}`}
                className="group relative overflow-hidden rounded-[42px] border border-white/10 bg-[#141414] shadow-[0_35px_90px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/20"
              >
                {/* IMAGE WRAPPER */}
                <div className="relative min-h-[760px] overflow-hidden">
                  {/* IMAGE */}
                  <img
                    src={config.image}
                    alt={category}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                  />

                  {/* OVERLAYS */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/55 to-[#050505]/95" />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_38%)]" />

                  {/* CONTENT */}
                  <div className="relative z-20 flex h-full flex-col justify-between p-7 sm:p-9 lg:p-10">
                    {/* TOP AREA */}
                    <div>
                      {/* HEADER ROW */}
                      <div className="flex items-start justify-between gap-5">
                        {/* BADGE */}
                        <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-amber-400/20 bg-black/45 px-5 py-3 backdrop-blur-2xl">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500">
                            <Icon
                              size={18}
                              className="text-[#23180a]"
                            />
                          </div>

                          <span className="text-[11px] font-black uppercase tracking-[0.24em] text-amber-200">
                            {config.highlight}
                          </span>
                        </div>

                        {/* ARROW */}
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px] bg-gradient-to-br from-amber-400 to-yellow-500 shadow-[0_20px_40px_rgba(245,158,11,0.35)] transition-all duration-300 group-hover:scale-105">
                          <FiArrowRight
                            size={30}
                            className="text-[#23180a]"
                          />
                        </div>
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-14 max-w-[520px] font-serif text-5xl font-black capitalize leading-[1] tracking-tight text-[#f8f1e8] sm:text-6xl">
                        {category}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-8 max-w-[560px] text-base leading-[2] text-stone-200 sm:text-lg">
                        {config.description}
                      </p>

                      {/* FEATURES */}
                      <div className="mt-10 flex flex-col gap-4">
                        {config.features.map((feature) => (
                          <div
                            key={feature}
                            className="inline-flex w-fit max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.08] px-6 py-4 backdrop-blur-2xl"
                          >
                            <span className="h-2 w-2 shrink-0 rounded-full bg-amber-300" />

                            <span className="text-[11px] font-black uppercase tracking-[0.20em] text-[#ece0cf]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM AREA */}
                    <div className="mt-12">
                      {/* INFO CARDS */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* PRODUCTS CARD */}
                        <div className="rounded-[30px] border border-white/10 bg-black/45 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-3xl">
                          <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-amber-400 to-yellow-500">
                              <FiBox
                                size={24}
                                className="text-[#23180a]"
                              />
                            </div>

                            <div className="min-w-0">
                              <h4 className="text-4xl font-black text-amber-300">
                                {categoryCount}+
                              </h4>

                              <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-stone-400">
                                Premium Products
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* COLLECTION CARD */}
                        <div className="rounded-[30px] border border-white/10 bg-black/45 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-3xl">
                          <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-amber-400 to-yellow-500">
                              <FiTrendingUp
                                size={24}
                                className="text-[#23180a]"
                              />
                            </div>

                            <div className="min-w-0">
                              <h4 className="text-2xl font-black text-[#f8f1e8]">
                                Exclusive
                              </h4>

                              <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-stone-400">
                                Luxury Collection
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8">
                        <div className="inline-flex items-center gap-4 rounded-full border border-amber-400/20 bg-black/40 px-8 py-4 backdrop-blur-2xl transition-all duration-300 group-hover:border-amber-400/40">
                          <span className="text-sm font-black uppercase tracking-[0.18em] text-[#e5c996]">
                            Explore Collection
                          </span>

                          <FiArrowRight className="text-amber-300 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="relative mt-28 overflow-hidden rounded-[46px] border border-white/10 bg-gradient-to-br from-[#241706] via-[#2b1b08] to-[#41290d] px-6 py-20 shadow-[0_40px_100px_rgba(0,0,0,0.45)] sm:px-12 lg:px-16">
          {/* GLOWS */}
          <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute bottom-[-120px] left-[-100px] h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative z-10 text-center">
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-7 py-3 backdrop-blur-xl">
              <FiZap className="text-amber-300" />

              <span className="text-[11px] font-black uppercase tracking-[0.30em] text-amber-200">
                Luxury Shopping Experience
              </span>
            </div>

            {/* TITLE */}
            <h3 className="mx-auto mt-10 max-w-6xl font-serif text-4xl font-black leading-[1.15] tracking-tight text-[#f8f1e8] sm:text-6xl">
              Discover Premium Collections Crafted For Timeless Elegance
            </h3>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-8 max-w-4xl text-base leading-[2] text-stone-300 sm:text-lg">
              Explore premium fashion and luxury accessory collections designed
              with elevated sophistication, refined craftsmanship, luxurious
              comfort, and timeless aesthetics tailored for modern lifestyles.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                to={ROUTES.PRODUCTS}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-12 py-5 text-sm font-black uppercase tracking-[0.20em] text-[#23180a] shadow-[0_22px_55px_rgba(245,158,11,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(245,158,11,0.40)]"
              >
                Shop Full Collection

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-7 py-5 text-sm text-stone-300 backdrop-blur-xl">
                Premium Quality • Modern Luxury • Elegant Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;