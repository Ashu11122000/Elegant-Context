import { useState } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaRegHeart, FaTruck, FaShieldAlt, FaUndo } from "react-icons/fa";
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

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
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

  return (
    <section
      aria-label="Product information"
      className="space-y-8"
    >
      <div>
        {category && (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#d7c3a0]">
            {category}
          </p>
        )}

        <div className="mb-4 flex flex-wrap items-center gap-3">
          {badge && <Badge>{badge}</Badge>}

          <span
            className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider ${
              stock > 0
                ? "bg-green-500/10 text-green-300"
                : "bg-red-500/10 text-red-300"
            }`}
          >
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <h1 className="mb-5 text-3xl font-bold leading-tight text-[#f5e6c8] md:text-4xl">
          {name}
        </h1>

        <div className="mb-5 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <RatingStars rating={rating} />
            <span className="text-[#d7c3a0]">
              ({reviewsCount} reviews)
            </span>
          </div>

          {sku && (
            <span className="text-sm text-[#d7c3a0]">
              SKU: {sku}
            </span>
          )}
        </div>

        <div className="mb-6">
          <PriceTag
            price={price}
            originalPrice={originalPrice}
          />
        </div>

        {description && (
          <p className="max-w-2xl leading-relaxed text-[#d7c3a0]">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5 border-y border-[#edbf68]/10 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center overflow-hidden rounded-xl border border-[#edbf68]/15 bg-[#31230c]">
          <button
            type="button"
            onClick={decreaseQuantity}
            aria-label="Decrease quantity"
            className="px-5 py-4 text-[#edbf68] transition hover:bg-[#edbf68] hover:text-[#1f1606]"
          >
            -
          </button>

          <span className="min-w-[70px] text-center font-semibold text-[#f5e6c8]">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increaseQuantity}
            aria-label="Increase quantity"
            className="px-5 py-4 text-[#edbf68] transition hover:bg-[#edbf68] hover:text-[#1f1606]"
          >
            +
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-4 sm:flex-row">
          <Button
            onClick={handleAddToCart}
            disabled={stock <= 0}
            className="flex-1"
          >
            {stock > 0 ? "Add to Cart" : "Unavailable"}
          </Button>

          <button
            type="button"
            onClick={handleWishlistToggle}
            aria-label="Toggle wishlist"
            className="flex items-center justify-center gap-3 rounded-xl border border-[#edbf68]/20 bg-[#31230c] px-6 py-4 font-medium text-[#edbf68] transition hover:border-[#edbf68] hover:bg-[#edbf68] hover:text-[#1f1606]"
          >
            {isWishlisted ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
            Wishlist
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-5">
          <div className="mb-3 text-[#edbf68]">
            <FaTruck size={20} />
          </div>
          <h3 className="mb-2 font-semibold text-[#f5e6c8]">
            Fast Delivery
          </h3>
          <p className="text-sm leading-relaxed text-[#d7c3a0]">
            Premium shipping with secure tracking on every order.
          </p>
        </div>

        <div className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-5">
          <div className="mb-3 text-[#edbf68]">
            <FaShieldAlt size={20} />
          </div>
          <h3 className="mb-2 font-semibold text-[#f5e6c8]">
            Secure Checkout
          </h3>
          <p className="text-sm leading-relaxed text-[#d7c3a0]">
            Protected payments with trusted transaction security.
          </p>
        </div>

        <div className="rounded-2xl border border-[#edbf68]/10 bg-[#31230c] p-5">
          <div className="mb-3 text-[#edbf68]">
            <FaUndo size={20} />
          </div>
          <h3 className="mb-2 font-semibold text-[#f5e6c8]">
            Easy Returns
          </h3>
          <p className="text-sm leading-relaxed text-[#d7c3a0]">
            Hassle-free returns for a seamless luxury shopping experience.
          </p>
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