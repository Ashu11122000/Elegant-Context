import PropTypes from "prop-types";

function Card({
    children,
    hover = false,
    padding = "md",
    bordered = false,
    className = "",
}) {
    const baseClasses =
        "rounded-2xl bg-[#2a1f0a] text-[#f8f3e9] shadow-lg transition-all duration-300";

    const paddingVariants = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        none: "",
    };

    const hoverClasses = hover ? "hover:-translate-y-1 hover:shadow-2xl" : "";

    const borderClasses = bordered
        ? "border border-[#edbf68]/20"
        : "border border-transparent";

        return (
            <div
                className={`
                    ${baseClasses}
                    ${paddingVariants[padding]}
                    ${hoverClasses}
                    ${borderClasses}
                    ${className}
                `}
            >
                {children}
            </div>
        );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    hover: PropTypes.bool,
    padding: PropTypes.oneOf(["sm", "md", "lg", "none"]),
    bordered: PropTypes.bool,
    className: PropTypes.string,
};

export default Card;