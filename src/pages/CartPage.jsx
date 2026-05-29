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
  const { cartItems, cartCount } =
    useCartContext();

  console.log(
    "CartPage Cart Items:",
    cartItems
  );

  const isEmpty =
    !cartItems || cartItems.length === 0;

  return (
    <div className="min-h-screen bg-[#0f0a05]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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

        {/* Hero */}
        <section className="relative mt-6 overflow-hidden rounded-[2.5rem] border border-[#322214] bg-gradient-to-br from-[#171008] via-[#120b05] to-[#0d0703] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:p-12">
          <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              <FiShoppingBag />
              Shopping Cart
            </div>

            <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Your Luxury Collection
            </h1>

            <p className="mt-4 max-w-2xl text-stone-400">
              Review your selected premium
              fashion pieces before
              proceeding to secure checkout.
            </p>

            {!isEmpty && (
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-[#322214] bg-[#171008]/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                    Cart Items
                  </p>

                  <p className="mt-2 text-3xl font-bold text-amber-300">
                    {cartCount}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#322214] bg-[#171008]/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                    Delivery
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    Fast Shipping
                  </p>
                </div>

                <div className="rounded-2xl border border-[#322214] bg-[#171008]/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-stone-500">
                    Security
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    100% Secure
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Debug Panel */}
        <div className="mt-6 hidden">
          <pre className="overflow-auto rounded-xl bg-black p-4 text-xs text-green-400">
            {JSON.stringify(
              cartItems,
              null,
              2
            )}
          </pre>
        </div>

        {/* Benefits */}
        {!isEmpty && (
          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-[#322214] bg-[#171008] p-5">
              <div className="flex items-center gap-3">
                <FiTruck className="text-xl text-amber-300" />

                <div>
                  <h3 className="font-semibold text-white">
                    Fast Delivery
                  </h3>

                  <p className="text-sm text-stone-400">
                    Quick and reliable
                    shipping.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#322214] bg-[#171008] p-5">
              <div className="flex items-center gap-3">
                <FiShield className="text-xl text-amber-300" />

                <div>
                  <h3 className="font-semibold text-white">
                    Secure Payments
                  </h3>

                  <p className="text-sm text-stone-400">
                    Protected checkout
                    process.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#322214] bg-[#171008] p-5">
              <div className="flex items-center gap-3">
                <FiArrowRight className="text-xl text-amber-300" />

                <div>
                  <h3 className="font-semibold text-white">
                    Easy Checkout
                  </h3>

                  <p className="text-sm text-stone-400">
                    Complete your order in
                    minutes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Cart Content */}
        <div className="mt-10">
          {isEmpty ? (
            <CartEmptyState />
          ) : (
            <Cart>
              <div className="grid gap-8 xl:grid-cols-[1fr_420px]">
                <CartList />

                <CartSummary />
              </div>
            </Cart>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;