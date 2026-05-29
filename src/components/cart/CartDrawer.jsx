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
      {/* Premium Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_65%)]" />
      </div>

      {/* Luxury Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-[520px] transform overflow-hidden border-l border-white/[0.08] bg-[linear-gradient(180deg,#191108_0%,#120a04_35%,#0d0905_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.75)] transition-transform duration-500 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Ambient Background Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[140px]" />

          <div className="absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[100px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,120,0.08),transparent_40%)]" />
        </div>

        {/* Premium Border Glow */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-amber-400/50 via-transparent to-transparent" />

        {/* Glass Reflection */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_25%)]" />

        <div className="relative z-10 flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-white/[0.08] bg-black/10 px-7 py-6 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.4rem] border border-amber-500/20 bg-gradient-to-br from-amber-500/20 to-orange-500/10">
                  <div className="absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle,rgba(245,158,11,0.12),transparent_70%)]" />

                  <FiShoppingBag className="relative z-10 text-xl text-amber-300" />
                </div>

                <div className="min-w-0">
                  <h2 className="text-xl font-bold tracking-tight text-white">
                    Shopping Cart
                  </h2>

                  <p className="mt-1 text-sm text-stone-400">
                    {cartCount} premium item
                    {cartCount !== 1 ? "s" : ""} selected
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-stone-400
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:text-white
                  hover:rotate-90
                "
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-amber-500/20 bg-gradient-to-br from-amber-500/15 to-orange-500/10">
                  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,rgba(245,158,11,0.15),transparent_70%)]" />

                  <FiShoppingBag
                    size={42}
                    className="relative z-10 text-amber-300"
                  />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  Your Cart is Empty
                </h3>

                <p className="max-w-sm text-sm leading-7 text-stone-400">
                  Explore our curated collection of premium products and
                  discover exceptional items crafted for a world-class shopping
                  experience.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[2rem]
                      border
                      border-white/[0.08]
                      bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))]
                      p-5
                      transition-all
                      duration-500
                      hover:border-amber-500/20
                      hover:shadow-[0_20px_50px_rgba(245,158,11,0.12)]
                    "
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_40%)]" />

                    <div className="relative flex gap-5">
                      <div
                        className="
                          shrink-0
                          overflow-hidden
                          rounded-[1.5rem]
                          border
                          border-white/[0.08]
                          bg-white/[0.03]
                          p-1
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            h-28
                            w-28
                            rounded-[1.2rem]
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="line-clamp-2 text-[15px] font-semibold leading-7 text-white">
                          {item.name}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                            Qty {item.quantity}
                          </span>

                          <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-stone-300">
                            Premium Selection
                          </span>
                        </div>

                                                <div className="mt-5 space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-stone-500">
                              Unit Price
                            </span>

                            <span className="font-medium text-stone-300">
                              ₹{item.price.toLocaleString("en-IN")}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-stone-500">
                              Quantity
                            </span>

                            <span className="font-medium text-stone-300">
                              {item.quantity}
                            </span>
                          </div>

                          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-stone-400">
                              Subtotal
                            </span>

                            <span className="text-xl font-bold text-amber-300">
                              ₹
                              {(
                                item.price * item.quantity
                              ).toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Luxury Trust Section */}
                <div
                  className="
                    mt-8
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/[0.08]
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]
                    p-6
                  "
                >
                  <div className="mb-5 flex items-center justify-between">
                    <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-stone-300">
                      Premium Benefits
                    </h4>

                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
                  </div>

                  <div className="space-y-4">
                    {/* Secure Checkout */}
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-[1.4rem]
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        p-4
                        transition-all
                        duration-300
                        hover:border-emerald-500/20
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-emerald-500/20
                          bg-emerald-500/10
                        "
                      >
                        <FiShield
                          size={18}
                          className="text-emerald-400"
                        />
                      </div>

                      <div className="min-w-0">
                        <h5 className="font-semibold text-white">
                          Secure Checkout
                        </h5>

                        <p className="mt-1 text-sm leading-6 text-stone-400">
                          Bank-grade encryption and secure payment protection
                          on every transaction.
                        </p>
                      </div>
                    </div>

                    {/* Fast Delivery */}
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-[1.4rem]
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        p-4
                        transition-all
                        duration-300
                        hover:border-sky-500/20
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-sky-500/20
                          bg-sky-500/10
                        "
                      >
                        <FiTruck
                          size={18}
                          className="text-sky-400"
                        />
                      </div>

                      <div className="min-w-0">
                        <h5 className="font-semibold text-white">
                          Express Delivery
                        </h5>

                        <p className="mt-1 text-sm leading-6 text-stone-400">
                          Fast and reliable shipping with real-time tracking
                          updates.
                        </p>
                      </div>
                    </div>

                    {/* Premium Quality */}
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-[1.4rem]
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        p-4
                        transition-all
                        duration-300
                        hover:border-amber-500/20
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-amber-500/20
                          bg-amber-500/10
                        "
                      >
                        <FiAward
                          size={18}
                          className="text-amber-400"
                        />
                      </div>

                      <div className="min-w-0">
                        <h5 className="font-semibold text-white">
                          Curated Quality
                        </h5>

                        <p className="mt-1 text-sm leading-6 text-stone-400">
                          Handpicked products selected for exceptional quality,
                          reliability, and value.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

                    {/* Footer */}
          {cartItems.length > 0 && (
            <div
              className="
                border-t
                border-white/[0.08]
                bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.35))]
                p-7
                backdrop-blur-2xl
              "
            >
              {/* Premium Total Card */}
              <div
                className="
                  mb-6
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-amber-500/15
                  bg-[linear-gradient(135deg,rgba(245,158,11,0.10),rgba(255,255,255,0.03))]
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-stone-400">
                      Cart Total
                    </p>

                    <p className="mt-1 text-xs text-stone-500">
                      Taxes & shipping calculated at checkout
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-black tracking-tight text-amber-300">
                      ₹{total.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="text-stone-500">
                    Premium Protection Included
                  </span>

                  <span className="font-semibold text-emerald-400">
                    Secure Checkout
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/cart"
                onClick={onClose}
                className="
                  group
                  relative
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-[1.6rem]
                  bg-gradient-to-r
                  from-amber-400
                  via-yellow-400
                  to-amber-500
                  px-6
                  py-4
                  font-bold
                  text-black
                  shadow-[0_15px_40px_rgba(245,158,11,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_25px_60px_rgba(245,158,11,0.45)]
                  active:scale-[0.98]
                "
              >
                {/* Shine Effect */}
                <span
                  className="
                    absolute
                    inset-y-0
                    left-[-120%]
                    w-1/2
                    skew-x-12
                    bg-white/30
                    transition-all
                    duration-1000
                    group-hover:left-[140%]
                  "
                />

                <span className="relative z-10">
                  View Full Cart
                </span>

                <FiArrowRight
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1.5
                  "
                />
              </Link>

              {/* Footer Trust Badges */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    p-3
                    text-center
                  "
                >
                  <p className="text-xs font-semibold text-white">
                    Secure
                  </p>

                  <p className="mt-1 text-[11px] text-stone-500">
                    Payments
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    p-3
                    text-center
                  "
                >
                  <p className="text-xs font-semibold text-white">
                    Fast
                  </p>

                  <p className="mt-1 text-[11px] text-stone-500">
                    Delivery
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    p-3
                    text-center
                  "
                >
                  <p className="text-xs font-semibold text-white">
                    Premium
                  </p>

                  <p className="mt-1 text-[11px] text-stone-500">
                    Quality
                  </p>
                </div>
              </div>
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