import PropTypes from "prop-types";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

function WishlistButton({
  isWishlisted = false,
  onToggle,
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: {
      container: "h-11 w-11",
      icon: "text-base",
    },
    md: {
      container: "h-12 w-12",
      icon: "text-lg",
    },
    lg: {
      container: "h-14 w-14",
      icon: "text-xl",
    },
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        isWishlisted
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
      className={`
        group
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        backdrop-blur-xl
        transition-all
        duration-500
        active:scale-95
        hover:-translate-y-1
        ${sizes[size].container}
        ${
          isWishlisted
            ? `
              border-rose-400/30
              bg-gradient-to-br
              from-rose-500/15
              via-pink-500/10
              to-rose-500/15
              text-rose-300
              shadow-[0_12px_35px_rgba(244,63,94,0.18)]
            `
            : `
              border-[#322214]
              bg-[linear-gradient(to_bottom,#1a1209,#120b05)]
              text-[#b89d74]
              hover:border-amber-500/30
              hover:text-amber-300
              hover:shadow-[0_12px_30px_rgba(245,158,11,0.15)]
            `
        }
        ${className}
      `}
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {isWishlisted ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-pink-500/10" />

            <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/20 blur-xl" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </>
        )}
      </div>

      {/* Top Shine */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className={`
          relative
          z-10
          transition-all
          duration-500
          ${
            isWishlisted
              ? "scale-100 group-hover:scale-110"
              : "group-hover:scale-110"
          }
        `}
      >
        {isWishlisted ? (
          <FaHeart
            className={`
              ${sizes[size].icon}
              drop-shadow-[0_0_12px_rgba(244,63,94,0.45)]
            `}
          />
        ) : (
          <FiHeart
            className={`
              ${sizes[size].icon}
            `}
          />
        )}
      </div>

      {/* Premium Ring */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          ${
            isWishlisted
              ? "ring-1 ring-rose-400/30"
              : "ring-1 ring-amber-400/20"
          }
        `}
      />

      {/* Active Pulse */}
      {isWishlisted && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-rose-400/20 animate-pulse" />
      )}
    </button>
  );
}

WishlistButton.propTypes = {
  isWishlisted: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
  ]),
  className: PropTypes.string,
};

export default WishlistButton;