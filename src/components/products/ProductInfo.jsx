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
  const [quantity, setQuantity] =
    useState(1);

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
    originalPrice &&
    originalPrice > price
      ? originalPrice - price
      : 0;

  const savingsPercent =
    originalPrice &&
    originalPrice > price
      ? Math.round(
          (savings / originalPrice) *
            100
        )
      : 0;

  const increaseQuantity = () => {
    if (stock > quantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    setQuantity((prev) =>
      prev > 1 ? prev - 1 : 1
    );
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
      description:
        "Express premium tracked shipping experience",
    },
    {
      icon: <FaShieldAlt />,
      title: "Protected Checkout",
      description:
        "Bank-grade encrypted payment protection",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      description:
        "Hassle-free luxury return assurance",
    },
  ];

  return (
    <section
      aria-label="Product information"
      className="space-y-10"
    >
      {/* Header */}
      <div className="space-y-7">
        {/* Category */}
        {category && (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.45em] text-[#caa26a]">
              {category}
            </p>
          </div>
        )}

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3">
          {badge && <Badge>{badge}</Badge>}

          {/* Stock */}
          <span
            className={`rounded-full border px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] ${
              stock > 0
                ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                : "border-rose-400/20 bg-rose-500/10 text-rose-300"
            }`}
          >
            {stock > 0
              ? "Available Now"
              : "Out of Stock"}
          </span>

          {/* Savings */}
          {savings > 0 && (
            <span className="rounded-full border border-[#f0c372]/20 bg-[#f0c372]/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
              Save ₹{savings} (
              {savingsPercent}% Off)
            </span>
          )}
        </div>

        {/* Product Name */}
        <div>
          <h1 className="text-[3rem] font-black leading-[1.05] tracking-tight text-[#fff1da] xl:text-[4.3rem]">
            {name}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#b59469]">
            Carefully curated luxury
            craftsmanship designed for
            refined lifestyles, elevated
            fashion aesthetics, and premium
            shopping experiences.
          </p>
        </div>
      </div>

      {/* Rating & Meta */}
      <div className="relative overflow-hidden rounded-[2rem] border border-[#392712] bg-gradient-to-br from-[#241608]/95 to-[#1a1007]/95 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {/* Shine */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />

        <div className="relative flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          {/* Rating */}
          <div className="flex flex-wrap items-center gap-5">
            <div className="rounded-[1.5rem] border border-[#f0c372]/10 bg-[#241507]/80 p-5">
              <div className="flex items-center gap-4">
                <RatingStars
                  rating={rating}
                />

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-[#fff0d7]">
                      {rating.toFixed(1)}
                    </span>

                    <FaStar className="text-[#f0c372]" />
                  </div>

                  <p className="mt-1 text-xs text-[#ae8c62]">
                    {reviewsCount} verified
                    luxury reviews
                  </p>
                </div>
              </div>
            </div>

            {/* SKU */}
            {sku && (
              <div className="rounded-[1.5rem] border border-[#392712] bg-[#140c06]/90 px-5 py-4">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8f6f45]">
                  Product SKU
                </p>

                <p className="mt-2 text-sm font-semibold tracking-wide text-[#fff0d7]">
                  {sku}
                </p>
              </div>
            )}
          </div>

          {/* Stock Status */}
          <div className="rounded-[1.5rem] border border-emerald-400/15 bg-emerald-500/10 px-6 py-5">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-emerald-300">
                <FaCheckCircle />
              </div>

              <div>
                <p className="text-sm font-black text-emerald-200">
                  {stockMessage}
                </p>

                <p className="mt-1 text-xs text-emerald-300/80">
                  Verified premium inventory
                  status
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="relative overflow-hidden rounded-[2rem] border border-[#392712] bg-[linear-gradient(to_bottom,#1d1408,#120b05)] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
        {/* Glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
          {/* Price */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#caa26a]">
                Premium Pricing
              </p>
            </div>

            <div className="mt-6">
              <PriceTag
                price={price}
                originalPrice={
                  originalPrice
                }
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#ae8c62]">
              Inclusive of premium shopping
              assurance, secure checkout,
              luxury support, and protected
              delivery services.
            </p>
          </div>

          {/* Packaging */}
          <div className="rounded-[1.7rem] border border-[#f0c372]/15 bg-[#f0c372]/10 px-6 py-5 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-[#f0c372] to-[#c78628] text-xl text-[#2f1903] shadow-[0_10px_30px_rgba(237,191,104,0.3)]">
                <FaGift />
              </div>

              <div>
                <p className="text-sm font-black text-[#f0c372]">
                  Complimentary Luxury
                  Packaging
                </p>

                <p className="mt-1 text-xs text-[#d8b170]">
                  Premium gifting experience
                  included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="rounded-[2rem] border border-[#392712] bg-gradient-to-br from-[#1b1207] to-[#120b05] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#caa26a]">
              Product Story
            </p>
          </div>

          <h3 className="mt-5 text-[2rem] font-black tracking-tight text-[#fff1da]">
            Crafted Luxury Experience
          </h3>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#b6946a]">
            {description}
          </p>
        </div>
      )}

      {/* Purchase Controls */}
      <div className="relative overflow-hidden rounded-[2rem] border border-[#392712] bg-[linear-gradient(to_bottom,#181106,#100a04)] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
        {/* Shine */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.025),transparent)]" />

        <div className="relative flex flex-col gap-8">
          {/* Quantity */}
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#8f6f45]">
              Quantity Selection
            </p>

            <div className="inline-flex items-center overflow-hidden rounded-[1.5rem] border border-[#392712] bg-[#241507]/90 backdrop-blur-xl">
              <button
                type="button"
                onClick={
                  decreaseQuantity
                }
                aria-label="Decrease quantity"
                className="px-7 py-5 text-2xl font-black text-[#f0c372] transition-all duration-300 hover:bg-[#f0c372] hover:text-[#2f1903]"
              >
                −
              </button>

              <span className="min-w-[110px] text-center text-2xl font-black text-[#fff0d7]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={
                  increaseQuantity
                }
                aria-label="Increase quantity"
                className="px-7 py-5 text-2xl font-black text-[#f0c372] transition-all duration-300 hover:bg-[#f0c372] hover:text-[#2f1903]"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-5 lg:flex-row">
            {/* Add to Cart */}
            <Button
              onClick={
                handleAddToCart
              }
              disabled={stock <= 0}
              className="group relative flex-1 overflow-hidden rounded-[1.6rem] border border-[#f0c372]/20 bg-gradient-to-r from-[#f0c372] via-[#e0b056] to-[#c78628] px-8 py-6 text-lg font-black tracking-wide text-[#2f1903] shadow-[0_15px_40px_rgba(237,191,104,0.25)] transition-all duration-300 hover:scale-[1.01]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative z-10">
                {stock > 0
                  ? "Add To Cart"
                  : "Unavailable"}
              </span>
            </Button>

            {/* Wishlist */}
            <button
              type="button"
              onClick={
                handleWishlistToggle
              }
              aria-label="Toggle wishlist"
              className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-[1.6rem] border border-[#392712] bg-[#241507]/90 px-8 py-6 font-black tracking-wide text-[#fff0d7] backdrop-blur-xl transition-all duration-300 hover:border-[#f0c372]/25 hover:bg-[#2a190b]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative z-10">
                {isWishlisted ? (
                  <FaHeart
                    className="text-[#f0c372]"
                    size={18}
                  />
                ) : (
                  <FaRegHeart
                    size={18}
                  />
                )}
              </span>

              <span className="relative z-10">
                Wishlist
              </span>
            </button>
          </div>

          {/* Security */}
          <div className="rounded-[1.5rem] border border-[#392712] bg-[#140c06]/80 px-6 py-5 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#f0c372]">
                <FaLock />
              </div>

              <div>
                <p className="text-sm font-black text-[#fff0d7]">
                  Secure Luxury Checkout
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#b59368]">
                  Protected premium
                  transactions with encrypted
                  payment security and verified
                  checkout assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Features */}
      <div className="grid gap-6 md:grid-cols-3">
        {trustFeatures.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-[2rem] border border-[#392712] bg-gradient-to-br from-[#1b1207] to-[#120b05] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c372]/20"
          >
            {/* Shine */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
            </div>

            {/* Icon */}
            <div className="relative mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.4rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f0c372] via-[#ddab4e] to-[#c78628] text-2xl text-[#2f1903] shadow-[0_12px_35px_rgba(237,191,104,0.3)]">
              <span className="absolute inset-0 bg-white/10 opacity-40" />

              <span className="relative z-10">
                {feature.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="relative text-xl font-black tracking-tight text-[#fff0d7]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="relative mt-4 text-sm leading-relaxed text-[#ae8c62]">
              {feature.description}
            </p>

            {/* Footer */}
            <div className="relative mt-5 inline-flex rounded-full border border-[#f0c372]/10 bg-[#241507]/90 px-4 py-2">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                Premium Assurance
              </span>
            </div>
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
    originalPrice:
      PropTypes.number,
    rating: PropTypes.number,
    reviewsCount:
      PropTypes.number,
    badge: PropTypes.string,
    description:
      PropTypes.string,
    stock: PropTypes.number,
    sku: PropTypes.string,
    isWishlisted:
      PropTypes.bool,
  }).isRequired,
  onAddToCart:
    PropTypes.func,
  onWishlistToggle:
    PropTypes.func,
};

export default ProductInfo;