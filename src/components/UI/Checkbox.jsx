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
  const checkboxId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={className}>
      <label
        htmlFor={checkboxId}
        className={`
          flex cursor-pointer items-start gap-3
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
        `}
      >
        <input
          id={checkboxId}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className="
            mt-1 h-5 w-5 rounded border-white/20
            bg-[#2d220b]
            text-[#edbf68]
            focus:ring-2
            focus:ring-[#edbf68]/40
          "
        />

        {label && (
          <span className="text-sm font-medium text-[#f8f3e9]">
            {label}
          </span>
        )}
      </label>

      {error ? (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      ) : helperText ? (
        <p className="mt-2 text-sm text-[#cbbd9b]">{helperText}</p>
      ) : null}
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