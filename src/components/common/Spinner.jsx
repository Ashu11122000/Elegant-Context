// src/components/common/Spinner.jsx

import PropTypes from "prop-types";

const SIZE_CLASSES = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
  xl: "h-16 w-16 border-4",
};

function Spinner({
  size = "md",
  className = "",
  label = "Loading",
}) {
  const spinnerSize =
    SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`flex items-center justify-center ${className}`}
    >
      <div
        className={`animate-spin rounded-full border-amber-200 border-t-amber-900 ${spinnerSize}`}
      />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
  ]),
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Spinner;