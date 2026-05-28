import PropTypes from "prop-types";

function Badge({
  children,
  variant = "default",
  size = "md",
  rounded = "full",
  className = "",
}) {
  const baseClasses =
    "relative inline-flex items-center justify-center overflow-hidden border font-semibold uppercase tracking-[0.16em] backdrop-blur-xl transition-all duration-500 ease-out select-none shrink-0 whitespace-nowrap shadow-[0_6px_20px_rgba(15,23,42,0.08)] before:absolute before:inset-0 before:bg-white/[0.06] before:opacity-0 before:transition-opacity before:duration-500 hover:-translate-y-[1px] hover:before:opacity-100";

  const variantClasses = {
    default:
      "border-amber-200/70 bg-gradient-to-br from-[#fff8ec] via-[#fef3d8] to-[#f5e7c1] text-stone-900 shadow-amber-100/70 hover:shadow-[0_10px_30px_rgba(217,119,6,0.18)]",

    sale:
      "border-rose-300/40 bg-gradient-to-br from-[#7f1d1d] via-[#b91c1c] to-[#881337] text-rose-50 shadow-rose-300/20 hover:shadow-[0_12px_34px_rgba(190,24,93,0.28)]",

    success:
      "border-emerald-300/40 bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#065f46] text-emerald-50 shadow-emerald-300/20 hover:shadow-[0_12px_34px_rgba(5,150,105,0.25)]",

    warning:
      "border-yellow-300/50 bg-gradient-to-br from-[#fde68a] via-[#fcd34d] to-[#fbbf24] text-stone-950 shadow-yellow-200/50 hover:shadow-[0_12px_34px_rgba(251,191,36,0.24)]",

    danger:
      "border-red-300/40 bg-gradient-to-br from-[#7f1d1d] via-[#dc2626] to-[#991b1b] text-red-50 shadow-red-300/20 hover:shadow-[0_12px_34px_rgba(220,38,38,0.28)]",

    outline:
      "border-amber-300/70 bg-white/85 text-stone-800 shadow-stone-200/40 hover:bg-gradient-to-r hover:from-amber-50 hover:to-stone-50 hover:shadow-[0_10px_26px_rgba(120,113,108,0.12)]",
  };

  const sizeClasses = {
    sm: "min-h-[28px] px-3 py-1 text-[10px]",
    md: "min-h-[34px] px-4 py-1.5 text-[11px]",
    lg: "min-h-[40px] px-5 py-2 text-sm",
  };

  const roundedClasses = {
    sm: "rounded-xl",
    md: "rounded-2xl",
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
      <span className="relative z-10 flex items-center gap-1.5">
        {children}
      </span>
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