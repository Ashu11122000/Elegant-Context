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
        description: "Modern luxury apparel",
      },
      accessories: {
        icon: "◈",
        description: "Refined finishing touches",
      },
      shoes: {
        icon: "◉",
        description: "Statement footwear",
      },
      bags: {
        icon: "⬢",
        description: "Elegant carry essentials",
      },
      beauty: {
        icon: "✿",
        description: "Premium self-care edits",
      },
      watches: {
        icon: "◌",
        description: "Timeless craftsmanship",
      },
    };

    return {
      ...(metaMap[normalized] || {
        icon: "◆",
        description: "Curated premium collection",
      }),
      count: 6 + ((index * 4) % 16),
    };
  };

  const activeCategoryLabel =
    selectedCategory === "all"
      ? "All Products"
      : categories.find(
          (category) => category.toLowerCase() === selectedCategory
        ) || selectedCategory;

  return (
    <aside
      aria-label="Category filters"
      className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1d1408] via-[#161005] to-[#110b04] shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl"
    >
      {/* Header */}
      <div className="border-b border-white/8 px-6 py-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f5e6c8]">
          Product Categories
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
          Discover curated collections crafted for elevated everyday fashion.
        </p>

        {/* Active Selection */}
        <div className="mt-5 rounded-2xl border border-amber-300/10 bg-white/5 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
            Current Selection
          </p>

          <div className="mt-3 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-lg font-bold text-[#1a1205] shadow-lg">
              {selectedCategory === "all" ? "ALL" : "✦"}
            </div>

            <div>
              <p className="text-sm font-semibold capitalize text-[#f8e8c8]">
                {activeCategoryLabel}
              </p>
              <p className="text-xs text-[#9e8864]">
                Curated premium discovery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-h-[520px] space-y-3 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#4d3820]">
        {/* All Products */}
        <button
          type="button"
          onClick={() => onCategoryChange("all")}
          className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
            selectedCategory === "all"
              ? "border-amber-300/30 bg-gradient-to-r from-[#edbf68] to-[#d79b35] text-[#1a1205] shadow-[0_10px_30px_rgba(237,191,104,0.3)]"
              : "border-white/5 bg-gradient-to-r from-[#2a1d0b] to-[#1d1407] text-[#d8c5a4] hover:border-amber-300/20 hover:translate-x-1 hover:text-[#f5e6c8]"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl font-bold ${
                selectedCategory === "all"
                  ? "bg-black/10"
                  : "bg-white/5 text-[#edbf68]"
              }`}
            >
              ALL
            </div>

            <div className="text-left">
              <p className="text-sm font-semibold">All Products</p>
              <p
                className={`text-xs ${
                  selectedCategory === "all"
                    ? "text-[#3b2a0e]"
                    : "text-[#8f7855]"
                }`}
              >
                Complete premium collection
              </p>
            </div>
          </div>

          <span className="text-xs font-semibold">{categories.length}</span>
        </button>

        {/* Category Items */}
        {categories.map((category, index) => {
          const normalizedCategory = category.toLowerCase();
          const isActive = selectedCategory === normalizedCategory;
          const meta = getCategoryMeta(category, index);

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(normalizedCategory)}
              className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 ${
                isActive
                  ? "border-amber-300/30 bg-gradient-to-r from-[#edbf68] to-[#d79b35] text-[#1a1205] shadow-[0_10px_30px_rgba(237,191,104,0.3)]"
                  : "border-white/5 bg-gradient-to-r from-[#2a1d0b] to-[#1d1407] text-[#d8c5a4] hover:border-amber-300/20 hover:translate-x-1 hover:text-[#f5e6c8]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold ${
                    isActive
                      ? "bg-black/10"
                      : "bg-white/5 text-[#edbf68]"
                  }`}
                >
                  {meta.icon}
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold capitalize">{category}</p>

                  <p
                    className={`text-xs ${
                      isActive ? "text-[#3b2a0e]" : "text-[#8f7855]"
                    }`}
                  >
                    {meta.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-semibold">{meta.count}</span>

                {index < 2 && !isActive && (
                  <span className="rounded-full bg-amber-400/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#edbf68]">
                    Trending
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Reset CTA */}
      <div className="border-t border-white/8 p-6">
        <Button
          onClick={onResetFilters}
          className="w-full rounded-2xl border border-amber-300/20 bg-gradient-to-r from-[#edbf68] to-[#d79b35] px-6 py-4 font-semibold text-[#1a1205] shadow-[0_10px_30px_rgba(237,191,104,0.25)] transition-all duration-300 hover:scale-[1.02]"
        >
          Reset All Filters
        </Button>
      </div>
    </aside>
  );
}

CategorySidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string,
  onCategoryChange: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
};

export default CategorySidebar;