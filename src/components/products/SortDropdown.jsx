import PropTypes from "prop-types";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating-desc" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
];

function SortDropdown({
  selectedSort = "featured",
  onSortChange,
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f5e6c8]">
        Sort Products
      </h3>

      <select
        value={selectedSort}
        onChange={(event) => onSortChange(event.target.value)}
        aria-label="Sort products"
        className="w-full rounded-xl border border-[#edbf68]/15 bg-[#2d1f08] px-4 py-3 text-[#f5e6c8] outline-none transition focus:border-[#edbf68]"
      >
        {SORT_OPTIONS.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#2d1f08]"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

SortDropdown.propTypes = {
  selectedSort: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
};

export default SortDropdown;