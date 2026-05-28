import PropTypes from "prop-types";
import {
  FiSearch,
  FiSparkles,
} from "react-icons/fi";

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
      "border border-amber-200/15 bg-white/[0.04] text-stone-100 placeholder:text-stone-400 focus:border-amber-300/50 focus:bg-white/[0.06] focus:ring-amber-200/10 hover:border-amber-300/30",

    filled:
      "border border-transparent bg-[linear-gradient(135deg,#2f220d_0%,#211606_45%,#171005_100%)] text-stone-100 placeholder:text-stone-400 focus:border-amber-300/30 focus:ring-amber-200/10 hover:border-amber-300/20",
  };

  return (
    <div
      className={`group relative w-full ${className}`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-[1.7rem] bg-gradient-to-r from-amber-300/0 via-amber-200/10 to-amber-300/0 opacity-0 blur-xl transition-opacity duration-500 group-focus-within:opacity-100" />

      {/* Glass overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

      {/* Premium Search Icon */}
      <div className="pointer-events-none absolute left-5 top-1/2 z-10 flex -translate-y-1/2 items-center gap-2">
        <FiSearch className="text-lg text-amber-200/80" />

        <div className="h-5 w-px bg-white/10" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className={`w-full rounded-[1.6rem] px-14 py-4 pr-[5.5rem] text-[15px] font-medium tracking-[0.01em] outline-none transition-all duration-500 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.16)] focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]}`}
      />

      {/* Search Button */}
      <button
        type="button"
        onClick={handleSearchClick}
        disabled={disabled}
        aria-label="Search"
        className="group/button absolute right-2.5 top-1/2 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-2xl border border-amber-200/20 bg-gradient-to-br from-[#ffe7b0] via-[#edbf68] to-[#c8922f] text-stone-950 shadow-[0_14px_34px_rgba(237,191,104,0.28)] transition-all duration-500 hover:scale-105 hover:shadow-[0_18px_44px_rgba(237,191,104,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {/* Shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.28] via-transparent to-transparent opacity-70" />

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/button:opacity-100">
          <div className="absolute inset-0 bg-white/[0.08]" />
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <FiSparkles className="absolute text-[0.7rem] opacity-60 transition-all duration-500 group-hover/button:-translate-y-3 group-hover/button:translate-x-3 group-hover/button:opacity-100" />

          <FiSearch className="text-lg transition-transform duration-500 group-hover/button:scale-110" />
        </div>
      </button>

      {/* Top metallic shine */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
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