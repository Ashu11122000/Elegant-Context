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
  const inputId =
    id ||
    name ||
    label
      ?.toLowerCase()
      .replace(/\s+/g, "-");

  const hasError = Boolean(error);

  const baseClasses =
    "w-full rounded-2xl px-5 py-3.5 text-sm font-medium transition-all duration-300 outline-none backdrop-blur-sm disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    outlined: hasError
      ? "border border-red-400 bg-red-950/10 text-[#f8f3e9] placeholder:text-red-200/60 focus:ring-4 focus:ring-red-300/30"
      : "border border-[#edbf68]/20 bg-white/5 text-[#f8f3e9] placeholder:text-[#cbbd9b] focus:border-[#edbf68] focus:ring-4 focus:ring-[#edbf68]/20 hover:border-[#edbf68]/40",

    filled: hasError
      ? "border border-red-400 bg-red-950/10 text-[#f8f3e9] placeholder:text-red-200/60 focus:ring-4 focus:ring-red-300/30"
      : "border border-transparent bg-gradient-to-br from-[#2d220b] to-[#1d1507] text-[#f8f3e9] placeholder:text-[#cbbd9b] focus:ring-4 focus:ring-[#edbf68]/20 hover:border-[#edbf68]/20",
  };

  return (
    <div
      className={`${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {label && (
        <label
          htmlFor={inputId}
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

      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={hasError}
        aria-describedby={
          hasError
            ? `${inputId}-error`
            : helperText
            ? `${inputId}-helper`
            : undefined
        }
        className={`${baseClasses} ${variants[variant]}`}
      />

      {hasError ? (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm font-medium text-red-400"
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          id={`${inputId}-helper`}
          className="mt-2 text-sm text-[#cbbd9b]"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
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

export default Input;