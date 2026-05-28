import PropTypes from "prop-types";

function BrandFilter({
  brands = [],
  selectedBrand = "all",
  onBrandChange,
}) {
  if (!brands.length) return null;

  const getBrandCount = (index) => 4 + ((index * 3) % 12);

  const getBrandInitials = (brand) => {
    return brand
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const activeBrandLabel =
    selectedBrand === "all"
      ? "All premium brands"
      : brands.find(
          (brand) => brand.toLowerCase() === selectedBrand
        ) || selectedBrand;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#1d1408] via-[#161005] to-[#120c04] shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      {/* Header */}
      <div className="border-b border-white/8 px-6 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f5e6c8]">
              Brand Filter
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
              Discover curated premium fashion labels crafted for modern style.
            </p>
          </div>

          {selectedBrand !== "all" && (
            <button
              type="button"
              onClick={() => onBrandChange("all")}
              className="rounded-full border border-amber-300/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d7c3a0] transition-all duration-300 hover:border-amber-300/30 hover:bg-amber-400/10 hover:text-[#edbf68]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Active Summary */}
        <div className="mt-5 rounded-2xl border border-amber-300/10 bg-white/5 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
            Current Selection
          </p>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-sm font-bold text-[#1a1205] shadow-lg">
              {selectedBrand === "all"
                ? "ALL"
                : getBrandInitials(activeBrandLabel)}
            </div>

            <div>
              <p className="text-sm font-semibold capitalize text-[#f8e8c8]">
                {activeBrandLabel}
              </p>
              <p className="text-xs text-[#9e8864]">
                Refined fashion collection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand List */}
      <div className="max-h-[460px] space-y-3 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#4d3820]">
        {/* All Brands */}
        <button
          type="button"
          onClick={() => onBrandChange("all")}
          className={`group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300 ${
            selectedBrand === "all"
              ? "border-amber-300/30 bg-gradient-to-r from-[#edbf68] to-[#d79b35] shadow-[0_10px_30px_rgba(237,191,104,0.28)]"
              : "border-white/5 bg-gradient-to-r from-[#2a1d0b] to-[#1d1407] text-[#d8c5a4] hover:border-amber-300/20 hover:text-[#f5e6c8]"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl font-bold ${
                selectedBrand === "all"
                  ? "bg-black/10 text-[#3a2208]"
                  : "bg-white/5 text-[#edbf68]"
              }`}
            >
              ALL
            </div>

            <div className="text-left">
              <p
                className={`text-sm font-semibold ${
                  selectedBrand === "all"
                    ? "text-[#3a2208]"
                    : ""
                }`}
              >
                All Brands
              </p>
              <p
                className={`text-xs ${
                  selectedBrand === "all"
                    ? "text-[#6b3f12]"
                    : "text-[#8f7855]"
                }`}
              >
                Full premium collection
              </p>
            </div>
          </div>

          <span
            className={`text-xs font-semibold ${
              selectedBrand === "all"
                ? "text-[#3a2208]"
                : ""
            }`}
          >
            {brands.length}
          </span>
        </button>

        {/* Individual Brands */}
        {brands.map((brand, index) => {
          const normalizedBrand = brand.toLowerCase();
          const isActive = selectedBrand === normalizedBrand;
          const count = getBrandCount(index);

          return (
            <button
              key={brand}
              type="button"
              onClick={() => onBrandChange(normalizedBrand)}
              className={`group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300 ${
                isActive
                  ? "border-amber-300/30 bg-gradient-to-r from-[#edbf68] to-[#d79b35] shadow-[0_10px_30px_rgba(237,191,104,0.28)]"
                  : "border-white/5 bg-gradient-to-r from-[#2a1d0b] to-[#1d1407] text-[#d8c5a4] hover:border-amber-300/20 hover:translate-x-1 hover:text-[#f5e6c8]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ${
                    isActive
                      ? "bg-black/10 text-[#3a2208]"
                      : "bg-white/5 text-[#edbf68]"
                  }`}
                >
                  {getBrandInitials(brand)}
                </div>

                <div className="text-left">
                  <p
                    className={`text-sm font-semibold capitalize ${
                      isActive ? "text-[#3a2208]" : ""
                    }`}
                  >
                    {brand}
                  </p>
                  <p
                    className={`text-xs ${
                      isActive ? "text-[#6b3f12]" : "text-[#8f7855]"
                    }`}
                  >
                    Premium curated styles
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-[#3a2208]" : ""
                  }`}
                >
                  {count}
                </span>

                {index < 3 && !isActive && (
                  <span className="rounded-full bg-amber-400/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#edbf68]">
                    Trending
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

BrandFilter.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string),
  selectedBrand: PropTypes.string,
  onBrandChange: PropTypes.func.isRequired,
};

export default BrandFilter;