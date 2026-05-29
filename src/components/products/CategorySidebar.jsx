import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiCheck,
  FiGrid,
  FiTrendingUp,
} from "react-icons/fi";

import Button from "../UI/Button";

function CategorySidebar({
  categories = [],
  selectedCategory = "all",
  onCategoryChange,
  onResetFilters,
}) {
  const getCategoryMeta = (category, index) => {
    const normalized = category.toLowerCase();

    const metaMap = {
      fashion: {
        icon: "✦",
        description: "Runway-inspired apparel collections",
      },
      accessories: {
        icon: "◈",
        description: "Elegant finishing essentials",
      },
      shoes: {
        icon: "◉",
        description: "Luxury footwear & statement designs",
      },
      bags: {
        icon: "⬢",
        description: "Sophisticated carry essentials",
      },
      beauty: {
        icon: "✿",
        description: "Premium beauty & skincare edits",
      },
      watches: {
        icon: "◌",
        description: "Timeless precision craftsmanship",
      },
    };

    return {
      ...(metaMap[normalized] || {
        icon: "◆",
        description: "Exclusive luxury collection",
      }),
      count: 8 + ((index * 4) % 18),
    };
  };

  const activeCategoryLabel =
    selectedCategory === "all"
      ? "All Products"
      : categories.find(
          (category) =>
            category.toLowerCase() === selectedCategory
        ) || selectedCategory;

  return (
    <aside
      aria-label="Category filters"
      className="relative overflow-hidden rounded-[2.2rem] border border-[#3e2b14] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_30%),linear-gradient(to_bottom,#1b1208,#130c05,#0d0803)] shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
    >
      {/* Ambient Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

      <div className="pointer-events-none absolute -top-28 right-[-90px] h-72 w-72 rounded-full bg-[#f0c372]/10 blur-3xl" />

      {/* Header */}
      <div className="relative border-b border-[#352412] px-6 py-7 sm:px-7">
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

              <p className="text-[11px] font-black uppercase tracking-[0.38em] text-[#f2d29a]">
                Product Categories
              </p>
            </div>

            <h3 className="mt-5 text-[1.9rem] font-black leading-tight tracking-tight text-[#fff2dc]">
              Discover Premium
              <span className="block text-[#d8b277]">
                Collections
              </span>
            </h3>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#b6956b]">
              Explore curated collections designed with
              refined craftsmanship, elevated aesthetics,
              and timeless luxury appeal.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                label: "Categories",
                value: categories.length,
                icon: FiGrid,
              },
              {
                label: "Trending",
                value: "18+",
                icon: FiTrendingUp,
              },
              {
                label: "Verified",
                value: "100%",
                icon: FiCheck,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                    flex min-h-[125px]
                    flex-col items-center justify-center
                    rounded-[1.8rem]
                    border border-[#3d2b16]
                    bg-gradient-to-br
                    from-[#1d1208]
                    via-[#1a1007]
                    to-[#130b05]
                    px-4 py-5
                    text-center
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                    transition-all duration-300
                    hover:border-[#e0b161]/20
                    hover:-translate-y-1
                  "
                >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e0b161]/10 bg-[#251608]">
                  <item.icon
                    size={18}
                    className="text-[#f0c372]"
                  />
                </div>

                {/* Value */}
                <span className="mt-4 text-[1.8rem] font-black leading-none text-[#fff1d6]">
                  {item.value}
                </span>

                {/* Label */}
                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#a7865d]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Active Selection */}
          <div className="overflow-hidden rounded-[1.8rem] border border-[#4a3215] bg-gradient-to-br from-[#241507] via-[#1a1007] to-[#120b04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] border border-[#e0b161]/30 bg-gradient-to-br from-[#f0c372] via-[#d69a37] to-[#b87920] text-lg font-black text-[#2c1703] shadow-[0_12px_30px_rgba(237,191,104,0.35)]">
                <span className="absolute inset-0 bg-white/10 opacity-40" />

                <span className="relative z-10">
                  {selectedCategory === "all"
                    ? "ALL"
                    : "✦"}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9f7b4b]">
                  Active Selection
                </p>

                <h4 className="mt-2 truncate text-lg font-black capitalize tracking-wide text-[#fff0d7]">
                  {activeCategoryLabel}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-[#b39167]">
                  Luxury category showcase with refined
                  modern aesthetics and premium quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="relative max-h-[560px] overflow-y-auto px-5 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#5a3c19] sm:px-6">
        <div className="space-y-4">
          {/* All Products */}
          <button
            type="button"
            onClick={() => onCategoryChange("all")}
            className={`group relative flex w-full items-center justify-between overflow-hidden rounded-[1.8rem] border px-5 py-5 text-left transition-all duration-300 ${
              selectedCategory === "all"
                ? "border-[#f1be69]/40 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] shadow-[0_16px_40px_rgba(237,191,104,0.34)]"
                : "border-[#392712] bg-gradient-to-r from-[#241608] to-[#1a1007] hover:border-[#dca750]/40 hover:translate-x-[3px]"
            }`}
          >
            {/* Shine */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
            </div>

            <div className="relative flex min-w-0 items-center gap-4">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-sm font-black tracking-[0.18em] ${
                  selectedCategory === "all"
                    ? "border-black/10 bg-black/10 text-[#341d05]"
                    : "border-[#4a3316] bg-[#2a1a0b] text-[#f0c372]"
                }`}
              >
                ALL
              </div>

              <div className="min-w-0">
                <h4
                  className={`truncate text-[15px] font-black tracking-wide ${
                    selectedCategory === "all"
                      ? "text-[#341d05]"
                      : "text-[#f8e7c6]"
                  }`}
                >
                  All Products
                </h4>

                <p
                  className={`mt-1 text-xs leading-relaxed ${
                    selectedCategory === "all"
                      ? "text-[#60390d]"
                      : "text-[#a7865d]"
                  }`}
                >
                  Browse the complete luxury collection.
                </p>
              </div>
            </div>

            <div className="relative ml-4 flex shrink-0 items-center gap-3">
              <div className="text-right">
                <span
                  className={`block text-base font-black ${
                    selectedCategory === "all"
                      ? "text-[#341d05]"
                      : "text-[#f2d39f]"
                  }`}
                >
                  {categories.length}
                </span>

                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                    selectedCategory === "all"
                      ? "text-[#5f3a10]"
                      : "text-[#8d6b45]"
                  }`}
                >
                  Categories
                </span>
              </div>

              <FiArrowRight
                size={18}
                className={`transition-transform duration-300 group-hover:translate-x-1 ${
                  selectedCategory === "all"
                    ? "text-[#341d05]"
                    : "text-[#d8b277]"
                }`}
              />
            </div>
          </button>

          {/* Category Items */}
          {categories.map((category, index) => {
            const normalizedCategory =
              category.toLowerCase();

            const isActive =
              selectedCategory === normalizedCategory;

            const meta = getCategoryMeta(
              category,
              index
            );

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  onCategoryChange(normalizedCategory)
                }
                className={`group relative flex w-full items-center justify-between overflow-hidden rounded-[1.8rem] border px-5 py-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-[#f1be69]/40 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] shadow-[0_16px_40px_rgba(237,191,104,0.34)]"
                    : "border-[#392712] bg-gradient-to-r from-[#241608] to-[#1a1007] hover:border-[#dca750]/40 hover:translate-x-[3px]"
                }`}
              >
                {/* Hover Reflection */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
                </div>

                <div className="relative flex min-w-0 items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-lg font-black ${
                      isActive
                        ? "border-black/10 bg-black/10 text-[#341d05]"
                        : "border-[#4a3316] bg-[#2a1a0b] text-[#f0c372]"
                    }`}
                  >
                    {meta.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4
                        className={`truncate text-[15px] font-black capitalize tracking-wide ${
                          isActive
                            ? "text-[#341d05]"
                            : "text-[#f7e7c8]"
                        }`}
                      >
                        {category}
                      </h4>

                      {index < 2 && !isActive && (
                        <span className="rounded-full border border-[#e4b35d]/20 bg-[#3a240d] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
                          Trending
                        </span>
                      )}
                    </div>

                    <p
                      className={`mt-1 text-xs leading-relaxed ${
                        isActive
                          ? "text-[#5d370f]"
                          : "text-[#ab8a63]"
                      }`}
                    >
                      {meta.description}
                    </p>
                  </div>
                </div>

                <div className="relative ml-4 flex shrink-0 items-center gap-3">
                  <div className="text-right">
                    <span
                      className={`block text-base font-black ${
                        isActive
                          ? "text-[#341d05]"
                          : "text-[#f2d39f]"
                      }`}
                    >
                      {meta.count}
                    </span>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                        isActive
                          ? "text-[#5d370f]"
                          : "text-[#8e6d47]"
                      }`}
                    >
                      Items
                    </span>
                  </div>

                  <FiArrowRight
                    size={18}
                    className={`transition-transform duration-300 group-hover:translate-x-1 ${
                      isActive
                        ? "text-[#341d05]"
                        : "text-[#d8b277]"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-[#382510] p-6">
        <div className="mb-5 rounded-[1.6rem] border border-[#3d2a15] bg-[#1b1208]/80 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0c372] via-[#dba84b] to-[#c78628] text-[#2d1803] shadow-[0_10px_25px_rgba(237,191,104,0.28)]">
              ✦
            </div>

            <div>
              <h4 className="text-sm font-black tracking-wide text-[#fff0d7]">
                Personalized Luxury Experience
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-[#ab8a63]">
                Refine your shopping journey with curated
                categories designed for premium aesthetics
                and elevated modern style.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onResetFilters}
          className="group relative w-full overflow-hidden rounded-[1.6rem] border border-[#e0b161]/20 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#2f1903] shadow-[0_16px_40px_rgba(237,191,104,0.32)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(237,191,104,0.42)]"
        >
          <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <span className="relative z-10">
            Reset All Filters
          </span>
        </Button>
      </div>
    </aside>
  );
}

CategorySidebar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string
  ),
  selectedCategory: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
};

export default CategorySidebar;