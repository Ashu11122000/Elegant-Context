import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiBox,
  FiShoppingBag,
  FiSparkles,
  FiStar,
} from "react-icons/fi";

import SectionHeading from "../UI/SectionHeading";

import PRODUCTS, {
  PRODUCT_CATEGORIES,
} from "../../data/products";

import ROUTES from "../../config/routes";

const categoryConfig = {
  fashion: {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90",
    description:
      "Discover refined luxury fashion crafted for timeless sophistication, elevated comfort, and modern elegance.",
    highlight: "Luxury Apparel",
    icon: FiAward,
  },

  accessories: {
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=90",
    description:
      "Explore statement accessories designed to complement premium lifestyles with iconic elegance.",
    highlight: "Premium Accessories",
    icon: FiStar,
  },
};

function CategoryGrid() {
  if (!PRODUCT_CATEGORIES.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#110e09] py-20 md:py-28">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.14),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_34%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Glow Blurs */}
      <div className="absolute left-[-120px] top-0 h-[280px] w-[280px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              badge="Shop Categories"
              title="Curated Luxury Shopping Experience"
              subtitle="Browse refined collections crafted for modern fashion enthusiasts seeking timeless sophistication, premium craftsmanship, and elevated everyday elegance."
              align="left"
            />

            {/* Mini Stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                {
                  icon: FiSparkles,
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
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 shadow-lg backdrop-blur-xl"
                  >
                    <Icon className="text-amber-300" />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dcc39c]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link
              to={ROUTES.PRODUCTS}
              className="group inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-white/[0.03] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#dcc39c] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.06] hover:text-amber-200"
            >
              Explore All Products

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
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
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#1b140d] shadow-[0_25px_70px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 hover:border-amber-400/25"
              >
                {/* Luxury Glow */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute right-[-40px] top-[-40px] z-10 h-44 w-44 rounded-full bg-amber-400/10 blur-3xl" />

                {/* IMAGE */}
                <div className="relative h-[520px] overflow-hidden">
                  <img
                    src={config.image}
                    alt={category}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* TOP BADGE */}
                  <div className="absolute left-6 top-6 z-20 inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/40 px-5 py-2.5 shadow-lg backdrop-blur-2xl">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500">
                      <Icon
                        size={15}
                        className="text-[#23180a]"
                      />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-200">
                      {config.highlight}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-8 sm:p-10">
                    {/* Category + Arrow */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                          Premium Category
                        </p>

                        <h3 className="mt-3 font-serif text-4xl font-black capitalize tracking-tight text-[#f8f1e7] sm:text-5xl">
                          {category}
                        </h3>
                      </div>

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400 to-yellow-500 shadow-2xl transition-all duration-300 group-hover:translate-x-1 group-hover:scale-105">
                        <FiArrowRight
                          size={24}
                          className="text-[#23180a]"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-sm leading-[1.9] text-stone-300 sm:text-base">
                      {config.description}
                    </p>

                    {/* PREMIUM INFO CARDS */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {/* Products */}
                      <div className="rounded-3xl border border-white/10 bg-black/30 p-5 shadow-lg backdrop-blur-xl">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500">
                            <FiBox
                              size={22}
                              className="text-[#23180a]"
                            />
                          </div>

                          <div>
                            <h4 className="text-2xl font-black text-amber-300">
                              {categoryCount}+
                            </h4>

                            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-400">
                              Premium Products
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Collection */}
                      <div className="rounded-3xl border border-white/10 bg-black/30 p-5 shadow-lg backdrop-blur-xl">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500">
                            <FiShoppingBag
                              size={22}
                              className="text-[#23180a]"
                            />
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-[#f4e7d2]">
                              Exclusive
                            </h4>

                            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-400">
                              Luxury Collection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Button */}
                    <div className="mt-8">
                      <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-white/[0.05] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#dcc39c] backdrop-blur-xl transition-all duration-300 group-hover:border-amber-400/40 group-hover:bg-white/[0.08] group-hover:text-amber-200">
                        Explore Collection

                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#241706] via-[#33220d] to-[#4a3110] px-6 py-14 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:px-10">
          {/* Glow Effects */}
          <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute bottom-[-100px] left-[-80px] h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative z-10 text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-5 py-2.5 backdrop-blur-xl">
              <FiSparkles className="text-sm text-amber-300" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
                Luxury Shopping Experience
              </span>
            </div>

            {/* Title */}
            <h3 className="mx-auto mt-6 max-w-4xl font-serif text-3xl font-black leading-tight tracking-tight text-[#f8f1e8] sm:text-5xl">
              Discover Collections Crafted for Timeless Elegance
            </h3>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.9] text-stone-300 sm:text-base">
              Explore premium fashion and luxury accessories designed for
              modern lifestyles, elevated sophistication, and refined everyday
              elegance.
            </p>

            {/* Button */}
            <Link
              to={ROUTES.PRODUCTS}
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400 to-yellow-500 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#23180a] shadow-[0_18px_45px_rgba(245,158,11,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(245,158,11,0.35)]"
            >
              Shop Full Collection

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;