import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiCheckCircle,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

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
      description: "Affordable luxury essentials",
      tag: "Entry",
    },
    {
      label: "₹2K – ₹5K",
      min: 2000,
      max: 5000,
      description: "Premium everyday styles",
      tag: "Popular",
    },
    {
      label: "₹5K – ₹10K",
      min: 5000,
      max: 10000,
      description: "Designer curated fashion",
      tag: "Luxury",
    },
    {
      label: "₹10K+",
      min: 10000,
      max: "",
      description: "Elite statement collections",
      tag: "Exclusive",
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
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FiTrendingUp
              size={14}
              className="text-[#f0c372]"
            />

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#cba46a]">
              Price Range
            </p>
          </div>

          <h3 className="mt-4 text-[2rem] font-black leading-tight text-[#fff1d6]">
            Luxury Budget
            <span className="block text-[#d8b277]">
              Control
            </span>
          </h3>
        </div>

        <div className="rounded-full border border-[#e0b161]/15 bg-[#241507] px-5 py-2">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ddb97c]">
            Flexible
          </span>
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: "Flexible",
            value: "4+",
            icon: FiTrendingUp,
          },
          {
            label: "Luxury",
            value: "100%",
            icon: FiCheckCircle,
          },
          {
            label: "Curated",
            value: "AI",
            icon: FiDollarSign,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-[2rem] border border-[#3f2b15] bg-gradient-to-br from-[#241608] via-[#1b1108] to-[#130b05] px-3 py-5"
            >
              <div className="flex flex-col items-center justify-center text-center">
                {/* ICON */}
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] border border-[#e0b161]/15 bg-[#2a190b]">
                  <Icon
                    size={20}
                    className="text-[#f0c372]"
                  />
                </div>

                {/* VALUE */}
                <h4 className="mt-5 text-[2rem] font-black leading-none tracking-tight text-[#fff1d6]">
                  {item.value}
                </h4>

                {/* LABEL */}
                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#b8925f]">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ACTIVE SUMMARY */}
      <div className="rounded-[2rem] border border-[#453018] bg-gradient-to-br from-[#241507] via-[#1a1007] to-[#120b04] p-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#f0c372] via-[#d69a37] to-[#b87920] text-2xl font-black text-[#2d1703]">
            ₹
          </div>

          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#9c7849]">
            Selected Budget
          </p>

          <h4 className="mt-4 text-[1.9rem] font-black text-[#fff0d7]">
            {formatValue(minPrice, "₹0")}

            <span className="mx-2 text-[#c89b5f]">
              —
            </span>

            {formatValue(maxPrice, "Any")}
          </h4>

          {hasActivePriceFilter && (
            <button
              type="button"
              onClick={onClearPriceFilter}
              className="mt-5 rounded-full border border-[#e0b161]/15 bg-[#241507] px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#ddb97c]"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      {/* PRESETS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            className="rounded-[1.8rem] border border-[#3a2812] bg-gradient-to-br from-[#241608] to-[#1a1007] p-5 text-center transition-all duration-300 hover:border-[#e0b161]/30"
          >
            <div className="flex flex-col items-center justify-center">
              <span className="rounded-full border border-[#e0b161]/15 bg-[#32200d] px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                {preset.tag}
              </span>

              <h5 className="mt-4 text-lg font-black text-[#f5dfb7]">
                {preset.label}
              </h5>

              <p className="mt-3 text-sm leading-relaxed text-[#a98960]">
                {preset.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8b277]">
                Explore

                <FiArrowRight size={13} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* INPUTS */}
      <div className="space-y-5">
        {/* MINIMUM PRICE */}
        <div className="rounded-[2rem] border border-[#3a2812] bg-gradient-to-br from-[#241608] to-[#1a1007] px-6 py-7">
          <div className="flex flex-col items-center text-center">
            <label className="text-[11px] font-black uppercase tracking-[0.32em] text-[#b18e62]">
              Minimum Price
            </label>

            <div className="mt-6 w-full rounded-[1.8rem] border border-[#4a3317] bg-[#1a1109] p-4">
              <Input
                type="number"
                min="0"
                value={minPrice}
                onChange={handleMinChange}
                placeholder="₹ 0"
                className="h-16 w-full border-none bg-transparent text-center text-[1.4rem] font-bold tracking-wide text-[#fff0d7] placeholder:text-[#7f6340] focus:ring-0"
              />
            </div>
          </div>
        </div>

        {/* MAXIMUM PRICE */}
        <div className="rounded-[2rem] border border-[#3a2812] bg-gradient-to-br from-[#241608] to-[#1a1007] px-6 py-7">
          <div className="flex flex-col items-center text-center">
            <label className="text-[11px] font-black uppercase tracking-[0.32em] text-[#b18e62]">
              Maximum Price
            </label>

            <div className="mt-6 w-full rounded-[1.8rem] border border-[#4a3317] bg-[#1a1109] p-4">
              <Input
                type="number"
                min="0"
                value={maxPrice}
                onChange={handleMaxChange}
                placeholder="₹ Any"
                className="h-16 w-full border-none bg-transparent text-center text-[1.4rem] font-bold tracking-wide text-[#fff0d7] placeholder:text-[#7f6340] focus:ring-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Button
        onClick={onApplyPriceFilter}
        className="group relative w-full overflow-hidden rounded-[1.8rem] border border-[#e0b161]/20 bg-gradient-to-r from-[#f0c372] via-[#ddab4e] to-[#c78628] px-6 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#2f1903] shadow-[0_16px_40px_rgba(237,191,104,0.3)] transition-all duration-300 hover:scale-[1.02]"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Apply Price Filter

          <FiArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
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