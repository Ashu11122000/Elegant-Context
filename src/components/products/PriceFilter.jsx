import PropTypes from "prop-types";
import Input from "../common/Input";
import Button from "../common/Button";

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

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f5e6c8]">
          Price Range
        </h3>

        {hasActivePriceFilter && (
          <button
            type="button"
            onClick={onClearPriceFilter}
            className="text-xs font-medium uppercase tracking-wider text-[#d7c3a0] transition hover:text-[#edbf68]"
          >
            Clear
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          min="0"
          value={minPrice}
          onChange={handleMinChange}
          placeholder="Min"
        />

        <Input
          type="number"
          min="0"
          value={maxPrice}
          onChange={handleMaxChange}
          placeholder="Max"
        />
      </div>

      <Button
        onClick={onApplyPriceFilter}
        className="w-full"
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