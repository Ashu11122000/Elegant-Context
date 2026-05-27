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
    <div
      className={`mb-10 flex flex-col gap-4 ${alignmentClasses[align]} ${className}`}
    >
      <div className="space-y-3">
        {subtitle && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
            {subtitle}
          </span>
        )}

        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>

      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  action: PropTypes.node,
  className: PropTypes.string,
};

export default SectionHeading;