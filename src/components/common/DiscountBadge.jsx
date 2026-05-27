// src/components/common/DiscountBadge.jsx

import PropTypes from "prop-types";

const VARIANT_CLASSES = {
  primary:
    "bg-amber-900 text-white border border-amber-900",
  subtle:
    "bg-amber-50 text-amber-900 border border-amber-200",
  success:
    "bg-green-50 text-green-700 border border-green-200",
  danger:
    "bg-red-50 text-red-700 border border-red-200",
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
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide shadow-sm ${badgeClass} ${className}`}
    >
      {prefix} {discount}
      {suffix}
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