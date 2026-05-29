import PropTypes from "prop-types";
import {
  FiShoppingBag,
  FiShield,
  FiTruck,
  FiAward,
  FiPackage,
} from "react-icons/fi";

import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function CartList({
  className = "",
  showHeader = true,
}) {
  const {
    cartItems,
    cartCount,
    total,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCartContext();

  if (!cartItems.length) {
    return <EmptyCart />;
  }

  return (
    <section className={className}>
      {showHeader && (
        <>
          {/* Premium Header */}
          <div className="relative mb-8 overflow-hidden rounded-[2rem] border border-[#322214] bg-[linear-gradient(to_right,#171008,#1c1209,#171008)] shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

              <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-orange-500/5 blur-3xl" />
            </div>

            <div className="relative z-10 p-6 lg:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                    <FiShoppingBag size={14} />
                    Premium Shopping Cart
                  </div>

                  <h2 className="mt-5 text-3xl font-bold text-white lg:text-4xl">
                    Your Luxury Collection
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-400">
                    Review your selected premium products, manage quantities,
                    and prepare for a seamless luxury checkout experience.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:min-w-[320px]">
                  <div className="rounded-2xl border border-[#322214] bg-[#120b05]/80 p-5 text-center backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      Items
                    </p>

                    <p className="mt-2 text-3xl font-bold text-amber-300">
                      {cartCount}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#322214] bg-[#120b05]/80 p-5 text-center backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      Value
                    </p>

                    <p className="mt-2 text-xl font-bold text-amber-300">
                      ₹{total.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Stats Section */}
          <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.75rem] border border-[#322214] bg-[#171008] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                  <FiShield className="text-emerald-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Secure Checkout
                  </h3>

                  <p className="text-xs text-stone-400">
                    Protected Transactions
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#322214] bg-[#171008] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10">
                  <FiTruck className="text-sky-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Fast Delivery
                  </h3>

                  <p className="text-xs text-stone-400">
                    Quick Shipping Available
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#322214] bg-[#171008] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                  <FiAward className="text-purple-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Premium Quality
                  </h3>

                  <p className="text-xs text-stone-400">
                    Carefully Curated Products
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#322214] bg-[#171008] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                  <FiPackage className="text-amber-300" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {cartCount} Products
                  </h3>

                  <p className="text-xs text-stone-400">
                    Ready For Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Product List */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>
    </section>
  );
}

CartList.propTypes = {
  className: PropTypes.string,
  showHeader: PropTypes.bool,
};

export default CartList;