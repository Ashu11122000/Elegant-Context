import PropTypes from "prop-types";

function SectionHeading({
    title,
    subtitle = "",
    align = "left",
    badge = "",
    className = "",
    titleClassName = "",
    subtitleClassName = "",
}) {
    const alignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };

    return (
        <div
            className={[
                "flex flex-col gap-4",
                alignmentClasses[align],
                className,
            ].join(" ")}
        >
        {badge && (
            <span className="inline-flex rounded-full border border-[#edbf68]/30 bg-[#edbf68]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#edbf68]">
                {badge}
            </span>
        )}

        <div className="space-y-3">
            <h2
                className={[
                    "font-semibold tracking-tight text-[#edbf68]",
                    "text-3xl sm:text-4xl lg:text-5xl",
                    titleClassName,
                ].join(" ")}
            >
                {title}
            </h2>

            {subtitle && (
                <p
                    className={[
                        "mx-auto max-w-3xl text-base leading-relaxed text-[#f5e6c8] sm:text-lg",
                        align === "left" && "mx-0",
                        align === "right" && "ml-auto mr-0",
                        subtitleClassName,
                    ]
                    .filter(Boolean)
                    .join(" ")}
                >
                    {subtitle}
                </p>
            )}
        </div>

        <div className="h-px w-24 bg-[#edbf68]/30" />
        </div>
    );
}

SectionHeading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    align: PropTypes.oneOf(["left", "center", "right"]),
    badge: PropTypes.string,
    className: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
};

export default SectionHeading;