import PropTypes from "prop-types";

function Input({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder = "",
    error = "",
    helperText = "",
    disabled = false,
    required = false,
    variant = "outlined",
    fullWidth = true,
    className = "",
    id,
}) {
    const inputId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

    const baseClasses =
        "rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {  
        outlined: `
            border
                ${
                    error
                        ? "border-red-500 focus:ring-red-500/40"
                        : "border-white/15 focus:border-[#edbf68] focus:ring-[#edbf68]/40"
                    }
                bg-transparent
                text-[#f8f3e9]
                placeholder:text-[#cbbd9b]
            `,

            filled: `
                ${
                    error
                        ? "border border-red-500 focus:ring-red-500/40"
                        : "border border-transparent focus:ring-[#edbf68]/40"
                }
            bg-[#2d220b]
            text-[#f8f3e9]
            placeholder:text-[#cbbd9b]
        `,
    };

    return (
        <div className={`${fullWidth ? "w-full" : ""} ${className}`}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="mb-2 block text-sm font-medium text-[#f8f3e9]"
                >
                    {label}
                    {required && <span className="ml-1 text-[#edbf68]">*</span>}
                </label>
            )}

            <input
                id={inputId}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                className={`
                    w-full
                    ${baseClasses}
                    ${variants[variant]}
                `}
            />

            {error ? (
                <p className="mt-2 text-sm text-red-400">{error}</p>
            ) : helperText ? (
                <p className="mt-2 text-sm text-[#cbbd9b]">{helperText}</p>
            ) : null}
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    variant: PropTypes.oneOf(["outlined", "filled"]),
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
};

export default Input;