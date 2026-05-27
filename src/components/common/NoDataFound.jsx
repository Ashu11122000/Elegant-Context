// src/components/common/NoDataFound.jsx

import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import EmptyState from "./EmptyState";

function NoDataFound({
  title = "No data found",
  message = "We couldn’t find any matching results.",
  actionLabel,
  onAction,
  className = "",
}) {
  return (
    <EmptyState
      icon={FiSearch}
      title={title}
      message={message}
      actionLabel={actionLabel}
      onAction={onAction}
      className={className}
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