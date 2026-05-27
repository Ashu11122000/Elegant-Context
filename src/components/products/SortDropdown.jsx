import PropTypes from "prop-types";
import {
  FaSortAmountDown,
  FaGem,
  FaArrowUp,
  FaArrowDown,
  FaStar,
  FaClock,
  FaFont,
} from "react-icons/fa";

const SORT_OPTIONS = [
  {
    label: "Featured",
    value: "featured",
    description: "Curated premium recommendations",
    icon: <FaGem />,
  },
  {
    label: "Newest Arrivals",
    value: "newest",
    description: "Fresh luxury additions",
    icon: <FaClock />,
  },
  {
    label: "Price: Low to High",
    value: "price-asc",
    description: "Budget-conscious premium picks",
    icon: <FaArrowUp />,
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
    description: "Luxury-first premium discovery",
    icon: <FaArrowDown />,
  },
  {
    label: "Top Rated",
    value: "rating-desc",
    description: "Highest customer-rated products",
    icon: <FaStar />,
  },
  {
    label: "Name: A to Z",
    value: "name-asc",
    description: "Alphabetical collection browsing",
    icon: <FaFont />,
  },
  {
    label: "Name: Z to A",
    value: "name-desc",
    description: "Reverse alphabetical browsing",
    icon: <FaFont />,
  },
];

function SortDropdown({
  selectedSort = "featured",
  onSortChange,
}) {
  const activeSort =
    SORT_OPTIONS.find(
      (option) => option.value === selectedSort
    ) || SORT_OPTIONS[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-xl text-[#1a1205] shadow-lg">
          <FaSortAmountDown />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8f7855]">
            Discovery Control
          </p>

          <h3 className="mt-3 text-xl font-semibold text-[#f8e8c8]">
            Sort Products
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
            Refine how premium collections are presented.
          </p>
        </div>
      </div>

      {/* Active Sort Summary */}
      <div className="rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/10 text-[#edbf68]">
            {activeSort.icon}
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
              Active Sort Mode
            </p>

            <p className="mt-2 text-lg font-semibold text-[#f8e8c8]">
              {activeSort.label}
            </p>

            <p className="mt-1 text-xs text-[#a88f68]">
              {activeSort.description}
            </p>
          </div>
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="space-y-3">
        <label
          htmlFor="product-sort"
          className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]"
        >
          Sorting Preference
        </label>

        <select
          id="product-sort"
          value={selectedSort}
          onChange={(event) => onSortChange(event.target.value)}
          aria-label="Sort products"
          className="w-full rounded-2xl border border-white/10 bg-gradient-to-r from-[#2a1d0b] to-[#1d1407] px-5 py-4 text-[#f8e8c8] outline-none transition-all duration-300 focus:border-amber-300/25 focus:shadow-[0_0_0_4px_rgba(237,191,104,0.08)]"
        >
          {SORT_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#1d1407]"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Discovery Note */}
      <div className="rounded-2xl border border-white/8 bg-black/10 p-4">
        <p className="text-sm font-medium text-[#f8e8c8]">
          Premium Discovery Insight
        </p>

        <p className="mt-2 text-xs leading-relaxed text-[#a88f68]">
          Featured sorting prioritizes curated luxury selections for an elevated
          shopping experience.
        </p>
      </div>
    </div>
  );
}

SortDropdown.propTypes = {
  selectedSort: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
};

export default SortDropdown;