import PropTypes from "prop-types";
import {
  FiMinus,
  FiPlus,
} from "react-icons/fi";

function QuantitySelector({
  quantity,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="relative inline-flex items-center overflow-hidden rounded-[1.5rem] border border-[#322214] bg-[linear-gradient(to_bottom,#1a1209,#120b05)] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-amber-500/10 blur-xl" />
      </div>

      {/* Decrement */}
      <button
        type="button"
        onClick={onDecrement}
        aria-label="Decrease quantity"
        className="
          group
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-transparent
          text-stone-300
          transition-all
          duration-300
          hover:border-red-500/20
          hover:bg-red-500/10
          hover:text-red-300
          active:scale-95
        "
      >
        <FiMinus
          size={16}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </button>

      {/* Quantity Display */}
      <div className="mx-1 flex min-w-[72px] flex-col items-center justify-center rounded-xl border border-[#2a1c10] bg-[#171008] px-3 py-2">
        <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
          Qty
        </span>

        <span className="text-lg font-bold text-white">
          {quantity}
        </span>
      </div>

      {/* Increment */}
      <button
        type="button"
        onClick={onIncrement}
        aria-label="Increase quantity"
        className="
          group
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-transparent
          text-stone-300
          transition-all
          duration-300
          hover:border-emerald-500/20
          hover:bg-emerald-500/10
          hover:text-emerald-300
          active:scale-95
        "
      >
        <FiPlus
          size={16}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default QuantitySelector;