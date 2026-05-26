import PropTypes from "prop-types";

function Badge({
  children,
  variant = "default",
  size = "md",
  rounded = "full",
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300";

  const variantClasses = {
    default: "bg-[#edbf68] text-[#1f1606]",
    sale: "bg-red-500 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-[#1f1606]",
    danger: "bg-red-700 text-white",
    outline: "border border-[#edbf68]/30 text-[#edbf68] bg-transparent",
  };

  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const roundedClasses = {
    sm: "rounded-md",
    md: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <span
      className={[
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "sale",
    "success",
    "warning",
    "danger",
    "outline",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  rounded: PropTypes.oneOf(["sm", "md", "full"]),
  className: PropTypes.string,
};

export default Badge;