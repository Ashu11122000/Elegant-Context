import PropTypes from "prop-types";

function SectionHeading({
  title,
  subtitle = "",
  align = "center",
  action = null,
  className = "",
}) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const subtitleAlignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <section
      className={`relative mb-16 flex flex-col gap-7 ${alignmentClasses[align]} ${className}`}
    >
      {/* Ambient luxury glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />

      {/* Decorative background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent opacity-70" />

      <div className="relative z-10 space-y-6">
        {/* Subtitle */}
        {subtitle && (
          <div
            className={`flex items-center gap-4 ${subtitleAlignment[align]}`}
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300/50" />

            <div className="relative inline-flex items-center overflow-hidden rounded-full border border-amber-200/10 bg-amber-300/[0.05] px-4 py-1.5 shadow-[0_8px_24px_rgba(217,119,6,0.12)] backdrop-blur-xl">
              {/* Glass shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

              <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-200 sm:text-xs">
                {subtitle}
              </span>
            </div>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300/50" />
          </div>
        )}

        {/* Main Title */}
        <div className="relative">
          {/* Text glow */}
          <div className="absolute inset-0 bg-amber-300/10 blur-3xl" />

          <h2 className="relative max-w-5xl text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-stone-100 sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h2>
        </div>

        {/* Premium underline */}
        <div
          className={`flex ${
            align === "left"
              ? "justify-start"
              : align === "right"
              ? "justify-end"
              : "justify-center"
          }`}
        >
          <div className="relative h-px w-32 overflow-hidden rounded-full bg-white/10">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-amber-300 via-[#f6d48f] to-transparent shadow-[0_0_16px_rgba(237,191,104,0.4)]" />
          </div>
        </div>
      </div>

      {/* Action */}
      {action && (
        <div className="relative z-10 mt-2">
          {action}
        </div>
      )}
    </section>
  );
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,

  align: PropTypes.oneOf([
    "left",
    "center",
    "right",
  ]),

  action: PropTypes.node,
  className: PropTypes.string,
};

export default SectionHeading;