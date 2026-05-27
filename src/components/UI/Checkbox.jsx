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
        className={`group flex items-start gap-4 transition-all duration-300 ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
      >
        <div className="relative flex items-center justify-center">
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
            className={`h-5 w-5 appearance-none rounded-xl border transition-all duration-300 ${
              hasError
                ? "border-red-400 bg-red-950/20 focus:ring-red-300/40"
                : "border-[#edbf68]/30 bg-gradient-to-br from-[#2d220b] to-[#1d1507] focus:ring-[#edbf68]/40"
            } shadow-md focus:ring-4`}
          />

          {checked && (
            <span className="pointer-events-none absolute text-[#edbf68]">
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
                id={`${checkboxId}-helper`}
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
          id={`${checkboxId}-error`}
          className="mt-2 pl-9 text-sm font-medium text-red-400"
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