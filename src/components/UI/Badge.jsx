import PropTypes from "prop-types";

function Badge({
  children,
  variant = "default",
  size = "md",
  rounded = "full",
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm backdrop-blur-sm";

  const variantClasses = {
    default:
      "border border-amber-200/70 bg-gradient-to-r from-amber-100 via-amber-50 to-stone-100 text-amber-900 shadow-amber-100/50 hover:shadow-md",
    sale:
      "border border-rose-300/60 bg-gradient-to-r from-rose-600 via-red-500 to-rose-700 text-white shadow-rose-200/40 hover:shadow-lg",
    success:
      "border border-emerald-300/60 bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-700 text-white shadow-emerald-200/40 hover:shadow-lg",
    warning:
      "border border-yellow-300/60 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 text-stone-900 shadow-yellow-200/40 hover:shadow-lg",
    danger:
      "border border-red-300/60 bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white shadow-red-200/40 hover:shadow-lg",
    outline:
      "border border-amber-300/70 bg-white/70 text-amber-900 shadow-stone-100/40 hover:bg-amber-50",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-[10px]",
    md: "px-4 py-1.5 text-xs",
    lg: "px-5 py-2 text-sm",
  };

  const roundedClasses = {
    sm: "rounded-lg",
    md: "rounded-xl",
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
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
  ]),
  rounded: PropTypes.oneOf([
    "sm",
    "md",
    "full",
  ]),
  className: PropTypes.string,
};

export default Badge;