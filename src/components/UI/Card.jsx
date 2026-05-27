import PropTypes from "prop-types";

function Card({
  children,
  hover = false,
  padding = "md",
  bordered = false,
  className = "",
}) {
  const baseClasses =
    "relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2f220d] via-[#241a09] to-[#181105] text-[#f8f3e9] shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300";

  const paddingVariants = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    none: "",
  };

  const hoverClasses = hover
    ? "hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20"
    : "";

  const borderClasses = bordered
    ? "border border-[#edbf68]/20"
    : "border border-transparent";

  return (
    <div
      className={[
        baseClasses,
        paddingVariants[padding],
        hoverClasses,
        borderClasses,
        className,
      ].join(" ")}
    >
      {/* Premium ambient glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#edbf68]/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "none",
  ]),
  bordered: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;