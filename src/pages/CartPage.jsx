import {
  FiArrowRight,
  FiShoppingBag,
  FiShield,
  FiTruck,
} from "react-icons/fi";

import Breadcrumb from "../components/common/Breadcrumb";
import Cart from "../components/cart/Cart";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import CartEmptyState from "../components/cart/CartEmptyState";

import { useCartContext } from "../context/CartContext";

function CartPage() {
  const {
    cartItems,
    cartCount,
    subtotal,
  } = useCartContext();

  const isEmpty =
    !cartItems || cartItems.length === 0;

  return (
    <div className="min-h-screen bg-[#0f0a05]">
      <div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            {
              label: "Home",
              path: "/",
            },
            {
              label: "Cart",
              path: "/cart",
            },
          ]}
        />

        {/* Premium Shopping Cart Hero */}
        <section
          className="
            relative
            mt-6
            overflow-hidden
            rounded-[3rem]
            border
            border-[#322214]
            bg-[linear-gradient(135deg,#171008_0%,#120b05_45%,#0d0703_100%)]
            shadow-[0_40px_120px_rgba(0,0,0,0.5)]
          "
        >
          {/* Ambient Effects */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,120,0.08),transparent_40%)]" />
          </div>

          <div className="relative z-10 p-8 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2">
              <FiShoppingBag className="text-amber-300" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                Premium Shopping Cart
              </span>
            </div>

            <div className="mt-8 grid gap-8 xl:grid-cols-[1.45fr_0.8fr]">
              {/* Left Content */}
              <div>
                <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
                  Your Curated
                  <br />
                  Luxury Collection
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-400">
                  Review your selected premium products,
                  manage quantities, compare options,
                  and prepare for a seamless checkout
                  experience backed by secure payments
                  and fast delivery.
                </p>
              </div>

              {/* Hero Stats */}
              {!isEmpty && (
                <div className="grid grid-cols-2 gap-5">
                  <div
                    className="
                      rounded-[2rem]
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-xl
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                      Total Items
                    </p>

                    <p className="mt-4 text-5xl font-black text-amber-300">
                      {cartCount}
                    </p>

                    <p className="mt-2 text-sm text-stone-500">
                      Products Selected
                    </p>
                  </div>

                  <div
                    className="
                      rounded-[2rem]
                      border
                      border-white/[0.08]
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-xl
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                      Cart Value
                    </p>

                    <p className="mt-4 text-3xl font-black text-amber-300">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </p>

                    <p className="mt-2 text-sm text-stone-500">
                      Current Order Value
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

                {/* VIP Rewards Club Hero */}
        {!isEmpty && (
          <section
            className="
              relative
              mt-8
              overflow-hidden
              rounded-[3rem]
              border
              border-[#322214]
              bg-[linear-gradient(135deg,#171008_0%,#120b05_50%,#0d0703_100%)]
              shadow-[0_35px_100px_rgba(0,0,0,0.45)]
            "
          >
            {/* Ambient Effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />

              <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,120,0.08),transparent_40%)]" />
            </div>

            <div className="relative z-10 p-8 lg:p-10">
              <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
                {/* Left */}
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2">
                    <FiShoppingBag className="text-amber-300" />

                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                      VIP Rewards Club
                    </span>
                  </div>

                  <h2 className="mt-6 text-4xl font-black tracking-tight text-white lg:text-5xl">
                    Exclusive Member Benefits
                  </h2>

                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-400">
                    Unlock premium savings, exclusive coupon
                    offers, early access collections, priority
                    support, and luxury shopping rewards
                    reserved for VIP members.
                  </p>
                </div>

                {/* Right Stats */}
                <div className="grid gap-5 sm:grid-cols-3">
                  <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 text-center">
                    <p className="text-4xl font-black text-amber-300">
                      3
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                      Active Offers
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 text-center">
                    <p className="text-4xl font-black text-amber-300">
                      20%
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                      Max Savings
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 text-center">
                    <p className="text-3xl font-black text-amber-300">
                      VIP
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                      Rewards Club
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {!isEmpty && (
          <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[2rem] border border-[#322214] bg-[#171008] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                  <FiShield className="text-xl text-emerald-400" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Secure Checkout
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-stone-400">
                    End-to-end encrypted payment
                    processing and protected transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#322214] bg-[#171008] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10">
                  <FiTruck className="text-xl text-sky-400" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Express Delivery
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-stone-400">
                    Fast shipping with live order
                    tracking and premium handling.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#322214] bg-[#171008] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                  <FiShoppingBag className="text-xl text-purple-400" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Curated Quality
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-stone-400">
                    Premium products selected by
                    experts and trusted brands.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#322214] bg-[#171008] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                  <FiArrowRight className="text-xl text-amber-300" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Ready To Checkout
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-stone-400">
                    Your premium order is prepared
                    for a seamless purchase experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

                {/* Main Cart Section */}
        <div className="mt-10">
          {isEmpty ? (
            <CartEmptyState />
          ) : (
            <Cart>
              <div className="space-y-10">
                {/* Cart Items Section */}
                <div className="min-w-0">
                  <CartList />
                </div>

                {/* Summary Section */}
                <div className="min-w-0">
                  <CartSummary />
                </div>
              </div>
            </Cart>
          )}
        </div>

        {/* Bottom Trust Bar */}
        {!isEmpty && (
          <section
            className="
              mt-12
              overflow-hidden
              rounded-[2.5rem]
              border
              border-[#322214]
              bg-[linear-gradient(180deg,#171008,#120b05)]
              shadow-[0_25px_70px_rgba(0,0,0,0.35)]
            "
          >
            <div className="grid gap-6 p-8 lg:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                  <FiShield className="text-2xl text-amber-300" />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    100% Secure Checkout
                  </h3>

                  <p className="mt-1 text-sm text-stone-400">
                    Your data is protected with
                    bank-level security.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                  <FiArrowRight className="text-2xl text-amber-300" />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Easy Returns
                  </h3>

                  <p className="mt-1 text-sm text-stone-400">
                    30-day hassle-free returns.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                  <FiTruck className="text-2xl text-amber-300" />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Fast Delivery
                  </h3>

                  <p className="mt-1 text-sm text-stone-400">
                    Quick & reliable shipping.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default CartPage;