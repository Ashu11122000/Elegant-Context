// src/components/common/Pagination.jsx

import PropTypes from "prop-types";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) {
  if (totalPages <= 1) {
    return null;
  }

  const createPageNumbers = () => {
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pageNumbers = createPageNumbers();

  const navigationButtonClasses =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/30 bg-white/70 px-5 py-3 text-sm font-bold tracking-[0.08em] text-stone-700 shadow-[0_8px_25px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-200/60 hover:bg-white/90 hover:text-amber-950 hover:shadow-[0_16px_40px_rgba(120,53,15,0.14)] disabled:pointer-events-none disabled:opacity-40";

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`relative isolate flex flex-wrap items-center justify-center gap-4 overflow-hidden rounded-[2rem] border border-white/30 bg-gradient-to-br from-[#fffdfb] via-[#fdf8f3] to-[#f5efe7] p-5 shadow-[0_20px_70px_rgba(120,53,15,0.10)] backdrop-blur-2xl ${className}`}
    >
      {/* Luxury Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.08),transparent_32%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

      {/* Previous Button */}
      <button
        type="button"
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        disabled={currentPage === 1}
        className={navigationButtonClasses}
      >
        {/* Hover Shine */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <FiChevronLeft
          size={18}
          className="relative z-10 transition-transform duration-500 group-hover:-translate-x-1"
        />

        <span className="relative z-10 hidden sm:inline">
          Previous
        </span>
      </button>

      {/* Page Numbers */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
        {pageNumbers.map((page, index) => {
          const key =
            typeof page === "string"
              ? `ellipsis-${index}`
              : `page-${page}`;

          if (page === "...") {
            return (
              <span
                key={key}
                className="px-2 text-sm font-bold tracking-[0.2em] text-stone-400"
              >
                •••
              </span>
            );
          }

          const isActive = currentPage === page;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={
                isActive ? "page" : undefined
              }
              className={`group relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-2xl border text-sm font-bold transition-all duration-500 ${
                isActive
                  ? "border-amber-900/30 bg-gradient-to-br from-[#1f1307] via-[#5b3415] to-[#120d08] text-amber-50 shadow-[0_16px_40px_rgba(120,53,15,0.30)]"
                  : "border-white/30 bg-white/70 text-stone-700 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl hover:-translate-y-1 hover:border-amber-200/60 hover:bg-white/90 hover:text-amber-950 hover:shadow-[0_14px_35px_rgba(120,53,15,0.12)]"
              }`}
            >
              {/* Active Glow */}
              {isActive && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />

                  <span className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/10 blur-xl" />
                </>
              )}

              {/* Hover Shine */}
              {!isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              )}

              <span className="relative z-10">
                {page}
              </span>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={navigationButtonClasses}
      >
        {/* Hover Shine */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="relative z-10 hidden sm:inline">
          Next
        </span>

        <FiChevronRight
          size={18}
          className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
        />
      </button>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Pagination;