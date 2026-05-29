import PropTypes from "prop-types";
import {
  FiCheckCircle,
  FiShield,
  FiTruck,
  FiAward,
} from "react-icons/fi";

function CartTotals({
  subtotal,
  shipping,
  tax,
  discount = 0,
  total,
}) {
  const savings = discount;

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[2.5rem]
        border
        border-white/[0.08]
        bg-[linear-gradient(180deg,#181008_0%,#120b05_55%,#0d0905_100%)]
        shadow-[0_35px_100px_rgba(0,0,0,0.5)]
      "
    >
      {/* Luxury Ambient Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="absolute -left-24 bottom-0 h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      {/* Inner Border */}
      <div className="absolute inset-[1px] rounded-[2.45rem] border border-white/[0.04]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/[0.08] p-6">
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-[1.4rem]
                border
                border-amber-500/20
                bg-gradient-to-br
                from-amber-500/15
                to-orange-500/10
              "
            >
              <FiAward className="text-xl text-amber-300" />
            </div>

            <div className="min-w-0">
              <div className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                Premium Billing
              </div>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
                Pricing Breakdown
              </h3>

              <p className="mt-2 text-sm leading-7 text-stone-400">
                Transparent pricing summary including taxes,
                discounts, shipping, and savings.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="p-6">
          <div
            className="
              rounded-[2rem]
              border
              border-white/[0.08]
              bg-white/[0.03]
              p-6
            "
          >
            <div className="space-y-5">
              <Row
                label="Subtotal"
                value={`₹${subtotal.toLocaleString("en-IN")}`}
              />

              {discount > 0 && (
                <Row
                  label="Discount Savings"
                  value={`-₹${discount.toLocaleString("en-IN")}`}
                  valueClassName="text-emerald-400 font-bold"
                />
              )}

              <Row
                label="Shipping"
                value={
                  shipping === 0
                    ? "FREE"
                    : `₹${shipping.toLocaleString("en-IN")}`
                }
                valueClassName={
                  shipping === 0
                    ? "text-emerald-400 font-bold"
                    : ""
                }
              />

              <Row
                label="Tax & Charges"
                value={`₹${tax.toLocaleString("en-IN")}`}
              />

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div
                className="
                  rounded-[1.8rem]
                  border
                  border-amber-500/15
                  bg-gradient-to-br
                  from-amber-500/10
                  to-transparent
                  p-5
                "
              >
                <Row
                  label="Grand Total"
                  value={`₹${total.toLocaleString("en-IN")}`}
                  labelClassName="text-lg font-bold text-white"
                  valueClassName="text-3xl font-black text-amber-300"
                />

                <p className="mt-3 text-xs leading-6 text-stone-500">
                  Final payable amount including all taxes,
                  shipping charges, and applied discounts.
                </p>
              </div>
            </div>
          </div>

                    {/* Premium Savings Card */}
          {savings > 0 && (
            <div
              className="
                mt-6
                overflow-hidden
                rounded-[2rem]
                border
                border-emerald-500/20
                bg-gradient-to-br
                from-emerald-500/12
                to-emerald-500/5
                p-5
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-500/15
                  "
                >
                  <FiCheckCircle className="text-xl text-emerald-400" />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold text-emerald-300">
                    Congratulations! You Saved ₹
                    {savings.toLocaleString("en-IN")}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-emerald-200/80">
                    Your discount has been successfully applied.
                    The savings are already reflected in your
                    final payable amount.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Premium Trust & Benefits */}
          <div className="mt-6">
            <div
              className="
                rounded-[2rem]
                border
                border-white/[0.08]
                bg-white/[0.03]
                p-6
              "
            >
              <h4 className="mb-5 text-base font-bold text-white">
                Included With Your Order
              </h4>

              <div className="space-y-4">
                {/* Secure Payments */}
                <div
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-[1.4rem]
                    border
                    border-white/[0.08]
                    bg-[#171008]/70
                    p-4
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
                    <FiShield className="text-emerald-400" />
                  </div>

                  <div className="min-w-0">
                    <h5 className="font-semibold text-white">
                      Secure Payment Protection
                    </h5>

                    <p className="mt-1 text-sm leading-6 text-stone-400">
                      Industry-standard encryption safeguards
                      every transaction from checkout to payment
                      confirmation.
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
                    bg-[#171008]/70
                    p-4
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
                    <FiTruck className="text-sky-400" />
                  </div>

                  <div className="min-w-0">
                    <h5 className="font-semibold text-white">
                      Fast & Reliable Delivery
                    </h5>

                    <p className="mt-1 text-sm leading-6 text-stone-400">
                      Orders are processed quickly and delivered
                      through trusted logistics partners.
                    </p>
                  </div>
                </div>

                {/* Premium Assurance */}
                <div
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-[1.4rem]
                    border
                    border-white/[0.08]
                    bg-[#171008]/70
                    p-4
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
                    <FiAward className="text-amber-300" />
                  </div>

                  <div className="min-w-0">
                    <h5 className="font-semibold text-white">
                      Premium Quality Assurance
                    </h5>

                    <p className="mt-1 text-sm leading-6 text-stone-400">
                      Every product is selected for exceptional
                      quality, reliability, and customer
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div
            className="
              mt-6
              rounded-[1.8rem]
              border
              border-emerald-500/20
              bg-emerald-500/10
              p-5
            "
          >
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-500/15
                "
              >
                <FiCheckCircle className="text-emerald-400" />
              </div>

              <div className="min-w-0">
                <h4 className="font-semibold text-emerald-300">
                  Secure Checkout Verified
                </h4>

                <p className="mt-1 text-sm leading-6 text-emerald-200/80">
                  Your personal and payment information remains
                  encrypted and protected throughout the checkout
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
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

Row.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  valueClassName: PropTypes.string,
};

CartTotals.propTypes = {
  subtotal: PropTypes.number.isRequired,
  shipping: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  discount: PropTypes.number,
  total: PropTypes.number.isRequired,
};

export default CartTotals;