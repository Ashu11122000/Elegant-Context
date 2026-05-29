import PropTypes from "prop-types";

import {
  FaSearch,
  FaTimes,
  FaGem,
  FaCompass,
  FaArrowRight,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi";

import Input from "../UI/Input";

function ProductSearch({
  searchQuery = "",
  onSearchChange,
  onClearSearch,
  placeholder = "Search fashion, essentials, designer collections...",
}) {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  const suggestedSearches = [
    "Minimal Jackets",
    "Luxury Watches",
    "Designer Sneakers",
    "Premium Accessories",
    "Signature Perfumes",
    "Modern Streetwear",
  ];

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[#342312] bg-[#0d0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.05),transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#f0c372]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#f0c372]/5 blur-3xl" />

      <div className="relative z-10 space-y-8 p-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6">
          {/* Premium Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#f0c372]/10 bg-[#1d130a] px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
            <HiSparkles className="text-[11px] text-[#f0c372]" />

            <span className="text-[10px] font-black uppercase tracking-[0.32em] text-[#d2a967]">
              Intelligent Discovery
            </span>
          </div>

          {/* Heading */}
          <div className="mx-auto max-w-[280px] text-center">
            <h3 className="text-[2.25rem] font-black leading-[1.05] tracking-[-0.04em] text-[#fff3df]">
              Discover Premium

              <span className="block bg-gradient-to-r from-[#f3cb82] via-[#ffe4b3] to-[#c8862b] bg-clip-text text-transparent">
                Curated Collections
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-[260px] text-sm leading-[2] text-[#b69469]">
              Explore designer collections,
              luxury essentials, premium
              accessories, and modern fashion
              pieces crafted for refined
              lifestyles.
            </p>
          </div>

          {/* Compass Card */}
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dcaa4d] to-[#c8872c] shadow-[0_20px_40px_rgba(237,191,104,0.25)]">
            <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/10" />

            <FaCompass className="relative z-10 text-3xl text-[#2d1702]" />
          </div>
        </div>

                {/* ================= SEARCH SECTION ================= */}
        <div className="space-y-5">
          {/* Label */}
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <label
              htmlFor="product-search"
              className="text-[11px] font-black uppercase tracking-[0.28em] text-[#d0a664]"
            >
              Smart Product Search
            </label>

            <p className="text-xs text-[#8f7451]">
              AI-powered luxury discovery experience
            </p>
          </div>

          {/* Search Box */}
          <div className="group relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#f0c372]/0 via-[#f0c372]/10 to-[#f0c372]/0 opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />

            {/* Search Icon */}
            <div className="pointer-events-none absolute left-6 top-1/2 z-10 -translate-y-1/2 text-[#9f8461] transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-[#f0c372]">
              <FaSearch size={17} />
            </div>

            <Input
              id="product-search"
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
                  py-6 pl-14 pr-14
                  text-left
                  text-[15px]
                  font-medium
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
                  text-[#c8ab82]
                  shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:scale-110
                  hover:border-[#f0c372]/30
                  hover:bg-[#2c1d0d]
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
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#f0c372]/5 blur-3xl" />

            <div className="relative flex flex-col items-center justify-center text-center gap-5">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#f4ce85] to-[#c8872c] text-[#2d1702] shadow-[0_15px_35px_rgba(237,191,104,0.25)]">
                <FaSearch />
              </div>

              {/* Content */}
              <div className="max-w-[260px] mx-auto text-center">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <p className="text-sm font-black tracking-wide text-[#fff1db]">
                    Searching For
                  </p>

                  <span className="rounded-full border border-[#f0c372]/15 bg-[#2a1d10] px-4 py-1.5 text-xs font-black tracking-wide text-[#f0c372]">
                    {searchQuery}
                  </span>
                </div>

                <p className="mx-auto mt-3 max-w-[250px] text-sm leading-[1.9] text-[#b69469]">
                  Curating premium product matches
                  from luxury collections,
                  trending categories, designer
                  essentials, and modern fashion
                  experiences.
                </p>
              </div>
            </div>
          </div>
        ) : (
                    /* ================= TRENDING ================= */
          <div className="space-y-5">
            {/* Header */}
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#d0a664]">
                Trending Discoveries
              </p>

              <div className="flex items-center gap-2 text-xs font-medium text-[#9f8461]">
                Explore Collections
                <FaArrowRight className="text-[10px]" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3">
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
                    bg-[#1c120a]
                    px-4 py-2.5
                    text-center
                    text-xs font-black uppercase tracking-[0.08em]
                    text-[#d2b084]
                    shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#f0c372]/25
                    hover:bg-[#2a1b0d]
                    hover:shadow-[0_15px_35px_rgba(240,195,114,0.15)]
                  "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f4ce85] to-[#c8872c] opacity-0 transition duration-300 group-hover:opacity-100" />

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
          {/* Accent Line */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c372] to-[#9c6b23]" />

          {/* Glow */}
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#f0c372]/5 blur-3xl" />

          <div className="relative flex flex-col items-center justify-center text-center gap-5">
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] border border-[#f0c372]/15 bg-gradient-to-br from-[#f0c372]/15 to-[#f0c372]/5 text-[#f0c372]">
              <FaGem />
            </div>

            {/* Content */}
            <div className="mx-auto max-w-[260px] text-center">
              <p className="text-sm font-black tracking-wide text-[#fff1db]">
                Smart Discovery Experience
              </p>

              <p className="mx-auto mt-3 max-w-[240px] text-sm leading-[1.9] text-[#ae8d62]">
                Instantly search products by
                collections, categories,
                designer styles, luxury
                essentials, fashion trends,
                premium brands, and curated
                experiences with refined search
                precision.
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