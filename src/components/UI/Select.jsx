import PropTypes from "prop-types";
import { FiChevronDown } from "react-icons/fi";

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
  const selectId =
    id ||
    name ||
    label
      ?.toLowerCase()
      .replace(/\s+/g, "-");

  const hasError = Boolean(error);

  const baseClasses =
    "w-full appearance-none rounded-2xl px-5 py-3.5 pr-14 text-sm font-medium transition-all duration-300 outline-none backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    outlined: hasError
      ? "border border-red-400 bg-red-950/10 text-[#f8f3e9] focus:ring-4 focus:ring-red-300/30"
      : "border border-[#edbf68]/20 bg-white/5 text-[#f8f3e9] focus:border-[#edbf68] focus:ring-4 focus:ring-[#edbf68]/20 hover:border-[#edbf68]/40",

    filled: hasError
      ? "border border-red-400 bg-red-950/10 text-[#f8f3e9] focus:ring-4 focus:ring-red-300/30"
      : "border border-transparent bg-gradient-to-br from-[#2d220b] to-[#1d1507] text-[#f8f3e9] focus:ring-4 focus:ring-[#edbf68]/20 hover:border-[#edbf68]/20",
  };

  return (
    <div
      className={`${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {label && (
        <label
          htmlFor={selectId}
          className="mb-3 block text-sm font-semibold tracking-wide text-[#f8f3e9]"
        >
          {label}

          {required && (
            <span className="ml-1 text-[#edbf68]">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? `${selectId}-error`
              : helperText
              ? `${selectId}-helper`
              : undefined
          }
          className={`${baseClasses} ${variants[variant]}`}
        >
          <option
            value=""
            disabled
            className="bg-[#2d220b] text-[#cbbd9b]"
          >
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

        {/* Custom dropdown icon */}
        <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#edbf68]">
          <FiChevronDown size={20} />
        </div>
      </div>

      {hasError ? (
        <p
          id={`${selectId}-error`}
          className="mt-2 text-sm font-medium text-red-400"
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          id={`${selectId}-helper`}
          className="mt-2 text-sm text-[#cbbd9b]"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  variant: PropTypes.oneOf([
    "outlined",
    "filled",
  ]),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Select;