import PropTypes from "prop-types";
import {
  FaSearch,
  FaTimes,
  FaMagic,
  FaCompass,
} from "react-icons/fa";
import Input from "../UI/Input";

function ProductSearch({
  searchQuery = "",
  onSearchChange,
  onClearSearch,
  placeholder = "Search premium fashion, accessories, luxury essentials...",
}) {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  const suggestedSearches = [
    "Minimal jackets",
    "Luxury watches",
    "Designer sneakers",
    "Premium accessories",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8f7855]">
            Intelligent Discovery
          </p>

          <h3 className="mt-3 text-xl font-semibold text-[#f8e8c8]">
            Search Premium Products
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
            Discover curated luxury collections tailored to your style.
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-xl text-[#1a1205] shadow-lg">
          <FaCompass />
        </div>
      </div>

      {/* Search Input */}
      <div className="space-y-4">
        <label
          htmlFor="product-search"
          className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]"
        >
          Product Search
        </label>

        <div className="group relative">
          {/* Search Icon */}
          <div className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[#d7c3a0] transition duration-300 group-focus-within:text-[#edbf68]">
            <FaSearch size={16} />
          </div>

          <Input
            id="product-search"
            name="product-search"
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-5 pl-14 pr-14 text-[#f8e8c8] backdrop-blur-xl transition-all duration-300 focus:border-amber-300/25 focus:bg-white/[0.07]"
          />

          {/* Clear Search */}
          {searchQuery && (
            <button
              type="button"
              onClick={onClearSearch}
              aria-label="Clear search"
              className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-[#d7c3a0] transition-all duration-300 hover:scale-110 hover:text-[#edbf68]"
            >
              <FaTimes size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Active Search */}
      {searchQuery ? (
        <div className="rounded-2xl border border-amber-300/15 bg-amber-400/10 p-4">
          <div className="flex items-center gap-3">
            <FaSearch className="text-[#edbf68]" />

            <div>
              <p className="text-sm font-semibold text-[#f8e8c8]">
                Searching for &ldquo;{searchQuery}&rdquo;
              </p>

              <p className="mt-1 text-xs text-[#d7c3a0]">
                Curating premium matches for your discovery journey.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Suggested Searches */
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
            Suggested Discovery
          </p>

          <div className="flex flex-wrap gap-2">
            {suggestedSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onSearchChange(item)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-[#d7c3a0] transition-all duration-300 hover:border-amber-300/20 hover:bg-amber-400/10 hover:text-[#edbf68]"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Discovery Note */}
      <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
        <FaMagic className="mt-1 text-[#edbf68]" />

        <div>
          <p className="text-sm font-medium text-[#f8e8c8]">
            Premium Smart Discovery
          </p>

          <p className="mt-2 text-xs leading-relaxed text-[#a88f68]">
            Search by product names, collections, styles, categories, or luxury
            essentials.
          </p>
        </div>
      </div>
    </div>
  );
}

ProductSearch.propTypes = {
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default ProductSearch;