import { useId, useState } from "react";
import PropTypes from "prop-types";

function Tooltip({
  content,
  children,
  position = "top",
  className = "",
}) {
  const [isVisible, setIsVisible] =
    useState(false);

  const tooltipId = useId();

  const positionClasses = {
    top: {
      container:
        "bottom-full left-1/2 mb-4 -translate-x-1/2",
      arrow:
        "left-1/2 top-full -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#2a1f0a]",
    },
    bottom: {
      container:
        "top-full left-1/2 mt-4 -translate-x-1/2",
      arrow:
        "left-1/2 bottom-full -translate-x-1/2 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#2a1f0a]",
    },
    left: {
      container:
        "right-full top-1/2 mr-4 -translate-y-1/2",
      arrow:
        "left-full top-1/2 -translate-y-1/2 border-b-[8px] border-l-[8px] border-t-[8px] border-b-transparent border-t-transparent border-l-[#2a1f0a]",
    },
    right: {
      container:
        "left-full top-1/2 ml-4 -translate-y-1/2",
      arrow:
        "right-full top-1/2 -translate-y-1/2 border-b-[8px] border-r-[8px] border-t-[8px] border-b-transparent border-t-transparent border-r-[#2a1f0a]",
    },
  };

  const currentPosition =
    positionClasses[position] ||
    positionClasses.top;

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      aria-describedby={
        isVisible ? tooltipId : undefined
      }
    >
      {children}

      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`absolute z-50 ${currentPosition.container}`}
        >
          {/* Tooltip */}
          <div className="relative overflow-hidden rounded-2xl border border-[#edbf68]/20 bg-gradient-to-br from-[#2f220d]/95 via-[#241a09]/95 to-[#181105]/95 px-4 py-3 text-xs font-semibold tracking-wide text-[#f8f3e9] shadow-2xl shadow-black/30 backdrop-blur-xl">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#edbf68]/5 to-transparent" />

            <div className="relative z-10 whitespace-nowrap leading-relaxed">
              {content}
            </div>
          </div>

          {/* Arrow */}
          <div
            className={`absolute h-0 w-0 ${currentPosition.arrow}`}
          />
        </div>
      )}
    </div>
  );
}

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    "top",
    "bottom",
    "left",
    "right",
  ]),
  className: PropTypes.string,
};

export default Tooltip;