import PropTypes from "prop-types";
import {
  FiHeart,
  FiStar,
  FiShoppingBag,
  FiAward,
} from "react-icons/fi";

import WishlistItem from "./WishlistItem";

function WishlistGrid({
  items = [],
  onRemove,
  onAddToCart,
  className = "",
}) {
  if (!items.length) {
    return null;
  }

  const totalValue = items.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  const averagePrice =
    items.length > 0
      ? Math.round(totalValue / items.length)
      : 0;

  return (
    <section
      className={`
        relative
        w-full
        space-y-8
        ${className}
      `}
    >
      {/* Header */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#322214] bg-gradient-to-b from-[#171008] to-[#120b05] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
                <FiHeart size={14} />
                Personal Collection
              </div>

              <h2 className="mt-5 text-3xl font-bold text-white lg:text-4xl">
                Your Wishlist
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-400 lg:text-base">
                Keep track of your favorite products, compare options,
                and create your own curated luxury collection.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#3a2816] bg-[#120b05]/90 p-6 text-center backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Saved Products
              </p>

              <p className="mt-3 text-4xl font-bold text-amber-300">
                {items.length}
              </p>

              <p className="mt-2 text-sm text-stone-400">
                Wishlist Items
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[1.75rem] border border-[#322214] bg-[#171008] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10">
              <FiHeart className="text-rose-300" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Saved
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {items.length}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#322214] bg-[#171008] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
              <FiShoppingBag className="text-amber-300" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Total Value
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                ₹{Number(totalValue).toLocaleString("en-IN")}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#322214] bg-[#171008] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10">
              <FiStar className="text-sky-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Avg Price
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                ₹{Number(averagePrice).toLocaleString("en-IN")}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#322214] bg-[#171008] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <FiAward className="text-purple-300" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Collection
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Premium
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="rounded-[2.25rem] border border-[#322214] bg-gradient-to-b from-[#171008] to-[#120b05] p-4 sm:p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Saved Products
            </h3>

            <p className="mt-1 text-sm text-stone-400">
              Review your favorite products and move them to cart anytime.
            </p>
          </div>

          <div className="rounded-full border border-[#322214] bg-[#171008] px-4 py-2">
            <span className="text-sm font-medium text-amber-300">
              {items.length} Saved
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {items.map((product) => (
            <WishlistItem
              key={product.id}
              product={product}
              onRemove={onRemove}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

WishlistGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      slug: PropTypes.string,
      category: PropTypes.string,
      rating: PropTypes.number,
      price: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      originalPrice: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default WishlistGrid;