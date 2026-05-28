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
        "bottom-full left-1/2 mb-5 -translate-x-1/2",

      arrow:
        "left-1/2 top-full -translate-x-1/2 border-l-[9px] border-r-[9px] border-t-[9px] border-l-transparent border-r-transparent border-t-[#241807]",
    },

    bottom: {
      container:
        "top-full left-1/2 mt-5 -translate-x-1/2",

      arrow:
        "left-1/2 bottom-full -translate-x-1/2 border-l-[9px] border-r-[9px] border-b-[9px] border-l-transparent border-r-transparent border-b-[#241807]",
    },

    left: {
      container:
        "right-full top-1/2 mr-5 -translate-y-1/2",

      arrow:
        "left-full top-1/2 -translate-y-1/2 border-b-[9px] border-l-[9px] border-t-[9px] border-b-transparent border-t-transparent border-l-[#241807]",
    },

    right: {
      container:
        "left-full top-1/2 ml-5 -translate-y-1/2",

      arrow:
        "right-full top-1/2 -translate-y-1/2 border-b-[9px] border-r-[9px] border-t-[9px] border-b-transparent border-t-transparent border-r-[#241807]",
    },
  };

  const currentPosition =
    positionClasses[position] ||
    positionClasses.top;

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() =>
        setIsVisible(true)
      }
      onMouseLeave={() =>
        setIsVisible(false)
      }
      onFocus={() =>
        setIsVisible(true)
      }
      onBlur={() =>
        setIsVisible(false)
      }
      aria-describedby={
        isVisible
          ? tooltipId
          : undefined
      }
    >
      {children}

      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`absolute z-[120] animate-[tooltipFade_0.28s_cubic-bezier(0.22,1,0.36,1)] ${currentPosition.container}`}
        >
          {/* Tooltip */}
          <div className="relative overflow-hidden rounded-[1.35rem] border border-amber-200/15 bg-[radial-gradient(circle_at_top,#3d2a0f_0%,#241807_45%,#120c04_100%)] px-4 py-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.38)] backdrop-blur-3xl">
            {/* Glass overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/10" />

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-amber-300/10 blur-2xl" />

            {/* Metallic top shine */}
            <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70" />

            {/* Inner border */}
            <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.35rem-1px)] border border-white/[0.04]" />

            {/* Content */}
            <div className="relative z-10 whitespace-nowrap text-[12px] font-semibold leading-relaxed tracking-[0.04em] text-stone-100">
              {content}
            </div>
          </div>

          {/* Arrow */}
          <div
            className={`absolute h-0 w-0 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)] ${currentPosition.arrow}`}
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