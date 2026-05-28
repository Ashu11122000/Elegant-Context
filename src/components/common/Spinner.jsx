// src/components/common/Skeleton.jsx

import PropTypes from "prop-types";

const VARIANT_CLASSES = {
  text: "h-4 rounded-xl",
  title: "h-8 rounded-2xl",
  image: "aspect-square rounded-[2rem]",
  avatar: "rounded-full",
  button: "h-12 rounded-2xl",
  card: "rounded-[2rem]",
};

const SIZE_CLASSES = {
  sm: "w-20",
  md: "w-40",
  lg: "w-64",
  full: "w-full",
};

function Skeleton({
  variant = "text",
  size = "full",
  width,
  height,
  className = "",
  count = 1,
}) {
  const variantClass =
    VARIANT_CLASSES[variant] ||
    VARIANT_CLASSES.text;

  const sizeClass =
    SIZE_CLASSES[size] ||
    SIZE_CLASSES.full;

  const customStyle = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  return (
    <div
      role="status"
      aria-label="Loading content"
      className="space-y-4"
    >
      {Array.from({ length: count }).map(
        (_, index) => (
          <div
            key={`skeleton-${index + 1}`}
            style={customStyle}
            className={`group relative isolate overflow-hidden border border-white/50 bg-gradient-to-br from-[#faf7f2] via-[#f2ede6] to-[#fcfaf7] shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl animate-pulse ${variantClass} ${sizeClass} ${className}`}
          >
            {/* Luxury Ambient Lighting */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.08),transparent_32%)]" />

            {/* Premium Glass Layer */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent opacity-90" />

            {/* Elegant Top Shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            {/* Main Luxury Shimmer */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.6s_infinite] bg-gradient-to-r from-transparent via-white/90 to-transparent" />

            {/* Warm Premium Sweep */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_4.5s_infinite] bg-gradient-to-r from-transparent via-amber-100/40 to-transparent" />

            {/* Floating Reflection */}
            <div className="pointer-events-none absolute -left-12 top-0 h-full w-20 rotate-12 bg-white/20 blur-2xl" />

            {/* Soft Inner Glow */}
            <div className="absolute inset-0 rounded-inherit shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]" />

            {/* Luxury Ping Overlay */}
            <div className="absolute inset-0 -translate-x-full animate-[ping_2s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60" />
          </div>
        )
      )}
    </div>
  );
}

Skeleton.propTypes = {
  variant: PropTypes.oneOf([
    "text",
    "title",
    "image",
    "avatar",
    "button",
    "card",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "full",
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  count: PropTypes.number,
};

export default Skeleton;