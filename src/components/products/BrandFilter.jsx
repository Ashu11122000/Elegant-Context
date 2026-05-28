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
      ? "All Luxury Brands"
      : brands.find(
          (brand) => brand.toLowerCase() === selectedBrand
        ) || selectedBrand;

  return (
    <aside className="relative overflow-hidden rounded-[2rem] border border-[#3f2b12] bg-[radial-gradient(circle_at_top,rgba(255,214,153,0.08),transparent_30%),linear-gradient(to_bottom,#1c1206,#140d05,#0f0903)] shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />

      {/* Header */}
      <div className="relative border-b border-[#3a2812] px-6 py-7">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-[80%]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_12px_rgba(243,197,116,0.9)]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.38em] text-[#f3d7a2]">
                Luxury Brands
              </p>
            </div>

            <h3 className="mt-4 text-2xl font-black tracking-tight text-[#fff3df]">
              Premium Brand Selection
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#b89b73]">
              Explore world-class fashion houses, curated collections,
              and refined premium labels tailored for elevated style.
            </p>
          </div>

          {selectedBrand !== "all" && (
            <button
              type="button"
              onClick={() => onBrandChange("all")}
              className="group rounded-full border border-[#5c4120] bg-[#241608] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d8b277] transition-all duration-300 hover:border-[#d4a04b] hover:bg-[#2d1c0b] hover:text-[#fff1d8]"
            >
              Reset
            </button>
          )}
        </div>

        {/* Active Brand Card */}
        <div className="mt-7 overflow-hidden rounded-[1.7rem] border border-[#4b3317] bg-gradient-to-br from-[#241507] via-[#1c1107] to-[#120b04] p-5 shadow-inner">
          <div className="flex items-center gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#e0b161]/30 bg-gradient-to-br from-[#f0c372] via-[#d69a37] to-[#b87920] text-base font-black tracking-widest text-[#2c1703] shadow-[0_10px_25px_rgba(237,191,104,0.35)]">
              <span className="absolute inset-0 bg-white/10 opacity-40" />

              <span className="relative z-10">
                {selectedBrand === "all"
                  ? "ALL"
                  : getBrandInitials(activeBrandLabel)}
              </span>
            </div>

            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9c7a4a]">
                Current Selection
              </p>

              <h4 className="mt-2 text-lg font-extrabold capitalize tracking-wide text-[#fff0d6]">
                {activeBrandLabel}
              </h4>

              <p className="mt-1 text-xs text-[#b39269]">
                Handpicked luxury collections with premium aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand List */}
      <div className="relative max-h-[500px] space-y-4 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#5c3f1c]">
        {/* All Brands */}
        <button
          type="button"
          onClick={() => onBrandChange("all")}
          className={`group relative flex w-full items-center justify-between overflow-hidden rounded-[1.7rem] border px-5 py-5 transition-all duration-300 ${
            selectedBrand === "all"
              ? "border-[#f1be69]/40 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] shadow-[0_14px_35px_rgba(237,191,104,0.32)]"
              : "border-[#3a2812] bg-gradient-to-r from-[#241608] to-[#1a1007] hover:border-[#dca750]/40 hover:bg-[#26180a]"
          }`}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
          </div>

          <div className="relative flex items-center gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-sm font-black tracking-wider transition-all duration-300 ${
                selectedBrand === "all"
                  ? "border-black/10 bg-black/10 text-[#341d05]"
                  : "border-[#4a3316] bg-[#2a1a0b] text-[#f0c372]"
              }`}
            >
              ALL
            </div>

            <div className="text-left">
              <h4
                className={`text-[15px] font-extrabold tracking-wide ${
                  selectedBrand === "all"
                    ? "text-[#341d05]"
                    : "text-[#f8e7c6]"
                }`}
              >
                All Brands
              </h4>

              <p
                className={`mt-1 text-xs leading-relaxed ${
                  selectedBrand === "all"
                    ? "text-[#60390d]"
                    : "text-[#a7865d]"
                }`}
              >
                Complete luxury fashion collection.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-end">
            <span
              className={`text-sm font-black ${
                selectedBrand === "all"
                  ? "text-[#341d05]"
                  : "text-[#f3d7a2]"
              }`}
            >
              {brands.length}
            </span>

            <span
              className={`mt-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
                selectedBrand === "all"
                  ? "text-[#5f3a10]"
                  : "text-[#8f6d45]"
              }`}
            >
              Collections
            </span>
          </div>
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
              className={`group relative flex w-full items-center justify-between overflow-hidden rounded-[1.7rem] border px-5 py-5 transition-all duration-300 ${
                isActive
                  ? "border-[#f1be69]/40 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] shadow-[0_14px_35px_rgba(237,191,104,0.32)]"
                  : "border-[#3a2812] bg-gradient-to-r from-[#241608] to-[#1a1007] hover:translate-x-[3px] hover:border-[#dca750]/40 hover:bg-[#26180a]"
              }`}
            >
              {/* Animated Shine */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/5 blur-2xl" />
              </div>

              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-sm font-black tracking-widest transition-all duration-300 ${
                    isActive
                      ? "border-black/10 bg-black/10 text-[#341d05]"
                      : "border-[#4a3316] bg-[#2a1a0b] text-[#f0c372]"
                  }`}
                >
                  {getBrandInitials(brand)}
                </div>

                <div className="text-left">
                  <h4
                    className={`text-[15px] font-extrabold capitalize tracking-wide ${
                      isActive
                        ? "text-[#341d05]"
                        : "text-[#f7e7c8]"
                    }`}
                  >
                    {brand}
                  </h4>

                  <p
                    className={`mt-1 text-xs leading-relaxed ${
                      isActive
                        ? "text-[#5d370f]"
                        : "text-[#aa8a63]"
                    }`}
                  >
                    Premium luxury fashion & designer essentials.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-end gap-2">
                <div className="text-right">
                  <span
                    className={`block text-sm font-black ${
                      isActive
                        ? "text-[#341d05]"
                        : "text-[#f3d7a2]"
                    }`}
                  >
                    {count}
                  </span>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                      isActive
                        ? "text-[#5d370f]"
                        : "text-[#8e6d47]"
                    }`}
                  >
                    Styles
                  </span>
                </div>

                {index < 3 && !isActive && (
                  <span className="rounded-full border border-[#e4b35d]/20 bg-[#3a240d] px-3 py-1 text-[9px] font-black uppercase tracking-[0.22em] text-[#f0c372] shadow-inner">
                    Trending
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

BrandFilter.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.string),
  selectedBrand: PropTypes.string,
  onBrandChange: PropTypes.func.isRequired,
};

export default BrandFilter;