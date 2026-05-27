import PropTypes from "prop-types";
import {
  FaStar,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";
import RatingStars from "../UI/RatingStars";

const RATING_OPTIONS = [4, 3, 2, 1];

function RatingFilter({
  selectedRating = 0,
  onRatingChange,
}) {
  const activeLabel =
    selectedRating > 0
      ? `${selectedRating}+ Star Products`
      : "All Customer Ratings";

  const getReviewInsight = (rating) => {
    const insights = {
      4: "Top-rated premium picks",
      3: "Highly trusted customer choices",
      2: "Well-reviewed curated products",
      1: "All rated customer selections",
    };

    return insights[rating];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8f7855]">
            Trust Filter
          </p>

          <h3 className="mt-3 text-xl font-semibold text-[#f8e8c8]">
            Customer Ratings
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-[#a88f68]">
            Discover premium products trusted by verified shoppers.
          </p>
        </div>

        {selectedRating > 0 && (
          <button
            type="button"
            onClick={() => onRatingChange(0)}
            className="rounded-full border border-amber-300/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d7c3a0] transition-all duration-300 hover:border-amber-300/30 hover:bg-amber-400/10 hover:text-[#edbf68]"
          >
            Clear
          </button>
        )}
      </div>

      {/* Active Summary */}
      <div className="rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#edbf68] to-[#c9922f] text-xl text-[#1a1205] shadow-lg">
            <FaAward />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8f7855]">
              Active Rating Filter
            </p>

            <p className="mt-2 text-lg font-semibold text-[#f8e8c8]">
              {activeLabel}
            </p>

            <p className="mt-1 text-xs text-[#a88f68]">
              Premium shopper confidence insights
            </p>
          </div>
        </div>
      </div>

      {/* Rating Options */}
      <div className="space-y-4">
        {RATING_OPTIONS.map((rating) => {
          const isActive = selectedRating === rating;

          return (
            <button
              key={rating}
              type="button"
              onClick={() => onRatingChange(rating)}
              className={`group w-full rounded-3xl border p-5 text-left transition-all duration-300 ${
                isActive
                  ? "border-amber-300/30 bg-gradient-to-r from-[#edbf68] to-[#d79b35] text-[#1a1205] shadow-[0_12px_35px_rgba(237,191,104,0.25)]"
                  : "border-white/8 bg-gradient-to-r from-[#2a1d0b] to-[#1d1407] text-[#d7c3a0] hover:border-amber-300/20 hover:-translate-y-1"
              }`}
            >
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isActive
                        ? "bg-black/10"
                        : "bg-white/5 text-[#edbf68]"
                    }`}
                  >
                    <FaStar />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <RatingStars rating={rating} />

                      <span
                        className={`text-sm font-medium ${
                          isActive
                            ? "text-[#3b2a0e]"
                            : "text-[#d7c3a0]"
                        }`}
                      >
                        & Up
                      </span>
                    </div>

                    <p
                      className={`mt-2 text-xs ${
                        isActive
                          ? "text-[#3b2a0e]"
                          : "text-[#a88f68]"
                      }`}
                    >
                      {getReviewInsight(rating)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  {isActive ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                      <FaCheckCircle />
                    </div>
                  ) : (
                    <span className="h-5 w-5 rounded-full border border-[#d7c3a0]/30 transition group-hover:border-[#edbf68]" />
                  )}

                  {rating >= 4 && !isActive && (
                    <span className="rounded-full bg-amber-400/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#edbf68]">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Trust Note */}
      <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/10 p-4">
        <FaCheckCircle className="mt-1 text-[#edbf68]" />

        <div>
          <p className="text-sm font-medium text-[#f8e8c8]">
            Verified Shopper Trust
          </p>

          <p className="mt-2 text-xs leading-relaxed text-[#a88f68]">
            Filter products based on customer satisfaction, quality confidence,
            and premium shopping experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

RatingFilter.propTypes = {
  selectedRating: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired,
};

export default RatingFilter;