import { Link } from "react-router-dom";

function PromotionalBanner() {
  return (
    <section className="bg-[#271e07] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#edbf68]/20 bg-gradient-to-r from-[#2d1f08] via-[#31230c] to-[#2d1f08] px-6 py-14 shadow-2xl sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(237,191,104,0.12),_transparent_40%)]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-[#edbf68]/30 bg-[#edbf68]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#edbf68]">
                Limited Time Offer
              </span>

              <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#edbf68] sm:text-4xl lg:text-5xl">
                Elevate Your Wardrobe with Premium Luxury Styles
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f5e6c8] sm:text-lg">
                Discover exclusive collections crafted for elegance, comfort,
                and timeless fashion. Enjoy premium deals available for a
                limited time only.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-full bg-[#edbf68] px-8 py-3 font-semibold text-[#1f1606] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Shop Collection
                </Link>

                <Link
                  to="/products?sale=true"
                  className="inline-flex items-center justify-center rounded-full border border-[#edbf68]/30 px-8 py-3 font-semibold text-[#edbf68] transition-all duration-300 hover:bg-[#edbf68]/10"
                >
                  View Offers
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:flex justify-center">
              <div className="flex h-72 w-72 items-center justify-center rounded-full border border-[#edbf68]/20 bg-[#edbf68]/10 backdrop-blur-sm">
                <div className="flex h-56 w-56 items-center justify-center rounded-full border border-[#edbf68]/30 bg-[#31230c]">
                  <span className="text-center text-4xl font-bold leading-tight text-[#edbf68]">
                    UP TO
                    <br />
                    50% OFF
                  </span>
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