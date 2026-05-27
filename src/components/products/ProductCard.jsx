import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaShoppingBag } from "react-icons/fa";

function ProductCard({ product }) {
  const {
    title,
    slug,
    image,
    brand,
    price,
    originalPrice,
    rating,
    reviewCount,
    featured,
    trending,
    isNew,
    stock,
  } = product;

  const discountPercentage =
    originalPrice > price
      ? Math.round(
          ((originalPrice - price) / originalPrice) * 100
        )
      : 0;

  return (
    <article className="group overflow-hidden rounded-3xl border border-[#edbf68]/15 bg-[#31230c] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#edbf68]/40 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <Link to={`/products/${slug}`}>
          <img
            src={image}
            alt={title}
            className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {isNew && (
            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              New
            </span>
          )}

          {featured && (
            <span className="rounded-full bg-[#edbf68] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1f1606]">
              Featured
            </span>
          )}

          {trending && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Trending
            </span>
          )}

          {discountPercentage > 0 && (
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {discountPercentage}% Off
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-[#edbf68] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#edbf68] hover:text-[#1f1606]"
        >
          <FaHeart />
        </button>

        {stock <= 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-[#d7c3a0]">
          {brand}
        </p>

        <Link to={`/products/${slug}`}>
          <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-[#edbf68] transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
        </Link>

        <div className="mt-4 flex items-center gap-2">
          <FaStar className="text-sm text-[#edbf68]" />

          <span className="text-sm font-medium text-[#f5e6c8]">
            {rating}
          </span>

          <span className="text-sm text-[#d7c3a0]">
            ({reviewCount} reviews)
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold text-[#edbf68]">
            ₹{price.toLocaleString()}
          </span>

          {originalPrice > price && (
            <span className="text-sm text-[#d7c3a0] line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <button
          type="button"
          disabled={stock <= 0}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#edbf68] px-6 py-3 font-semibold text-[#1f1606] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaShoppingBag />
          {stock > 0 ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    featured: PropTypes.bool,
    trending: PropTypes.bool,
    isNew: PropTypes.bool,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;