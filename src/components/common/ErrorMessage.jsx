// src/components/common/ErrorMessage.jsx

import PropTypes from "prop-types";
import { FiAlertCircle, FiRefreshCw } from "react-icons/fi";

function ErrorMessage({
  title = "Something went wrong",
  message = "We couldn’t complete your request. Please try again.",
  onRetry,
  className = "",
}) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`flex w-full flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 py-8 text-center shadow-sm ${className}`}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
        <FiAlertCircle
          size={30}
          className="text-red-600"
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-stone-900">
        {title}
      </h3>

      <p className="max-w-md text-sm leading-relaxed text-stone-600 sm:text-base">
        {message}
      </p>

      {typeof onRetry === "function" && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-950"
        >
          <FiRefreshCw size={18} />
          Try Again
        </button>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onRetry: PropTypes.func,
  className: PropTypes.string,
};

export default ErrorMessage;