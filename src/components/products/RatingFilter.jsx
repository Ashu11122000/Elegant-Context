import PropTypes from "prop-types";
import {
  FaStar,
  FaCheckCircle,
  FaAward,
  FaCrown,
  FaGem,
  FaShieldAlt,
  FaArrowRight,
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
      4: "Top rated customer favorites",
      3: "Highly trusted luxury picks",
      2: "Well-reviewed curated products",
      1: "Explore every customer experience",
    };

    return insights[rating];
  };

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-[#352514] bg-[#0d0906] shadow-[0_45px_120px_rgba(0,0,0,0.75)]">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.04),transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,0.02),transparent)]" />

      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#f0c372]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#f0c372]/5 blur-3xl" />

      <div className="relative z-10 space-y-8 p-6 sm:p-8">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c372]/10 bg-[#1c120a] px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
              <FaShieldAlt className="text-[10px] text-[#f0c372]" />

              <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#d2a967]">
                Verified Trust Filter
              </span>
            </div>

            <h3 className="mt-6 text-[2rem] font-black leading-tight tracking-tight text-[#fff3df] sm:text-[2.5rem]">
              Shop By
              <span className="block bg-gradient-to-r from-[#f3cb82] via-[#ffe4b3] to-[#c8862b] bg-clip-text text-transparent">
                Customer Ratings
              </span>
            </h3>

            <p className="mt-5 text-sm leading-[2] text-[#b69469] sm:text-base">
              Discover highly rated products trusted by verified
              shoppers, refined customer experiences, and premium
              collections curated through authentic feedback.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            {selectedRating > 0 && (
              <button
                type="button"
                onClick={() => onRatingChange(0)}
                className="
                  rounded-full
                  border border-[#f0c372]/12
                  bg-[#1d130a]
                  px-5 py-3
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-[#d3b083]
                  shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:border-[#f0c372]/25
                  hover:bg-[#291a0d]
                  hover:text-[#f0c372]
                "
              >
                Clear Filter
              </button>
            )}

            <div className="relative flex h-20 w-20 items-center justify-center rounded-[2rem] border border-[#f0c372]/20 bg-gradient-to-br from-[#f4ce85] via-[#dca94b] to-[#c8862b] shadow-[0_20px_40px_rgba(237,191,104,0.25)]">
              <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/10" />

              <FaAward className="relative z-10 text-3xl text-[#2d1702]" />
            </div>
          </div>
        </div>

                {/* ================= ACTIVE FILTER CARD ================= */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#f0c372]/10 bg-[linear-gradient(to_bottom,#1a120b,#120c07)] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f0c372]/5 blur-3xl" />

          <div className="relative flex flex-col items-center justify-center text-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-[#f4ce85] to-[#c8862b] text-[#2d1702] shadow-[0_15px_35px_rgba(237,191,104,0.25)]">
              <FaGem className="text-2xl" />
            </div>

            <div className="max-w-[280px] mx-auto">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#c89f60]">
                Active Rating Selection
              </p>

              <h4 className="mt-3 text-[1.6rem] font-black tracking-tight text-[#fff1db]">
                {activeLabel}
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-[#ae8d62]">
                Filtered using verified customer trust,
                shopping confidence, and authentic luxury
                experiences.
              </p>
            </div>

            <div className="mx-auto rounded-full border border-[#f0c372]/10 bg-[#241507] px-5 py-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c372]">
                Live Rating Filter
              </span>
            </div>
          </div>
        </div>

        {/* ================= RATING OPTIONS ================= */}
        <div className="space-y-5">
          {RATING_OPTIONS.map((rating) => {
            const isActive =
              selectedRating === rating;

            return (
              <button
                key={rating}
                type="button"
                onClick={() =>
                  onRatingChange(rating)
                }
                className={`
                  group relative w-full overflow-hidden rounded-[2rem]
                  border p-6 text-center transition-all duration-300
                  ${
                    isActive
                      ? `
                        border-[#f0c372]/35
                        bg-gradient-to-r
                        from-[#f4ce85]
                        via-[#dca94b]
                        to-[#c8862b]
                        text-[#2d1702]
                        shadow-[0_20px_45px_rgba(237,191,104,0.22)]
                      `
                      : `
                        border-[#352514]
                        bg-[linear-gradient(to_bottom,#1a120b,#120c07)]
                        text-[#d1b084]
                        hover:-translate-y-1
                        hover:border-[#f0c372]/20
                        hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                      `
                  }
                `}
              >
                {!isActive && (
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
                  </div>
                )}

                <div className="relative flex flex-col items-center justify-center text-center gap-5">
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div
                      className={`
                        flex h-16 w-16 items-center justify-center rounded-[1.5rem]
                        ${
                          isActive
                            ? "bg-black/10 text-[#2d1702]"
                            : "border border-[#f0c372]/10 bg-[#241608] text-[#f0c372]"
                        }
                      `}
                    >
                      <FaStar className="text-xl" />
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <RatingStars
                          rating={rating}
                        />

                        <span
                          className={`text-sm font-black tracking-wide ${
                            isActive
                              ? "text-[#2d1702]"
                              : "text-[#e0c49c]"
                          }`}
                        >
                          & Up Ratings
                        </span>
                      </div>

                      <p
                        className={`mt-3 max-w-[260px] text-center text-sm leading-[1.8] ${
                          isActive
                            ? "text-[#4a2f0b]"
                            : "text-[#aa8a62]"
                        }`}
                      >
                        {getReviewInsight(
                          rating
                        )}
                      </p>

                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {[
                          "Verified Reviews",
                          "Trusted Quality",
                          "Luxury Picks",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] ${
                              isActive
                                ? "bg-black/10 text-[#2d1702]"
                                : "border border-[#f0c372]/10 bg-[#241507] text-[#f0c372]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4">
                    {isActive ? (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/10 text-[#2d1702]">
                        <FaCheckCircle className="text-lg" />
                      </div>
                    ) : (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#f0c372]/15 bg-[#241507] transition-all duration-300 group-hover:border-[#f0c372]/30">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#6f5332] group-hover:bg-[#f0c372]" />
                      </div>
                    )}

                    {rating >= 4 &&
                      !isActive && (
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c372]/10 bg-[#241507] px-4 py-2">
                          <FaCrown className="text-[10px] text-[#f0c372]" />

                          <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#f0c372]">
                            Bestseller
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

                {/* ================= FOOTER NOTE ================= */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#352514] bg-[linear-gradient(to_bottom,#171007,#100903)] p-6 shadow-[0_25px_55px_rgba(0,0,0,0.35)]">
          {/* Accent */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c372] to-[#9c6b23]" />

          {/* Glow */}
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#f0c372]/5 blur-3xl" />

          <div className="relative flex flex-col items-center justify-center text-center gap-5">
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] border border-[#f0c372]/15 bg-gradient-to-br from-[#f0c372]/15 to-[#f0c372]/5 text-[#f0c372]">
              <FaCheckCircle className="text-lg" />
            </div>

            {/* Content */}
            <div className="max-w-[280px] mx-auto">
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm font-black tracking-wide text-[#fff1db]">
                  Verified Shopper Confidence
                </p>

                <FaArrowRight className="text-[10px] text-[#f0c372]" />
              </div>

              <p className="mt-3 text-sm leading-[1.9] text-[#ae8d62]">
                Filter collections using authentic customer
                satisfaction, premium quality assurance,
                verified shopping experiences, and trusted
                product performance insights.
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