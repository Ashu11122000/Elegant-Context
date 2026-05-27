// src/components/common/EmptyState.jsx

import PropTypes from "prop-types";
import { FiPackage } from "react-icons/fi";

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
      className={`flex w-full flex-col items-center justify-center rounded-3xl border border-stone-200 bg-white px-6 py-12 text-center shadow-sm ${className}`}
    >
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">
        <Icon
          size={36}
          className="text-amber-900"
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-3 text-2xl font-semibold tracking-tight text-stone-900">
        {title}
      </h3>

      <p className="max-w-md text-sm leading-relaxed text-stone-600 sm:text-base">
        {message}
      </p>

      {hasAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-xl bg-amber-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-950"
        >
          {actionLabel}
        </button>
      )}
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