import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiShoppingBag,
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
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Discover premium fashion essentials tailored for timeless sophistication and modern elegance.",
    highlight: "Luxury Apparel",
    icon: FiAward,
  },

  accessories: {
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore statement accessories designed to elevate every premium wardrobe.",
    highlight: "Modern Accessories",
    icon: FiStar,
  },
};

function CategoryGrid() {
  if (!PRODUCT_CATEGORIES.length) {
    return null;
  }

  return (
    <section className="bg-[#2a1d08] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              badge="Shop Categories"
              title="Explore Curated Luxury Collections"
              subtitle="Browse premium collections crafted for modern fashion lovers seeking timeless sophistication, exclusive craftsmanship, and elevated style."
              align="left"
            />
          </div>

          <Link
            to={ROUTES.PRODUCTS}
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-amber-200 transition-all duration-300 hover:bg-white/5"
          >
            Explore All Products
            <FiArrowRight size={18} />
          </Link>
        </div>

        {/* Categories */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
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
                className="group relative overflow-hidden rounded-3xl border border-amber-300/15 bg-[#31230c] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/40"
              >
                {/* Image */}
                <div className="relative h-[460px] overflow-hidden">
                  <img
                    src={config.image}
                    alt={category}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                  {/* Floating Badge */}
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/40 px-4 py-2 backdrop-blur-md">
                    <Icon
                      size={16}
                      className="text-amber-300"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                      {config.highlight}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold capitalize text-amber-100">
                        {category}
                      </h3>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-stone-950 shadow-xl transition-transform duration-300 group-hover:translate-x-1">
                        <FiArrowRight size={20} />
                      </div>
                    </div>

                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-stone-300 sm:text-base">
                      {config.description}
                    </p>

                    {/* Stats */}
                    <div className="mt-8 flex flex-wrap gap-4">
                      <div className="rounded-2xl border border-amber-900/20 bg-black/30 px-5 py-4 backdrop-blur-sm">
                        <p className="text-xl font-bold text-amber-200">
                          {categoryCount}+
                        </p>

                        <p className="mt-1 text-xs uppercase tracking-wider text-stone-400">
                          Products
                        </p>
                      </div>

                      <div className="rounded-2xl border border-amber-900/20 bg-black/30 px-5 py-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <FiShoppingBag
                            size={16}
                            className="text-amber-300"
                          />

                          <p className="text-xs uppercase tracking-wider text-stone-300">
                            Premium Collection
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-amber-900/20 bg-gradient-to-r from-[#2f220b] to-[#3d2b10] px-6 py-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300">
            Discover More
          </p>

          <h3 className="mt-4 text-2xl font-bold text-amber-100 sm:text-3xl">
            Shop Premium Collections Designed for Modern Luxury
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base">
            Explore curated fashion and accessories collections built for timeless sophistication, refined style, and elevated everyday elegance.
          </p>

          <Link
            to={ROUTES.PRODUCTS}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-stone-950 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Shop Full Collection
            <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;