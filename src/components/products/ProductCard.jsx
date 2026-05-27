import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
import Card from "../UI/Card";
import Badge from "../UI/Badge";
import RatingStars from "../UI/RatingStars";
import PriceTag from "../UI/PriceTag";
import Button from "../UI/Button";

function ProductCard({
  product,
  showWishlist = true,
  showQuickView = true,
  variant = "grid",
  onWishlistToggle,
  onQuickView,
}) {
  if (!product) return null;

  const {
    id,
    name,
    slug,
    image,
    price,
    originalPrice,
    rating,
    reviewsCount,
    badge,
    isWishlisted = false,
    category,
  } = product;

  const handleWishlistClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (onWishlistToggle) {
      onWishlistToggle(product);
    }
  };

  const handleQuickViewClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (onQuickView) {
      onQuickView(product);
    }
  };

  const productUrl = `/products/${slug || id}`;

  return (
    <Card
      className={`group overflow-hidden border border-[#edbf68]/10 bg-[#31230c] transition-all duration-300 hover:-translate-y-1 hover:border-[#edbf68]/30 hover:shadow-2xl ${
        variant === "list" ? "flex flex-col md:flex-row" : ""
      }`}
    >
      <Link to={productUrl} className="block">
        <div
          className={`relative overflow-hidden ${
            variant === "list"
              ? "h-72 md:h-auto md:w-80 md:flex-shrink-0"
              : "h-80"
          }`}
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {badge && (
            <div className="absolute left-4 top-4 z-10">
              <Badge>{badge}</Badge>
            </div>
          )}

          {(showWishlist || showQuickView) && (
            <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
              {showWishlist && (
                <button
                  type="button"
                  onClick={handleWishlistClick}
                  aria-label="Toggle wishlist"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#edbf68]/20 bg-[#271e07]/90 text-[#edbf68] backdrop-blur-sm transition hover:scale-105 hover:bg-[#edbf68] hover:text-[#1f1606]"
                >
                  {isWishlisted ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
                </button>
              )}

              {showQuickView && (
                <button
                  type="button"
                  onClick={handleQuickViewClick}
                  aria-label="Quick view"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#edbf68]/20 bg-[#271e07]/90 text-[#edbf68] backdrop-blur-sm transition hover:scale-105 hover:bg-[#edbf68] hover:text-[#1f1606]"
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
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#d7c3a0]">
            {category}
          </p>
        )}

        <Link to={productUrl}>
          <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-[#f5e6c8] transition-colors hover:text-[#edbf68]">
            {name}
          </h3>
        </Link>

        <div className="mb-3 flex items-center gap-3">
          <RatingStars rating={rating} />
          <span className="text-sm text-[#d7c3a0]">
            ({reviewsCount || 0})
          </span>
        </div>

        <div className="mb-5">
          <PriceTag price={price} originalPrice={originalPrice} />
        </div>

        <div className="mt-auto">
          <Button className="w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    rating: PropTypes.number,
    reviewsCount: PropTypes.number,
    badge: PropTypes.string,
    isWishlisted: PropTypes.bool,
    category: PropTypes.string,
  }).isRequired,
  showWishlist: PropTypes.bool,
  showQuickView: PropTypes.bool,
  variant: PropTypes.oneOf(["grid", "list"]),
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default ProductCard;