import PropTypes from "prop-types";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import SimilarProducts from "./SimilarProducts";

function ProductDetails({
  product,
  allProducts = [],
  onAddToCart,
  onWishlistToggle,
  onQuickView,
}) {
  if (!product) {
    return (
      <section
        aria-label="Product details unavailable"
        className="relative overflow-hidden rounded-[2.8rem] border border-[#3a2815] bg-[#0f0b07] px-6 py-24 shadow-[0_35px_100px_rgba(0,0,0,0.7)] sm:px-10"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.06),transparent_30%)]" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Icon */}
          <div className="relative mb-10 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4cd82] via-[#dca84b] to-[#ba7a22] shadow-[0_25px_50px_rgba(236,181,84,0.35)]">
            <div className="absolute inset-[1px] rounded-[1.9rem] bg-[linear-gradient(to_bottom,#f5d08c,#d59635)] opacity-90" />

            <span className="relative z-10 text-5xl font-black text-[#2b1703]">
              !
            </span>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-3 rounded-full border border-[#f0c372]/10 bg-[#1b120a] px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_16px_rgba(240,195,114,0.9)]" />

            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d9b06a]">
              Luxury Collection
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-8 text-[2.8rem] font-black leading-tight tracking-tight text-[#fff4e4] sm:text-[3.3rem]">
            Product Not Available
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-[1.9] text-[#b79366] sm:text-lg">
            The item you are searching for may have been removed,
            archived, or is currently unavailable from our curated
            premium collection.
          </p>

          {/* Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              "Premium Quality",
              "Luxury Fashion",
              "Verified Collection",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#f0c372]/10 bg-[#1b1209] px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#efc06c]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const galleryImages =
    Array.isArray(product.images) &&
    product.images.length
      ? product.images
      : product.image
        ? [product.image]
        : [];

  const trustFeatures = [
    {
      title: "Authentic Craftsmanship",
      description:
        "Premium materials and verified quality assurance for every order.",
      icon: "✦",
    },
    {
      title: "Secure Payments",
      description:
        "Advanced encrypted checkout experience with trusted protection.",
      icon: "◈",
    },
    {
      title: "Easy Returns",
      description:
        "Flexible return policy designed for confident shopping experiences.",
      icon: "↺",
    },
    {
      title: "Priority Shipping",
      description:
        "Fast and reliable delivery service with premium order handling.",
      icon: "⚡",
    },
  ];

  return (
    <section className="space-y-16 lg:space-y-20">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden rounded-[2.8rem] border border-[#352413] bg-[#0e0a06] shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.05),transparent_28%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

        {/* Main Layout */}
        <div className="relative z-10 grid gap-12 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:px-14 xl:py-14">
          {/* Gallery */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#2d1f12] bg-[#140d07] p-4 sm:p-5">
            <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#f0c372]/10 blur-3xl" />

            <ProductGallery
              images={galleryImages}
              productName={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#2d1f12] bg-[linear-gradient(to_bottom,#161008,#120b05)] p-5 sm:p-7 xl:p-8">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#f0c372]/10 blur-3xl" />

            {/* Top Badge */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-[#f0c372]/15 bg-[#22160b] px-4 py-2">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f0c372]">
                  Premium Edition
                </span>
              </div>

              <div className="rounded-full border border-emerald-400/10 bg-emerald-500/10 px-4 py-2">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-emerald-300">
                  Verified Product
                </span>
              </div>
            </div>

            <ProductInfo
              product={product}
              onAddToCart={onAddToCart}
              onWishlistToggle={onWishlistToggle}
            />
          </div>
        </div>
      </div>

      {/* ================= TRUST FEATURES ================= */}
      <div className="relative overflow-hidden rounded-[2.8rem] border border-[#332313] bg-[#0f0a06] px-5 py-10 shadow-[0_35px_100px_rgba(0,0,0,0.65)] sm:px-8 xl:px-12">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

                <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#d4ac68]">
                  Customer Benefits
                </span>
              </div>

              <h2 className="mt-5 text-[2.2rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[2.6rem]">
                Designed For Premium Shopping
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.9] text-[#b59266] sm:text-[15px]">
                Enjoy a secure luxury shopping experience with
                verified products, protected transactions, fast
                shipping, and customer-first service standards.
              </p>
            </div>

            <div className="self-start rounded-full border border-[#f0c372]/10 bg-[#1f140b] px-5 py-3">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
                Trusted Worldwide
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[2rem] border border-[#302113] bg-[linear-gradient(to_bottom,#1a1209,#140c06)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e1b261]/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
              >
                {/* Hover Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-16 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
                </div>

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-[1.3rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dcaa4d] to-[#bf7c1f] shadow-[0_15px_40px_rgba(237,191,104,0.28)]">
                  <span className="text-2xl font-black text-[#2d1702]">
                    {feature.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-black tracking-tight text-[#fff0da]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-[1.8] text-[#b18d61]">
                  {feature.description}
                </p>

                {/* Footer Tag */}
                <div className="mt-6 inline-flex rounded-full border border-[#f0c372]/10 bg-[#22160b] px-4 py-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
                    Premium Service
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PRODUCT DETAILS ================= */}
      <div className="relative overflow-hidden rounded-[2.8rem] border border-[#332313] bg-[#0f0a06] p-5 shadow-[0_35px_100px_rgba(0,0,0,0.65)] sm:p-8 xl:p-12">
        <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-10 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

              <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#d4ac68]">
                Product Intelligence
              </span>
            </div>

            <h2 className="mt-5 text-[2.2rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[2.7rem]">
              Product Specifications & Luxury Details
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-[1.9] text-[#b59266] sm:text-[15px]">
              Explore premium craftsmanship, material quality,
              design insights, sizing details, and curated
              product specifications crafted for confident luxury
              shopping.
            </p>
          </div>

          {/* Tabs */}
          <div className="overflow-hidden rounded-[2rem] border border-[#2c1d10] bg-[#140d07] p-4 sm:p-6">
            <ProductTabs product={product} />
          </div>
        </div>
      </div>

      {/* ================= SIMILAR PRODUCTS ================= */}
      <div className="relative overflow-hidden rounded-[2.8rem] border border-[#332313] bg-[#0f0a06] p-5 shadow-[0_35px_100px_rgba(0,0,0,0.65)] sm:p-8 xl:p-12">
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

                <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#d4ac68]">
                  Personalized Picks
                </span>
              </div>

              <h2 className="mt-5 text-[2.3rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[2.8rem]">
                Curated Luxury Recommendations
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.9] text-[#b59266] sm:text-[15px]">
                Discover handpicked products selected to complement
                your premium style, modern fashion preferences, and
                luxury lifestyle aesthetics.
              </p>
            </div>

            <div className="self-start rounded-full border border-[#f0c372]/10 bg-[#1f140b] px-5 py-3">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
                Curated Collection
              </span>
            </div>
          </div>

          {/* Products */}
          <div className="overflow-hidden rounded-[2rem] border border-[#2b1d10] bg-[#140d07] p-4 sm:p-6">
            <SimilarProducts
              products={allProducts}
              currentProductId={product.id}
              onWishlistToggle={onWishlistToggle}
              onQuickView={onQuickView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.string
    ),
  }),
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })
  ),
  onAddToCart: PropTypes.func,
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default ProductDetails;