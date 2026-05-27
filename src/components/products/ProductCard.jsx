import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiEye, FiHeart } from "react-icons/fi";
import RatingStars from "../UI/RatingStars";
import PriceTag from "../UI/PriceTag";

function ProductCard({
  product,
  onWishlistToggle,
  onQuickView,
}) {
  return (
    <div
      className="
        group overflow-hidden rounded-2xl
        border border-[#4a3412]
        bg-[#271e07]
        shadow-sm
        transition duration-300 hover:shadow-xl
      "
    >
      <div className="relative aspect-square overflow-hidden bg-[#3a2a0d]">
        <Link to={`/products/${product.slug}`}>
          <img
            src={product.image}
            alt={product.title}
            className="
              h-full w-full object-cover
              transition duration-500 group-hover:scale-105
            "
          />
        </Link>

        <div className="absolute right-4 top-4 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => onWishlistToggle?.(product)}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full bg-[#271e07]
              text-[#edbf68]
              shadow-md
              transition hover:scale-105 hover:bg-[#edbf68] hover:text-black
            "
          >
            <FiHeart size={20} />
          </button>

          <button
            type="button"
            onClick={() => onQuickView?.(product)}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full bg-[#271e07]
              text-[#edbf68]
              shadow-md
              transition hover:scale-105 hover:bg-[#edbf68] hover:text-black
            "
          >
            <FiEye size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7c3a0]">
          {product.category}
        </p>

        <Link to={`/products/${product.slug}`}>
          <h3
            className="
              line-clamp-2 text-lg font-semibold
              text-[#f5e6c8]
              transition hover:text-[#edbf68]
            "
          >
            {product.title}
          </h3>
        </Link>

        <RatingStars
          rating={product.rating}
          reviewCount={product.reviewCount}
        />

        <PriceTag
          price={product.price}
          originalPrice={product.originalPrice}
        />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    price: PropTypes.number,
    originalPrice: PropTypes.number,
  }).isRequired,
  onWishlistToggle: PropTypes.func,
  onQuickView: PropTypes.func,
};

export default ProductCard;