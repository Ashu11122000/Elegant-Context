// src/components/common/Skeleton.jsx

import PropTypes from "prop-types";

const VARIANT_CLASSES = {
  text: "h-4 rounded-lg",
  title: "h-7 rounded-xl",
  image: "aspect-square rounded-3xl",
  avatar: "rounded-full",
  button: "h-12 rounded-2xl",
  card: "rounded-3xl",
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
            className={`relative overflow-hidden border border-white/40 bg-gradient-to-r from-stone-100 via-stone-200 to-stone-100 shadow-sm backdrop-blur-sm ${variantClass} ${sizeClass} ${className}`}
          >
            {/* Premium shimmer animation */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
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