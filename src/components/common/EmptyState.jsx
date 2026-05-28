// src/components/common/EmptyState.jsx

import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiPackage,
} from "react-icons/fi";

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
      className={`relative isolate overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-[#fffdfb] via-[#fdf8f2] to-[#f5efe7] px-6 py-16 text-center shadow-[0_20px_70px_rgba(120,53,15,0.12)] backdrop-blur-2xl sm:px-10 sm:py-20 ${className}`}
    >
      {/* Luxury Ambient Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.10),transparent_30%),linear-gradient(to_bottom_right,rgba(255,255,255,0.55),transparent)]" />

      {/* Premium Blur Orbs */}
      <div className="absolute -left-16 top-0 h-52 w-52 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-100/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

      {/* Top Shine */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

      {/* Floating Decorative Lines */}
      <div className="pointer-events-none absolute left-8 top-10 h-24 w-24 rounded-full border border-white/20" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-16 w-16 rounded-full border border-amber-100/30" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Premium Icon Container */}
        <div className="group relative mb-8">
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-amber-200/20 blur-2xl transition-all duration-700 group-hover:scale-125" />

          {/* Main Circle */}
          <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/50 bg-gradient-to-br from-white via-amber-50 to-stone-100 shadow-[0_15px_40px_rgba(120,53,15,0.12)] backdrop-blur-xl">
            {/* Gloss Overlay */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-80" />

            {/* Inner Circle */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-amber-100/50 bg-white/70 shadow-inner backdrop-blur-md transition-all duration-500 group-hover:scale-105">
              <Icon
                size={36}
                className="text-amber-900 transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h3 className="max-w-2xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-800 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
          {title}
        </h3>

        {/* Divider */}
        <div className="my-5 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />

        {/* Message */}
        <p className="max-w-2xl text-sm leading-8 text-stone-600 sm:text-base">
          {message}
        </p>

        {/* Action Button */}
        {hasAction && (
          <button
            type="button"
            onClick={onAction}
            className="group relative mt-10 inline-flex items-center gap-4 overflow-hidden rounded-2xl border border-amber-800/20 bg-gradient-to-r from-[#1f1307] via-[#5b3415] to-[#120d08] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-50 shadow-[0_14px_35px_rgba(120,53,15,0.28)] transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(120,53,15,0.38)] focus:outline-none focus:ring-4 focus:ring-amber-200/60"
          >
            {/* Button Shine */}
            <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Sliding Glow */}
            <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/10 blur-xl transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative z-10">
              {actionLabel}
            </span>

            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110">
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