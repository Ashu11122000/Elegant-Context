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
    "w-full rounded-[1.35rem] px-5 py-4 text-[15px] font-medium tracking-[0.01em] outline-none transition-all duration-500 backdrop-blur-2xl disabled:cursor-not-allowed disabled:opacity-50 shadow-[0_10px_30px_rgba(0,0,0,0.16)]";

  const variants = {
    outlined: hasError
      ? "border border-red-400/60 bg-red-950/10 text-stone-100 placeholder:text-red-200/50 focus:border-red-400 focus:ring-4 focus:ring-red-400/20"
      : "border border-amber-200/15 bg-white/[0.04] text-stone-100 placeholder:text-stone-400 focus:border-amber-300/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-amber-200/10 hover:border-amber-300/30",

    filled: hasError
      ? "border border-red-400/60 bg-red-950/10 text-stone-100 placeholder:text-red-200/50 focus:border-red-400 focus:ring-4 focus:ring-red-400/20"
      : "border border-transparent bg-[linear-gradient(135deg,#2f220d_0%,#211606_45%,#171005_100%)] text-stone-100 placeholder:text-stone-400 focus:border-amber-300/30 focus:ring-4 focus:ring-amber-200/10 hover:border-amber-300/20",
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
          htmlFor={inputId}
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

      {/* Input Wrapper */}
      <div className="group relative">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-[1.45rem] bg-gradient-to-r from-amber-300/0 via-amber-200/10 to-amber-300/0 opacity-0 blur-xl transition-opacity duration-500 group-focus-within:opacity-100" />

        {/* Glass Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

        {/* Input */}
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

        {/* Top Shine */}
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
      </div>

      {/* Error Text */}
      {hasError ? (
        <p
          id={`${inputId}-error`}
          className="mt-3 text-sm font-medium tracking-wide text-red-400"
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          id={`${inputId}-helper`}
          className="mt-3 text-sm leading-relaxed text-stone-400"
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