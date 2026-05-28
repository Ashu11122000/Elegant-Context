import PropTypes from "prop-types";

function Radio({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  error = "",
  helperText = "",
  className = "",
  id,
}) {
  const radioId =
    id ||
    `${name || "radio"}-${
      value ||
      label
        ?.toLowerCase()
        .replace(/\s+/g, "-")
    }`;

  const hasError = Boolean(error);

  return (
    <div className={className}>
      <label
        htmlFor={radioId}
        className={`group relative flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-all duration-500 ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:border-amber-200/10 hover:bg-white/[0.02]"
        }`}
      >
        {/* Radio */}
        <div className="relative mt-0.5 flex items-center justify-center">
          <input
            id={radioId}
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${radioId}-error`
                : helperText
                ? `${radioId}-helper`
                : undefined
            }
            className={`peer h-6 w-6 appearance-none rounded-full border transition-all duration-500 focus:outline-none focus:ring-4 ${
              hasError
                ? "border-red-400/70 bg-red-950/20 shadow-[0_0_0_1px_rgba(248,113,113,0.12)] focus:ring-red-400/20"
                : checked
                ? "border-amber-300/70 bg-gradient-to-br from-[#f6d48f] via-[#edbf68] to-[#d29a36] shadow-[0_10px_25px_rgba(237,191,104,0.35)] focus:ring-amber-300/30"
                : "border-amber-200/20 bg-gradient-to-br from-[#2f220d] via-[#241908] to-[#171006] shadow-[0_10px_24px_rgba(0,0,0,0.25)] hover:border-amber-300/40 focus:ring-amber-200/20"
            }`}
          />

          {/* Inner glass reflection */}
          <div className="pointer-events-none absolute inset-[3px] rounded-full bg-white/[0.08] opacity-60" />

          {/* Selected dot */}
          {checked && (
            <span className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-stone-950 shadow-[0_0_14px_rgba(0,0,0,0.45)]" />
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
                id={`${radioId}-helper`}
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
          id={`${radioId}-error`}
          className="mt-2 pl-11 text-sm font-medium tracking-wide text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

Radio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Radio;