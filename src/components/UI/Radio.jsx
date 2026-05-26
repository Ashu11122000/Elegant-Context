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
    `${name || "radio"}-${value || label?.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={className}>
      <label
        htmlFor={radioId}
        className={`
          flex cursor-pointer items-start gap-3
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
        `}
      >
        <input
          id={radioId}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className="
            mt-1 h-5 w-5 border-white/20
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

Radio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
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