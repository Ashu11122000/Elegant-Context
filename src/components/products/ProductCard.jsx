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
  const totalReviews = reviewsCount || reviewCount;
  const productUrl = `/products/${slug || id}`;

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

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-[#edbf68]/10 bg-[#31230c] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#edbf68]/30 hover:shadow-2xl ${
        variant === "list"
          ? "flex flex-col md:flex-row"
          : ""
      }`}
    >
      <Link
        to={productUrl}
        className={
          variant === "list"
            ? "md:w-80 md:flex-shrink-0"
            : "block"
        }
      >
        <div
          className={`relative overflow-hidden ${
            variant === "list"
              ? "h-72 md:h-full"
              : "aspect-square"
          }`}
        >
          <img
            src={image}
            alt={productName}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-300 group-hover:opacity-100" />

          {badge && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-[#edbf68] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1f1606] shadow-lg">
              {badge}
            </span>
          )}

          {(showWishlist || showQuickView) && (
            <div className="absolute right-4 top-4 z-10 flex flex-col gap-3">
              {showWishlist && (
                <button
                  type="button"
                  onClick={handleWishlistClick}
                  aria-label="Toggle wishlist"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#271e07]/90 text-[#edbf68] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#edbf68] hover:text-[#1f1606]"
                >
                  {isWishlisted ? (
                    <FaHeart size={16} />
                  ) : (
                    <FaRegHeart size={16} />
                  )}
                </button>
              )}

              {showQuickView && (
                <button
                  type="button"
                  onClick={handleQuickViewClick}
                  aria-label="Quick view"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#271e07]/90 text-[#edbf68] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#edbf68] hover:text-[#1f1606]"
                >
                  <FaEye size={16} />
                </button>
              )}
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {category && (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#d7c3a0]">
            {category}
          </p>
        )}

        <Link to={productUrl}>
          <h3 className="mb-3 line-clamp-2 min-h-[56px] text-lg font-semibold text-[#f5e6c8] transition-colors duration-300 hover:text-[#edbf68]">
            {productName}
          </h3>
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <RatingStars
            rating={rating}
            reviewCount={totalReviews}
          />
        </div>

        <div className="mb-5">
          <PriceTag
            price={price}
            originalPrice={originalPrice}
          />
        </div>

        <div className="mt-auto">
          <Button className="w-full">
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
  variant: PropTypes.oneOf([
    "grid",
    "list",
  ]),
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default ProductCard;