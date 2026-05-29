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
    <aside className="space-y-7 lg:sticky lg:top-24">
      <CouponBox
        appliedCoupon={appliedCoupon}
        onApplyCoupon={setAppliedCoupon}
      />

      <div
        className="
        relative
        overflow-hidden
        rounded-[2.5rem]
        border
        border-white/[0.08]
        bg-[linear-gradient(180deg,#181008_0%,#120b05_55%,#0d0905_100%)]
        shadow-[0_40px_120px_rgba(0,0,0,0.55)]
      "
      >
        {/* Luxury Ambient Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-[120px]" />

          <div className="absolute -left-24 bottom-0 h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />
        </div>

        <div className="absolute inset-[1px] rounded-[2.45rem] border border-white/[0.04]" />

        <div className="relative z-10">
          {/* Header */}
          <div className="border-b border-white/[0.08] p-7">
            <div className="flex items-start gap-4">
              <div
                className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-[1.5rem]
                border
                border-amber-500/20
                bg-gradient-to-br
                from-amber-500/15
                to-orange-500/10
              "
              >
                <FiShoppingBag className="text-2xl text-amber-300" />
              </div>

              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                  Premium Order
                </div>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-white">
                  Order Summary
                </h2>

                <p className="mt-2 text-sm leading-7 text-stone-400">
                  Review your order, unlock premium shipping,
                  and proceed with secure checkout.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Insights */}
          <div className="border-b border-white/[0.08] p-7">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="
                rounded-[1.8rem]
                border
                border-white/[0.08]
                bg-white/[0.03]
                p-5
              "
              >
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                  Items
                </p>

                <p className="mt-3 text-4xl font-black text-amber-300">
                  {cartCount}
                </p>

                <p className="mt-2 text-xs text-stone-500">
                  Products Selected
                </p>
              </div>

              <div
                className="
                rounded-[1.8rem]
                border
                border-white/[0.08]
                bg-white/[0.03]
                p-5
              "
              >
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                  Cart Value
                </p>

                <p className="mt-3 text-xl font-black text-amber-300 break-words">
                  ₹{subtotal.toLocaleString("en-IN")}
                </p>

                <p className="mt-2 text-xs text-stone-500">
                  Current Order Value
                </p>
              </div>
            </div>
          </div>

          {/* Premium Shipping Progress */}
          <div className="border-b border-white/[0.08] p-7">
            <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10">
                  <FiTruck className="text-lg text-amber-300" />
                </div>

                <div className="min-w-0 flex-1">
                                      {remainingForFreeShipping > 0 ? (
                    <>
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-white">
                            Unlock Premium Shipping
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-stone-400">
                            Add
                            <span className="mx-1 font-semibold text-amber-300">
                              ₹
                              {remainingForFreeShipping.toLocaleString(
                                "en-IN"
                              )}
                            </span>
                            more to qualify for complimentary
                            priority delivery.
                          </p>
                        </div>

                        <div className="shrink-0 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-3 py-2">
                          <span className="text-sm font-bold text-amber-300">
                            {Math.round(progressPercentage)}%
                          </span>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="h-3 overflow-hidden rounded-full bg-[#24180d]">
                          <div
                            className="
                              h-full
                              rounded-full
                              bg-gradient-to-r
                              from-amber-500
                              via-yellow-400
                              to-amber-300
                              transition-all
                              duration-1000
                            "
                            style={{
                              width: `${progressPercentage}%`,
                            }}
                          />
                        </div>

                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="text-stone-500">
                            Progress To Free Shipping
                          </span>

                          <span className="font-medium text-stone-400">
                            ₹{subtotal.toLocaleString("en-IN")} /
                            ₹{FREE_SHIPPING_THRESHOLD.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-[1.4rem]
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        p-4
                      "
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
                        <FiCheckCircle className="text-lg text-emerald-400" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-emerald-300">
                          Free Shipping Unlocked
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-emerald-200/80">
                          Congratulations! Your order qualifies
                          for complimentary premium delivery.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Premium Pricing Section */}
          <div className="p-7">
            <div
              className="
                rounded-[2rem]
                border
                border-white/[0.08]
                bg-white/[0.03]
                p-6
              "
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-base font-bold text-white">
                  Payment Summary
                </h3>

                <div className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1">
                  <span className="text-xs font-medium text-stone-400">
                    Secure Billing
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <SummaryRow
                  label="Subtotal"
                  value={`₹${subtotal.toLocaleString(
                    "en-IN"
                  )}`}
                />

                {appliedCoupon && (
                  <SummaryRow
                    label={`Coupon Savings (${appliedCoupon.discount}%)`}
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
                      ? "FREE"
                      : `₹${shipping.toLocaleString(
                          "en-IN"
                        )}`
                  }
                  valueClassName={
                    shipping === 0
                      ? "text-emerald-400 font-bold"
                      : ""
                  }
                />

                <SummaryRow
                  label="Tax & Charges"
                  value={`₹${tax.toLocaleString(
                    "en-IN"
                  )}`}
                />

                <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div
                  className="
                    rounded-[1.6rem]
                    border
                    border-amber-500/15
                    bg-gradient-to-br
                    from-amber-500/10
                    to-transparent
                    p-5
                  "
                >
                  <SummaryRow
                    label="Grand Total"
                    value={`₹${finalTotal.toLocaleString(
                      "en-IN"
                    )}`}
                    labelClassName="text-lg font-bold text-white"
                    valueClassName="text-3xl font-black text-amber-300"
                  />

                  <p className="mt-3 text-xs leading-6 text-stone-500">
                    Includes taxes, discounts, shipping,
                    and applicable charges.
                  </p>
                </div>
              </div>
            </div>

                        {/* Premium Benefits */}
            <div className="mt-7">
              <div
                className="
                  rounded-[2rem]
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  p-6
                "
              >
                <h3 className="mb-5 text-base font-bold text-white">
                  Premium Benefits Included
                </h3>

                <div className="space-y-4">
                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-[1.4rem]
                      border
                      border-white/[0.08]
                      bg-[#171008]/60
                      p-4
                    "
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                      <FiShield className="text-emerald-400" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-white">
                        Secure Checkout
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-stone-400">
                        Bank-grade encryption and protected
                        payment processing on every transaction.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-[1.4rem]
                      border
                      border-white/[0.08]
                      bg-[#171008]/60
                      p-4
                    "
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                      <FiAward className="text-amber-300" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-white">
                        Premium Quality Guarantee
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-stone-400">
                        Every product is carefully selected for
                        quality, reliability, and value.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-[1.4rem]
                      border
                      border-white/[0.08]
                      bg-[#171008]/60
                      p-4
                    "
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10">
                      <FiPackage className="text-sky-400" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-white">
                        Fast & Reliable Delivery
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-stone-400">
                        Quick dispatch and dependable shipping
                        with real-time tracking support.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      rounded-[1.4rem]
                      border
                      border-white/[0.08]
                      bg-[#171008]/60
                      p-4
                    "
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                      <FiCreditCard className="text-purple-400" />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-semibold text-white">
                        Flexible Payment Methods
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-stone-400">
                        Multiple secure payment options for a
                        smooth checkout experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury CTA Section */}
            <div className="mt-7 space-y-4">
              <button
                type="button"
                className="
                  group
                  relative
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-[1.8rem]
                  bg-gradient-to-r
                  from-amber-400
                  via-yellow-400
                  to-amber-500
                  px-6
                  py-5
                  font-bold
                  text-black
                  shadow-[0_15px_45px_rgba(245,158,11,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_25px_60px_rgba(245,158,11,0.45)]
                  active:scale-[0.98]
                "
              >
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
                  Proceed To Secure Checkout
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
              </button>

              <Link
                to="/products"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-[1.8rem]
                  border
                  border-white/[0.08]
                  bg-white/[0.03]
                  px-6
                  py-5
                  font-medium
                  text-stone-300
                  transition-all
                  duration-300
                  hover:border-amber-500/20
                  hover:bg-white/[0.05]
                  hover:text-amber-300
                "
              >
                Continue Shopping
              </Link>
            </div>

            {/* Security Notice */}
            <div
              className="
                mt-7
                rounded-[1.8rem]
                border
                border-emerald-500/20
                bg-emerald-500/10
                p-5
              "
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
                  <FiCheckCircle className="text-emerald-400" />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-emerald-300">
                    Secure Payment Protection
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-emerald-200/80">
                    Your payment information is encrypted and
                    protected using industry-standard security
                    protocols throughout checkout.
                  </p>
                </div>
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
    <div className="flex items-center justify-between gap-5">
      <span
        className={`
          min-w-0
          text-sm
          text-stone-400
          ${labelClassName}
        `}
      >
        {label}
      </span>

      <span
        className={`
          text-right
          text-sm
          font-semibold
          text-white
          break-words
          ${valueClassName}
        `}
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