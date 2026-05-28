import PropTypes from "prop-types";
import {
  FaStar,
  FaCheckCircle,
  FaAward,
  FaCrown,
  FaGem,
  FaShieldAlt,
} from "react-icons/fa";
import RatingStars from "../UI/RatingStars";

const RATING_OPTIONS = [4, 3, 2, 1];

function RatingFilter({
  selectedRating = 0,
  onRatingChange,
}) {
  const activeLabel =
    selectedRating > 0
      ? `${selectedRating}+ Star Premium Products`
      : "All Customer Ratings";

  const getReviewInsight = (rating) => {
    const insights = {
      4: "Elite premium customer favorites",
      3: "Highly trusted luxury selections",
      2: "Well-reviewed curated collections",
      1: "Explore all customer experiences",
    };

    return insights[rating];
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[#c9a86a]/15 bg-gradient-to-br from-[#19130d] via-[#120f0b] to-[#0d0a07] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-7">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-yellow-200/5 blur-3xl" />

      <div className="relative z-10 space-y-7">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b57b]/15 bg-[#241b13]/80 px-4 py-1.5 backdrop-blur-xl">
              <FaShieldAlt className="text-[10px] text-[#f0c879]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c9a56c]">
                Trust Filter
              </span>
            </div>

            <h3 className="mt-5 text-[1.9rem] font-black tracking-tight text-[#f5efe4] sm:text-[2rem]">
              Customer Ratings
            </h3>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#b09b7f] sm:text-[15px]">
              Discover luxury products trusted by verified shoppers and premium
              customer experiences worldwide.
            </p>
          </div>

          {/* Premium Icon */}
          <div className="flex items-center gap-3">
            {selectedRating > 0 && (
              <button
                type="button"
                onClick={() => onRatingChange(0)}
                className="
                  rounded-full
                  border border-[#d6b57b]/15
                  bg-[#241b13]/90
                  px-5 py-2.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#ceb087]
                  transition-all duration-300
                  hover:border-[#f0c879]/30
                  hover:bg-[#302317]
                  hover:text-[#f0c879]
                "
              >
                Clear Filter
              </button>
            )}

            <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.7rem] border border-[#f0c879]/20 bg-gradient-to-br from-[#f0c879] via-[#d9a84d] to-[#9b6822] text-2xl text-[#261707] shadow-[0_15px_35px_rgba(240,200,121,0.25)]">
              <div className="absolute inset-[1px] rounded-[1.6rem] border border-white/10" />

              <FaAward className="relative z-10" />
            </div>
          </div>
        </div>

        {/* Active Summary */}
        <div className="relative overflow-hidden rounded-[1.9rem] border border-[#d6b57b]/12 bg-gradient-to-r from-[#241b13] to-[#17110c] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          {/* Glow */}
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f0c879]/5 blur-3xl" />

          <div className="relative flex items-center gap-5">
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#f0c879] to-[#c98a29] text-2xl text-[#241405] shadow-[0_10px_30px_rgba(240,200,121,0.25)]">
              <FaGem />
            </div>

            {/* Content */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b79259]">
                Active Rating Filter
              </p>

              <h4 className="mt-2 text-xl font-black tracking-tight text-[#f6efe4]">
                {activeLabel}
              </h4>

              <p className="mt-1 text-sm text-[#aa9576]">
                Premium shopper confidence & verified trust insights
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
                className={`
                  group relative w-full overflow-hidden rounded-[1.9rem]
                  border p-5 text-left
                  transition-all duration-300
                  ${
                    isActive
                      ? `
                        border-[#f0c879]/30
                        bg-gradient-to-r
                        from-[#f0c879]
                        via-[#d9a84d]
                        to-[#b97b1e]
                        text-[#241405]
                        shadow-[0_18px_40px_rgba(240,200,121,0.22)]
                      `
                      : `
                        border-[#d6b57b]/10
                        bg-gradient-to-r
                        from-[#241b13]
                        to-[#17110c]
                        text-[#ceb087]
                        hover:-translate-y-1
                        hover:border-[#f0c879]/20
                        hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]
                      `
                  }
                `}
              >
                {/* Hover Glow */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f0c879]/0 via-[#f0c879]/5 to-[#f0c879]/0 opacity-0 transition duration-500 group-hover:opacity-100" />
                )}

                <div className="relative flex items-center justify-between gap-5">
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div
                      className={`
                        flex h-14 w-14 items-center justify-center rounded-2xl
                        ${
                          isActive
                            ? "bg-black/10 text-[#2d1b06]"
                            : "border border-[#d6b57b]/10 bg-[#2a1f15] text-[#f0c879]"
                        }
                      `}
                    >
                      <FaStar className="text-lg" />
                    </div>

                    {/* Rating Info */}
                    <div>
                      <div className="flex items-center gap-3">
                        <RatingStars rating={rating} />

                        <span
                          className={`text-sm font-semibold tracking-wide ${
                            isActive
                              ? "text-[#2b1b07]"
                              : "text-[#d3b48a]"
                          }`}
                        >
                          & Up
                        </span>
                      </div>

                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          isActive
                            ? "text-[#3a2508]"
                            : "text-[#a89272]"
                        }`}
                      >
                        {getReviewInsight(rating)}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col items-end gap-3">
                    {isActive ? (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-[#2d1b06]">
                        <FaCheckCircle />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full border border-[#c9ab83]/30 transition-all duration-300 group-hover:border-[#f0c879]" />
                    )}

                    {rating >= 4 && !isActive && (
                      <div className="inline-flex items-center gap-1 rounded-full border border-[#f0c879]/10 bg-[#f0c879]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#f0c879]">
                        <FaCrown className="text-[8px]" />
                        Bestseller
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d6b57b]/10 bg-[#15110c]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          {/* Accent Line */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c879] to-[#9c6921]" />

          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f0c879]/15 bg-gradient-to-br from-[#f0c879]/15 to-[#f0c879]/5 text-[#f0c879]">
              <FaCheckCircle />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold tracking-wide text-[#f5efe4]">
                Verified Shopper Trust
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#aa9575]">
                Filter products using real customer satisfaction, premium
                quality confidence, and authentic luxury shopping experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

RatingFilter.propTypes = {
  selectedRating: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired,
};

export default RatingFilter;