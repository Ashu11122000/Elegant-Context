// src/components/common/DiscountBadge.jsx

import PropTypes from "prop-types";
import { FiTag } from "react-icons/fi";

const VARIANT_CLASSES = {
  primary:
    "border border-amber-300/70 bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 text-white shadow-lg shadow-amber-900/20",
  subtle:
    "border border-amber-200/70 bg-gradient-to-r from-amber-50 to-stone-50 text-amber-900 shadow-md shadow-amber-100/60",
  success:
    "border border-emerald-200/70 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 shadow-md shadow-emerald-100/60",
  danger:
    "border border-rose-200/70 bg-gradient-to-r from-rose-50 to-red-50 text-rose-700 shadow-md shadow-rose-100/60",
};

function DiscountBadge({
  discount,
  prefix = "Save",
  suffix = "% OFF",
  variant = "primary",
  className = "",
}) {
  if (
    typeof discount !== "number" ||
    discount <= 0
  ) {
    return null;
  }

  const badgeClass =
    VARIANT_CLASSES[variant] ||
    VARIANT_CLASSES.primary;

  return (
    <span
      className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${badgeClass} ${className}`}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
        <FiTag
          size={11}
          aria-hidden="true"
        />
      </span>

      <span>
        {prefix} {discount}
        {suffix}
      </span>
    </span>
  );
}

DiscountBadge.propTypes = {
  discount: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "subtle",
    "success",
    "danger",
  ]),
  className: PropTypes.string,
};

export default DiscountBadge;