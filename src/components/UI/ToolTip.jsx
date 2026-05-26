import { useState } from "react";
import PropTypes from "prop-types";

function Tooltip({
  content,
  children,
  position = "top",
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-3 -translate-x-1/2",
    left: "right-full top-1/2 mr-3 -translate-y-1/2",
    right: "left-full top-1/2 ml-3 -translate-y-1/2",
  };

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div
          role="tooltip"
          className={`
            absolute z-50 whitespace-nowrap rounded-lg
            border border-[#edbf68]/20
            bg-[#2a1f0a]
            px-3 py-2
            text-xs font-medium text-[#f8f3e9]
            shadow-xl
            ${positionClasses[position]}
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
}

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  className: PropTypes.string,
};

export default Tooltip;