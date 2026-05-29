import { useState } from "react";
import PropTypes from "prop-types";

import {
  FaHeart,
  FaRegHeart,
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
        ? `Only ${stock} left in stock`
        : "Currently unavailable";

  return (
    <section
      aria-label="Product information"
      className="space-y-8 xl:space-y-10"
    >
      {/* ================= HEADER ================= */}
      <div className="space-y-7">
        {/* Category */}
        {category && (
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.42em] text-[#d0a664]">
              {category}
            </p>
          </div>
        )}

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3">
          {badge && <Badge>{badge}</Badge>}

          {/* Stock */}
          <span
            className={`rounded-full border px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] ${
              stock > 0
                ? "border-emerald-400/15 bg-emerald-500/10 text-emerald-300"
                : "border-rose-400/15 bg-rose-500/10 text-rose-300"
            }`}
          >
            {stock > 0
              ? "In Stock"
              : "Out Of Stock"}
          </span>

          {/* Savings */}
          {savings > 0 && (
            <span className="rounded-full border border-[#f0c372]/15 bg-[#f0c372]/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#f0c372]">
              Save ₹{savings} •{" "}
              {savingsPercent}% Off
            </span>
          )}
        </div>

        {/* Product Name */}
        <div>
          <h1 className="max-w-4xl text-[2.8rem] font-black leading-[1.02] tracking-tight text-[#fff3df] sm:text-[3.5rem] xl:text-[4.4rem]">
            {name}
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-[2] text-[#b89569] sm:text-base">
            Crafted for refined lifestyles and elevated modern
            fashion experiences with premium materials,
            sophisticated detailing, and timeless luxury
            aesthetics.
          </p>
        </div>
      </div>

      {/* ================= RATING + SKU ================= */}
      <div className="relative overflow-hidden rounded-[2.2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#1a1209,#130b06)] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:p-7">
        {/* Background Glow */}
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          {/* Left */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Rating */}
            <div className="rounded-[1.6rem] border border-[#f0c372]/10 bg-[#1f140a] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-4">
                <RatingStars
                  rating={rating}
                />

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-[#fff1db]">
                      {rating.toFixed(1)}
                    </span>

                    <FaStar className="text-[#f0c372]" />
                  </div>

                  <p className="mt-1 text-xs text-[#b18d61]">
                    {reviewsCount} verified
                    reviews
                  </p>
                </div>
              </div>
            </div>

            {/* SKU */}
            {sku && (
              <div className="rounded-[1.6rem] border border-[#322214] bg-[#140d07] px-5 py-5 shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#8c6c42]">
                  Product SKU
                </p>

                <p className="mt-3 text-sm font-semibold tracking-[0.08em] text-[#fff1db]">
                  {sku}
                </p>
              </div>
            )}
          </div>

          {/* Stock Status */}
          <div className="rounded-[1.6rem] border border-emerald-400/15 bg-emerald-500/10 px-6 py-5 shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-emerald-300">
                <FaCheckCircle />
              </div>

              <div>
                <p className="text-sm font-black text-emerald-200">
                  {stockMessage}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-emerald-300/80">
                  Verified inventory availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRICING ================= */}
      <div className="relative overflow-hidden rounded-[2.2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#1a1209,#120b05)] p-7 shadow-[0_35px_80px_rgba(0,0,0,0.45)] sm:p-8">
        {/* Glow */}
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#f0c372]/10 blur-3xl" />

        <div className="relative flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d0a664]">
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

            <p className="mt-5 max-w-2xl text-sm leading-[1.9] text-[#b18d61]">
              Inclusive of premium packaging, secure checkout,
              customer support assistance, and protected
              delivery experience.
            </p>
          </div>

          {/* Gift Card */}
          <div className="rounded-[1.8rem] border border-[#f0c372]/15 bg-[#f0c372]/10 px-6 py-5 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] bg-gradient-to-br from-[#f4ce85] to-[#c8872c] text-xl text-[#2d1702] shadow-[0_15px_30px_rgba(237,191,104,0.28)]">
                <FaGift />
              </div>

              <div>
                <p className="text-sm font-black text-[#f0c372]">
                  Complimentary Packaging
                </p>

                <p className="mt-1 text-xs leading-relaxed text-[#d7af6f]">
                  Premium gifting experience included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      {description && (
        <div className="rounded-[2.2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#181008,#120b05)] p-7 shadow-[0_30px_70px_rgba(0,0,0,0.4)] sm:p-8">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_14px_rgba(240,195,114,0.9)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d0a664]">
              Product Story
            </p>
          </div>

          <h3 className="mt-5 text-[2rem] font-black leading-tight tracking-tight text-[#fff3df]">
            Crafted Luxury Experience
          </h3>

          <p className="mt-6 max-w-4xl text-sm leading-[2] text-[#b6946a] sm:text-base">
            {description}
          </p>
        </div>
      )}

      {/* ================= PURCHASE CONTROLS ================= */}
      <div className="relative overflow-hidden rounded-[2.2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#171007,#0f0904)] p-7 shadow-[0_35px_80px_rgba(0,0,0,0.5)] sm:p-8">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

        <div className="relative flex flex-col gap-8">
          {/* Quantity */}
<div className="flex flex-col items-center">
  <p className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-[#8d6d43]">
    Quantity Selection
  </p>

  <div className="inline-flex items-center overflow-hidden rounded-[1.7rem] border border-[#322214] bg-[#1d130a] shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
    <button
      type="button"
      onClick={decreaseQuantity}
      aria-label="Decrease quantity"
      className="flex h-16 w-16 items-center justify-center text-2xl font-black text-[#f0c372] transition-all duration-300 hover:bg-[#f0c372] hover:text-[#2d1702]"
    >
      −
    </button>

    <div className="flex min-w-[120px] items-center justify-center border-x border-[#322214]">
      <span className="text-2xl font-black text-[#fff1db]">
        {quantity}
      </span>
    </div>

    <button
      type="button"
      onClick={increaseQuantity}
      aria-label="Increase quantity"
      className="flex h-16 w-16 items-center justify-center text-2xl font-black text-[#f0c372] transition-all duration-300 hover:bg-[#f0c372] hover:text-[#2d1702]"
    >
      +
    </button>
  </div>
</div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-5 lg:flex-row">
            {/* Add To Cart */}
            <Button
              onClick={
                handleAddToCart
              }
              disabled={stock <= 0}
              className="group relative flex-1 overflow-hidden rounded-[1.7rem] border border-[#f0c372]/15 bg-gradient-to-r from-[#f4ce85] via-[#e0b056] to-[#c8872c] px-8 py-6 text-lg font-black tracking-wide text-[#2d1702] shadow-[0_20px_40px_rgba(237,191,104,0.25)] transition-all duration-300 hover:scale-[1.01]"
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
              className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-[1.7rem] border border-[#322214] bg-[#1d130a] px-8 py-6 font-black tracking-wide text-[#fff1db] shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#f0c372]/20 hover:bg-[#241608]"
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

              <span className="relative z-10 text-sm uppercase tracking-[0.12em]">
                Wishlist
              </span>
            </button>
          </div>

          {/* Security */}
          <div className="rounded-[1.7rem] border border-[#322214] bg-[#140d07] px-6 py-5 shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#f0c372]">
                <FaLock />
              </div>

              <div>
                <p className="text-sm font-black text-[#fff1db]">
                  Secure Luxury Checkout
                </p>

                <p className="mt-2 text-sm leading-[1.9] text-[#b69469]">
                  Protected transactions with encrypted payment
                  security, verified checkout assurance, and
                  premium customer protection services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="grid gap-6 md:grid-cols-2">
  {[
    {
      title: "Premium Materials",
      desc: "Carefully selected luxury-grade materials for superior durability and refined aesthetics.",
      icon: "✦",
    },
    {
      title: "Handcrafted Finish",
      desc: "Expert craftsmanship with exceptional attention to every detail and finishing touch.",
      icon: "⚒",
    },
    {
      title: "Verified Quality",
      desc: "Each product undergoes strict inspection procedures before reaching customers.",
      icon: "✓",
    },
    {
      title: "Luxury Packaging",
      desc: "Delivered in premium presentation-ready packaging designed to impress.",
      icon: "🎁",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-[#322214]
        bg-[linear-gradient(to_bottom,#1b1208,#120b05)]
        p-8
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#f0c372]/30
        hover:shadow-[0_25px_50px_rgba(240,195,114,0.08)]
      "
    >
      {/* Glow */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f0c372]/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.8rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dcaa4d] to-[#bf7c1f] shadow-[0_20px_45px_rgba(237,191,104,0.15)]">
        <span className="text-3xl font-black text-[#2d1702]">
          {item.icon}
        </span>
      </div>

      {/* Content */}
      <div className="mt-8">
        <h4 className="text-[1.6rem] font-black leading-tight tracking-tight text-[#fff3df]">
          {item.title}
        </h4>

        <p className="mt-5 text-[15px] leading-8 text-[#b69469]">
          {item.desc}
        </p>
      </div>

      {/* Bottom Accent */}
      <div className="mt-8">
        <div className="h-px w-full bg-gradient-to-r from-[#f0c372]/30 via-[#f0c372]/10 to-transparent" />
      </div>
    </div>
  ))}
</div>

{/* ================= ULTRA PREMIUM CERTIFICATION ================= */}
<div className="relative mt-10 overflow-hidden rounded-[2.5rem] border border-[#3a2815] bg-[linear-gradient(180deg,#1d1208_0%,#120b05_100%)] shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
  {/* Glow */}
  <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#f0c372]/5 blur-[120px]" />

  <div className="relative z-10 p-8 sm:p-10">
    <div className="flex flex-col items-center text-center">
      {/* Luxury Medal */}
      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dcaa4d] to-[#bf7c1f] text-6xl text-[#2d1702] shadow-[0_20px_50px_rgba(237,191,104,0.22)]">
        ✦
      </div>

      {/* Label */}
      <p className="mt-6 text-[11px] font-black uppercase tracking-[0.45em] text-[#c89d57]">
        Premium Certified
      </p>

      {/* Heading */}
      <h3 className="mt-3 text-4xl font-black tracking-tight text-[#fff3df] sm:text-5xl">
        Quality Assured
      </h3>

      {/* Stars */}
      <div className="mt-5 flex justify-center gap-1 text-xl text-[#f0c372]">
        ★★★★★
      </div>

      {/* Description */}
{/* Description */}
<div className="mt-6 max-w-2xl space-y-4">
  <p className="text-sm leading-8 text-[#b69469] sm:text-base">
    Crafted to luxury standards with verified materials,
    premium finishing, rigorous quality inspection, and
    long-term durability assurance designed for refined
    everyday use.
  </p>

  <p className="text-sm leading-8 text-[#a8865b] sm:text-base">
    Every piece reflects a commitment to exceptional
    craftsmanship, timeless elegance, and uncompromising
    attention to detail.
  </p>

  <p className="text-sm italic leading-8 text-[#97744b] sm:text-base">
    Designed to be cherished for years, blending enduring
    sophistication with modern luxury living.
  </p>
</div>

      {/* Metrics */}
      <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-[#f0c372]/10 pt-8">
        <div className="text-center">
          <h4 className="text-2xl font-black text-[#fff3df]">
            100%
          </h4>

          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#c89d57]">
            Verified
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-2xl font-black text-[#fff3df]">
            Premium
          </h4>

          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#c89d57]">
            Materials
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-2xl font-black text-[#fff3df]">
            Luxury
          </h4>

          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#c89d57]">
            Certified
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {[
          "Verified Materials",
          "Luxury Finish",
          "Premium Certified",
        ].map((tag) => (
          <div
            key={tag}
            className="rounded-full border border-[#f0c372]/10 bg-[#21150a] px-5 py-3"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
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