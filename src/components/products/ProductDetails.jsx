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
        className="flex min-h-[620px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1c1408] via-[#161005] to-[#100a04] px-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
      >
        <div className="max-w-xl text-center">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-4xl font-bold text-[#1a1205] shadow-[0_15px_40px_rgba(237,191,104,0.3)]">
            !
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
            Elegant Context
          </p>

          <h2 className="mt-5 text-4xl font-semibold text-[#f8e8c8]">
            Product Not Found
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[#d7c3a0]">
            The product you are looking for is currently unavailable, archived,
            or may have been removed from our curated premium collection.
          </p>
        </div>
      </section>
    );
  }

  const galleryImages =
    Array.isArray(product.images) && product.images.length
      ? product.images
      : product.image
        ? [product.image]
        : [];

  const trustFeatures = [
    {
      title: "Authentic Quality",
      description: "Premium verified craftsmanship",
      icon: "✦",
    },
    {
      title: "Secure Checkout",
      description: "Protected shopping experience",
      icon: "◈",
    },
    {
      title: "Easy Returns",
      description: "Hassle-free return assurance",
      icon: "↺",
    },
    {
      title: "Fast Delivery",
      description: "Luxury orders shipped quickly",
      icon: "⚡",
    },
  ];

  return (
    <section className="space-y-20">
      {/* Hero Product Layout */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b1308]/95 via-[#151005]/95 to-[#100a04]/95 shadow-[0_35px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="grid gap-12 px-8 py-10 lg:grid-cols-2 lg:items-start xl:px-12 xl:py-14">
          <ProductGallery
            images={galleryImages}
            productName={product.name}
          />

          <ProductInfo
            product={product}
            onAddToCart={onAddToCart}
            onWishlistToggle={onWishlistToggle}
          />
        </div>

        {/* Premium Trust Strip */}
        <div className="grid gap-4 border-t border-white/8 px-8 py-8 sm:grid-cols-2 lg:grid-cols-4 xl:px-12">
          {trustFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/6 bg-white/5 p-5 transition-all duration-300 hover:border-amber-300/15 hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-xl font-bold text-[#1a1205] shadow-lg">
                {feature.icon}
              </div>

              <h3 className="text-sm font-semibold text-[#f8e8c8]">
                {feature.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#9e8864]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Story / Details */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#181106]/95 to-[#100a04]/95 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl xl:p-10">
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8f7855]">
            Product Story
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[#f8e8c8]">
            Crafted Details & Product Intelligence
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#a88f68]">
            Explore product specifications, craftsmanship insights, sizing
            guidance, and curated product information designed for confident
            premium shopping.
          </p>
        </div>

        <ProductTabs product={product} />
      </div>

      {/* Similar Products */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#181106]/95 to-[#100a04]/95 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl xl:p-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#8f7855]">
              Curated Recommendations
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#f8e8c8]">
              You May Also Love
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#a88f68]">
              Discover complementary premium selections handpicked to match your
              refined style preferences.
            </p>
          </div>
        </div>

        <SimilarProducts
          products={allProducts}
          currentProductId={product.id}
          onWishlistToggle={onWishlistToggle}
          onQuickView={onQuickView}
        />
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
    images: PropTypes.arrayOf(PropTypes.string),
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