import PropTypes from "prop-types";
import Input from "../UI/Input";
import Button from "../UI/Button";

function PriceFilter({
  minPrice = "",
  maxPrice = "",
  onMinPriceChange,
  onMaxPriceChange,
  onApplyPriceFilter,
  onClearPriceFilter,
}) {
  const handleMinChange = (event) => {
    onMinPriceChange(event.target.value);
  };

  const handleMaxChange = (event) => {
    onMaxPriceChange(event.target.value);
  };

  const hasActivePriceFilter =
    String(minPrice).trim() !== "" || String(maxPrice).trim() !== "";

  const presets = [
    { label: "Under ₹2K", min: "", max: 2000 },
    { label: "₹2K–₹5K", min: 2000, max: 5000 },
    { label: "₹5K–₹10K", min: 5000, max: 10000 },
    { label: "Luxury ₹10K+", min: 10000, max: "" },
  ];

  const applyPreset = (min, max) => {
    onMinPriceChange(min);
    onMaxPriceChange(max);
  };

  const formatValue = (value, fallback) => {
    if (String(value).trim() === "") return fallback;
    return `₹${value}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f5e6c8]">
            Price Discovery
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
            Refine your shopping journey by selecting your ideal investment
            range.
          </p>
        </div>

        {hasActivePriceFilter && (
          <button
            type="button"
            onClick={onClearPriceFilter}
            className="rounded-full border border-amber-300/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d7c3a0] transition-all duration-300 hover:border-amber-300/30 hover:bg-amber-400/10 hover:text-[#edbf68]"
          >
            Clear
          </button>
        )}
      </div>

      {/* Active Price Summary */}
      <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
          Selected Budget
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-[#f8e8c8]">
              {formatValue(minPrice, "₹0")} — {formatValue(maxPrice, "Any")}
            </p>

            <p className="mt-1 text-xs text-[#9e8864]">
              Premium fashion budget range
            </p>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-xl font-bold text-[#1a1205] shadow-lg">
            ₹
          </div>
        </div>
      </div>

      {/* Quick Presets */}
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
          Quick Budget Picks
        </p>

        <div className="grid grid-cols-2 gap-3">
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => applyPreset(preset.min, preset.max)}
              className="rounded-2xl border border-white/8 bg-gradient-to-r from-[#2a1d0b] to-[#1d1407] px-4 py-3 text-xs font-medium text-[#d8c5a4] transition-all duration-300 hover:border-amber-300/20 hover:bg-amber-400/10 hover:text-[#f5e6c8]"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Inputs */}
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
          Custom Range
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#9e8864]">
              Minimum
            </label>

            <Input
              type="number"
              min="0"
              value={minPrice}
              onChange={handleMinChange}
              placeholder="₹ 0"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#9e8864]">
              Maximum
            </label>

            <Input
              type="number"
              min="0"
              value={maxPrice}
              onChange={handleMaxChange}
              placeholder="₹ Any"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <Button
        onClick={onApplyPriceFilter}
        className="w-full rounded-2xl border border-amber-300/20 bg-gradient-to-r from-[#edbf68] to-[#d79b35] px-6 py-4 font-semibold text-[#1a1205] shadow-[0_10px_30px_rgba(237,191,104,0.25)] transition-all duration-300 hover:scale-[1.02]"
      >
        Apply Price Filter
      </Button>
    </div>
  );
}

PriceFilter.propTypes = {
  minPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  maxPrice: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onMinPriceChange: PropTypes.func.isRequired,
  onMaxPriceChange: PropTypes.func.isRequired,
  onApplyPriceFilter: PropTypes.func.isRequired,
  onClearPriceFilter: PropTypes.func.isRequired,
};

export default PriceFilter;