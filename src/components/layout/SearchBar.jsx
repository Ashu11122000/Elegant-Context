import PropTypes from "prop-types";
import { useState } from "react";
import {
  FiArrowRight,
  FiSearch,
  FiX,
} from "react-icons/fi";

function SearchBar({
  onSearch,
  placeholder = "Search luxury fashion...",
  initialValue = "",
  className = "",
}) {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    onSearch?.(trimmedQuery);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <div
      className={`relative w-full max-w-[470px] ${className}`}
    >
      {/* Premium Glow */}
      <div
        className={`absolute inset-0 rounded-[34px] bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-amber-500/20 blur-2xl transition-all duration-500 ${
          isFocused
            ? "opacity-100"
            : "opacity-50"
        }`}
      />

      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Product Search"
        className={`relative flex h-[72px] items-center overflow-hidden rounded-[34px] border transition-all duration-500 ${
          isFocused
            ? "border-amber-400/50 bg-[#130C05]/98 shadow-[0_0_0_1px_rgba(251,191,36,0.15),0_20px_60px_rgba(251,191,36,0.12)]"
            : "border-white/5 bg-[#0F0904]/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        } backdrop-blur-2xl`}
      >
        {/* Luxury Left Accent */}
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-amber-300/70 to-transparent" />

        {/* Search Icon Area */}
        <div className="flex h-full items-center pl-4">
          <div
            className={`relative flex h-14 w-14 items-center justify-center rounded-[22px] border transition-all duration-500 ${
              isFocused
                ? "border-amber-300/40 bg-gradient-to-br from-amber-200 to-yellow-500 shadow-[0_10px_30px_rgba(251,191,36,0.25)]"
                : "border-amber-500/10 bg-gradient-to-br from-[#2A1B0C] to-[#1A120B]"
            }`}
          >
            <div className="absolute inset-[1px] rounded-[21px] bg-gradient-to-br from-white/10 to-transparent" />

            <FiSearch
              size={20}
              className={`relative z-10 transition-colors duration-300 ${
                isFocused
                  ? "text-[#2B1D0E]"
                  : "text-amber-300"
              }`}
            />
          </div>
        </div>

        {/* Input */}
        <div className="relative flex flex-1 items-center px-4">
          <input
            id="product-search"
            type="text"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full bg-transparent text-[15px] font-medium tracking-wide text-stone-100 outline-none placeholder:text-stone-500"
          />

          {/* Animated Bottom Line */}
          <div
            className={`absolute bottom-0 left-4 h-[1px] bg-gradient-to-r from-amber-400 via-yellow-300 to-transparent transition-all duration-500 ${
              isFocused
                ? "w-[85%] opacity-100"
                : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="group mr-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] text-stone-400 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/10 hover:text-amber-200"
          >
            <FiX
              size={16}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          </button>
        )}

        {/* Divider */}
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Search Button */}
        <button
          type="submit"
          className="group relative m-2 flex h-[56px] items-center gap-3 overflow-hidden rounded-[24px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-7 text-sm font-bold tracking-wide text-[#2B1D0E] shadow-[0_12px_35px_rgba(251,191,36,0.30)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_45px_rgba(251,191,36,0.40)] active:scale-[0.98]"
        >
          {/* Premium Shine */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

          <span className="relative z-10">
            Search
          </span>

          <FiArrowRight
            size={18}
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
  className: PropTypes.string,
};

export default SearchBar;