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
    String(minPrice).trim() !== "" ||
    String(maxPrice).trim() !== "";

  const presets = [
    {
      label: "Under ₹2K",
      min: "",
      max: 2000,
      description: "Affordable luxury",
    },
    {
      label: "₹2K – ₹5K",
      min: 2000,
      max: 5000,
      description: "Premium essentials",
    },
    {
      label: "₹5K – ₹10K",
      min: 5000,
      max: 10000,
      description: "Designer fashion",
    },
    {
      label: "Luxury ₹10K+",
      min: 10000,
      max: "",
      description: "Elite collections",
    },
  ];

  const applyPreset = (min, max) => {
    onMinPriceChange(min);
    onMaxPriceChange(max);
  };

  const formatValue = (value, fallback) => {
    if (String(value).trim() === "") {
      return fallback;
    }

    return `₹${Number(value).toLocaleString(
      "en-IN"
    )}`;
  };

  return (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-[80%]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f3c574] shadow-[0_0_14px_rgba(243,197,116,0.9)]" />

            <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#d3aa6d]">
              Price Discovery
            </p>
          </div>

          <h3 className="mt-4 text-2xl font-black tracking-tight text-[#fff2de]">
            Luxury Budget Control
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#b6946a]">
            Discover premium collections within your
            preferred investment range using intelligent
            luxury pricing filters.
          </p>
        </div>

        {hasActivePriceFilter && (
          <button
            type="button"
            onClick={onClearPriceFilter}
            className="group relative overflow-hidden rounded-full border border-[#e0b161]/15 bg-[#241507] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.22em] text-[#ddb97c] transition-all duration-300 hover:border-[#e0b161]/40 hover:bg-[#2d1b0b] hover:text-[#fff1d6]"
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="relative z-10">
              Clear
            </span>
          </button>
        )}
      </div>

      {/* Active Price Summary */}
      <div className="overflow-hidden rounded-[1.7rem] border border-[#453018] bg-gradient-to-br from-[#241507] via-[#1a1007] to-[#120b04] p-5 shadow-inner">
        <div className="flex items-center justify-between gap-5">
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9c7849]">
              Selected Budget
            </p>

            <h4 className="mt-3 text-[1.7rem] font-black tracking-tight text-[#fff0d7]">
              {formatValue(minPrice, "₹0")}
              <span className="mx-2 text-[#c89b5f]">
                —
              </span>
              {formatValue(maxPrice, "Any")}
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-[#b39267]">
              Premium fashion investment range selected
              for refined luxury discovery.
            </p>
          </div>

          <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#e0b161]/20 bg-gradient-to-br from-[#f0c372] via-[#d69a37] to-[#b87920] text-2xl font-black text-[#2d1703] shadow-[0_12px_35px_rgba(237,191,104,0.35)]">
            <span className="absolute inset-0 bg-white/10 opacity-40" />

            <span className="relative z-10">₹</span>
          </div>
        </div>
      </div>

      {/* Presets */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8f6f45]">
              Quick Budget Picks
            </p>

            <h4 className="mt-2 text-lg font-extrabold text-[#f9ead1]">
              Smart Luxury Presets
            </h4>
          </div>

          <span className="rounded-full border border-[#f0c372]/10 bg-[#261709] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d5ae72]">
            AI Suggested
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() =>
                applyPreset(
                  preset.min,
                  preset.max
                )
              }
              className="group relative overflow-hidden rounded-[1.4rem] border border-[#3a2812] bg-gradient-to-br from-[#241608] to-[#1a1007] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#e0b161]/30 hover:bg-[#2a190b] hover:shadow-[0_14px_35px_rgba(0,0,0,0.3)]"
            >
              {/* Hover Shine */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
              </div>

              <div className="relative z-10">
                <h5 className="text-sm font-black tracking-wide text-[#f5dfb7]">
                  {preset.label}
                </h5>

                <p className="mt-2 text-xs leading-relaxed text-[#a98960]">
                  {preset.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Inputs */}
      <div>
        <div className="mb-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8f6f45]">
            Custom Budget Range
          </p>

          <h4 className="mt-2 text-lg font-extrabold text-[#f9ead1]">
            Personalized Pricing
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Minimum */}
          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b18e62]">
              Minimum Price
            </label>

            <div className="rounded-[1.3rem] border border-[#3a2812] bg-gradient-to-br from-[#241608] to-[#1a1007] p-2 transition-all duration-300 focus-within:border-[#e0b161]/40 focus-within:shadow-[0_0_0_4px_rgba(237,191,104,0.08)]">
              <Input
                type="number"
                min="0"
                value={minPrice}
                onChange={handleMinChange}
                placeholder="₹ 0"
                className="border-none bg-transparent text-[#fff0d7] placeholder:text-[#8f6f45] focus:ring-0"
              />
            </div>
          </div>

          {/* Maximum */}
          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#b18e62]">
              Maximum Price
            </label>

            <div className="rounded-[1.3rem] border border-[#3a2812] bg-gradient-to-br from-[#241608] to-[#1a1007] p-2 transition-all duration-300 focus-within:border-[#e0b161]/40 focus-within:shadow-[0_0_0_4px_rgba(237,191,104,0.08)]">
              <Input
                type="number"
                min="0"
                value={maxPrice}
                onChange={handleMaxChange}
                placeholder="₹ Any"
                className="border-none bg-transparent text-[#fff0d7] placeholder:text-[#8f6f45] focus:ring-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Button
        onClick={onApplyPriceFilter}
        className="group relative w-full overflow-hidden rounded-[1.5rem] border border-[#e0b161]/20 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#2f1903] shadow-[0_16px_40px_rgba(237,191,104,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(237,191,104,0.4)]"
      >
        <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="relative z-10">
          Apply Price Filter
        </span>
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