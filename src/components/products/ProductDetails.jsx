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
        className="relative flex min-h-[700px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-[#3b2912] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_30%),linear-gradient(to_bottom,#1b1207,#120c05,#0c0703)] px-6 shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative z-10 max-w-2xl text-center">
          {/* Icon */}
          <div className="relative mx-auto mb-10 flex h-28 w-28 items-center justify-center overflow-hidden rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f0c372] via-[#ddab4e] to-[#c78628] text-5xl font-black text-[#2f1903] shadow-[0_20px_50px_rgba(237,191,104,0.35)]">
            <span className="absolute inset-0 bg-white/10 opacity-40" />

            <span className="relative z-10">
              !
            </span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#cda56b]">
              Elegant Context
            </p>
          </div>

          <h2 className="mt-6 text-[3rem] font-black tracking-tight text-[#fff1da]">
            Product Not Found
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#b8966b]">
            The premium product you are looking for is
            currently unavailable, archived, or removed
            from our curated luxury fashion collection.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-full border border-[#f0c372]/15 bg-[#241507] px-5 py-3">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
                Luxury Experience
              </span>
            </div>

            <div className="rounded-full border border-[#f0c372]/15 bg-[#241507] px-5 py-3">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
                Curated Collection
              </span>
            </div>
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
      title: "Authentic Luxury",
      description:
        "Verified premium craftsmanship assurance",
      icon: "✦",
    },
    {
      title: "Secure Checkout",
      description:
        "Protected encrypted payment experience",
      icon: "◈",
    },
    {
      title: "Easy Returns",
      description:
        "Hassle-free luxury return protection",
      icon: "↺",
    },
    {
      title: "Fast Delivery",
      description:
        "Premium orders shipped with priority",
      icon: "⚡",
    },
  ];

  return (
    <section className="space-y-20">
      {/* Hero Product Layout */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#3a2812] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.06),transparent_32%),linear-gradient(to_bottom,#1b1207,#130d05,#0d0703)] shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
        {/* Decorative Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />

        {/* Hero Content */}
        <div className="relative grid gap-14 px-8 py-10 lg:grid-cols-2 lg:items-start xl:px-14 xl:py-16">
          {/* Gallery */}
          <div className="relative">
            <div className="absolute -left-10 top-10 hidden h-44 w-44 rounded-full bg-[#f0c372]/10 blur-3xl lg:block" />

            <ProductGallery
              images={galleryImages}
              productName={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="relative">
            <div className="absolute right-0 top-0 hidden h-44 w-44 rounded-full bg-[#f0c372]/10 blur-3xl lg:block" />

            <ProductInfo
              product={product}
              onAddToCart={onAddToCart}
              onWishlistToggle={
                onWishlistToggle
              }
            />
          </div>
        </div>

        {/* Trust Features */}
        <div className="relative border-t border-[#34230f] px-8 py-10 xl:px-14">
          {/* Section Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

                <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#cba46a]">
                  Luxury Assurance
                </p>
              </div>

              <h2 className="mt-5 text-[2rem] font-black tracking-tight text-[#fff1da]">
                Premium Shopping Benefits
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#b59368]">
                Experience secure shopping,
                premium craftsmanship,
                hassle-free returns, and luxury
                delivery services crafted for
                elevated customer satisfaction.
              </p>
            </div>

            <div className="rounded-full border border-[#f0c372]/10 bg-[#241507] px-5 py-3">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
                Verified Premium
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#392712] bg-gradient-to-br from-[#241608] to-[#1a1007] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e0b161]/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              >
                {/* Shine */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                </div>

                {/* Icon */}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f0c372] via-[#ddab4e] to-[#c78628] text-xl font-black text-[#2f1903] shadow-[0_12px_35px_rgba(237,191,104,0.3)]">
                  <span className="absolute inset-0 bg-white/10 opacity-40" />

                  <span className="relative z-10">
                    {feature.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-black tracking-tight text-[#fff0d7]">
                  {feature.title}
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-[#ae8c62]">
                  {feature.description}
                </p>

                {/* Footer Label */}
                <div className="relative mt-5 inline-flex rounded-full border border-[#f0c372]/10 bg-[#2a190b] px-3 py-1.5">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                    Premium Service
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Story */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#392712] bg-[linear-gradient(to_bottom,#181106,#100a04)] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl xl:p-12">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-10 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

              <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#cba46a]">
                Product Intelligence
              </p>
            </div>

            <h2 className="mt-5 text-[2.4rem] font-black tracking-tight text-[#fff1da]">
              Crafted Details & Luxury Insights
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#b59368]">
              Explore premium craftsmanship,
              material quality, sizing details,
              curated specifications, and luxury
              product intelligence designed for
              confident high-end shopping.
            </p>
          </div>

          {/* Tabs */}
          <ProductTabs product={product} />
        </div>
      </div>

      {/* Similar Products */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#392712] bg-[linear-gradient(to_bottom,#181106,#100a04)] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl xl:p-12">
        {/* Glow */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

                <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#cba46a]">
                  Curated Recommendations
                </p>
              </div>

              <h2 className="mt-5 text-[2.5rem] font-black tracking-tight text-[#fff1da]">
                You May Also Love
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-[#b59368]">
                Explore handpicked premium
                selections curated to complement
                your refined style, luxury
                fashion preferences, and modern
                lifestyle aesthetics.
              </p>
            </div>

            <div className="rounded-full border border-[#f0c372]/10 bg-[#241507] px-5 py-3">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
                Luxury Recommendations
              </span>
            </div>
          </div>

          {/* Similar Products */}
          <SimilarProducts
            products={allProducts}
            currentProductId={product.id}
            onWishlistToggle={
              onWishlistToggle
            }
            onQuickView={onQuickView}
          />
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