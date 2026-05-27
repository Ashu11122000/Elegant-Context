import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";

function SearchInput({
  placeholder = "Search premium products...",
  value = "",
  onChange,
  onSearch,
  disabled = false,
  variant = "outlined",
  className = "",
}) {
  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      typeof onSearch === "function" &&
      !disabled
    ) {
      onSearch(event);
    }
  };

  const handleSearchClick = () => {
    if (
      typeof onSearch === "function" &&
      !disabled
    ) {
      onSearch();
    }
  };

  const variantClasses = {
    outlined:
      "border border-[#edbf68]/20 bg-white/5 text-[#f8f3e9] placeholder:text-[#cbbd9b] focus:border-[#edbf68] focus:ring-[#edbf68]/20",
    filled:
      "border border-transparent bg-gradient-to-br from-[#2d220b] to-[#1d1507] text-[#f8f3e9] placeholder:text-[#cbbd9b] focus:ring-[#edbf68]/20",
  };

  return (
    <div
      className={`relative w-full ${className}`}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className={`w-full rounded-2xl px-5 py-4 pr-16 text-sm font-medium transition-all duration-300 outline-none backdrop-blur-sm focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50 ${
          variantClasses[variant]
        }`}
      />

      <button
        type="button"
        onClick={handleSearchClick}
        disabled={disabled}
        aria-label="Search"
        className="group absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#edbf68]/20 bg-gradient-to-r from-[#edbf68] to-[#d9aa4f] text-[#1f1606] shadow-lg shadow-[#edbf68]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiSearch className="transition-transform duration-300 group-hover:scale-110" />
      </button>
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf([
    "outlined",
    "filled",
  ]),
  className: PropTypes.string,
};

export default SearchInput;