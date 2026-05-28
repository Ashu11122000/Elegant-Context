import PropTypes from "prop-types";

function Card({
  children,
  hover = false,
  padding = "md",
  bordered = false,
  className = "",
}) {
  const baseClasses =
    "group relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,#3f2d12_0%,#241808_42%,#130d05_100%)] text-stone-100 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 ease-out isolate";

  const paddingVariants = {
    sm: "p-5",
    md: "p-7",
    lg: "p-9",
    none: "",
  };

  const hoverClasses = hover
    ? "hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(217,119,6,0.22)]"
    : "";

  const borderClasses = bordered
    ? "border border-amber-200/15"
    : "border border-white/[0.04]";

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
      {/* Premium gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/10 opacity-90" />

      {/* Luxury top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />

      {/* Ambient glowing effects */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-amber-300/10 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:bg-amber-300/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-orange-200/5 blur-3xl" />

      {/* Glass reflection */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute left-[-20%] top-0 h-full w-[40%] rotate-12 bg-white blur-3xl" />
      </div>

      {/* Inner border for realistic depth */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.04]" />

      {/* Content */}
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