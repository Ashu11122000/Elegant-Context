import PropTypes from "prop-types";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShield,
  FiTruck,
  FiAward,
} from "react-icons/fi";

function CartItem({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  const {
    id,
    name,
    image,
    category,
    price,
    quantity,
  } = item;

  const itemSubtotal = Number(price) * quantity;

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[#2f2115] bg-[linear-gradient(to_bottom,#171008,#120b05)] shadow-[0_25px_70px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_35px_90px_rgba(245,158,11,0.08)]">
      {/* Premium Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 p-5 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
          {/* Product Image */}
          <div className="mx-auto shrink-0 xl:mx-0">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#3a2818] bg-[#1b1209] p-2">
              <div className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="h-36 w-36 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute left-3 top-3">
                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                  Premium
                </span>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="min-w-0 flex-1 text-center xl:text-left">
            {category && (
              <span className="inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                {category}
              </span>
            )}

            <h3 className="mt-4 text-xl font-semibold leading-relaxed text-white">
              {name}
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-400">
              Crafted with exceptional attention to detail, delivering
              timeless style, premium quality, and luxury comfort for
              everyday elegance.
            </p>

            {/* Trust Indicators */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
                <FiShield size={13} />
                Secure Purchase
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/15 bg-sky-500/10 px-3 py-1.5 text-xs text-sky-300">
                <FiTruck size={13} />
                Fast Delivery
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/15 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300">
                <FiAward size={13} />
                Quality Assured
              </div>
            </div>

            {/* Unit Price */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
              <span className="text-2xl font-bold text-amber-300">
                ₹{Number(price).toLocaleString("en-IN")}
              </span>

              <span className="rounded-full border border-[#3b2818] bg-[#1b1209] px-3 py-1 text-xs font-medium text-stone-400">
                Price Per Item
              </span>
            </div>
          </div>

          {/* Quantity Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-[1.5rem] border border-[#322214] bg-[#1a1209] p-2">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => onDecrement(id)}
                  aria-label="Decrease quantity"
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-stone-300 transition-all duration-300 hover:bg-[#24180d] hover:text-amber-300"
                >
                  <FiMinus />
                </button>

                <div className="flex min-w-[70px] items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {quantity}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onIncrement(id)}
                  aria-label="Increase quantity"
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-stone-300 transition-all duration-300 hover:bg-[#24180d] hover:text-amber-300"
                >
                  <FiPlus />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onRemove(id)}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/15"
            >
              <FiTrash2 size={14} />
              Remove
            </button>
          </div>

          {/* Premium Subtotal Panel */}
          <div className="min-w-[190px]">
            <div className="rounded-[1.75rem] border border-[#322214] bg-[#181008] p-5 text-center xl:text-right">
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500">
                Item Total
              </p>

              <h4 className="mt-3 text-3xl font-bold text-amber-300">
                ₹{itemSubtotal.toLocaleString("en-IN")}
              </h4>

              <div className="mt-4 border-t border-[#2a1c10] pt-4">
                <p className="text-xs text-stone-500">
                  {quantity} × ₹
                  {Number(price).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;