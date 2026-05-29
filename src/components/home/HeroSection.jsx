import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiRefreshCw,
  FiShield,
  FiStar,
  FiTruck,
  FiCheckCircle,
  FiShoppingBag,
  FiUsers,
  FiAward,
  FiPackage,
  FiClock,
  FiHeart,
  FiGlobe,
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
      title: "Fast Delivery",
      description:
        "Quick and protected doorstep shipping across India with real-time order tracking.",
    },

    {
      icon: FiRefreshCw,
      title: "Easy Returns",
      description:
        "Simple 7-day return and exchange policy designed for smooth shopping confidence.",
    },

    {
      icon: FiShield,
      title: "Secure Payments",
      description:
        "Encrypted checkout with trusted payment gateways and safe transactions.",
    },

    {
      icon: FiClock,
      title: "24/7 Support",
      description:
        "Dedicated customer support team available anytime for instant assistance.",
    },
  ];

  const stats = [
    {
      value: "10K+",
      label: "Happy Customers",
    },

    {
      value: `${PRODUCTS.length}+`,
      label: "Curated Products",
    },

    {
      value: `${PRODUCT_BRANDS.length}+`,
      label: "Global Brands",
    },

    {
      value: "99%",
      label: "Positive Reviews",
    },
  ];

  const highlights = [
    {
      icon: FiUsers,
      title: "Trusted Fashion Platform",
      text: "Thousands of shoppers choose us for quality, elegance, and everyday fashion essentials.",
    },

    {
      icon: FiAward,
      title: "Curated Collections",
      text: "Every collection is hand-selected to blend modern trends with timeless styling.",
    },

    {
      icon: FiPackage,
      title: "Fresh Weekly Arrivals",
      text: "Discover new arrivals, trending styles, and exclusive fashion edits every week.",
    },

    {
      icon: FiHeart,
      title: "Loved By Customers",
      text: "High customer satisfaction with premium quality products and reliable services.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.13]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-[#050505]/95" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:115px_115px]" />

      {/* GLOW EFFECTS */}
      <div className="absolute left-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="absolute bottom-[-180px] right-[-160px] h-[380px] w-[380px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1650px] px-4 py-20 sm:px-6 lg:px-10 xl:px-14">
        {/* MAIN GRID */}
        <div className="grid items-start gap-16 xl:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-white/[0.04] px-7 py-4 backdrop-blur-2xl">
              <FiStar className="text-amber-300" />

              <span className="text-[11px] font-bold uppercase tracking-[0.38em] text-amber-200">
                Curated Fashion Collection 2026
              </span>
            </div>

            {/* TITLE */}
            <div className="mt-10 max-w-5xl">
              <h1 className="font-serif text-6xl font-black leading-[0.92] tracking-tight text-[#f8f3ea] sm:text-7xl xl:text-[108px]">
                Redefine Your

                <span className="mt-5 block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Everyday Style
                </span>
              </h1>

              <p className="mt-10 max-w-3xl text-lg leading-[2] text-stone-300 xl:text-[22px]">
                Explore thoughtfully curated fashion, accessories, modern
                essentials, and timeless lifestyle collections designed for
                confidence, comfort, sophistication, and elevated everyday
                aesthetics.
              </p>
            </div>

            {/* TAGS */}
            <div className="mt-12 flex flex-wrap gap-5">
              {[
                "Handpicked Collections",
                "Trending Styles",
                "Secure Payments",
                "Fast Delivery",
                "Easy Returns",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-stone-300 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-col gap-5 sm:flex-row">
              <Link
                to={ROUTES.PRODUCTS}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 px-12 py-5 text-sm font-black uppercase tracking-[0.20em] text-[#1a1206] shadow-[0_20px_60px_rgba(245,158,11,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                Shop Collection

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to={`${ROUTES.PRODUCTS}?filter=featured`}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-12 py-5 text-sm font-bold uppercase tracking-[0.20em] text-[#e7d7bc] backdrop-blur-2xl"
              >
                Explore Featured
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-24">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-amber-400 to-transparent" />

                <p className="text-xs font-bold uppercase tracking-[0.34em] text-amber-300">
                  Shopping Experience
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[32px] border border-white/10 bg-[#0d0d0d]/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                  >
                    <h3 className="text-5xl font-black text-amber-300">
                      {item.value}
                    </h3>

                    <p className="mt-4 text-lg font-bold text-[#f5ead7]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* MAIN PREMIUM CARD */}
            <div className="relative overflow-hidden rounded-[46px] border border-white/10 bg-[#07141b] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
              {/* BACKGROUND IMAGE */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90"
                  alt="Fashion Collection"
                  className="h-full w-full object-cover opacity-[0.32]"
                />

                {/* HEAVY OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#05232d]/95 via-[#03151c]/92 to-[#020202]/98" />

                {/* EXTRA DARK LAYER */}
                <div className="absolute inset-0 bg-black/45" />
              </div>

              {/* CONTENT */}
              <div className="relative z-20 p-8 sm:p-10 xl:p-12">
                {/* TOP BADGE */}
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-6 py-3 backdrop-blur-2xl">
                  <FiShoppingBag className="text-amber-300" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-stone-300">
                    Limited-Time Collection Event
                  </span>
                </div>

                {/* MAIN HEADING */}
                <h2 className="mt-10 font-serif text-5xl font-black leading-[0.95] tracking-tight text-amber-300 sm:text-6xl xl:text-7xl">
                  Up To 40% Off
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-8 max-w-2xl text-lg leading-[2] text-stone-200">
                  Discover {FEATURED_PRODUCTS.length}+ carefully curated fashion
                  styles, accessories, and timeless essentials crafted with
                  refined elegance and modern sophistication.
                </p>

                {/* BENEFITS */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-[34px] border border-white/10 bg-[#080808]/90 p-8 backdrop-blur-2xl">
                    <p className="text-5xl font-black leading-none text-white">
                      Free
                      <br />
                      Delivery
                    </p>

                    <span className="mt-5 block text-base leading-relaxed text-stone-400">
                      Available on eligible orders across India
                    </span>
                  </div>

                  <div className="rounded-[34px] border border-white/10 bg-[#080808]/90 p-8 backdrop-blur-2xl">
                    <p className="text-5xl font-black leading-none text-white">
                      Easy
                      <br />
                      Returns
                    </p>

                    <span className="mt-5 block text-base leading-relaxed text-stone-400">
                      Hassle-free return policy within 7 days
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`${ROUTES.PRODUCTS}?filter=featured`}
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-10 py-5 text-sm font-black uppercase tracking-[0.16em] text-[#24190a] shadow-[0_18px_45px_rgba(245,158,11,0.28)] transition-all duration-300 hover:-translate-y-1"
                >
                  Shop Now

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* INFO CARDS */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2">
                  {highlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-[30px] border border-white/10 bg-[#080808]/85 p-6 backdrop-blur-2xl"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
                            <Icon
                              size={22}
                              className="text-amber-300"
                            />
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-white">
                              {item.title}
                            </h4>

                            <p className="mt-3 text-sm leading-[1.9] text-stone-300">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* BOTTOM INFO */}
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  <div className="rounded-[28px] border border-white/10 bg-[#080808]/85 p-5">
                    <FiGlobe
                      className="text-amber-300"
                      size={24}
                    />

                    <h4 className="mt-4 text-lg font-bold text-white">
                      Nationwide Reach
                    </h4>

                    <p className="mt-2 text-sm leading-[1.8] text-stone-400">
                      Delivering fashion essentials across India.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-[#080808]/85 p-5">
                    <FiShield
                      className="text-amber-300"
                      size={24}
                    />

                    <h4 className="mt-4 text-lg font-bold text-white">
                      Secure Shopping
                    </h4>

                    <p className="mt-2 text-sm leading-[1.8] text-stone-400">
                      Safe and encrypted checkout experience.
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-[#080808]/85 p-5">
                    <FiAward
                      className="text-amber-300"
                      size={24}
                    />

                    <h4 className="mt-4 text-lg font-bold text-white">
                      Curated Quality
                    </h4>

                    <p className="mt-2 text-sm leading-[1.8] text-stone-400">
                      Handpicked collections with timeless styling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>

        {/* TRUSTED SERVICES - FULL WIDTH */}
        <div className="mt-24">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-amber-400 to-transparent" />

            <p className="text-xs font-bold uppercase tracking-[0.34em] text-amber-300">
              Trusted Services
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.30)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-amber-400/10 blur-3xl" />

                  <div className="relative z-10">
                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10">
                      <Icon
                        size={24}
                        className="text-amber-300"
                      />
                    </div>

                    <h4 className="text-2xl font-bold leading-snug text-[#f5ead7]">
                      {feature.title}
                    </h4>

                    <p className="mt-5 text-[15px] leading-[2] text-stone-400">
                      {feature.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-sm font-bold text-amber-300">
                      <FiCheckCircle />

                      Verified Service
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;