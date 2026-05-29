import PropTypes from "prop-types";
import {
  FiShoppingBag,
  FiX,
  FiArrowRight,
  FiShield,
  FiTruck,
  FiAward,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";

function CartDrawer({
  isOpen,
  onClose,
}) {
  const {
    cartItems,
    cartCount,
    total,
  } = useCartContext();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-[460px] transform overflow-hidden border-l border-white/10 bg-[linear-gradient(to_bottom,#171008,#100904)] shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-transform duration-500 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Ambient Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,120,0.08),transparent_40%)]" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-white/10 px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                  <FiShoppingBag className="text-lg text-amber-300" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-white">
                    Shopping Cart
                  </h2>

                  <p className="text-sm text-stone-400">
                    {cartCount} item{cartCount !== 1 ? "s" : ""} selected
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10">
                  <FiShoppingBag
                    size={36}
                    className="text-amber-300"
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  Your Cart is Empty
                </h3>

                <p className="max-w-xs text-sm leading-relaxed text-stone-400">
                  Discover premium products and add them to your cart for a
                  seamless luxury shopping experience.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex gap-4">
                      <div className="shrink-0 overflow-hidden rounded-2xl border border-white/10">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="line-clamp-2 text-sm font-semibold leading-relaxed text-white">
                          {item.name}
                        </h3>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                            Qty {item.quantity}
                          </span>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-lg font-bold text-amber-300">
                            ₹{item.price.toLocaleString("en-IN")}
                          </p>

                          <p className="text-xs text-stone-500">
                            Premium Item
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Trust Section */}
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-300">
                    Why Shop With Us
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FiShield className="text-emerald-400" />
                      <span className="text-sm text-stone-300">
                        Secure Checkout
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiTruck className="text-sky-400" />
                      <span className="text-sm text-stone-300">
                        Fast Delivery
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiAward className="text-amber-400" />
                      <span className="text-sm text-stone-300">
                        Premium Quality Products
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-white/10 bg-black/20 p-6 backdrop-blur-xl">
              <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-stone-400">
                    Cart Total
                  </span>

                  <span className="text-2xl font-bold text-amber-300">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <Link
                to="/cart"
                onClick={onClose}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-4 font-bold text-black shadow-[0_10px_30px_rgba(245,158,11,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                View Full Cart

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartDrawer;