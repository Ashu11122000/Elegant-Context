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
        className={`group flex items-start gap-4 transition-all duration-300 ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
      >
        <div className="relative flex items-center justify-center">
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
            className={`h-5 w-5 appearance-none rounded-full border transition-all duration-300 shadow-md focus:ring-4 ${
              hasError
                ? "border-red-400 bg-red-950/20 focus:ring-red-300/40"
                : "border-[#edbf68]/30 bg-gradient-to-br from-[#2d220b] to-[#1d1507] focus:ring-[#edbf68]/40"
            }`}
          />

          {checked && (
            <span className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-[#edbf68] shadow-[0_0_12px_rgba(237,191,104,0.55)]" />
          )}
        </div>

        {label && (
          <div className="space-y-1">
            <span className="text-sm font-semibold tracking-wide text-[#f8f3e9] transition-colors duration-300 group-hover:text-[#edbf68]">
              {label}

              {required && (
                <span className="ml-1 text-red-400">
                  *
                </span>
              )}
            </span>

            {!hasError && helperText && (
              <p
                id={`${radioId}-helper`}
                className="text-sm leading-relaxed text-[#cbbd9b]"
              >
                {helperText}
              </p>
            )}
          </div>
        )}
      </label>

      {hasError && (
        <p
          id={`${radioId}-error`}
          className="mt-2 pl-9 text-sm font-medium text-red-400"
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