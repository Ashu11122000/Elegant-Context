// src/components/common/NoDataFound.jsx

import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import EmptyState from "./EmptyState";

function NoDataFound({
  title = "No matching products found",
  message = "We couldn’t find anything matching your search or selected filters. Try refining your preferences for a better discovery experience.",
  actionLabel = "Clear Filters",
  onAction,
  className = "",
}) {
  return (
    <EmptyState
      icon={FiSearch}
      title={title}
      message={message}
      actionLabel={
        typeof onAction === "function"
          ? actionLabel
          : undefined
      }
      onAction={onAction}
      className={`bg-gradient-to-br from-white via-stone-50 to-amber-50/40 ${className}`}
    />
  );
}

NoDataFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  className: PropTypes.string,
};

export default NoDataFound;