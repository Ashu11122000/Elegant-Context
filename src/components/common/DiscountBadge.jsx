// src/components/common/DiscountBadge.jsx

import PropTypes from "prop-types";
import {
  FiTag,
  FiTrendingDown,
} from "react-icons/fi";

const VARIANT_CLASSES = {
  primary: {
    wrapper:
      "border border-amber-300/40 bg-gradient-to-br from-[#1f1307] via-[#5b3415] to-[#120d08] text-amber-50 shadow-[0_10px_30px_rgba(120,53,15,0.35)]",
    icon:
      "border border-white/10 bg-white/10 text-amber-100",
    glow:
      "from-amber-300/20 via-orange-200/10 to-transparent",
  },

  subtle: {
    wrapper:
      "border border-stone-200/70 bg-gradient-to-br from-white via-amber-50/80 to-stone-100 text-stone-800 shadow-[0_8px_24px_rgba(120,53,15,0.10)]",
    icon:
      "border border-amber-200/60 bg-white/70 text-amber-800",
    glow:
      "from-white/60 via-amber-100/40 to-transparent",
  },

  success: {
    wrapper:
      "border border-emerald-200/60 bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700 text-white shadow-[0_10px_28px_rgba(5,150,105,0.28)]",
    icon:
      "border border-white/10 bg-white/10 text-white",
    glow:
      "from-emerald-200/20 via-white/10 to-transparent",
  },

  danger: {
    wrapper:
      "border border-rose-200/50 bg-gradient-to-br from-rose-500 via-rose-600 to-red-700 text-white shadow-[0_10px_28px_rgba(225,29,72,0.28)]",
    icon:
      "border border-white/10 bg-white/10 text-white",
    glow:
      "from-rose-200/20 via-white/10 to-transparent",
  },
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

  const selectedVariant =
    VARIANT_CLASSES[variant] ||
    VARIANT_CLASSES.primary;

  return (
    <span
      className={`group relative inline-flex items-center overflow-hidden rounded-full px-4 py-2.5 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] ${selectedVariant.wrapper} ${className}`}
    >
      {/* Premium Shine Layer */}
      <span
        className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${selectedVariant.glow} opacity-80`}
      />

      {/* Top Gloss */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />

      {/* Soft Blur Glow */}
      <span className="pointer-events-none absolute -left-10 top-0 h-full w-16 rotate-12 bg-white/10 blur-xl transition-all duration-700 group-hover:left-[120%]" />

      <span className="relative z-10 flex items-center gap-3">
        {/* Icon */}
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 ${selectedVariant.icon}`}
        >
          {variant === "success" ? (
            <FiTrendingDown
              size={13}
              aria-hidden="true"
            />
          ) : (
            <FiTag
              size={13}
              aria-hidden="true"
            />
          )}
        </span>

        {/* Text */}
        <span className="flex items-baseline gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] opacity-90">
            {prefix}
          </span>

          <span className="text-sm font-black tracking-tight">
            {discount}
            <span className="ml-0.5 text-[10px] font-bold uppercase tracking-[0.18em] opacity-90">
              {suffix}
            </span>
          </span>
        </span>
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