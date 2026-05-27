// src/components/common/Pagination.jsx

import PropTypes from "prop-types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let page = 1; page <= totalPages; page += 1) {
        pages.push(page);
      }

      return pages;
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

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-all duration-300 hover:border-amber-500 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FiChevronLeft size={18} />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {pageNumbers.map((page, index) => {
        const key =
          typeof page === "string"
            ? `ellipsis-${index}`
            : `page-${page}`;

        if (page === "...") {
          return (
            <span
              key={key}
              className="px-2 text-sm font-medium text-stone-500"
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
            aria-current={isActive ? "page" : undefined}
            className={`h-11 w-11 rounded-xl border text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "border-amber-900 bg-amber-900 text-white shadow-md"
                : "border-stone-200 bg-white text-stone-700 hover:border-amber-500 hover:bg-amber-50"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-all duration-300 hover:border-amber-500 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span className="hidden sm:inline">Next</span>
        <FiChevronRight size={18} />
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