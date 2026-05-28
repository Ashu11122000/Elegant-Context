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
      className={`relative isolate overflow-hidden rounded-[2rem] border border-red-200/40 bg-gradient-to-br from-[#fffdfd] via-[#fff7f7] to-[#fff1f2] px-6 py-14 text-center shadow-[0_20px_70px_rgba(239,68,68,0.10)] backdrop-blur-2xl sm:px-10 sm:py-16 ${className}`}
    >
      {/* Luxury Ambient Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(225,29,72,0.12),transparent_32%),linear-gradient(to_bottom_right,rgba(255,255,255,0.65),transparent)]" />

      {/* Premium Glow Orbs */}
      <div className="absolute -left-16 top-0 h-52 w-52 rounded-full bg-red-200/20 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-rose-200/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

      {/* Top Shine */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute left-10 top-10 h-24 w-24 rounded-full border border-white/20" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-16 w-16 rounded-full border border-red-100/30" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Premium Icon */}
        <div className="group relative mb-8">
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-red-300/20 blur-2xl transition-all duration-700 group-hover:scale-125" />

          {/* Main Container */}
          <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/50 bg-gradient-to-br from-white via-red-50 to-rose-100 shadow-[0_15px_45px_rgba(239,68,68,0.12)] backdrop-blur-xl">
            {/* Gloss Overlay */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-80" />

            {/* Inner Circle */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-red-100/50 bg-white/80 shadow-inner backdrop-blur-md transition-all duration-500 group-hover:scale-105">
              <FiAlertCircle
                size={38}
                className="text-red-600 transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h3 className="max-w-2xl bg-gradient-to-r from-stone-900 via-red-900 to-stone-800 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
          {title}
        </h3>

        {/* Divider */}
        <div className="my-5 h-px w-24 bg-gradient-to-r from-transparent via-red-300/70 to-transparent" />

        {/* Message */}
        <p className="max-w-2xl text-sm leading-8 text-stone-600 sm:text-base">
          {message}
        </p>

        {/* Retry Button */}
        {typeof onRetry === "function" && (
          <button
            type="button"
            onClick={onRetry}
            className="group relative mt-10 inline-flex items-center gap-4 overflow-hidden rounded-2xl border border-red-900/10 bg-gradient-to-r from-[#3b0a0a] via-[#7f1d1d] to-[#450a0a] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-red-50 shadow-[0_16px_40px_rgba(127,29,29,0.28)] transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(127,29,29,0.38)] focus:outline-none focus:ring-4 focus:ring-red-200/60"
          >
            {/* Animated Shine */}
            <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Sliding Glow */}
            <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/10 blur-xl transition-all duration-700 group-hover:left-[120%]" />

            {/* Icon */}
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:rotate-180 group-hover:scale-110">
              <FiRefreshCw
                size={17}
                aria-hidden="true"
              />
            </span>

            {/* Text */}
            <span className="relative z-10">
              Try Again
            </span>
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