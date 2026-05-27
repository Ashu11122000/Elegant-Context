import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiClock,
  FiGift,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import ROUTES from "../../config/routes";

function PromotionalBanner() {
  const campaignHighlights = [
    {
      icon: FiTruck,
      title: "Free Shipping",
      description: "On premium orders above ₹1999",
    },
    {
      icon: FiShield,
      title: "Secure Checkout",
      description: "Protected luxury shopping experience",
    },
    {
      icon: FiGift,
      title: "Exclusive Offers",
      description: "Seasonal premium member benefits",
    },
  ];

  return (
    <section className="bg-[#271e07] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-r from-[#2b1e09] via-[#34240d] to-[#2a1d08] px-6 py-14 shadow-2xl sm:px-10 lg:px-16">
          {/* Decorative overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(237,191,104,0.14),_transparent_35%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(237,191,104,0.08),_transparent_40%)]" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                <FiClock size={14} />
                Limited Time Luxury Event
              </div>

              <h2 className="mt-6 text-3xl font-semibold leading-tight text-amber-100 sm:text-4xl lg:text-5xl">
                Elevate Your Wardrobe with Exclusive Premium Luxury Styles
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
                Discover curated premium collections crafted for timeless
                sophistication, refined comfort, and modern elegance.
                Unlock limited-time pricing across our most desirable luxury
                fashion selections.
              </p>

              {/* Campaign highlights */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {campaignHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-amber-900/20 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10">
                        <Icon
                          size={18}
                          className="text-amber-300"
                        />
                      </div>

                      <h3 className="text-sm font-semibold text-amber-100">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-stone-400">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={ROUTES.PRODUCTS}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-stone-950 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Shop Collection
                  <FiArrowRight size={18} />
                </Link>

                <Link
                  to={`${ROUTES.PRODUCTS}?sale=true`}
                  className="inline-flex items-center justify-center rounded-full border border-amber-300/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-amber-200 transition-all duration-300 hover:bg-white/5"
                >
                  View Offers
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden justify-center lg:flex">
              <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 backdrop-blur-sm shadow-2xl">
                <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full border border-amber-300/30 bg-[#31230c] shadow-inner">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">
                    Premium Event
                  </p>

                  <span className="mt-4 text-center text-5xl font-bold leading-tight text-amber-200">
                    50%
                  </span>

                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-stone-300">
                    OFF
                  </p>

                  <p className="mt-5 max-w-[180px] text-center text-xs leading-relaxed text-stone-400">
                    Exclusive seasonal savings on premium luxury collections.
                  </p>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-4 top-10 rounded-2xl border border-amber-300/20 bg-black/40 px-5 py-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                    Exclusive Picks
                  </p>

                  <p className="mt-2 text-lg font-semibold text-amber-200">
                    Premium Collections
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

export default PromotionalBanner;