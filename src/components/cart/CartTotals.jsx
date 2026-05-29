import PropTypes from "prop-types";
import {
  FiCheckCircle,
  FiShield,
  FiTruck,
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
    <div className="overflow-hidden rounded-[2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#171008,#120b05)] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {/* Header */}
      <div className="border-b border-[#2a1c10] p-5">
        <h3 className="text-lg font-semibold text-white">
          Pricing Breakdown
        </h3>

        <p className="mt-1 text-sm text-stone-400">
          Complete overview of your order value
        </p>
      </div>

      {/* Totals */}
      <div className="p-5">
        <div className="space-y-4">
          <Row
            label="Subtotal"
            value={`₹${subtotal.toLocaleString("en-IN")}`}
          />

          {discount > 0 && (
            <Row
              label="Discount Savings"
              value={`-₹${discount.toLocaleString("en-IN")}`}
              valueClassName="text-emerald-400 font-semibold"
            />
          )}

          <Row
            label="Shipping"
            value={
              shipping === 0
                ? "Free"
                : `₹${shipping.toLocaleString("en-IN")}`
            }
            valueClassName={
              shipping === 0
                ? "text-emerald-400 font-semibold"
                : ""
            }
          />

          <Row
            label="Tax & Charges"
            value={`₹${tax.toLocaleString("en-IN")}`}
          />

          <div className="border-t border-[#2a1c10] pt-5">
            <Row
              label="Grand Total"
              value={`₹${total.toLocaleString("en-IN")}`}
              labelClassName="text-lg font-semibold text-white"
              valueClassName="text-3xl font-bold text-amber-300"
            />
          </div>
        </div>

        {/* Savings Card */}
        {savings > 0 && (
          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="shrink-0 text-emerald-400" />

              <div>
                <p className="text-sm font-medium text-emerald-300">
                  You are saving ₹
                  {savings.toLocaleString("en-IN")}
                </p>

                <p className="mt-1 text-xs text-emerald-400/80">
                  Discount successfully applied to this order.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-6 grid gap-3">
          <div className="flex items-center gap-3 rounded-2xl border border-[#322214] bg-[#171008] p-3">
            <FiShield className="text-emerald-400" />

            <span className="text-sm text-stone-300">
              Secure Payment Protection
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#322214] bg-[#171008] p-3">
            <FiTruck className="text-sky-400" />

            <span className="text-sm text-stone-300">
              Fast & Reliable Delivery
            </span>
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