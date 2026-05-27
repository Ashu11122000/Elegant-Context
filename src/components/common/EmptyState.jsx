// src/components/common/EmptyState.jsx

import PropTypes from "prop-types";
import { FiArrowRight, FiPackage } from "react-icons/fi";

function EmptyState({
  icon: Icon = FiPackage,
  title = "Nothing here yet",
  message = "There’s currently no content to display.",
  actionLabel,
  onAction,
  className = "",
}) {
  const hasAction =
    actionLabel &&
    typeof actionLabel === "string" &&
    typeof onAction === "function";

  return (
    <section
      aria-live="polite"
      className={`relative overflow-hidden rounded-3xl border border-stone-200/70 bg-gradient-to-br from-white via-stone-50 to-amber-50/40 px-6 py-14 text-center shadow-xl shadow-stone-200/40 backdrop-blur-sm sm:px-10 ${className}`}
    >
      {/* Decorative Glow */}
      <div className="absolute -left-12 top-0 h-32 w-32 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-stone-300/20 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-amber-200/60 bg-gradient-to-br from-white via-amber-50 to-stone-100 shadow-lg shadow-amber-100/50">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
            <Icon
              size={34}
              className="text-amber-900"
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

        {hasAction && (
          <button
            type="button"
            onClick={onAction}
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-xl shadow-amber-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-200"
          >
            <span>{actionLabel}</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
              <FiArrowRight
                size={16}
                aria-hidden="true"
              />
            </span>
          </button>
        )}
      </div>
    </section>
  );
}

EmptyState.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  message: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  className: PropTypes.string,
};

export default EmptyState;