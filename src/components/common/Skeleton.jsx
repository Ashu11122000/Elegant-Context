// src/components/common/Skeleton.jsx

import PropTypes from "prop-types";

const VARIANT_CLASSES = {
  text: "h-4 rounded-md",
  title: "h-6 rounded-lg",
  image: "aspect-square rounded-2xl",
  avatar: "rounded-full",
  button: "h-11 rounded-xl",
  card: "rounded-2xl",
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
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.text;

  const sizeClass =
    SIZE_CLASSES[size] || SIZE_CLASSES.full;

  const customStyle = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  return (
    <div
      role="status"
      aria-label="Loading content"
      className="space-y-3"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`skeleton-${index + 1}`}
          style={customStyle}
          className={`animate-pulse bg-stone-200 ${variantClass} ${sizeClass} ${className}`}
        />
      ))}
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