import { Link } from "react-router-dom";
import PRODUCTS, {
  PRODUCT_BRANDS,
  FEATURED_PRODUCTS,
} from "../../data/products";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#271e07] via-[#2d1f08] to-[#31230c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(237,191,104,0.12),_transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-[#edbf68]/30 bg-[#edbf68]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#edbf68]">
              New Luxury Collection
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#edbf68] sm:text-5xl lg:text-6xl">
              Redefine Your Style with Timeless Elegance
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#f5e6c8] sm:text-lg">
              Discover premium fashion pieces curated for modern sophistication.
              Elevate your wardrobe with luxury craftsmanship, exclusive
              collections, and refined style.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-[#edbf68] px-8 py-4 font-semibold text-[#1f1606] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Shop Now
              </Link>

              <Link
                to="/products?filter=featured"
                className="inline-flex items-center justify-center rounded-full border border-[#edbf68]/30 px-8 py-4 font-semibold text-[#edbf68] transition-all duration-300 hover:bg-[#edbf68]/10"
              >
                Explore Collection
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-[#edbf68]">
                  10K+
                </h3>
                <p className="mt-2 text-sm text-[#d7c3a0]">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#edbf68]">
                  {PRODUCTS.length}+
                </h3>
                <p className="mt-2 text-sm text-[#d7c3a0]">
                  Premium Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#edbf68]">
                  {PRODUCT_BRANDS.length}+
                </h3>
                <p className="mt-2 text-sm text-[#d7c3a0]">
                  Premium Brands
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[420px] w-full max-w-md overflow-hidden rounded-3xl border border-[#edbf68]/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury fashion collection"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl border border-[#edbf68]/20 bg-black/40 px-5 py-4 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.15em] text-[#d7c3a0]">
                  Exclusive Offer
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#edbf68]">
                  Up to 40% Off
                </h3>

                <p className="mt-1 text-xs text-[#f5e6c8]">
                  {FEATURED_PRODUCTS.length}+ featured products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;