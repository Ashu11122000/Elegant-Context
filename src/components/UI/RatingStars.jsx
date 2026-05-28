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
      stars: "text-sm gap-1",
      badge: "text-[11px] px-2.5 py-1",
      meta: "text-xs",
    },

    md: {
      stars: "text-base gap-1.5",
      badge: "text-sm px-3 py-1.5",
      meta: "text-sm",
    },

    lg: {
      stars: "text-xl gap-2",
      badge: "text-base px-4 py-2",
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
              className="text-[#f6d48f] drop-shadow-[0_0_10px_rgba(237,191,104,0.45)] transition-transform duration-300 hover:scale-110"
            />
          );
        }

        if (safeRating >= starNumber - 0.5) {
          return (
            <FaStarHalfAlt
              key={starNumber}
              className="text-[#edbf68] drop-shadow-[0_0_10px_rgba(237,191,104,0.4)] transition-transform duration-300 hover:scale-110"
            />
          );
        }

        return (
          <FaRegStar
            key={starNumber}
            className="text-white/15"
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
          "relative flex items-center",
          selectedSize.stars,
        ].join(" ")}
        aria-label={`Rated ${safeRating} out of ${maxRating}`}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-amber-300/10 blur-2xl" />

        <div className="relative flex items-center">
          {renderStars()}
        </div>
      </div>

      {/* Rating Badge */}
      {showValue && (
        <span
          className={[
            "relative inline-flex items-center overflow-hidden rounded-full border border-amber-200/15 bg-white/[0.05] font-semibold tracking-[0.03em] text-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl",
            selectedSize.badge,
          ].join(" ")}
        >
          {/* Glass shine */}
          <span className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

          {/* Golden dot */}
          <span className="relative z-10 mr-2 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(237,191,104,0.6)]" />

          <span className="relative z-10">
            {safeRating.toFixed(1)}
          </span>
        </span>
      )}

      {/* Reviews */}
      {typeof reviewCount === "number" && (
        <span
          className={[
            "font-medium tracking-[0.03em] text-stone-400",
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