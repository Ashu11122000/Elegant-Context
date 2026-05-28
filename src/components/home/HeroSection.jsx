import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiRefreshCw,
  FiShield,
  FiStar,
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
      title: "Complimentary Shipping",
      description:
        "Luxury doorstep delivery on orders above ₹1999 across India.",
    },
    {
      icon: FiRefreshCw,
      title: "Premium Returns",
      description:
        "7-day effortless exchange & return experience for every order.",
    },
    {
      icon: FiShield,
      title: "Secure Checkout",
      description:
        "Protected encrypted payments with trusted payment gateways.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0f0d09]">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,191,90,0.16),_transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(212,163,75,0.12),_transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Glow Blur */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rounded-full bg-yellow-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 px-5 py-2.5 shadow-[0_0_40px_rgba(245,158,11,0.08)] backdrop-blur-xl">
              <FiStar className="text-[13px] text-amber-500" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-200">
                Luxury Collection 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-3xl font-serif text-4xl font-black leading-[1.08] tracking-tight text-[#f7f1e8] sm:text-5xl lg:text-7xl">
              Elevate Your
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-200 bg-clip-text text-transparent">
                Luxury Lifestyle
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-[1.9] text-stone-300 sm:text-lg">
              Experience refined elegance through meticulously crafted fashion,
              premium accessories, and sophisticated essentials designed for
              modern individuals who appreciate timeless luxury, elevated
              comfort, and premium aesthetics.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to={ROUTES.PRODUCTS}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#1b1408] shadow-[0_12px_40px_rgba(245,158,11,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(245,158,11,0.35)]"
              >
                Shop Collection

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to={`${ROUTES.PRODUCTS}?filter=featured`}
                className="inline-flex items-center justify-center rounded-full border border-amber-500/20 bg-white/[0.03] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#d8c3a1] backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06] hover:text-amber-200"
              >
                Explore Featured
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-2xl grid-cols-3 gap-5">
              {[
                {
                  value: "10K+",
                  label: "Satisfied Clients",
                },
                {
                  value: `${PRODUCTS.length}+`,
                  label: "Premium Products",
                },
                {
                  value: `${PRODUCT_BRANDS.length}+`,
                  label: "Luxury Brands",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/20"
                >
                  <h3 className="text-3xl font-black tracking-tight text-amber-300">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-sm font-medium tracking-wide text-stone-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Features */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {trustFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
                  >
                    {/* Glow */}
                    <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-amber-400/10 blur-2xl transition-all duration-500 group-hover:bg-amber-400/20" />

                    <div className="relative z-10">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 shadow-inner">
                        <Icon
                          size={22}
                          className="text-amber-300"
                        />
                      </div>

                      <h4 className="text-[15px] font-bold tracking-wide text-[#f3e7d3]">
                        {feature.title}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-stone-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-amber-500/10 blur-3xl" />

            <div className="group relative w-full max-w-xl overflow-hidden rounded-[36px] border border-white/10 bg-black/20 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90"
                  alt="Luxury fashion collection"
                  className="h-[620px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />

                {/* Floating Luxury Tag */}
                <div className="absolute left-6 top-6 rounded-full border border-amber-400/20 bg-black/40 px-5 py-2 backdrop-blur-xl">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                    Premium Fashion
                  </span>
                </div>

                {/* Offer Card */}
                <div className="absolute bottom-6 left-6 right-6 overflow-hidden rounded-[30px] border border-white/10 bg-black/45 p-7 shadow-2xl backdrop-blur-2xl">
                  <div className="absolute right-[-20px] top-[-20px] h-28 w-28 rounded-full bg-amber-400/10 blur-2xl" />

                  <div className="relative z-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">
                      Exclusive Seasonal Offer
                    </p>

                    <h3 className="mt-3 font-serif text-4xl font-black tracking-tight text-amber-300">
                      Up to 40% Off
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-300">
                      Discover {FEATURED_PRODUCTS.length}+ curated luxury
                      essentials with limited-time premium pricing crafted for
                      modern elegance and timeless sophistication.
                    </p>

                    <Link
                      to={`${ROUTES.PRODUCTS}?filter=featured`}
                      className="mt-6 inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400 to-yellow-500 px-7 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#24190a] shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      Shop Offer

                      <FiArrowRight className="text-base" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-6 hidden w-64 rounded-[28px] border border-white/10 bg-[#18140f]/90 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl lg:block">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500">
                  <FiStar className="text-xl text-[#24190a]" />
                </div>

                <div>
                  <h4 className="text-sm font-bold tracking-wide text-[#f4e7d3]">
                    Premium Quality
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-stone-400">
                    Handcrafted luxury collections with refined detailing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;