import PropTypes from "prop-types";

function Checkbox({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  error = "",
  helperText = "",
  className = "",
  id,
}) {
  const checkboxId =
    id ||
    name ||
    label
      ?.toLowerCase()
      .replace(/\s+/g, "-");

  const hasError = Boolean(error);

  return (
    <div className={className}>
      <label
        htmlFor={checkboxId}
        className={`group relative flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-all duration-500 ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:border-amber-200/10 hover:bg-white/[0.02]"
        }`}
      >
        {/* Checkbox */}
        <div className="relative mt-0.5 flex items-center justify-center">
          <input
            id={checkboxId}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              error
                ? `${checkboxId}-error`
                : helperText
                ? `${checkboxId}-helper`
                : undefined
            }
            className={`peer h-6 w-6 appearance-none rounded-xl border transition-all duration-500 focus:outline-none focus:ring-4 ${
              hasError
                ? "border-red-400/70 bg-red-950/20 shadow-[0_0_0_1px_rgba(248,113,113,0.12)] focus:ring-red-400/20"
                : checked
                ? "border-amber-300/70 bg-gradient-to-br from-[#f6d48f] via-[#edbf68] to-[#d29a36] shadow-[0_10px_25px_rgba(237,191,104,0.35)] focus:ring-amber-300/30"
                : "border-amber-200/20 bg-gradient-to-br from-[#2f220d] via-[#241908] to-[#171006] shadow-[0_10px_24px_rgba(0,0,0,0.25)] hover:border-amber-300/40 focus:ring-amber-200/20"
            }`}
          />

          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-[3px] rounded-[10px] bg-white/[0.08] opacity-60" />

          {/* Check Icon */}
          {checked && (
            <span className="pointer-events-none absolute text-stone-950">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2a1 1 0 111.414-1.414l2.493 2.493 6.493-6.493a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </div>

        {/* Content */}
        {label && (
          <div className="flex-1 space-y-1.5">
            <span className="inline-flex items-center text-sm font-semibold tracking-[0.03em] text-stone-100 transition-colors duration-300 group-hover:text-amber-200">
              {label}

              {required && (
                <span className="ml-1.5 text-red-400">
                  *
                </span>
              )}
            </span>

            {!hasError && helperText && (
              <p
                id={`${checkboxId}-helper`}
                className="max-w-xl text-sm leading-relaxed text-stone-400"
              >
                {helperText}
              </p>
            )}
          </div>
        )}

        {/* Hover glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-300/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </label>

      {/* Error */}
      {hasError && (
        <p
          id={`${checkboxId}-error`}
          className="mt-2 pl-11 text-sm font-medium tracking-wide text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Checkbox;