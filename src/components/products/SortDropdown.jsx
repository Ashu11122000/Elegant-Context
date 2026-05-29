import PropTypes from "prop-types";

import {
  FaSortAmountDown,
  FaGem,
  FaArrowUp,
  FaArrowDown,
  FaStar,
  FaClock,
  FaFont,
  FaCrown,
  FaChevronDown,
  FaCheckCircle,
  FaLayerGroup,
  FaBolt,
} from "react-icons/fa";

import { HiSparkles } from "react-icons/hi";

const SORT_OPTIONS = [
  {
    label: "Featured",
    value: "featured",
    description:
      "Curated luxury recommendations",
    icon: <FaGem />,
    highlight: "Recommended",
  },
  {
    label: "Newest Arrivals",
    value: "newest",
    description:
      "Latest additions to collections",
    icon: <FaClock />,
    highlight: "Fresh",
  },
  {
    label: "Price: Low to High",
    value: "price-asc",
    description:
      "Smart budget-friendly discovery",
    icon: <FaArrowUp />,
    highlight: "Value",
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
    description:
      "Luxury-first premium browsing",
    icon: <FaArrowDown />,
    highlight: "Luxury",
  },
  {
    label: "Top Rated",
    value: "rating-desc",
    description:
      "Highest verified customer ratings",
    icon: <FaStar />,
    highlight: "Popular",
  },
  {
    label: "Name: A to Z",
    value: "name-asc",
    description:
      "Alphabetical collection browsing",
    icon: <FaFont />,
    highlight: "A-Z",
  },
  {
    label: "Name: Z to A",
    value: "name-desc",
    description:
      "Reverse alphabetical browsing",
    icon: <FaFont />,
    highlight: "Z-A",
  },
];

