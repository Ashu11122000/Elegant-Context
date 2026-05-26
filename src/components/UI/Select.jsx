import PropTypes from "prop-types";

function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error = "",
  helperText = "",
  disabled = false,
  required = false,
  variant = "outlined",
  fullWidth = true,
  className = "",
  id,
}) {
  const selectId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

  const baseClasses =
    "w-full rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";

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
    `,
    filled: `
      ${
        error
          ? "border border-red-500 focus:ring-red-500/40"
          : "border border-transparent focus:ring-[#edbf68]/40"
      }
      bg-[#2d220b]
      text-[#f8f3e9]
    `,
  };

  return (
    <div className={`${fullWidth ? "w-full" : ""} ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="mb-2 block text-sm font-medium text-[#f8f3e9]"
        >
          {label}
          {required && <span className="ml-1 text-[#edbf68]">*</span>}
        </label>
      )}

      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`
          ${baseClasses}
          ${variants[variant]}
        `}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#2d220b] text-[#f8f3e9]"
          >
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      ) : helperText ? (
        <p className="mt-2 text-sm text-[#cbbd9b]">{helperText}</p>
      ) : null}
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
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

export default Select;