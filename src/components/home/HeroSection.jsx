import { Link } from "react-router-dom";
import {
  FiRefreshCw,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import PRODUCTS, {
  FEATURED_PRODUCTS,
  PRODUCT_BRANDS,
} from "../../data/products";
import ROUTES from "../../config/routes";

function HeroSection() {
  const trustFeatures = [
    {
      icon: FiTruck,
      title: "Free Shipping",
      description: "On orders above ₹1999",
    },
    {
      icon: FiRefreshCw,
      title: "Easy Returns",
      description: "7-day hassle-free returns",
    },
    {
      icon: FiShield,
      title: "Secure Payments",
      description: "Protected checkout experience",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-[#2a1d08] to-[#3b2a0f]">
      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(237,191,104,0.16),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(237,191,104,0.08),_transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              New Luxury Collection 2026
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-amber-100 sm:text-5xl lg:text-6xl">
              Redefine Your Style with Timeless Luxury
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
              Discover meticulously curated premium fashion pieces,
              luxury accessories, and timeless wardrobe essentials
              crafted for sophistication, confidence, and modern elegance.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to={ROUTES.PRODUCTS}
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-stone-950 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Shop Collection
              </Link>

              <Link
                to={`${ROUTES.PRODUCTS}?filter=featured`}
                className="inline-flex items-center justify-center rounded-full border border-amber-300/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-amber-200 transition-all duration-300 hover:bg-white/5"
              >
                Explore Featured
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-amber-900/20 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-200">
                  10K+
                </h3>

                <p className="mt-2 text-sm text-stone-400">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-200">
                  {PRODUCTS.length}+
                </h3>

                <p className="mt-2 text-sm text-stone-400">
                  Premium Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-200">
                  {PRODUCT_BRANDS.length}+
                </h3>

                <p className="mt-2 text-sm text-stone-400">
                  Luxury Brands
                </p>
              </div>
            </div>

            {/* Trust Features */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {trustFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-amber-900/20 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10">
                      <Icon
                        size={20}
                        className="text-amber-300"
                      />
                    </div>

                    <h4 className="text-sm font-semibold text-amber-100">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-stone-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[500px] w-full max-w-lg overflow-hidden rounded-3xl border border-amber-300/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury fashion collection"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Offer card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-amber-300/20 bg-black/40 p-6 backdrop-blur-md">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-300">
                  Exclusive Seasonal Offer
                </p>

                <h3 className="mt-3 text-3xl font-bold text-amber-200">
                  Up to 40% Off
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  Explore {FEATURED_PRODUCTS.length}+ handpicked premium products
                  with limited-time luxury pricing.
                </p>

                <Link
                  to={`${ROUTES.PRODUCTS}?filter=featured`}
                  className="mt-5 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:scale-105"
                >
                  Shop Offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;