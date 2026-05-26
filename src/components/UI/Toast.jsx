import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimes,
  FaExclamationTriangle,
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

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) {
    return null;
  }

  const typeStyles = {
    success: {
      icon: <FaCheckCircle />,
      classes:
        "border-green-500/30 bg-green-900/20 text-green-200",
    },
    error: {
      icon: <FaExclamationCircle />,
      classes:
        "border-red-500/30 bg-red-900/20 text-red-200",
    },
    warning: {
      icon: <FaExclamationTriangle />,
      classes:
        "border-yellow-500/30 bg-yellow-900/20 text-yellow-200",
    },
    info: {
      icon: <FaInfoCircle />,
      classes:
        "border-[#edbf68]/20 bg-[#2a1f0a] text-[#f8f3e9]",
    },
  };

  const positionClasses = {
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  const currentToast = typeStyles[type];

  return (
    <div
      className={`
        fixed z-50 flex min-w-[320px] max-w-md items-center gap-4
        rounded-2xl border px-5 py-4 shadow-2xl
        ${positionClasses[position]}
        ${currentToast.classes}
      `}
      role="alert"
      aria-live="polite"
    >
      <span className="text-lg">{currentToast.icon}</span>

      <p className="flex-1 text-sm font-medium">
        {message}
      </p>

      <button
        type="button"
        onClick={onClose}
        className="transition-opacity duration-300 hover:opacity-70"
      >
        <FaTimes />
      </button>
    </div>
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