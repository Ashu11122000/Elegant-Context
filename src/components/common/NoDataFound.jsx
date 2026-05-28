// src/components/common/NoDataFound.jsx

import PropTypes from "prop-types";
import {
  FiSearch,
  FiSliders,
} from "react-icons/fi";
import EmptyState from "./EmptyState";

function NoDataFound({
  title = "No matching products found",
  message = "We couldn’t find anything matching your search or selected filters. Try adjusting your preferences for a more refined luxury shopping experience.",
  actionLabel = "Clear Filters",
  onAction,
  className = "",
}) {
  const enhancedMessage = (
    <span className="block">
      {message}

      <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-900 shadow-sm backdrop-blur-md">
        <FiSliders
          size={13}
          aria-hidden="true"
        />

        Smart discovery suggestions available
      </span>
    </span>
  );

  return (
    <EmptyState
      icon={FiSearch}
      title={title}
      message={enhancedMessage}
      actionLabel={
        typeof onAction === "function"
          ? actionLabel
          : undefined
      }
      onAction={onAction}
      className={`border border-white/40 bg-gradient-to-br from-[#fffdfb] via-[#fdf8f3] to-[#f5efe7] shadow-[0_20px_70px_rgba(120,53,15,0.10)] ${className}`}
    />
  );
}

NoDataFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  className: PropTypes.string,
};

export default NoDataFound;