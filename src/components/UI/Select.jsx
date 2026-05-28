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
    "w-full appearance-none rounded-[1.35rem] px-5 py-4 pr-14 text-[15px] font-medium tracking-[0.01em] outline-none transition-all duration-500 backdrop-blur-2xl disabled:cursor-not-allowed disabled:opacity-50 shadow-[0_10px_30px_rgba(0,0,0,0.16)]";

  const variants = {
    outlined: hasError
      ? "border border-red-400/60 bg-red-950/10 text-stone-100 focus:border-red-400 focus:ring-4 focus:ring-red-400/20"
      : "border border-amber-200/15 bg-white/[0.04] text-stone-100 focus:border-amber-300/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-amber-200/10 hover:border-amber-300/30",

    filled: hasError
      ? "border border-red-400/60 bg-red-950/10 text-stone-100 focus:border-red-400 focus:ring-4 focus:ring-red-400/20"
      : "border border-transparent bg-[linear-gradient(135deg,#2f220d_0%,#211606_45%,#171005_100%)] text-stone-100 focus:border-amber-300/30 focus:ring-4 focus:ring-amber-200/10 hover:border-amber-300/20",
  };

  return (
    <div
      className={`relative ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className="mb-3 inline-flex items-center text-sm font-semibold tracking-[0.04em] text-stone-200"
        >
          {label}

          {required && (
            <span className="ml-1.5 text-amber-300">
              *
            </span>
          )}
        </label>
      )}

      {/* Select Wrapper */}
      <div className="group relative">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-[1.45rem] bg-gradient-to-r from-amber-300/0 via-amber-200/10 to-amber-300/0 opacity-0 blur-xl transition-opacity duration-500 group-focus-within:opacity-100" />

        {/* Glass overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

        {/* Select */}
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
            className="bg-[#1b1307] text-stone-400"
          >
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#1b1307] text-stone-100"
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Premium Icon */}
        <div className="pointer-events-none absolute right-5 top-1/2 flex -translate-y-1/2 items-center gap-3">
          <div className="h-5 w-px bg-white/10" />

          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-amber-200/10 bg-amber-300/[0.05] text-amber-200 shadow-[0_6px_20px_rgba(217,119,6,0.12)] backdrop-blur-xl">
            <FiChevronDown
              size={16}
              className="transition-transform duration-300 group-focus-within:rotate-180"
            />
          </div>
        </div>

        {/* Top metallic shine */}
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
      </div>

      {/* Error */}
      {hasError ? (
        <p
          id={`${selectId}-error`}
          className="mt-3 text-sm font-medium tracking-wide text-red-400"
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          id={`${selectId}-helper`}
          className="mt-3 text-sm leading-relaxed text-stone-400"
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