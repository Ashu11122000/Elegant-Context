import PropTypes from "prop-types";
import RatingStars from "../UI/RatingStars";

const RATING_OPTIONS = [4, 3, 2, 1];

function RatingFilter({
  selectedRating = 0,
  onRatingChange,
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#f5e6c8]">
          Customer Rating
        </h3>

        {selectedRating > 0 && (
          <button
            type="button"
            onClick={() => onRatingChange(0)}
            className="text-xs font-medium uppercase tracking-wider text-[#d7c3a0] transition hover:text-[#edbf68]"
          >
            Clear
          </button>
        )}
      </div>

      <div className="space-y-3">
        {RATING_OPTIONS.map((rating) => {
          const isActive = selectedRating === rating;

          return (
            <button
              key={rating}
              type="button"
              onClick={() => onRatingChange(rating)}
              className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                isActive
                  ? "border-[#edbf68] bg-[#edbf68]/10"
                  : "border-[#edbf68]/10 bg-[#2d1f08] hover:border-[#edbf68]/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <RatingStars rating={rating} />
                <span className="text-sm text-[#d7c3a0]">& Up</span>
              </div>

              <span
                className={`h-4 w-4 rounded-full border transition ${
                  isActive
                    ? "border-[#edbf68] bg-[#edbf68]"
                    : "border-[#d7c3a0]/40"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

RatingFilter.propTypes = {
  selectedRating: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired,
};

export default RatingFilter;