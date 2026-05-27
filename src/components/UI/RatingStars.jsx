import PropTypes from "prop-types";
import {
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

function RatingStars({
  rating = 0,
  maxRating = 5,
  reviewCount,
  size = "md",
  showValue = false,
  className = "",
}) {
  const sizeClasses = {
    sm: {
      stars: "text-sm",
      badge: "text-xs px-2 py-1",
      meta: "text-xs",
    },
    md: {
      stars: "text-base",
      badge: "text-sm px-2.5 py-1",
      meta: "text-sm",
    },
    lg: {
      stars: "text-lg",
      badge: "text-base px-3 py-1.5",
      meta: "text-base",
    },
  };

  const selectedSize =
    sizeClasses[size] || sizeClasses.md;

  const safeRating = Math.max(
    0,
    Math.min(rating, maxRating)
  );

  const renderStars = () =>
    Array.from(
      { length: maxRating },
      (_, index) => {
        const starNumber = index + 1;

        if (safeRating >= starNumber) {
          return (
            <FaStar
              key={starNumber}
              className="drop-shadow-[0_0_4px_rgba(237,191,104,0.35)]"
            />
          );
        }

        if (safeRating >= starNumber - 0.5) {
          return (
            <FaStarHalfAlt
              key={starNumber}
              className="drop-shadow-[0_0_4px_rgba(237,191,104,0.35)]"
            />
          );
        }

        return (
          <FaRegStar
            key={starNumber}
            className="text-white/20"
          />
        );
      }
    );

  return (
    <div
      className={[
        "flex flex-wrap items-center gap-3",
        className,
      ].join(" ")}
    >
      {/* Stars */}
      <div
        className={[
          "flex items-center gap-1 text-[#edbf68]",
          selectedSize.stars,
        ].join(" ")}
        aria-label={`Rated ${safeRating} out of ${maxRating}`}
      >
        {renderStars()}
      </div>

      {/* Rating value */}
      {showValue && (
        <span
          className={[
            "inline-flex items-center rounded-full border border-[#edbf68]/20 bg-white/5 font-semibold text-[#f8f3e9] shadow-sm backdrop-blur-sm",
            selectedSize.badge,
          ].join(" ")}
        >
          {safeRating.toFixed(1)}
        </span>
      )}

      {/* Review count */}
      {typeof reviewCount === "number" && (
        <span
          className={[
            "font-medium tracking-wide text-[#cbbd9b]",
            selectedSize.meta,
          ].join(" ")}
        >
          ({reviewCount.toLocaleString()} reviews)
        </span>
      )}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  reviewCount: PropTypes.number,
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
  ]),
  showValue: PropTypes.bool,
  className: PropTypes.string,
};

export default RatingStars;