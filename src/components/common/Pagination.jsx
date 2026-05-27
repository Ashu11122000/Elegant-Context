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
    "group inline-flex items-center gap-2 rounded-2xl border border-stone-200/70 bg-white/90 px-5 py-3 text-sm font-semibold tracking-wide text-stone-700 shadow-md shadow-stone-200/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0";

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-stone-200/70 bg-gradient-to-br from-white via-stone-50 to-amber-50/30 p-4 shadow-xl shadow-stone-200/30 backdrop-blur-sm ${className}`}
    >
      <button
        type="button"
        onClick={() =>
          onPageChange(currentPage - 1)
        }
        disabled={currentPage === 1}
        className={navigationButtonClasses}
      >
        <FiChevronLeft
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        <span className="hidden sm:inline">
          Previous
        </span>
      </button>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {pageNumbers.map((page, index) => {
          const key =
            typeof page === "string"
              ? `ellipsis-${index}`
              : `page-${page}`;

          if (page === "...") {
            return (
              <span
                key={key}
                className="px-2 text-sm font-semibold tracking-wide text-stone-400"
              >
                ...
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
              className={`relative h-12 w-12 rounded-2xl border text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border-amber-900 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white shadow-xl shadow-amber-900/20"
                  : "border-stone-200/70 bg-white/90 text-stone-700 shadow-sm backdrop-blur-sm hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50 hover:shadow-md"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() =>
          onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={navigationButtonClasses}
      >
        <span className="hidden sm:inline">
          Next
        </span>

        <FiChevronRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
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