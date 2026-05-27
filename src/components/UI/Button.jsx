import PropTypes from "prop-types";

function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  type = "button",
  icon = null,
  onClick,
  className = "",
}) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-3 font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0";

  const variants = {
    primary:
      "rounded-2xl border border-amber-300/60 bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 text-white shadow-xl shadow-amber-900/20 hover:-translate-y-1 hover:shadow-2xl focus:ring-amber-200",

    secondary:
      "rounded-2xl border border-stone-700/60 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-700 text-stone-100 shadow-xl shadow-stone-900/20 hover:-translate-y-1 hover:shadow-2xl focus:ring-stone-300",

    outline:
      "rounded-2xl border border-amber-300/70 bg-white/90 text-amber-900 shadow-md backdrop-blur-sm hover:-translate-y-1 hover:bg-amber-50 hover:shadow-xl focus:ring-amber-200",

    ghost:
      "rounded-2xl bg-white/10 text-stone-100 backdrop-blur-sm hover:-translate-y-1 hover:bg-white/20 hover:shadow-lg focus:ring-stone-300",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-9 py-4.5 text-sm",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {icon && (
        <span className="flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}

      <span>{children}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "ghost",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
  ]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    "button",
    "submit",
    "reset",
  ]),
  icon: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;