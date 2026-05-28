import PropTypes from "prop-types";
import {
  FaSearch,
  FaTimes,
  FaMagic,
  FaCompass,
  FaArrowRight,
  FaCrown,
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
    "Street luxury",
    "Exclusive essentials",
  ];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#c9a86a]/15 bg-gradient-to-br from-[#19130d] via-[#120f0b] to-[#0d0a07] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-7">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-yellow-200/5 blur-3xl" />

      <div className="relative z-10 space-y-7">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b57b]/15 bg-[#241b13]/80 px-4 py-1.5 backdrop-blur-xl">
              <FaCrown className="text-[11px] text-[#e7c37a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a56c]">
                Intelligent Discovery
              </span>
            </div>

            <h3 className="mt-5 text-[1.9rem] font-black tracking-tight text-[#f5efe5] sm:text-[2.1rem]">
              Search Premium Products
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#af9b7f] sm:text-[15px]">
              Discover refined luxury collections, iconic fashion pieces, and
              curated essentials designed for modern premium lifestyles.
            </p>
          </div>

          {/* Premium Compass */}
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.7rem] border border-[#f0c879]/20 bg-gradient-to-br from-[#f0c879] via-[#d9a84d] to-[#9b6822] text-2xl text-[#261707] shadow-[0_15px_35px_rgba(240,200,121,0.25)]">
            <div className="absolute inset-[1px] rounded-[1.6rem] border border-white/10" />

            <FaCompass className="relative z-10" />
          </div>
        </div>

        {/* Search Input */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="product-search"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b7935a]"
            >
              Luxury Product Search
            </label>

            <span className="hidden text-xs text-[#86725c] sm:block">
              AI powered smart discovery
            </span>
          </div>

          {/* Input Wrapper */}
          <div className="group relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-r from-[#d6a756]/0 via-[#d6a756]/10 to-[#d6a756]/0 opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />

            {/* Search Icon */}
            <div className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[#bfa27b] transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-[#f0c879]">
              <FaSearch size={16} />
            </div>

            <Input
              id="product-search"
              name="product-search"
              type="text"
              value={searchQuery}
              onChange={handleChange}
              placeholder={placeholder}
              className="
                relative z-10 w-full rounded-[1.8rem]
                border border-[#d6b57b]/10
                bg-[#1b1510]/90
                py-5 pl-14 pr-14
                text-[15px]
                font-medium
                tracking-wide
                text-[#f4eee3]
                placeholder:text-[#7d6a56]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                backdrop-blur-2xl
                transition-all duration-300
                focus:border-[#f0c879]/35
                focus:bg-[#241c14]
                focus:shadow-[0_0_0_4px_rgba(240,200,121,0.08)]
              "
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={onClearSearch}
                aria-label="Clear search"
                className="
                  absolute right-5 top-1/2 z-10
                  flex h-9 w-9 -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-[#f0c879]/15
                  bg-[#2a2118]
                  text-[#c9ad84]
                  transition-all duration-300
                  hover:scale-110
                  hover:border-[#f0c879]/30
                  hover:bg-[#33271a]
                  hover:text-[#f0c879]
                "
              >
                <FaTimes size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Active Search */}
        {searchQuery ? (
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#f0c879]/12 bg-gradient-to-r from-[#261d14] to-[#18120d] p-5 shadow-inner">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f0c879]/5 blur-3xl" />

            <div className="relative flex items-start gap-4">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0c879] to-[#c88b2b] text-[#261707] shadow-lg">
                <FaSearch />
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-bold tracking-wide text-[#f6f0e5]">
                    Searching for
                  </p>

                  <span className="rounded-full border border-[#f0c879]/15 bg-[#352719] px-3 py-1 text-xs font-semibold text-[#f0c879]">
                    {searchQuery}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-[#b49f82]">
                  Curating premium matches from luxury collections, refined
                  categories, and modern fashion essentials.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Suggested Searches */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b7935a]">
                Trending Discoveries
              </p>

              <div className="flex items-center gap-2 text-xs font-medium text-[#907b63]">
                Explore Premium
                <FaArrowRight className="text-[10px]" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {suggestedSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => onSearchChange(item)}
                  className="
                    group relative overflow-hidden
                    rounded-full
                    border border-[#d6b57b]/10
                    bg-[#1d1711]/90
                    px-5 py-2.5
                    text-xs font-semibold tracking-wide
                    text-[#c9ae86]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#f0c879]/30
                    hover:shadow-[0_10px_25px_rgba(240,200,121,0.12)]
                  "
                >
                  {/* Hover Gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f0c879] to-[#d89f3f] opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Text */}
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2a1a08]">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Discovery Note */}
        <div className="relative overflow-hidden rounded-[1.9rem] border border-[#d6b57b]/10 bg-[#15110c]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          {/* Accent Line */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c879] to-[#9c6921]" />

          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f0c879]/15 bg-gradient-to-br from-[#f0c879]/15 to-[#f0c879]/5 text-[#f0c879]">
              <FaMagic />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-bold tracking-wide text-[#f5efe4]">
                Premium Smart Discovery
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#ab9575]">
                Search by collections, categories, designer styles, modern
                essentials, and luxury fashion trends with a realistic premium
                shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ProductSearch.propTypes = {
  searchQuery: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default ProductSearch;