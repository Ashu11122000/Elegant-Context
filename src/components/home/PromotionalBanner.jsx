import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiClock,
  FiGift,
  FiShield,
  FiSparkles,
  FiTruck,
} from "react-icons/fi";

import ROUTES from "../../config/routes";

function PromotionalBanner() {
  const campaignHighlights = [
    {
      icon: FiTruck,
      title: "Complimentary Shipping",
      description:
        "Luxury doorstep delivery on premium orders above ₹1999.",
    },
    {
      icon: FiShield,
      title: "Secure Premium Checkout",
      description:
        "Protected and encrypted luxury shopping experience.",
    },
    {
      icon: FiGift,
      title: "Exclusive Member Offers",
      description:
        "Seasonal premium benefits and curated luxury savings.",
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
        <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#1a130b] via-[#271b0e] to-[#3b270e] px-6 py-14 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:px-10 lg:px-16 lg:py-20">
          {/* Premium Glow */}
          <div className="absolute right-[-90px] top-[-90px] h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute bottom-[-90px] left-[-90px] h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500">
                  <FiClock
                    size={14}
                    className="text-[#23180a]"
                  />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
                  Limited Time Luxury Event
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-8 max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight text-[#f8f1e8] sm:text-5xl lg:text-6xl">
                Elevate Your Style with Exclusive Luxury Collections
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-[1.9] text-stone-300 sm:text-lg">
                Discover curated premium collections crafted for timeless
                sophistication, elevated comfort, and modern elegance.
                Unlock exclusive seasonal pricing across our most refined
                luxury fashion essentials.
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {campaignHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
                    >
                      {/* Glow */}
                      <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-amber-400/10 blur-2xl transition-all duration-500 group-hover:bg-amber-400/20" />

                      <div className="relative z-10">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 shadow-inner">
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

              {/* CTA */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={ROUTES.PRODUCTS}
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-amber-400/20 bg-gradient-to-r from-amber-400 to-yellow-500 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#23180a] shadow-[0_18px_45px_rgba(245,158,11,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(245,158,11,0.35)]"
                >
                  Shop Collection

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to={`${ROUTES.PRODUCTS}?sale=true`}
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-amber-400/20 bg-white/[0.03] px-9 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#dcc39c] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.06] hover:text-amber-200"
                >
                  View Offers

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative hidden justify-center lg:flex">
              {/* Outer Circle */}
              <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-yellow-500/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-3xl" />

                {/* Inner Circle */}
                <div className="relative flex h-[320px] w-[320px] flex-col items-center justify-center rounded-full border border-white/10 bg-[#1b140d]/95 shadow-inner backdrop-blur-xl">
                  {/* Top Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-black/20 px-4 py-2 backdrop-blur-xl">
                    <FiSparkles className="text-sm text-amber-300" />

                    <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-200">
                      Premium Event
                    </span>
                  </div>

                  {/* Discount */}
                  <span className="mt-6 bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-center text-7xl font-black leading-none text-transparent">
                    50%
                  </span>

                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.4em] text-[#dcc39c]">
                    OFF
                  </p>

                  <p className="mt-6 max-w-[220px] text-center text-sm leading-relaxed text-stone-400">
                    Exclusive seasonal savings on curated luxury fashion
                    collections designed for modern sophistication.
                  </p>

                  {/* Mini Info */}
                  <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 px-6 py-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                      Limited Collection Access
                    </p>

                    <p className="mt-2 text-lg font-bold text-[#f4e7d2]">
                      Premium Members Only
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -right-8 top-12 rounded-[28px] border border-white/10 bg-black/40 px-6 py-5 shadow-2xl backdrop-blur-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                    Exclusive Picks
                  </p>

                  <p className="mt-3 text-xl font-black text-amber-300">
                    Luxury Collections
                  </p>

                  <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-stone-400">
                    Handpicked premium fashion essentials curated for timeless elegance.
                  </p>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute -bottom-6 left-0 rounded-[28px] border border-white/10 bg-black/40 px-6 py-5 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500">
                      <FiGift
                        size={24}
                        className="text-[#23180a]"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                        Seasonal Luxury
                      </p>

                      <h4 className="mt-1 text-lg font-bold text-[#f4e7d2]">
                        Premium Benefits
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT VISUAL */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionalBanner;