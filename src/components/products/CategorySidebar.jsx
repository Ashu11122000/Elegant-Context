import PropTypes from "prop-types";
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
        description: "Luxury runway-inspired apparel",
      },
      accessories: {
        icon: "◈",
        description: "Elegant finishing essentials",
      },
      shoes: {
        icon: "◉",
        description: "Premium statement footwear",
      },
      bags: {
        icon: "⬢",
        description: "Sophisticated carry designs",
      },
      beauty: {
        icon: "✿",
        description: "Luxury beauty & skincare edits",
      },
      watches: {
        icon: "◌",
        description: "Timeless precision craftsmanship",
      },
    };

    return {
      ...(metaMap[normalized] || {
        icon: "◆",
        description: "Exclusive premium collection",
      }),
      count: 6 + ((index * 4) % 16),
    };
  };

  const activeCategoryLabel =
    selectedCategory === "all"
      ? "All Luxury Products"
      : categories.find(
          (category) =>
            category.toLowerCase() === selectedCategory
        ) || selectedCategory;

  return (
    <aside
      aria-label="Category filters"
      className="relative overflow-hidden rounded-[2rem] border border-[#3e2b14] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_30%),linear-gradient(to_bottom,#1c1206,#140d05,#0e0803)] shadow-[0_28px_90px_rgba(0,0,0,0.58)] backdrop-blur-2xl"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

      {/* Header */}
      <div className="relative border-b border-[#3a2812] px-6 py-7">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

          <p className="text-[11px] font-black uppercase tracking-[0.38em] text-[#f2d29a]">
            Product Categories
          </p>
        </div>

        <h3 className="mt-5 text-2xl font-black tracking-tight text-[#fff2dc]">
          Discover Luxury Collections
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#b6956b]">
          Explore refined premium collections crafted with
          elegance, detail, and elevated modern aesthetics.
        </p>

        {/* Active Selection */}
        <div className="mt-7 overflow-hidden rounded-[1.7rem] border border-[#4a3215] bg-gradient-to-br from-[#241507] via-[#1a1007] to-[#120b04] p-5 shadow-inner">
          <div className="flex items-center gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#e0b161]/30 bg-gradient-to-br from-[#f0c372] via-[#d69a37] to-[#b87920] text-lg font-black text-[#2c1703] shadow-[0_10px_30px_rgba(237,191,104,0.35)]">
              <span className="absolute inset-0 bg-white/10 opacity-40" />

              <span className="relative z-10">
                {selectedCategory === "all"
                  ? "ALL"
                  : "✦"}
              </span>
            </div>

            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9f7b4b]">
                Current Selection
              </p>

              <h4 className="mt-2 text-lg font-extrabold capitalize tracking-wide text-[#fff0d7]">
                {activeCategoryLabel}
              </h4>

              <p className="mt-1 text-xs leading-relaxed text-[#b39167]">
                Carefully curated premium category showcase.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="relative max-h-[540px] space-y-4 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#5a3c19]">
        {/* All Products */}
        <button
          type="button"
          onClick={() => onCategoryChange("all")}
          className={`group relative flex w-full items-center justify-between overflow-hidden rounded-[1.7rem] border px-5 py-5 transition-all duration-300 ${
            selectedCategory === "all"
              ? "border-[#f1be69]/40 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] shadow-[0_14px_35px_rgba(237,191,104,0.34)]"
              : "border-[#392712] bg-gradient-to-r from-[#241608] to-[#1a1007] hover:translate-x-[3px] hover:border-[#dca750]/40 hover:bg-[#26180a]"
          }`}
        >
          {/* Hover Shine */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
          </div>

          <div className="relative flex items-center gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-sm font-black tracking-widest ${
                selectedCategory === "all"
                  ? "border-black/10 bg-black/10 text-[#341d05]"
                  : "border-[#4a3316] bg-[#2a1a0b] text-[#f0c372]"
              }`}
            >
              ALL
            </div>

            <div className="text-left">
              <h4
                className={`text-[15px] font-extrabold tracking-wide ${
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
                Entire premium luxury collection.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-end">
            <span
              className={`text-sm font-black ${
                selectedCategory === "all"
                  ? "text-[#341d05]"
                  : "text-[#f2d39f]"
              }`}
            >
              {categories.length}
            </span>

            <span
              className={`mt-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
                selectedCategory === "all"
                  ? "text-[#5f3a10]"
                  : "text-[#8d6b45]"
              }`}
            >
              Categories
            </span>
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
              className={`group relative flex w-full items-center justify-between overflow-hidden rounded-[1.7rem] border px-5 py-5 transition-all duration-300 ${
                isActive
                  ? "border-[#f1be69]/40 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] shadow-[0_14px_35px_rgba(237,191,104,0.34)]"
                  : "border-[#392712] bg-gradient-to-r from-[#241608] to-[#1a1007] hover:translate-x-[3px] hover:border-[#dca750]/40 hover:bg-[#26180a]"
              }`}
            >
              {/* Hover Reflection */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
              </div>

              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-lg font-black ${
                    isActive
                      ? "border-black/10 bg-black/10 text-[#341d05]"
                      : "border-[#4a3316] bg-[#2a1a0b] text-[#f0c372]"
                  }`}
                >
                  {meta.icon}
                </div>

                <div className="text-left">
                  <h4
                    className={`text-[15px] font-extrabold capitalize tracking-wide ${
                      isActive
                        ? "text-[#341d05]"
                        : "text-[#f7e7c8]"
                    }`}
                  >
                    {category}
                  </h4>

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

              <div className="relative flex flex-col items-end gap-2">
                <div className="text-right">
                  <span
                    className={`block text-sm font-black ${
                      isActive
                        ? "text-[#341d05]"
                        : "text-[#f2d39f]"
                    }`}
                  >
                    {meta.count}
                  </span>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                      isActive
                        ? "text-[#5d370f]"
                        : "text-[#8e6d47]"
                    }`}
                  >
                    Items
                  </span>
                </div>

                {index < 2 && !isActive && (
                  <span className="rounded-full border border-[#e4b35d]/20 bg-[#3a240d] px-3 py-1 text-[9px] font-black uppercase tracking-[0.22em] text-[#f0c372] shadow-inner">
                    Trending
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Reset CTA */}
      <div className="border-t border-[#382510] p-6">
        <Button
          onClick={onResetFilters}
          className="group relative w-full overflow-hidden rounded-[1.5rem] border border-[#e0b161]/20 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#2f1903] shadow-[0_14px_35px_rgba(237,191,104,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_45px_rgba(237,191,104,0.4)]"
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