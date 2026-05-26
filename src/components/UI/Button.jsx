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
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#edbf68]/50 disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
        primary: 
            "bg-[#edbf68] text-[#1f1606] hover:bg-[#d9aa4f] shadow-lg hover:shadow-xl",

        secondary:
            "bg-[#3a2a0d] text-[#f8f3e9] hover:bg-[#4a3510]",

        outline:
            "border border-[#edbf68] hover:bg-[#edbf68] hover:text-[#1f1606]",

        ghost:
            "bg-transparent text-[#f8f3e9] hover:bg-white/10",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
                ${baseClasses}
                ${variants[variant]}
                ${sizes[size]}
                ${fullWidth ? "w-full": ""}
                ${className}
            `}
        >
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
}

Button.propTypes = {
    children:PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    icon: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;