import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FiShoppingBag,
  FiStar,
  FiTrash2,
  FiShield,
  FiTruck,
  FiAward,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

function WishlistItem({
  product,
  onRemove,
  onAddToCart,
  className = "",
}) {
  const {
    id,
    name,
    image,
    price,
    originalPrice,
    rating,
    category,
    slug,
    quantity = 1,
  } = product;

  const discountPercentage =
    originalPrice > price
      ? Math.round(
          ((originalPrice - price) /
            originalPrice) *
            100
        )
      : 0;

  const savings =
    originalPrice > price
      ? originalPrice - price
      : 0;

  const itemTotal = price * quantity;

  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-[2.5rem]
        border
        border-[#322214]
        bg-[linear-gradient(180deg,#171008_0%,#120b05_100%)]
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      <div className="p-6 lg:p-8">
        {/* TOP SECTION */}
        <div className="grid gap-6 xl:grid-cols-[260px_220px_260px]">
          {/* IMAGE */}
          <Link
            to={`/products/${slug || id}`}
            className="group/image"
          >
            <div className="overflow-hidden rounded-[2rem] border border-[#3a2816] bg-[#171008] p-3">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={image}
                  alt={name}
                  className="
                    h-[220px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover/image:scale-105
                  "
                />

                <div className="absolute left-4 top-4">
                  <div className="rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                    Premium
                  </div>
                </div>

                {discountPercentage > 0 && (
                  <div className="absolute right-4 top-4">
                    <div className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-2 text-xs font-bold text-black">
                      -{discountPercentage}%
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Link>

          {/* QUANTITY */}
          <div className="rounded-[2rem] border border-[#322214] bg-[#171008]/70 p-5">
            <p className="mb-5 text-center text-xs uppercase tracking-[0.25em] text-stone-500">
              Quantity
            </p>

            <div className="flex items-center rounded-[1.5rem] border border-[#322214] bg-[#120b05] p-2">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-xl text-stone-300 transition hover:bg-[#24180d]"
              >
                <FiMinus />
              </button>

              <span className="flex-1 text-center text-2xl font-bold text-white">
                {quantity}
              </span>

              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-xl text-stone-300 transition hover:bg-[#24180d]"
              >
                <FiPlus />
              </button>
            </div>

            <button
              type="button"
              onClick={() => onRemove(id)}
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-red-500/10
                py-3
                text-red-300
                transition
                hover:bg-red-500/15
              "
            >
              <FiTrash2 />
              Remove
            </button>
          </div>

                    {/* ITEM TOTAL */}
          <div className="rounded-[2rem] border border-[#322214] bg-[#171008]/70 p-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Item Total
            </p>

            <h3 className="mt-5 text-5xl font-bold text-amber-300">
              ₹{itemTotal.toLocaleString("en-IN")}
            </h3>

            <div className="mt-6 border-t border-[#2a1c10] pt-5">
              <p className="text-sm text-stone-500">
                {quantity} × ₹
                {price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="mt-8 space-y-6">
          <div className="rounded-[2rem] border border-[#322214] bg-[#171008]/70 p-6">
            {category && (
              <div className="mb-4">
                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                  {category}
                </span>
              </div>
            )}

            <Link
              to={`/products/${slug || id}`}
              className="block text-3xl font-bold text-white transition hover:text-amber-300"
            >
              {name}
            </Link>

            {rating > 0 && (
              <div className="mt-4 flex items-center gap-3">
                <FiStar className="fill-amber-400 text-amber-400" />

                <span className="font-medium text-white">
                  {rating.toFixed(1)}
                </span>

                <span className="text-stone-500">
                  Premium Rating
                </span>
              </div>
            )}
          </div>

          {/* DESCRIPTION */}
          <div className="rounded-[2rem] border border-[#322214] bg-[#171008]/70 p-6">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              Description
            </h4>

            <p className="max-w-4xl text-sm leading-8 text-stone-400">
              Carefully selected and saved for your personal collection.
              Crafted with premium materials and timeless aesthetics,
              delivering exceptional quality and luxury for everyday elegance.
            </p>
          </div>

                    {/* BENEFITS */}
          <div className="rounded-[2rem] border border-[#322214] bg-[#171008]/70 p-6">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                <FiShield />
                Secure Purchase
              </div>

              <div className="flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                <FiTruck />
                Fast Delivery
              </div>

              <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                <FiAward />
                Premium Quality
              </div>
            </div>
          </div>

          {/* PRICE */}
          <div className="rounded-[2rem] border border-[#322214] bg-[#171008]/70 p-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-4xl font-bold text-white">
                ₹{price.toLocaleString("en-IN")}
              </span>

              {originalPrice > price && (
                <>
                  <span className="text-xl text-stone-500 line-through">
                    ₹{originalPrice.toLocaleString("en-IN")}
                  </span>

                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                    Save ₹{savings.toLocaleString("en-IN")}
                  </span>
                </>
              )}
            </div>

            <p className="mt-3 text-sm text-stone-500">
              Inclusive of all applicable taxes
            </p>
          </div>

          {/* ACTIONS */}
          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-amber-400
                via-yellow-400
                to-amber-500
                px-6
                py-4
                font-bold
                text-black
                transition
                hover:-translate-y-1
              "
            >
              <FiShoppingBag />
              Add To Cart
            </button>

            <button
              type="button"
              onClick={() => onRemove(id)}
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-[#3f2916]
                bg-[#171008]
                px-6
                py-4
                font-medium
                text-stone-300
                transition
                hover:border-red-500/30
                hover:text-red-300
              "
            >
              <FiTrash2 />
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
    </article>
  );
}

WishlistItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default WishlistItem;