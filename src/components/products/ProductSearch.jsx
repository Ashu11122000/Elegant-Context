import PropTypes from "prop-types";
import { FaSearch, FaTimes } from "react-icons/fa";
import Input from "../common/Input";

function ProductSearch({
  searchQuery = "",
  onSearchChange,
  onClearSearch,
  placeholder = "Search luxury products...",
}) {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="space-y-3">
      <label
        htmlFor="product-search"
        className="block text-sm font-semibold uppercase tracking-[0.15em] text-[#f5e6c8]"
      >
        Search Products
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d7c3a0]">
          <FaSearch size={16} />
        </div>

        <Input
          id="product-search"
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder={placeholder}
          className="pr-12 pl-12"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={onClearSearch}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d7c3a0] transition hover:text-[#edbf68]"
          >
            <FaTimes size={16} />
          </button>
        )}
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