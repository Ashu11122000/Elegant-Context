import PropTypes from "prop-types";

function BrandFilter({
  brands = [],
  selectedBrand = "all",
  onBrandChange,
}) {
  if (!brands.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f5e6c8]">
          Brand
        </h3>

        {selectedBrand !== "all" && (
          <button
            type="button"
            onClick={() => onBrandChange("all")}
            className="text-xs font-medium uppercase tracking-wider text-[#d7c3a0] transition hover:text-[#edbf68]"
          >
            Clear
          </button>
        )}
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={() => onBrandChange("all")}
          className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
            selectedBrand === "all"
              ? "bg-[#edbf68] text-[#1f1606]"
              : "bg-[#2d1f08] text-[#d7c3a0] hover:bg-[#edbf68]/10 hover:text-[#edbf68]"
          }`}
        >
          All Brands
        </button>

        {brands.map((brand) => {
          const normalizedBrand = brand.toLowerCase();
          const isActive = selectedBrand === normalizedBrand;

          return (
            <button
              key={brand}
              type="button"
              onClick={() => onBrandChange(normalizedBrand)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium capitalize transition ${
                isActive
                  ? "bg-[#edbf68] text-[#1f1606]"
                  : "bg-[#2d1f08] text-[#d7c3a0] hover:bg-[#edbf68]/10 hover:text-[#edbf68]"
              }`}
            >
              {brand}
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