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
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const renderStars = () => {
    return Array.from({ length: maxRating }, (_, index) => {
      const starNumber = index + 1;

      if (rating >= starNumber) {
        return <FaStar key={starNumber} />;
      }

      if (rating >= starNumber - 0.5) {
        return <FaStarHalfAlt key={starNumber} />;
      }

      return <FaRegStar key={starNumber} />;
    });
  };

  return (
    <div
      className={[
        "flex items-center gap-2",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "flex items-center text-[#edbf68]",
          sizeClasses[size],
        ].join(" ")}
      >
        {renderStars()}
      </div>

      {showValue && (
        <span className="text-sm font-medium text-[#f8f3e9]">
          {rating.toFixed(1)}
        </span>
      )}

      {typeof reviewCount === "number" && (
        <span className="text-sm text-[#cbbd9b]">
          ({reviewCount})
        </span>
      )}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  reviewCount: PropTypes.number,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  showValue: PropTypes.bool,
  className: PropTypes.string,
};

export default RatingStars;