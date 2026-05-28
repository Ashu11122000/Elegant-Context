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
    "relative inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap border font-semibold uppercase tracking-[0.16em] transition-all duration-500 ease-out focus:outline-none focus:ring-4 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none before:absolute before:inset-0 before:bg-white/[0.08] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100";

  const variants = {
    primary:
      "rounded-[1.4rem] border-amber-400/40 bg-gradient-to-br from-[#1c1917] via-[#78350f] to-[#120d07] text-amber-50 shadow-[0_14px_40px_rgba(120,53,15,0.35)] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(120,53,15,0.45)] focus:ring-amber-200/70",

    secondary:
      "rounded-[1.4rem] border-stone-700/50 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] text-stone-100 shadow-[0_14px_40px_rgba(15,23,42,0.28)] hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.38)] focus:ring-stone-300/60",

    outline:
      "rounded-[1.4rem] border-amber-300/60 bg-white/90 text-stone-900 backdrop-blur-xl shadow-[0_10px_30px_rgba(120,113,108,0.12)] hover:-translate-y-1 hover:border-amber-400/70 hover:bg-gradient-to-r hover:from-amber-50 hover:to-stone-50 hover:shadow-[0_16px_40px_rgba(217,119,6,0.16)] focus:ring-amber-200/70",

    ghost:
      "rounded-[1.4rem] border border-white/10 bg-white/[0.08] text-stone-200 backdrop-blur-2xl shadow-[0_8px_24px_rgba(255,255,255,0.05)] hover:-translate-y-1 hover:bg-white/[0.14] hover:text-white hover:shadow-[0_14px_34px_rgba(255,255,255,0.08)] focus:ring-stone-300/50",
  };

  const sizes = {
    sm: "min-h-[44px] px-5 py-2.5 text-[11px]",
    md: "min-h-[52px] px-7 py-3.5 text-xs",
    lg: "min-h-[60px] px-9 py-4 text-sm",
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
      <span className="relative z-10 flex items-center gap-3">
        {icon && (
          <span className="flex items-center justify-center text-[1.05em] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:scale-110">
            {icon}
          </span>
        )}

        <span className="relative">
          {children}
        </span>
      </span>

      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
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