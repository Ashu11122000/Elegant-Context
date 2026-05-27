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

  return (
    <section
      className={`relative mb-14 flex flex-col gap-6 ${alignmentClasses[align]} ${className}`}
    >
      {/* Premium decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-[#edbf68]/8 blur-3xl" />

      <div className="relative z-10 space-y-5">
        {subtitle && (
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#edbf68]/40" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#edbf68] sm:text-sm">
              {subtitle}
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#edbf68]/40" />
          </div>
        )}

        <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#f8f3e9] sm:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h2>
      </div>

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