function SortDropdown({
  selectedSort = "featured",
  onSortChange,
}) {
  const activeSort =
    SORT_OPTIONS.find(
      (option) =>
        option.value === selectedSort
    ) || SORT_OPTIONS[0];

  return (
    <section
      className="
        relative overflow-hidden rounded-[2.4rem]
        border border-[#352514]
        bg-[#0c0805]
        shadow-[0_40px_120px_rgba(0,0,0,0.72)]
      "
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,195,114,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(240,195,114,0.05),transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.02),transparent)]" />

      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#f0c372]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#f0c372]/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] border border-white/[0.03]" />

      <div className="relative z-10 space-y-8 p-6 sm:p-7">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center gap-6">
          {/* Icon */}
          <div
            className="
              relative flex h-18 w-18 shrink-0
              items-center justify-center
              rounded-[1.8rem]
              border border-[#f0c372]/20
              bg-gradient-to-br from-[#f4ce85] via-[#dca94b] to-[#c8862b]
              text-2xl text-[#241405]
              shadow-[0_22px_45px_rgba(237,191,104,0.25)]
            "
          >
            <div className="absolute inset-[1px] rounded-[1.7rem] border border-white/10" />

            <FaSortAmountDown className="relative z-10" />
          </div>

          <div className="max-w-[300px] mx-auto text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#f0c372]/10 bg-[#1a120b] px-4 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
              <FaCrown className="text-[10px] text-[#f0c372]" />

              <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#d2a967]">
                Discovery Control
              </span>
            </div>

            <h3 className="mt-5 text-[2rem] font-black tracking-tight text-[#fff3df]">
              Sort Products
            </h3>

            <p className="mt-4 text-sm leading-[2] text-[#b69469] sm:text-[15px]">
              Refine how collections appear
              with intelligent sorting
              preferences crafted for modern
              luxury discovery experiences.
            </p>
          </div>
        </div>

                {/* ================= ACTIVE SORT CARD ================= */}
        <div
          className="
            group relative overflow-hidden rounded-[2rem]
            border border-[#352514]
            bg-[linear-gradient(to_bottom,#1a120b,#120c07)]
            p-6
            shadow-[0_22px_50px_rgba(0,0,0,0.4)]
          "
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#f0c372]/5 blur-3xl" />

          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/5 blur-2xl" />
          </div>

          <div className="relative flex flex-col items-center justify-center text-center gap-6">
            <div className="flex flex-col items-center justify-center gap-5">
              <div
                className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-[1.5rem]
                  bg-gradient-to-br from-[#f4ce85] to-[#c8862b]
                  text-2xl text-[#241405]
                  shadow-[0_14px_35px_rgba(237,191,104,0.22)]
                "
              >
                {activeSort.icon}
              </div>

              <div className="max-w-[260px] text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#b7935a]">
                  Active Sort Mode
                </p>

                <h4 className="mt-3 text-[1.8rem] font-black tracking-tight text-[#fff1db]">
                  {activeSort.label}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-[#ab9575]">
                  {activeSort.description}
                </p>
              </div>
            </div>

<div className="mx-auto flex w-fit max-w-full items-center justify-center gap-2 rounded-full border border-[#f0c372]/15 bg-[#22160c] px-4 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
  <FaBolt className="shrink-0 text-[10px] text-[#f0c372]" />

  <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#f0c372]">
    {activeSort.highlight}
  </span>
</div>

</div>
</div>

</div>

        {/* ================= SELECT ================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <HiSparkles className="text-[11px] text-[#f0c372]" />

            <label
              htmlFor="product-sort"
              className="text-[10px] font-black uppercase tracking-[0.28em] text-[#b7935a]"
            >
              Sorting Preference
            </label>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 rounded-[1.9rem] bg-gradient-to-r from-[#f0c372]/0 via-[#f0c372]/10 to-[#f0c372]/0 opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />

            <div className="pointer-events-none absolute right-6 top-1/2 z-10 -translate-y-1/2 text-[#c5a980] transition-all duration-300 group-focus-within:text-[#f0c372]">
              <FaChevronDown />
            </div>

            <select
              id="product-sort"
              value={selectedSort}
              onChange={(event) =>
                onSortChange(
                  event.target.value
                )
              }
              aria-label="Sort products"
              className="
                relative z-10 w-full appearance-none
                rounded-[1.9rem]
                border border-[#352514]
                bg-[linear-gradient(to_bottom,#1b120b,#130c07)]
                px-6 py-5 pr-16
                text-[15px]
                font-semibold
                tracking-wide
                text-[#fff1db]
                outline-none
                shadow-[0_18px_40px_rgba(0,0,0,0.3)]
                transition-all duration-300
                focus:border-[#f0c372]/30
                focus:shadow-[0_0_0_4px_rgba(240,195,114,0.08)]
              "
            >
              {SORT_OPTIONS.map(
                (option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-[#140d07] text-[#fff1db]"
                  >
                    {option.label}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

                {/* ================= SORT OPTIONS PREVIEW ================= */}
        <div className="grid gap-4">
          {SORT_OPTIONS.slice(0, 4).map(
            (option) => {
              const isActive =
                option.value ===
                selectedSort;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    onSortChange(
                      option.value
                    )
                  }
                  className={`
                    group relative overflow-hidden rounded-[1.7rem]
                    border p-6 text-center
                    transition-all duration-300
                    ${
                      isActive
                        ? `
                          border-[#f0c372]/25
                          bg-gradient-to-r from-[#f0c372] via-[#dca94b] to-[#c8862b]
                          text-[#241405]
                          shadow-[0_18px_40px_rgba(237,191,104,0.22)]
                        `
                        : `
                          border-[#352514]
                          bg-[linear-gradient(to_bottom,#1a120b,#120c07)]
                          text-[#d3b48a]
                          hover:-translate-y-1
                          hover:border-[#f0c372]/15
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
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div
                        className={`
                          flex h-12 w-12 items-center justify-center rounded-[1.2rem]
                          ${
                            isActive
                              ? "bg-black/10 text-[#2b1804]"
                              : "border border-[#f0c372]/10 bg-[#1f140c] text-[#f0c372]"
                          }
                        `}
                      >
                        {option.icon}
                      </div>

                      <div className="max-w-[220px] text-center">
                        <h4
                          className={`text-sm font-black tracking-wide ${
                            isActive
                              ? "text-[#241405]"
                              : "text-[#fff1db]"
                          }`}
                        >
                          {option.label}
                        </h4>

                        <p
                          className={`mt-2 text-center text-xs leading-relaxed ${
                            isActive
                              ? "text-[#3d2508]"
                              : "text-[#9f8059]"
                          }`}
                        >
                          {
                            option.description
                          }
                        </p>
                      </div>
                    </div>

                    {isActive ? (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-[#241405]">
                        <FaCheckCircle />
                      </div>
                    ) : (
                      <div className="mx-auto h-5 w-5 rounded-full border border-[#5c4731]" />
                    )}
                  </div>
                </button>
              );
            }
          )}
        </div>

        {/* ================= BOTTOM INSIGHT ================= */}
        <div
          className="
            relative overflow-hidden rounded-[1.9rem]
            border border-[#352514]
            bg-[linear-gradient(to_bottom,#161008,#100904)]
            p-6
            shadow-[0_16px_40px_rgba(0,0,0,0.35)]
          "
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#f0c372] to-[#9c6921]" />

          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#f0c372]/5 blur-3xl" />

          <div className="relative flex flex-col items-center justify-center text-center gap-5">
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-[1.3rem]
                border border-[#f0c372]/15
                bg-gradient-to-br from-[#f0c372]/15 to-[#f0c372]/5
                text-[#f0c372]
              "
            >
              <FaLayerGroup />
            </div>

            <div className="max-w-[280px] mx-auto">
              <p className="text-sm font-black tracking-wide text-[#fff1db]">
                Smart Discovery Insight
              </p>

              <p className="mt-3 text-sm leading-[2] text-[#ab9575]">
                Featured sorting intelligently
                prioritizes curated selections,
                verified customer favorites,
                premium discoveries, and modern
                luxury essentials for a more
                elevated shopping experience.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}

SortDropdown.propTypes = {
  selectedSort: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
};

export default SortDropdown;