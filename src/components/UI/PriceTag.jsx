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
      price: "text-lg",
      original: "text-sm",
      discount: "text-[10px]",
      badge: "px-2.5 py-1",
    },
    md: {
      price: "text-2xl",
      original: "text-base",
      discount: "text-xs",
      badge: "px-3 py-1.5",
    },
    lg: {
      price: "text-3xl",
      original: "text-lg",
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
      <span
        className={[
          "font-bold tracking-tight text-[#edbf68]",
          selectedSize.price,
        ].join(" ")}
      >
        {currency}
        {price.toLocaleString()}
      </span>

      {/* Original Price */}
      {hasDiscount && (
        <>
          <span
            className={[
              "font-medium text-[#cbbd9b] line-through opacity-80",
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
                "inline-flex items-center rounded-full border border-emerald-300/20 bg-gradient-to-r from-emerald-500/20 to-green-500/10 font-semibold uppercase tracking-[0.12em] text-emerald-300 shadow-sm backdrop-blur-sm",
                selectedSize.discount,
                selectedSize.badge,
              ].join(" ")}
            >
              Save {discountPercentage}%
            </span>
          )}
        </>
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