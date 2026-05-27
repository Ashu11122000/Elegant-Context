// src/components/common/ErrorMessage.jsx

import PropTypes from "prop-types";
import {
  FiAlertCircle,
  FiRefreshCw,
} from "react-icons/fi";

function ErrorMessage({
  title = "Something went wrong",
  message = "We couldn’t complete your request. Please try again.",
  onRetry,
  className = "",
}) {
  return (
    <section
      role="alert"
      aria-live="assertive"
      className={`relative overflow-hidden rounded-3xl border border-red-200/70 bg-gradient-to-br from-white via-red-50 to-rose-50 px-6 py-10 text-center shadow-xl shadow-red-100/40 backdrop-blur-sm sm:px-10 ${className}`}
    >
      {/* Ambient decorative glow */}
      <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-red-200/20 blur-3xl" />
      <div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-rose-200/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-red-200/60 bg-gradient-to-br from-white via-red-50 to-rose-100 shadow-lg shadow-red-100/50">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm">
            <FiAlertCircle
              size={34}
              className="text-red-600"
              aria-hidden="true"
            />
          </div>
        </div>

        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
          {title}
        </h3>

        <p className="max-w-lg text-sm leading-relaxed text-stone-600 sm:text-base">
          {message}
        </p>

        {typeof onRetry === "function" && (
          <button
            type="button"
            onClick={onRetry}
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-xl shadow-amber-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-200"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <FiRefreshCw
                size={16}
                className="transition-transform duration-500 group-hover:rotate-180"
                aria-hidden="true"
              />
            </span>

            <span>Try Again</span>
          </button>
        )}
      </div>
    </section>
  );
}

ErrorMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onRetry: PropTypes.func,
  className: PropTypes.string,
};

export default ErrorMessage;