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

function CartList({ className = "", showHeader = true }) {
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
          <div className="relative mb-10 overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[linear-gradient(180deg,#1a1209_0%,#130c06_100%)] shadow-[0_35px_90px_rgba(0,0,0,0.45)]">
            {/* Ambient Effects */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

              <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-orange-500/10 blur-[120px]" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />
            </div>

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                    <FiShoppingBag size={14} />
                    Premium Shopping Cart
                  </div>

                  <h2 className="mt-6 text-4xl font-black tracking-tight text-white lg:text-5xl">
                    Your Curated Luxury Collection
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-stone-400">
                    Review your selected premium products, manage quantities,
                    compare options, and prepare for a seamless checkout
                    experience backed by secure payments and fast delivery.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:min-w-[380px]">
                  <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                      Total Items
                    </p>

                    <p className="mt-3 text-4xl font-black text-amber-300">
                      {cartCount}
                    </p>

                    <p className="mt-2 text-xs text-stone-500">
                      Products Selected
                    </p>
                  </div>

                  <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                      Cart Value
                    </p>

                    <p className="mt-3 text-2xl font-black text-amber-300">
                      ₹{total.toLocaleString("en-IN")}
                    </p>

                    <p className="mt-2 text-xs text-stone-500">
                      Current Order Value
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {/* Secure Checkout */}
            <div className="group rounded-[1.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,#171008,#120b05)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                  <FiShield className="text-xl text-emerald-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Secure Checkout</h3>

                  <p className="mt-1 text-sm leading-6 text-stone-400">
                    End-to-end encrypted payment processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Fast Delivery */}
            <div className="group rounded-[1.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,#171008,#120b05)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/20">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10">
                  <FiTruck className="text-xl text-sky-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Express Delivery</h3>

                  <p className="mt-1 text-sm leading-6 text-stone-400">
                    Fast shipping with live order tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Quality */}
            <div className="group rounded-[1.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,#171008,#120b05)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                  <FiAward className="text-xl text-purple-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Curated Quality</h3>

                  <p className="mt-1 text-sm leading-6 text-stone-400">
                    Premium products selected by our experts.
                  </p>
                </div>
              </div>
            </div>

            {/* Cart Status */}
            <div className="group rounded-[1.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,#171008,#120b05)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/20">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                  <FiPackage className="text-xl text-amber-300" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Ready To Checkout
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-stone-400">
                    {cartCount} premium item{cartCount !== 1 ? "s" : ""}{" "}
                    prepared for your order.
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
