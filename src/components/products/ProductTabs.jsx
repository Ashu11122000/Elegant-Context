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
  placeholder = "Search fashion, accessories, essentials...",
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
    <section className="relative overflow-hidden rounded-[2.6rem] border border-[#342312] bg-[#0d0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.04),transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#f0c372]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#f0c372]/5 blur-3xl" />

      <div className="relative z-10 space-y-8 p-6 sm:p-8 lg:p-10">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            {/* Premium Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c372]/10 bg-[#1c120a] px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
              <FaCrown className="text-[11px] text-[#f0c372]" />

              <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#d2a967]">
                Intelligent Discovery
              </span>
            </div>

            {/* Heading */}
            <h3 className="mt-6 text-[2rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[2.5rem]">
              Search Premium
              <span className="block bg-gradient-to-r from-[#f3cb82] via-[#ffe4b3] to-[#c8862b] bg-clip-text text-transparent">
                Curated Collections
              </span>
            </h3>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-[2] text-[#b69469] sm:text-base">
              Discover refined collections, designer fashion,
              modern essentials, luxury accessories, and
              elevated lifestyle products crafted for premium
              shopping experiences.
            </p>
          </div>

          {/* Compass Card */}
          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dca94b] to-[#c8862b] shadow-[0_20px_40px_rgba(237,191,104,0.25)]">
            <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/10" />

            <FaCompass className="relative z-10 text-3xl text-[#2d1702]" />
          </div>
        </div>

        {/* ================= SEARCH SECTION ================= */}
        <div className="space-y-5">
          {/* Top Row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label
              htmlFor="product-search"
              className="text-[11px] font-black uppercase tracking-[0.28em] text-[#d0a664]"
            >
              Smart Product Search
            </label>

            <span className="text-xs text-[#8d7453]">
              AI powered luxury discovery
            </span>
          </div>

          {/* Input Wrapper */}
          <div className="group relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#f0c372]/0 via-[#f0c372]/10 to-[#f0c372]/0 opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />

            {/* Search Icon */}
            <div className="pointer-events-none absolute left-6 top-1/2 z-10 -translate-y-1/2 text-[#a48762] transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-[#f0c372]">
              <FaSearch size={16} />
            </div>

            {/* Input */}
            <Input
              id="product-search"
              name="product-search"
              type="text"
              value={searchQuery}
              onChange={handleChange}
              placeholder={placeholder}
              className="
                relative z-10
                w-full
                rounded-[2rem]
                border border-[#322214]
                bg-[#16100b]/95
                py-6 pl-16 pr-16
                text-[15px]
                font-medium
                tracking-wide
                text-[#fff1db]
                placeholder:text-[#7f6b55]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                transition-all duration-300
                focus:border-[#f0c372]/30
                focus:bg-[#1c140d]
                focus:shadow-[0_0_0_4px_rgba(240,195,114,0.08)]
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
                  flex h-10 w-10 -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-[#f0c372]/10
                  bg-[#241608]
                  text-[#c7ab82]
                  shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:scale-110
                  hover:border-[#f0c372]/30
                  hover:bg-[#2b1b0d]
                  hover:text-[#f0c372]
                "
              >
                <FaTimes size={13} />
              </button>
            )}
          </div>
        </div>

        {/* ================= ACTIVE SEARCH ================= */}
        {searchQuery ? (
          <div className="relative overflow-hidden rounded-[2rem] border border-[#f0c372]/12 bg-[linear-gradient(to_bottom,#1b130c,#130d08)] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            {/* Glow */}
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#f0c372]/5 blur-3xl" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#f4ce85] to-[#c8862b] text-[#2d1702] shadow-[0_15px_35px_rgba(237,191,104,0.25)]">
                <FaSearch />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-black tracking-wide text-[#fff1db]">
                    Searching for
                  </p>

                  <span className="rounded-full border border-[#f0c372]/15 bg-[#2a1d10] px-4 py-1.5 text-xs font-black tracking-wide text-[#f0c372]">
                    {searchQuery}
                  </span>
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-[1.9] text-[#b69469]">
                  Curating premium product matches from luxury
                  collections, refined categories, modern
                  fashion essentials, and elevated lifestyle
                  experiences.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* ================= TRENDING ================= */
          <div className="space-y-5">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#d0a664]">
                Trending Discoveries
              </p>

              <div className="flex items-center gap-2 text-xs font-medium text-[#947a58]">
                Explore Collections
                <FaArrowRight className="text-[10px]" />
              </div>
            </div>

            {/* Search Tags */}
            <div className="flex flex-wrap gap-3">
              {suggestedSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    onSearchChange(item)
                  }
                  className="
                    group relative overflow-hidden
                    rounded-full
                    border border-[#f0c372]/10
                    bg-[#1d130a]
                    px-5 py-3
                    text-xs font-black uppercase tracking-[0.08em]
                    text-[#d2b084]
                    shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#f0c372]/25
                    hover:bg-[#291b0d]
                    hover:shadow-[0_15px_35px_rgba(240,195,114,0.15)]
                  "
                >
                  {/* Hover Overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f4ce85] to-[#c8862b] opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Text */}
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2d1702]">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= DISCOVERY NOTE ================= */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#322214] bg-[linear-gradient(to_bottom,#171007,#100903)] p-6 shadow-[0_25px_55px_rgba(0,0,0,0.35)]">
          {/* Accent */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c372] to-[#9c6b23]" />

          {/* Glow */}
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#f0c372]/5 blur-3xl" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.5rem] border border-[#f0c372]/15 bg-gradient-to-br from-[#f0c372]/15 to-[#f0c372]/5 text-[#f0c372]">
              <FaMagic />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-black tracking-wide text-[#fff1db]">
                Smart Discovery Experience
              </p>

              <p className="mt-3 max-w-4xl text-sm leading-[1.9] text-[#ae8d62]">
                Search by collections, designer styles,
                premium essentials, luxury accessories,
                fashion trends, and curated experiences
                with realistic discovery and elevated
                shopping interactions.
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