import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

import RatingStars from "../UI/RatingStars";
import PriceTag from "../UI/PriceTag";
import Button from "../UI/Button";

function ProductCard({
  product,
  onWishlistToggle,
  onQuickView,
  showWishlist = true,
  showQuickView = true,
  variant = "grid",
}) {
  if (!product) {
    return null;
  }

  const {
    id,
    name,
    title,
    slug,
    image,
    price,
    originalPrice,
    rating = 0,
    reviewCount = 0,
    reviewsCount = 0,
    badge,
    isWishlisted = false,
    category,
  } = product;

  const productName = name || title;

  const totalReviews =
    reviewsCount || reviewCount;

  const productUrl = `/products/${
    slug || id
  }`;

  const handleWishlistClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onWishlistToggle?.(product);
  };

  const handleQuickViewClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    onQuickView?.(product);
  };

  const hasDiscount =
    originalPrice && originalPrice > price;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((originalPrice - price) /
          originalPrice) *
          100
      )
    : 0;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#3b2912] bg-[linear-gradient(to_bottom,#1b1207,#140d05,#0d0703)] shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-[#e0b161]/35 hover:shadow-[0_35px_100px_rgba(0,0,0,0.65)] ${
        variant === "list"
          ? "md:flex-row"
          : ""
      }`}
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.06),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Image Section */}
      <Link
        to={productUrl}
        className={`relative overflow-hidden ${
          variant === "list"
            ? "md:w-[22rem] md:flex-shrink-0"
            : "block"
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            variant === "list"
              ? "h-80 md:h-full"
              : "aspect-[0.9]"
          }`}
        >
          {/* Image */}
          <img
            src={image}
            alt={productName}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-70" />

          {/* Premium Shine */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <div className="absolute -left-24 top-0 h-full w-28 rotate-12 bg-white/10 blur-2xl" />
          </div>

          {/* Badge */}
          {badge && (
            <div className="absolute left-5 top-5 z-20">
              <span className="rounded-full border border-[#f0c372]/20 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#2f1903] shadow-[0_10px_25px_rgba(237,191,104,0.35)]">
                {badge}
              </span>
            </div>
          )}

          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute bottom-5 left-5 z-20">
              <span className="rounded-full border border-white/10 bg-black/55 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c372] backdrop-blur-xl">
                Save {discountPercentage}%
              </span>
            </div>
          )}

          {/* Actions */}
          {(showWishlist || showQuickView) && (
            <div className="absolute right-5 top-5 z-20 flex flex-col gap-3">
              {showWishlist && (
                <button
                  type="button"
                  onClick={
                    handleWishlistClick
                  }
                  aria-label="Toggle wishlist"
                  className={`group/button flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
                    isWishlisted
                      ? "border-[#f0c372]/30 bg-gradient-to-br from-[#f0c372] via-[#ddab4e] to-[#c78628] text-[#2f1903] shadow-[0_10px_25px_rgba(237,191,104,0.35)]"
                      : "border-white/10 bg-black/45 text-[#f0c372] hover:border-[#f0c372]/30 hover:bg-[#2b1a0b]"
                  }`}
                >
                  {isWishlisted ? (
                    <FaHeart size={15} />
                  ) : (
                    <FaRegHeart size={15} />
                  )}
                </button>
              )}

              {showQuickView && (
                <button
                  type="button"
                  onClick={
                    handleQuickViewClick
                  }
                  aria-label="Quick view"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/45 text-[#f0c372] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-[#f0c372]/30 hover:bg-[#2b1a0b]"
                >
                  <FaEye size={15} />
                </button>
              )}
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="relative flex min-w-0 flex-1 flex-col p-6">
        {/* Category */}
        {category && (
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f0c372] shadow-[0_0_10px_rgba(240,195,114,0.8)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#caa26a]">
              {category}
            </p>
          </div>
        )}

        {/* Product Name */}
        <Link to={productUrl}>
          <h3 className="line-clamp-2 min-h-[72px] break-words text-[1.28rem] font-black leading-[1.35] tracking-tight text-[#fff1da] transition-colors duration-300 hover:text-[#f0c372]">
            {productName}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#b49368]">
          Premium luxury fashion piece crafted
          for modern elegance, refined styling,
          and elevated everyday sophistication.
        </p>

        {/* Ratings */}
        <div className="mt-5 rounded-[1.7rem] border border-[#3a2812] bg-[#1d1207]/80 p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <RatingStars
                  rating={rating}
                  reviewCount={totalReviews}
                />

                <span className="text-xs font-semibold leading-none text-[#b69367]">
                  ({totalReviews} Reviews)
                </span>
              </div>

              <p className="mt-2 text-[11px] font-medium tracking-wide text-[#8f714a]">
                Verified premium customer
                feedback
              </p>
            </div>

            <div className="flex shrink-0">
              <span className="rounded-full border border-[#f0c372]/10 bg-[#2a190b] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                Premium
              </span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-5 rounded-[1.5rem] border border-[#3a2812] bg-gradient-to-br from-[#241507] to-[#1a1007] p-5 shadow-inner">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8e6d45]">
                Exclusive Price
              </p>

              <div className="mt-3">
                <PriceTag
                  price={price}
                  originalPrice={
                    originalPrice
                  }
                />
              </div>
            </div>

            {hasDiscount && (
              <div className="rounded-2xl border border-[#f0c372]/15 bg-[#2d1b0c] px-4 py-3 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8f6f45]">
                  You Save
                </p>

                <p className="mt-1 text-lg font-black text-[#f0c372]">
                  {discountPercentage}%
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center gap-4 pt-1">
          <Button className="group/button relative w-full overflow-hidden rounded-[1.4rem] border border-[#e0b161]/20 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#2f1903] shadow-[0_14px_35px_rgba(237,191,104,0.28)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_45px_rgba(237,191,104,0.4)]">
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity duration-500 group-hover/button:opacity-100" />

            <span className="relative z-10">
              Add to Cart
            </span>
          </Button>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    reviewsCount: PropTypes.number,
    price: PropTypes.number,
    originalPrice: PropTypes.number,
    badge: PropTypes.string,
    isWishlisted: PropTypes.bool,
  }).isRequired,
  showWishlist: PropTypes.bool,
  showQuickView: PropTypes.bool,
  variant: PropTypes.oneOf([
    "grid",
    "list",
  ]),
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default ProductCard;