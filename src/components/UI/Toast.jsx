import { useEffect } from "react";
import PropTypes from "prop-types";

import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

function Toast({
  isVisible,
  message,
  type = "info",
  duration = 3000,
  onClose,
  position = "top-right",
}) {
  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      if (typeof onClose === "function") {
        onClose();
      }
    }, duration);

    return () =>
      window.clearTimeout(timer);
  }, [
    isVisible,
    duration,
    onClose,
  ]);

  if (!isVisible) {
    return null;
  }

  const typeStyles = {
    success: {
      icon: FaCheckCircle,

      container:
        "border-emerald-300/15 bg-[linear-gradient(135deg,rgba(6,78,59,0.96)_0%,rgba(5,46,22,0.95)_100%)] text-emerald-50 shadow-[0_20px_60px_rgba(16,185,129,0.18)]",

      iconWrapper:
        "border border-emerald-300/10 bg-emerald-400/15 text-emerald-200 shadow-[0_10px_25px_rgba(16,185,129,0.22)]",

      progress:
        "from-emerald-300 via-emerald-400 to-emerald-300",
    },

    error: {
      icon: FaExclamationCircle,

      container:
        "border-red-300/15 bg-[linear-gradient(135deg,rgba(69,10,10,0.96)_0%,rgba(127,29,29,0.95)_100%)] text-red-50 shadow-[0_20px_60px_rgba(239,68,68,0.18)]",

      iconWrapper:
        "border border-red-300/10 bg-red-400/15 text-red-200 shadow-[0_10px_25px_rgba(239,68,68,0.22)]",

      progress:
        "from-red-300 via-red-400 to-red-300",
    },

    warning: {
      icon: FaExclamationTriangle,

      container:
        "border-amber-300/15 bg-[linear-gradient(135deg,rgba(120,53,15,0.96)_0%,rgba(92,44,10,0.95)_100%)] text-amber-50 shadow-[0_20px_60px_rgba(245,158,11,0.18)]",

      iconWrapper:
        "border border-amber-300/10 bg-amber-400/15 text-amber-200 shadow-[0_10px_25px_rgba(245,158,11,0.22)]",

      progress:
        "from-amber-300 via-yellow-300 to-amber-300",
    },

    info: {
      icon: FaInfoCircle,

      container:
        "border-amber-200/15 bg-[radial-gradient(circle_at_top,#3d2a0f_0%,#241807_45%,#120c04_100%)] text-stone-100 shadow-[0_24px_70px_rgba(0,0,0,0.38)]",

      iconWrapper:
        "border border-amber-200/10 bg-amber-300/[0.12] text-amber-200 shadow-[0_10px_25px_rgba(217,119,6,0.2)]",

      progress:
        "from-[#ffe7b0] via-[#edbf68] to-[#c8922f]",
    },
  };

  const positionClasses = {
    "top-right":
      "top-6 right-6",

    "top-left":
      "top-6 left-6",

    "bottom-right":
      "bottom-6 right-6",

    "bottom-left":
      "bottom-6 left-6",
  };

  const currentToast =
    typeStyles[type] ||
    typeStyles.info;

  const Icon = currentToast.icon;

  return (
    <section
      role="alert"
      aria-live="polite"
      className={`fixed z-[120] w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-[1.8rem] border backdrop-blur-3xl animate-[toastIn_0.45s_cubic-bezier(0.22,1,0.36,1)] ${positionClasses[position]} ${currentToast.container}`}
    >
      {/* Glass overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/10" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl" />

      {/* Metallic top border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />

      {/* Progress bar */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden bg-white/[0.04]">
        <div
          className={`h-full w-full animate-[toastProgress_linear_forwards] bg-gradient-to-r ${currentToast.progress}`}
          style={{
            animationDuration: `${duration}ms`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex items-start gap-4 px-5 py-5">
        {/* Icon */}
        <div
          className={`relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl backdrop-blur-xl ${currentToast.iconWrapper}`}
        >
          {/* Icon shine */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent" />

          <Icon
            size={20}
            className="relative z-10"
          />
        </div>

        {/* Message */}
        <div className="flex-1 pt-1">
          <p className="text-[15px] font-medium leading-7 tracking-[0.01em] text-current">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="group relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] text-stone-200 shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition-all duration-500 hover:rotate-90 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-4 focus:ring-amber-200/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <FaTimes className="relative z-10 text-sm" />
        </button>
      </div>
    </section>
  );
}

Toast.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,

  type: PropTypes.oneOf([
    "success",
    "error",
    "warning",
    "info",
  ]),

  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,

  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
  ]),
};

export default Toast;