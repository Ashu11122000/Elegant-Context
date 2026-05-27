// src/components/common/Loader.jsx

import PropTypes from "prop-types";
import Spinner from "./Spinner";

function Loader({
  message = "Loading elegant experience...",
  fullScreen = false,
  className = "",
}) {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 min-h-screen bg-stone-950/45 backdrop-blur-md"
    : "min-h-[320px]";

  return (
    <section
      role="status"
      aria-live="polite"
      className={`flex items-center justify-center px-6 ${containerClasses} ${className}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/90 via-stone-50/95 to-amber-50/90 px-10 py-10 shadow-2xl shadow-stone-900/10 backdrop-blur-xl">
        {/* Ambient luxury glow */}
        <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-stone-300/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          {/* Spinner wrapper */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-amber-200/60 bg-gradient-to-br from-white via-amber-50 to-stone-100 shadow-xl shadow-amber-100/40">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
              <Spinner size="lg" />
            </div>
          </div>

          {/* Loading text */}
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-900 sm:text-base">
              {message}
            </p>

            <div className="flex justify-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-700" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-700 delay-150" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-700 delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Loader.propTypes = {
  message: PropTypes.string,
  fullScreen: PropTypes.bool,
  className: PropTypes.string,
};

export default Loader;