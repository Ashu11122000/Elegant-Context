import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaHeart,
  FaRegHeart,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaStar,
  FaCheckCircle,
  FaGift,
  FaLock,
} from "react-icons/fa";
import RatingStars from "../UI/RatingStars";
import PriceTag from "../UI/PriceTag";
import Badge from "../UI/Badge";
import Button from "../UI/Button";

function ProductInfo({
  product,
  onAddToCart,
  onWishlistToggle,
}) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const {
    name,
    category,
    price,
    originalPrice,
    rating = 0,
    reviewsCount = 0,
    badge,
    description,
    stock = 0,
    sku,
    isWishlisted = false,
  } = product;

  const savings =
    originalPrice && originalPrice > price
      ? originalPrice - price
      : 0;

  const savingsPercent =
    originalPrice && originalPrice > price
      ? Math.round((savings / originalPrice) * 100)
      : 0;

  const increaseQuantity = () => {
    if (stock > quantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (onAddToCart && stock > 0) {
      onAddToCart(product, quantity);
    }
  };

  const handleWishlistToggle = () => {
    if (onWishlistToggle) {
      onWishlistToggle(product);
    }
  };

  const stockMessage =
    stock > 10
      ? "Ready for immediate dispatch"
      : stock > 0
        ? `Only ${stock} left in premium stock`
        : "Currently unavailable";

  const trustFeatures = [
    {
      icon: <FaTruck />,
      title: "Fast Luxury Delivery",
      description: "Express premium tracked shipping",
    },
    {
      icon: <FaShieldAlt />,
      title: "Protected Checkout",
      description: "Bank-grade encrypted payment security",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      description: "Stress-free return assurance",
    },
  ];

  return (
    <section
      aria-label="Product information"
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-6">
        {category && (
          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#8f7855]">
            {category}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {badge && <Badge>{badge}</Badge>}

          <span
            className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${
              stock > 0
                ? "border border-green-400/20 bg-green-500/10 text-green-300"
                : "border border-red-400/20 bg-red-500/10 text-red-300"
            }`}
          >
            {stock > 0 ? "Available Now" : "Out of Stock"}
          </span>

          {savings > 0 && (
            <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#edbf68]">
              Save ₹{savings} ({savingsPercent}% Off)
            </span>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-semibold leading-tight text-[#f8e8c8] xl:text-5xl">
            {name}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#a88f68]">
            Carefully curated luxury craftsmanship designed for refined modern
            lifestyles and elevated premium shopping experiences.
          </p>
        </div>
      </div>

      {/* Rating + Meta */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              <RatingStars rating={rating} />

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#f8e8c8]">
                    {rating.toFixed(1)}
                  </span>

                  <FaStar className="text-[#edbf68]" />
                </div>

                <p className="text-xs text-[#9e8864]">
                  {reviewsCount} verified reviews
                </p>
              </div>
            </div>

            {sku && (
              <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7855]">
                  SKU
                </p>

                <p className="mt-2 text-sm font-medium text-[#f8e8c8]">
                  {sku}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-green-400/15 bg-green-500/10 px-5 py-4">
            <FaCheckCircle className="text-green-300" />
            <div>
              <p className="text-sm font-semibold text-green-200">
                {stockMessage}
              </p>
              <p className="text-xs text-green-300/80">
                Premium inventory status
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#1f1608] to-[#151005] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8f7855]">
              Premium Pricing
            </p>

            <div className="mt-4">
              <PriceTag
                price={price}
                originalPrice={originalPrice}
              />
            </div>

            <p className="mt-3 text-sm text-[#9e8864]">
              Inclusive of premium shopping assurance
            </p>
          </div>

          <div className="rounded-2xl border border-amber-300/15 bg-amber-400/10 px-5 py-4">
            <div className="flex items-center gap-3 text-[#edbf68]">
              <FaGift />
              <span className="text-sm font-semibold">
                Complimentary premium packaging
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div>
          <h3 className="mb-4 text-xl font-semibold text-[#f8e8c8]">
            Product Story
          </h3>

          <p className="max-w-3xl text-base leading-relaxed text-[#d7c3a0]">
            {description}
          </p>
        </div>
      )}

      {/* Purchase Controls */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#181106] to-[#100a04] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
          {/* Quantity */}
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
              Quantity
            </p>

            <div className="flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
                className="px-6 py-5 text-[#edbf68] transition hover:bg-[#edbf68] hover:text-[#1f1606]"
              >
                −
              </button>

              <span className="min-w-[90px] text-center text-lg font-semibold text-[#f8e8c8]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Increase quantity"
                className="px-6 py-5 text-[#edbf68] transition hover:bg-[#edbf68] hover:text-[#1f1606]"
              >
                +
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-1 flex-col gap-4 lg:flex-row">
            <Button
              onClick={handleAddToCart}
              disabled={stock <= 0}
              className="flex-1 rounded-2xl bg-gradient-to-r from-[#edbf68] to-[#d79b35] px-8 py-5 text-lg font-semibold text-[#1a1205] shadow-[0_12px_35px_rgba(237,191,104,0.25)] hover:scale-[1.01]"
            >
              {stock > 0 ? "Add to Cart" : "Unavailable"}
            </Button>

            <button
              type="button"
              onClick={handleWishlistToggle}
              aria-label="Toggle wishlist"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-semibold text-[#f5e6c8] transition-all duration-300 hover:border-amber-300/25 hover:bg-amber-400/10"
            >
              {isWishlisted ? (
                <FaHeart className="text-[#edbf68]" size={18} />
              ) : (
                <FaRegHeart size={18} />
              )}
              Wishlist
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/8 bg-black/10 px-5 py-4">
          <FaLock className="text-[#edbf68]" />
          <p className="text-sm text-[#d7c3a0]">
            Secure premium checkout with encrypted transaction protection
          </p>
        </div>
      </div>

      {/* Trust Features */}
      <div className="grid gap-5 md:grid-cols-3">
        {trustFeatures.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1206] to-[#110b04] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-amber-300/15 hover:-translate-y-1"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-xl text-[#1a1205] shadow-lg">
              {feature.icon}
            </div>

            <h3 className="text-lg font-semibold text-[#f8e8c8]">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    rating: PropTypes.number,
    reviewsCount: PropTypes.number,
    badge: PropTypes.string,
    description: PropTypes.string,
    stock: PropTypes.number,
    sku: PropTypes.string,
    isWishlisted: PropTypes.bool,
  }).isRequired,
  onAddToCart: PropTypes.func,
  onWishlistToggle: PropTypes.func,
};

export default ProductInfo;