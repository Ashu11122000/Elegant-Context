import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShoppingBag,
  FiTruck,
  FiShield,
  FiAward,
  FiCreditCard,
  FiPackage,
} from "react-icons/fi";
import PropTypes from "prop-types";

import { useCartContext } from "../../context/CartContext";
import CouponBox from "./CouponBox";

const FREE_SHIPPING_THRESHOLD = 5000;

function CartSummary() {
  const {
    cartCount,
    subtotal,
    shipping,
    tax,
  } = useCartContext();

  const [appliedCoupon, setAppliedCoupon] =
    useState(null);

  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;

    return (
      subtotal *
      (appliedCoupon.discount / 100)
    );
  }, [subtotal, appliedCoupon]);

  const finalTotal = useMemo(
    () =>
      subtotal -
      discountAmount +
      shipping +
      tax,
    [
      subtotal,
      discountAmount,
      shipping,
      tax,
    ]
  );

  const remainingForFreeShipping =
    Math.max(
      FREE_SHIPPING_THRESHOLD - subtotal,
      0
    );

  const progressPercentage = Math.min(
    (subtotal /
      FREE_SHIPPING_THRESHOLD) *
      100,
    100
  );

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      <CouponBox
        appliedCoupon={appliedCoupon}
        onApplyCoupon={setAppliedCoupon}
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#171008,#120b05)] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        {/* Ambient Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-orange-500/5 blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="border-b border-[#2a1c10] p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                <FiShoppingBag className="text-xl text-amber-300" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Order Summary
                </h2>

                <p className="text-sm text-stone-400">
                  {cartCount} premium item
                  {cartCount !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>

          {/* Order Insights */}
          <div className="grid grid-cols-2 gap-3 border-b border-[#2a1c10] p-6">
            <div className="rounded-2xl border border-[#322214] bg-[#171008] p-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Items
              </p>

              <p className="mt-2 text-2xl font-bold text-amber-300">
                {cartCount}
              </p>
            </div>

            <div className="rounded-2xl border border-[#322214] bg-[#171008] p-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Cart Value
              </p>

              <p className="mt-2 text-lg font-bold text-amber-300">
                ₹{subtotal.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          {/* Shipping Progress */}
          <div className="border-b border-[#2a1c10] p-6">
            <div className="flex items-start gap-3">
              <FiTruck className="mt-1 text-lg text-amber-300" />

              <div className="flex-1">
                {remainingForFreeShipping > 0 ? (
                  <>
                    <p className="text-sm leading-relaxed text-stone-300">
                      Add
                      <span className="mx-1 font-semibold text-amber-300">
                        ₹
                        {remainingForFreeShipping.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                      more to unlock free premium shipping.
                    </p>

                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#24180d]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-300 transition-all duration-700"
                        style={{
                          width: `${progressPercentage}%`,
                        }}
                      />
                    </div>

                    <p className="mt-2 text-xs text-stone-500">
                      {Math.round(progressPercentage)}%
                      completed
                    </p>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-400">
                    <FiCheckCircle />

                    <span className="font-medium">
                      Free Shipping Unlocked
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="p-6">
            <div className="space-y-4">
              <SummaryRow
                label="Subtotal"
                value={`₹${subtotal.toLocaleString(
                  "en-IN"
                )}`}
              />

              {appliedCoupon && (
                <SummaryRow
                  label={`Discount (${appliedCoupon.discount}%)`}
                  value={`-₹${discountAmount.toLocaleString(
                    "en-IN"
                  )}`}
                  valueClassName="text-emerald-400"
                />
              )}

              <SummaryRow
                label="Shipping"
                value={
                  shipping === 0
                    ? "Free"
                    : `₹${shipping.toLocaleString(
                        "en-IN"
                      )}`
                }
                valueClassName={
                  shipping === 0
                    ? "text-emerald-400"
                    : ""
                }
              />

              <SummaryRow
                label="Tax"
                value={`₹${tax.toLocaleString(
                  "en-IN"
                )}`}
              />

              <div className="border-t border-[#2a1c10] pt-5">
                <SummaryRow
                  label="Grand Total"
                  value={`₹${finalTotal.toLocaleString(
                    "en-IN"
                  )}`}
                  labelClassName="text-lg font-semibold text-white"
                  valueClassName="text-3xl font-bold text-amber-300"
                />
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-[#322214] bg-[#171008] p-4">
                <FiShield className="text-emerald-400" />

                <span className="text-sm text-stone-300">
                  Secure & Encrypted Checkout
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#322214] bg-[#171008] p-4">
                <FiAward className="text-amber-300" />

                <span className="text-sm text-stone-300">
                  Premium Quality Guarantee
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#322214] bg-[#171008] p-4">
                <FiPackage className="text-sky-400" />

                <span className="text-sm text-stone-300">
                  Fast & Reliable Delivery
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-[#322214] bg-[#171008] p-4">
                <FiCreditCard className="text-purple-400" />

                <span className="text-sm text-stone-300">
                  Multiple Secure Payment Options
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 space-y-3">
              <button
                type="button"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-4 font-bold text-black shadow-[0_12px_35px_rgba(245,158,11,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                Proceed To Checkout

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                to="/products"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-[#322214] bg-[#171008] px-6 py-4 font-medium text-stone-300 transition-all duration-300 hover:border-amber-500/30 hover:text-amber-300"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Security Notice */}
            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-300">
                <FiCheckCircle />
                Protected by secure encrypted payment processing
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SummaryRow({
  label,
  value,
  labelClassName = "",
  valueClassName = "",
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={`text-sm text-stone-400 ${labelClassName}`}
      >
        {label}
      </span>

      <span
        className={`text-sm font-medium text-white ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
}

SummaryRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  valueClassName: PropTypes.string,
};

export default CartSummary;