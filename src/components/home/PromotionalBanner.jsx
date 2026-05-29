import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiClock,
  FiGift,
  FiTruck,
  FiZap,
  FiCheckCircle,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";

import ROUTES from "../../config/routes";

function PromotionalBanner() {
  const campaignHighlights = [
    {
      icon: FiTruck,
      title: "Complimentary Shipping",
      description:
        "Fast and secure doorstep delivery across India on eligible fashion orders above ₹1999.",
    },

    {
      icon: FiGift,
      title: "Seasonal Member Offers",
      description:
        "Unlock curated seasonal rewards, member access, and limited-time savings on modern fashion collections.",
    },
  ];

  const floatingCards = [
    {
      icon: FiCheckCircle,
      label: "Trusted Shopping",
      title: "Secure Experience",
      description:
        "Refined shopping tailored for modern fashion enthusiasts and elevated lifestyles.",
    },

    {
      icon: FiStar,
      label: "Curated Picks",
      title: "Fashion Collections",
      description:
        "Handpicked seasonal collections designed with elevated aesthetics and timeless appeal.",
    },

    {
      icon: FiTrendingUp,
      label: "Seasonal Collections",
      title: "Modern Luxury Styles",
      description:
        "Contemporary styles inspired by timeless sophistication and elevated fashion.",
    },

    {
      icon: FiGift,
      label: "Seasonal Benefits",
      title: "Member Rewards",
      description:
        "Unlock curated offers, rewards, and exclusive seasonal savings.",
    },
  ];

  const additionalBenefits = [
    "Luxury Fashion Collections",
    "Curated Seasonal Styles",
    "Trusted Shopping Experience",
    "Modern Elegant Designs",
  ];

  return (
    <section className="relative overflow-hidden bg-[#080808] py-28 sm:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.14),_transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(217,119,6,0.08),_transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:95px_95px]" />

      {/* GLOWS */}
      <div className="absolute left-[-120px] top-0 h-[340px] w-[340px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[340px] w-[340px] rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10">
        {/* MAIN WRAPPER */}
        <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#17110b] via-[#24170b] to-[#3d270d] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
          {/* INNER GLOW */}
          <div className="absolute right-[-160px] top-[-160px] h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-3xl" />

          <div className="absolute bottom-[-160px] left-[-160px] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />

          {/* CONTENT */}
          <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-6 py-3 backdrop-blur-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500">
                <FiClock
                  size={16}
                  className="text-[#23180a]"
                />
              </div>

              <span className="text-[11px] font-black uppercase tracking-[0.30em] text-amber-200">
                Limited-Time Collection Event
              </span>
            </div>

            {/* HEADING */}
            <div className="mt-12 max-w-5xl">
              <h2 className="font-serif text-5xl font-black leading-[1.02] tracking-tight text-[#f8f1e8] sm:text-6xl xl:text-7xl">
                Elevate Your Style With Exclusive Fashion Collections
              </h2>

              {/* DIVIDER */}
              <div className="mt-10 h-[2px] w-40 bg-gradient-to-r from-amber-400 via-yellow-300 to-transparent" />

              {/* DESCRIPTION */}
              <p className="mt-10 max-w-3xl text-lg leading-[2] text-stone-300">
                Discover thoughtfully curated fashion collections designed with
                timeless sophistication, luxurious comfort, elevated
                aesthetics, and refined contemporary styling tailored for
                modern lifestyles.
              </p>
            </div>

            {/* TAGS */}
            <div className="mt-12 flex flex-wrap gap-4">
              {additionalBenefits.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-stone-300 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/20 hover:bg-white/[0.08]"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* BENEFITS SECTION */}
            <div className="mt-20">
              {/* TITLE */}
              <div className="mb-10 flex items-center gap-4">
                <div className="h-[2px] w-16 bg-gradient-to-r from-amber-400 to-transparent" />

                <p className="text-xs font-black uppercase tracking-[0.32em] text-amber-300">
                  Exclusive Shopping Benefits
                </p>
              </div>

              {/* BENEFIT CARDS */}
              <div className="grid gap-6 md:grid-cols-2">
                {campaignHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.30)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/20"
                    >
                      {/* GLOW */}
                      <div className="absolute right-[-20px] top-[-20px] h-36 w-36 rounded-full bg-amber-400/10 blur-3xl transition-all duration-500 group-hover:bg-amber-400/20" />

                      <div className="relative z-10">
                        {/* ICON */}
                        <div className="flex h-18 w-18 items-center justify-center rounded-[26px] border border-amber-400/20 bg-gradient-to-br from-amber-400/15 to-yellow-500/10">
                          <Icon
                            size={28}
                            className="text-amber-300"
                          />
                        </div>

                        {/* TITLE */}
                        <h3 className="mt-7 text-xl font-black text-[#f4e7d2]">
                          {item.title}
                        </h3>

                        {/* DIVIDER */}
                        <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-amber-400 to-transparent" />

                        {/* DESCRIPTION */}
                        <p className="mt-5 text-sm leading-[2] text-stone-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SEPARATED OFFER SECTION */}
            <div className="mt-24">
              {/* TOP CARDS */}
              <div className="grid gap-6 lg:grid-cols-2">
                {floatingCards.slice(0, 2).map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[34px] border border-white/10 bg-black/35 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.40)] backdrop-blur-3xl"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500">
                          <Icon
                            size={24}
                            className="text-[#23180a]"
                          />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.26em] text-stone-400">
                            {item.label}
                          </p>

                          <h4 className="mt-3 text-2xl font-black leading-tight text-[#f4e7d2]">
                            {item.title}
                          </h4>

                          <div className="mt-5 h-[2px] w-14 bg-gradient-to-r from-amber-400 to-transparent" />

                          <p className="mt-5 text-sm leading-[2] text-stone-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CENTER OFFER CIRCLE */}
              <div className="relative mx-auto mt-20 flex h-[620px] w-[620px] max-w-full items-center justify-center rounded-full border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-yellow-500/10 shadow-[0_35px_90px_rgba(0,0,0,0.40)] backdrop-blur-2xl">
                {/* OUTER GLOW */}
                <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-3xl" />

                {/* INNER CIRCLE */}
                <div className="relative flex h-[440px] w-[440px] max-w-full flex-col items-center justify-center rounded-full border border-white/10 bg-[#1a130d]/95 px-10 text-center shadow-inner backdrop-blur-xl">
                  {/* BADGE */}
                  <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-black/20 px-5 py-2.5 backdrop-blur-xl">
                    <FiZap className="text-sm text-amber-300" />

                    <span className="text-[11px] font-black uppercase tracking-[0.28em] text-amber-200">
                      Seasonal Event
                    </span>
                  </div>

                  {/* OFFER */}
                  <span className="mt-8 bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-center text-8xl font-black leading-none text-transparent sm:text-9xl">
                    50%
                  </span>

                  <p className="mt-4 text-sm font-black uppercase tracking-[0.40em] text-[#dcc39c]">
                    OFF
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-8 max-w-[280px] text-center text-sm leading-[2] text-stone-400">
                    Exclusive seasonal savings on curated collections inspired
                    by timeless elegance and elevated modern styling.
                  </p>

                  {/* INFO BOX */}
                  <div className="mt-10 rounded-[30px] border border-white/10 bg-black/20 px-8 py-6 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
                      Collection Access
                    </p>

                    <p className="mt-3 text-2xl font-black text-[#f4e7d2]">
                      Exclusive Member Benefits
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM CARDS */}
              <div className="mt-20 grid gap-6 lg:grid-cols-2">
                {floatingCards.slice(2, 4).map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[34px] border border-white/10 bg-black/35 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.40)] backdrop-blur-3xl"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500">
                          <Icon
                            size={24}
                            className="text-[#23180a]"
                          />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.26em] text-stone-400">
                            {item.label}
                          </p>

                          <h4 className="mt-3 text-2xl font-black leading-tight text-[#f4e7d2]">
                            {item.title}
                          </h4>

                          <div className="mt-5 h-[2px] w-14 bg-gradient-to-r from-amber-400 to-transparent" />

                          <p className="mt-5 text-sm leading-[2] text-stone-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-24 flex flex-col gap-5 sm:flex-row">
              <Link
                to={ROUTES.PRODUCTS}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-10 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#23180a] shadow-[0_20px_50px_rgba(245,158,11,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(245,158,11,0.40)]"
              >
                Shop Collection

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to={`${ROUTES.PRODUCTS}?sale=true`}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-10 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#dcc39c] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.08] hover:text-amber-200"
              >
                View Offers

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionalBanner;