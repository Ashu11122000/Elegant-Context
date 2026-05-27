import PropTypes from "prop-types";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

function SearchBar({
  onSearch,
  placeholder = "Search premium fashion...",
  initialValue = "",
  className = "",
}) {
  const [query, setQuery] = useState(initialValue);

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
    <form
      onSubmit={handleSubmit}
      className={`relative w-full max-w-md ${className}`}
      role="search"
      aria-label="Product Search"
    >
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>

      <input
        id="product-search"
        type="text"
        value={query}
        onChange={(event) =>
          setQuery(event.target.value)
        }
        placeholder={placeholder}
        className="w-full rounded-full border border-amber-200 bg-white px-5 py-3 pl-12 pr-24 text-sm text-stone-900 shadow-sm outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
      />

      <FiSearch
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-800"
        aria-hidden="true"
      />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-14 top-1/2 -translate-y-1/2 rounded-full p-1 text-stone-500 transition-colors hover:text-stone-900"
          aria-label="Clear search"
        >
          <FiX size={16} />
        </button>
      )}

      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-amber-900 px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:bg-amber-950"
      >
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
  className: PropTypes.string,
};

export default SearchBar;