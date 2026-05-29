import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  FaHeart,
  FaRegHeart,
  FaEye,
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
}) {
  if (!product) return null;

  const {
    id,
    name,
    title,
    slug,
    image,
    category,
    price,
    originalPrice,
    rating = 0,
    reviewCount = 0,
    reviewsCount = 0,
    badge,
    isWishlisted = false,
  } = product;

  const productName = name || title;

  const totalReviews =
    reviewsCount || reviewCount;

  const productUrl = `/products/${
    slug || id
  }`;

  const hasDiscount =
    originalPrice &&
    originalPrice > price;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((originalPrice - price) /
          originalPrice) *
          100
      )
    : 0;

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onWishlistToggle?.(product);
  };

  const handleQuickViewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onQuickView?.(product);
  };

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#2f2116] bg-gradient-to-b from-[#1b120c] to-[#120b07] shadow-[0_15px_45px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c89b5f]/40 hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
      {/* IMAGE */}
      <Link
        to={productUrl}
        className="relative block overflow-hidden"
      >
        <div className="relative aspect-[0.92] overflow-hidden bg-[#22150d]">
          {/* Product Image */}
          <img
            src={image}
            alt={productName}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />

          {/* TOP BADGES */}
          <div className="absolute left-5 top-5 flex items-center gap-2">
            {badge && (
              <span className="rounded-full bg-[#d6a45c] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#24150a] shadow-[0_8px_20px_rgba(214,164,92,0.35)]">
                {badge}
              </span>
            )}

            {hasDiscount && (
              <span className="rounded-full border border-[#d6a45c]/20 bg-[#24150d]/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f3d19c]">
                {discountPercentage}% OFF
              </span>
            )}
          </div>

          {/* ACTION BUTTONS */}
          {(showWishlist ||
            showQuickView) && (
            <div className="absolute right-5 top-5 flex flex-col gap-3">
              {showWishlist && (
                <button
                  type="button"
                  onClick={
                    handleWishlistClick
                  }
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 ${
                    isWishlisted
                      ? "border-[#d6a45c] bg-[#d6a45c] text-[#24150a]"
                      : "border-[#3b2a1d] bg-[#1d120c]/95 text-[#f3d19c]"
                  }`}
                >
                  {isWishlisted ? (
                    <FaHeart size={14} />
                  ) : (
                    <FaRegHeart size={14} />
                  )}
                </button>
              )}

              {showQuickView && (
                <button
                  type="button"
                  onClick={
                    handleQuickViewClick
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3b2a1d] bg-[#1d120c]/95 text-[#f3d19c] transition-all duration-300 hover:scale-105"
                >
                  <FaEye size={14} />
                </button>
              )}
            </div>
          )}

          {/* IMAGE CONTENT */}
          <div className="absolute bottom-5 left-5 right-5">
            {/* Category */}
            {category && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f0c372]">
                {category}
              </p>
            )}

            {/* Rating + Verified */}
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <RatingStars
                    rating={rating}
                    reviewCount={
                      totalReviews
                    }
                  />

                  <span className="text-base font-bold text-white">
                    {rating.toFixed(1)}
                  </span>
                </div>

                <p className="mt-2 text-[15px] font-medium leading-relaxed text-[#f5e2c4]">
                  {totalReviews} reviews
                </p>
              </div>

              <span className="shrink-0 rounded-full border border-[#d6a45c]/30 bg-[#1b120c]/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f0c372]">
                Verified
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-6">
        {/* Product Name */}
        <Link to={productUrl}>
          <h3 className="line-clamp-2 text-[1.28rem] font-semibold leading-[1.45] tracking-tight text-[#fff2dc] transition-colors duration-300 hover:text-[#d6a45c]">
            {productName}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#b89b7a]">
          Refined craftsmanship with
          premium detailing designed for
          timeless modern luxury.
        </p>

        {/* PRICE SECTION */}
        <div className="mt-5 rounded-[1.4rem] border border-[#342419] bg-[#160e09] p-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7354]">
                Exclusive Price
              </p>

              <div className="mt-2">
                <PriceTag
                  price={price}
                  originalPrice={
                    originalPrice
                  }
                />
              </div>
            </div>

            {hasDiscount && (
              <div className="rounded-full bg-[#2a1a10] px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#d6a45c]">
                  Save{" "}
                  {discountPercentage}%
                </span>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <Button className="w-full rounded-[1.4rem] bg-gradient-to-r from-[#d6a45c] to-[#b9853f] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#24150a] shadow-[0_10px_25px_rgba(214,164,92,0.28)] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_18px_35px_rgba(214,164,92,0.38)]">
            Add to Cart
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
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default ProductCard;