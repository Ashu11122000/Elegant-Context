import PropTypes from "prop-types";
import {
  FaSortAmountDown,
  FaGem,
  FaArrowUp,
  FaArrowDown,
  FaStar,
  FaClock,
  FaFont,
  FaCrown,
  FaChevronDown,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

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
    <section
      className="
        relative overflow-hidden rounded-[2rem]
        border border-[#d6b57b]/12
        bg-gradient-to-br from-[#19130d] via-[#120f0b] to-[#0b0805]
        p-6 shadow-[0_30px_100px_rgba(0,0,0,0.55)]
        backdrop-blur-2xl
      "
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-yellow-200/5 blur-3xl" />

      {/* Premium Border */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/[0.03]" />

      <div className="relative z-10 space-y-7">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          {/* Premium Icon */}
          <div
            className="
              relative flex h-16 w-16 shrink-0
              items-center justify-center
              rounded-[1.6rem]
              border border-[#f0c879]/20
              bg-gradient-to-br from-[#f0c879] via-[#d9a84d] to-[#9c6921]
              text-2xl text-[#241405]
              shadow-[0_18px_40px_rgba(240,200,121,0.22)]
            "
          >
            <div className="absolute inset-[1px] rounded-[1.5rem] border border-white/10" />

            <FaSortAmountDown className="relative z-10" />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b57b]/15 bg-[#241b13]/80 px-4 py-1.5 backdrop-blur-xl">
              <FaCrown className="text-[10px] text-[#f0c879]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a56c]">
                Discovery Control
              </span>
            </div>

            <h3 className="mt-5 text-[1.9rem] font-black tracking-tight text-[#f5efe4]">
              Sort Products
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#ae9879] sm:text-[15px]">
              Refine how premium collections are displayed with intelligent
              luxury-focused sorting preferences.
            </p>
          </div>
        </div>

        {/* Active Sort Summary */}
        <div
          className="
            relative overflow-hidden rounded-[1.8rem]
            border border-[#d6b57b]/12
            bg-gradient-to-r from-[#241b13] to-[#17110c]
            p-5 shadow-[0_12px_30px_rgba(0,0,0,0.3)]
          "
        >
          {/* Glow */}
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#f0c879]/5 blur-3xl" />

          <div className="relative flex items-center gap-5">
            {/* Icon */}
            <div
              className="
                flex h-16 w-16 items-center justify-center
                rounded-[1.4rem]
                bg-gradient-to-br from-[#f0c879] to-[#c88a29]
                text-2xl text-[#241405]
                shadow-[0_10px_30px_rgba(240,200,121,0.22)]
              "
            >
              {activeSort.icon}
            </div>

            {/* Content */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b7935a]">
                Active Sort Mode
              </p>

              <h4 className="mt-2 text-xl font-black tracking-tight text-[#f5efe4]">
                {activeSort.label}
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-[#ab9575]">
                {activeSort.description}
              </p>
            </div>
          </div>
        </div>

        {/* Select Dropdown */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HiSparkles className="text-[11px] text-[#f0c879]" />

            <label
              htmlFor="product-sort"
              className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b7935a]"
            >
              Sorting Preference
            </label>
          </div>

          {/* Custom Select Wrapper */}
          <div className="group relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-r from-[#d6a756]/0 via-[#d6a756]/10 to-[#d6a756]/0 opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />

            {/* Chevron */}
            <div className="pointer-events-none absolute right-5 top-1/2 z-10 -translate-y-1/2 text-[#c5a980] transition-all duration-300 group-focus-within:text-[#f0c879]">
              <FaChevronDown />
            </div>

            <select
              id="product-sort"
              value={selectedSort}
              onChange={(event) =>
                onSortChange(event.target.value)
              }
              aria-label="Sort products"
              className="
                relative z-10 w-full appearance-none
                rounded-[1.8rem]
                border border-[#d6b57b]/10
                bg-gradient-to-r from-[#241b13] to-[#17110c]
                px-5 py-5 pr-14
                text-[15px]
                font-semibold
                tracking-wide
                text-[#f5efe4]
                outline-none
                shadow-[0_12px_30px_rgba(0,0,0,0.28)]
                backdrop-blur-2xl
                transition-all duration-300
                focus:border-[#f0c879]/30
                focus:shadow-[0_0_0_4px_rgba(240,200,121,0.08)]
              "
            >
              {SORT_OPTIONS.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-[#1a140e] text-[#f5efe4]"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Bottom Insight */}
        <div
          className="
            relative overflow-hidden rounded-[1.7rem]
            border border-[#d6b57b]/10
            bg-[#15110c]/90
            p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
          "
        >
          {/* Accent Line */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c879] to-[#9c6921]" />

          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="
                flex h-12 w-12 shrink-0 items-center justify-center
                rounded-2xl
                border border-[#f0c879]/15
                bg-gradient-to-br from-[#f0c879]/15 to-[#f0c879]/5
                text-[#f0c879]
              "
            >
              <FaGem />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold tracking-wide text-[#f5efe4]">
                Premium Discovery Insight
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#ab9575]">
                Featured sorting intelligently prioritizes curated luxury
                selections and premium customer favorites for an elevated
                shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SortDropdown.propTypes = {
  selectedSort: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
};

export default SortDropdown;