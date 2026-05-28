import PropTypes from "prop-types";
import { useState } from "react";
import {
  FiArrowRight,
  FiSearch,
  FiStar,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";

function SearchBar({
  onSearch,
  placeholder = "Search luxury fashion, brands, collections...",
  initialValue = "",
  className = "",
}) {
  const [query, setQuery] = useState(initialValue);

  const trendingSearches = [
    "Luxury Jackets",
    "Premium Watches",
    "Designer Shoes",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    onSearch?.(trimmedQuery);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <div className={`relative w-full max-w-3xl ${className}`}>
      {/* Premium Glow Background */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-amber-500/10 via-yellow-400/5 to-amber-500/10 blur-2xl" />

      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-[30px] border border-amber-500/10 bg-white/[0.04] p-2 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
        role="search"
        aria-label="Product Search"
      >
        {/* Luxury Top Shine */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

        {/* Ambient Hover Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_40%)]" />

        <label htmlFor="product-search" className="sr-only">
          Search products
        </label>

        <div className="relative flex flex-col gap-3 lg:flex-row lg:items-center">
          {/* Search Input Area */}
          <div className="relative flex-1">
            {/* Search Icon */}
            <div className="absolute left-5 top-1/2 z-10 -translate-y-1/2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20">
                <FiSearch size={18} />
              </div>
            </div>

            {/* Input */}
            <input
              id="product-search"
              type="text"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder={placeholder}
              className="h-16 w-full rounded-[24px] border border-white/5 bg-black/20 py-4 pl-20 pr-40 text-sm font-medium text-stone-100 outline-none transition-all duration-300 placeholder:text-stone-500 focus:border-amber-400/30 focus:bg-black/30 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.08)]"
            />

            {/* Clear Button */}
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-32 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.04] text-stone-400 transition-all duration-300 hover:border-amber-500/20 hover:bg-amber-500/10 hover:text-[#2B1D0E]"
                aria-label="Clear search"
              >
                <FiX size={16} />
              </button>
            )}

            {/* Search Button */}
            <button
              type="submit"
              className="group absolute right-2 top-1/2 flex h-12 items-center gap-2 overflow-hidden rounded-2xl border border-amber-300/20 bg-gradient-to-r from-amber-300 to-yellow-500 px-5 -translate-y-1/2 text-sm font-bold tracking-wide text-[#2B1D0E] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(251,191,36,0.35)]"
            >
              <span className="relative z-10">
                Search
              </span>

              <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

              {/* Button Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </div>

          {/* Trending Searches */}
          <div className="flex flex-wrap items-center gap-2 px-1 lg:justify-end">
            <div className="mr-1 flex items-center gap-2">
              <FiTrendingUp className="text-amber-200" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Trending
              </span>
            </div>

            {trendingSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setQuery(item);
                  onSearch?.(item);
                }}
                className="group relative overflow-hidden rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-xs font-medium text-stone-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/20 hover:bg-amber-500/10 hover:text-[#2B1D0E]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-yellow-200/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10 flex items-center gap-2">
                  <FiStar size={12} />

                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>
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