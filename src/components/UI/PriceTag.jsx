import PropTypes from "prop-types";

function PriceTag({
  price,
  originalPrice = null,
  currency = "₹",
  showDiscount = true,
  size = "md",
  className = "",
}) {
  const sizeClasses = {
    sm: {
      price: "text-[1.35rem]",
      original: "text-sm",
      discount: "text-[10px]",
      badge: "px-2.5 py-1",
    },

    md: {
      price: "text-[2rem]",
      original: "text-base",
      discount: "text-xs",
      badge: "px-3 py-1.5",
    },

    lg: {
      price: "text-[2.7rem]",
      original: "text-xl",
      discount: "text-sm",
      badge: "px-4 py-2",
    },
  };

  const hasDiscount =
    typeof originalPrice === "number" &&
    originalPrice > price;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((originalPrice - price) /
          originalPrice) *
          100
      )
    : 0;

  const selectedSize =
    sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={[
        "flex flex-wrap items-center gap-3",
        className,
      ].join(" ")}
    >
      {/* Main Price */}
      <div className="relative flex items-end">
        {/* Luxury glow */}
        <div className="absolute inset-0 rounded-full bg-amber-300/10 blur-2xl" />

        <span
          className={[
            "relative bg-gradient-to-r from-[#ffe7b0] via-[#edbf68] to-[#c8922f] bg-clip-text font-bold leading-none tracking-[-0.04em] text-transparent drop-shadow-[0_2px_10px_rgba(237,191,104,0.25)]",
            selectedSize.price,
          ].join(" ")}
        >
          <span className="mr-1 align-top text-[0.62em] font-semibold opacity-90">
            {currency}
          </span>

          {price.toLocaleString()}
        </span>
      </div>

      {/* Original Price + Discount */}
      {hasDiscount && (
        <div className="flex flex-wrap items-center gap-3">
          {/* Original Price */}
          <span
            className={[
              "font-medium tracking-[0.02em] text-stone-500 line-through decoration-stone-500/80 decoration-[1.5px]",
              selectedSize.original,
            ].join(" ")}
          >
            {currency}
            {originalPrice.toLocaleString()}
          </span>

          {/* Discount Badge */}
          {showDiscount && (
            <span
              className={[
                "relative inline-flex items-center overflow-hidden rounded-full border border-emerald-300/15 bg-gradient-to-r from-emerald-500/15 via-green-500/10 to-emerald-400/15 font-semibold uppercase tracking-[0.14em] text-emerald-200 shadow-[0_10px_25px_rgba(16,185,129,0.16)] backdrop-blur-xl",
                selectedSize.discount,
                selectedSize.badge,
              ].join(" ")}
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/[0.06] via-transparent to-transparent" />

              <span className="relative z-10">
                Save {discountPercentage}%
              </span>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

PriceTag.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  currency: PropTypes.string,
  showDiscount: PropTypes.bool,

  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
  ]),

  className: PropTypes.string,
};

export default PriceTag;