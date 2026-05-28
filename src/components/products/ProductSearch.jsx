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
  placeholder = "Search premium fashion, luxury essentials, designer collections...",
}) {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  const suggestedSearches = [
    "Minimal jackets",
    "Luxury watches",
    "Designer sneakers",
    "Premium accessories",
    "Signature perfumes",
    "Modern streetwear",
  ];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#c8a96a]/15 bg-gradient-to-br from-[#1b140c] via-[#15110c] to-[#0e0b07] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-7">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-yellow-200/5 blur-3xl" />

      <div className="relative z-10 space-y-7">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b57c]/20 bg-[#2a2118]/70 px-4 py-1.5 backdrop-blur-xl">
              <HiSparkles className="text-[11px] text-[#f0c879]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#caa56b]">
                Intelligent Discovery
              </span>
            </div>

            <h3 className="mt-5 text-[1.8rem] font-black tracking-tight text-[#f7f1e4] sm:text-[2rem]">
              Discover Curated Luxury
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#bda88a] sm:text-[15px]">
              Explore premium fashion collections, iconic accessories, and
              modern essentials crafted for refined lifestyles.
            </p>
          </div>

          {/* Premium Icon */}
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.6rem] border border-[#f0c879]/20 bg-gradient-to-br from-[#f0c879] via-[#d8a54a] to-[#9b6b22] text-2xl text-[#2d1d08] shadow-[0_10px_30px_rgba(240,200,121,0.25)]">
            <div className="absolute inset-[1px] rounded-[1.5rem] border border-white/10" />

            <FaCompass className="relative z-10" />
          </div>
        </div>

        {/* Search Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <label
              htmlFor="product-search"
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b7935a]"
            >
              Luxury Product Search
            </label>

            <p className="hidden text-xs text-[#8d7a60] sm:block">
              Smart AI-powered premium discovery
            </p>
          </div>

          {/* Search Box */}
          <div className="group relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-r from-[#d6a756]/0 via-[#d6a756]/10 to-[#d6a756]/0 opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />

            {/* Search Icon */}
            <div className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[#b89d78] transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-[#f0c879]">
              <FaSearch size={17} />
            </div>

            <Input
              id="product-search"
              type="text"
              value={searchQuery}
              onChange={handleChange}
              placeholder={placeholder}
              className="
                relative z-10 w-full rounded-[1.8rem]
                border border-[#c8a96a]/15
                bg-[#1d1711]/90
                py-5 pl-14 pr-14
                text-[15px]
                font-medium
                text-[#f5ede1]
                placeholder:text-[#7f6c56]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                backdrop-blur-2xl
                transition-all duration-300
                focus:border-[#f0c879]/40
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
                  text-[#c7ab82]
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
          <div className="relative overflow-hidden rounded-[1.7rem] border border-[#f0c879]/15 bg-gradient-to-r from-[#2b2217] to-[#1b150f] p-5 shadow-inner">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f0c879]/5 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0c879] to-[#c88d2d] text-[#2b1b07] shadow-lg">
                <FaSearch />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-bold tracking-wide text-[#f7f0e2]">
                    Searching for
                  </p>

                  <span className="rounded-full border border-[#f0c879]/20 bg-[#3a2c1d] px-3 py-1 text-xs font-semibold text-[#f0c879]">
                    {searchQuery}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-[#b9a389]">
                  Curating refined matches from premium collections and luxury
                  categories tailored to your preferences.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b7935a]">
                Trending Discoveries
              </p>

              <div className="flex items-center gap-2 text-xs font-medium text-[#9e8867]">
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
                    border border-[#d4b178]/12
                    bg-[#201811]/80
                    px-5 py-2.5
                    text-xs font-semibold tracking-wide
                    text-[#ceb28a]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#f0c879]/30
                    hover:bg-[#2c2116]
                    hover:shadow-[0_10px_25px_rgba(240,200,121,0.15)]
                  "
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#f0c879] to-[#d49b3a] opacity-0 transition duration-300 group-hover:opacity-100" />

                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2b1b07]">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Premium Note */}
        <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d4b178]/10 bg-[#16110c]/90 p-5">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c879] to-[#9c6b23]" />

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f0c879]/15 bg-gradient-to-br from-[#f0c879]/15 to-[#f0c879]/5 text-[#f0c879]">
              <FaGem />
            </div>

            <div>
              <p className="text-sm font-bold tracking-wide text-[#f7f0e2]">
                Premium Smart Discovery
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#a99372]">
                Instantly search by collections, categories, product names,
                designer styles, modern essentials, and luxury fashion trends
                with a realistic premium shopping experience.
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