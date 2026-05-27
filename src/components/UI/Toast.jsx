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

    return () => window.clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) {
    return null;
  }

  const typeStyles = {
    success: {
      icon: FaCheckCircle,
      container:
        "border-emerald-400/20 bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 text-emerald-100",
      iconWrapper:
        "bg-emerald-400/15 text-emerald-300",
    },
    error: {
      icon: FaExclamationCircle,
      container:
        "border-red-400/20 bg-gradient-to-br from-red-900/40 to-red-800/20 text-red-100",
      iconWrapper:
        "bg-red-400/15 text-red-300",
    },
    warning: {
      icon: FaExclamationTriangle,
      container:
        "border-amber-400/20 bg-gradient-to-br from-amber-900/40 to-yellow-800/20 text-amber-100",
      iconWrapper:
        "bg-amber-400/15 text-amber-300",
    },
    info: {
      icon: FaInfoCircle,
      container:
        "border-[#edbf68]/20 bg-gradient-to-br from-[#2f220d]/95 via-[#241a09]/95 to-[#181105]/95 text-[#f8f3e9]",
      iconWrapper:
        "bg-[#edbf68]/15 text-[#edbf68]",
    },
  };

  const positionClasses = {
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  const currentToast =
    typeStyles[type] || typeStyles.info;

  const Icon = currentToast.icon;

  return (
    <section
      role="alert"
      aria-live="polite"
      className={`fixed z-50 w-[calc(100%-2rem)] max-w-md rounded-3xl border shadow-2xl shadow-black/30 backdrop-blur-xl animate-in slide-in-from-top-4 duration-300 ${positionClasses[position]} ${currentToast.container}`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/5 blur-3xl" />

      <div className="relative flex items-start gap-4 px-5 py-4">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${currentToast.iconWrapper}`}
        >
          <Icon size={20} />
        </div>

        {/* Message */}
        <div className="flex-1 pt-1">
          <p className="text-sm font-medium leading-relaxed">
            {message}
          </p>
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="group flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:rotate-90 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-[#edbf68]/20"
        >
          <FaTimes className="text-sm transition-transform duration-300" />
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