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
      price: "text-base",
      original: "text-sm",
      discount: "text-xs",
    },
    md: {
      price: "text-xl",
      original: "text-base",
      discount: "text-sm",
    },
    lg: {
      price: "text-2xl",
      original: "text-lg",
      discount: "text-base",
    },
  };

  const hasDiscount =
    originalPrice !== null && originalPrice > price;

  const discountPercentage = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div
      className={[
        "flex flex-wrap items-center gap-3",
        className,
      ].join(" ")}
    >
      <span
        className={[
          "font-bold text-[#edbf68]",
          sizeClasses[size].price,
        ].join(" ")}
      >
        {currency}
        {price.toLocaleString()}
      </span>

      {hasDiscount && (
        <>
          <span
            className={[
              "text-[#cbbd9b] line-through",
              sizeClasses[size].original,
            ].join(" ")}
          >
            {currency}
            {originalPrice.toLocaleString()}
          </span>

          {showDiscount && (
            <span
              className={[
                "font-semibold text-green-400",
                sizeClasses[size].discount,
              ].join(" ")}
            >
              {discountPercentage}% OFF
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
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default PriceTag;