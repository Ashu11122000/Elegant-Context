// src/components/common/Loader.jsx

import PropTypes from "prop-types";
import Spinner from "./Spinner";

function Loader({
  message = "Loading elegant experience...",
  fullScreen = false,
  className = "",
}) {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 min-h-screen bg-stone-950/55 backdrop-blur-2xl"
    : "min-h-[340px]";

  return (
    <section
      role="status"
      aria-live="polite"
      className={`flex items-center justify-center px-6 ${containerClasses} ${className}`}
    >
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#fffdfb]/95 via-[#fdf8f3]/95 to-[#f5efe7]/95 px-10 py-12 shadow-[0_25px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
        {/* Luxury Ambient Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.10),transparent_30%),linear-gradient(to_bottom_right,rgba(255,255,255,0.55),transparent)]" />

        {/* Premium Glow Orbs */}
        <div className="absolute -left-16 top-0 h-52 w-52 rounded-full bg-amber-200/20 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-100/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

        {/* Top Shine */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

        {/* Decorative Rings */}
        <div className="pointer-events-none absolute left-10 top-10 h-24 w-24 rounded-full border border-white/20" />

        <div className="pointer-events-none absolute bottom-10 right-10 h-16 w-16 rounded-full border border-amber-100/30" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-7">
          {/* Premium Spinner Container */}
          <div className="group relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-2xl transition-all duration-700 group-hover:scale-125" />

            {/* Main Circle */}
            <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/50 bg-gradient-to-br from-white via-amber-50 to-stone-100 shadow-[0_18px_45px_rgba(120,53,15,0.12)] backdrop-blur-xl">
              {/* Gloss Overlay */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-80" />

              {/* Inner Spinner Area */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-amber-100/50 bg-white/80 shadow-inner backdrop-blur-md transition-all duration-500 group-hover:scale-105">
                <Spinner size="lg" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 text-center">
            {/* Heading */}
            <p className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-800 bg-clip-text text-sm font-black uppercase tracking-[0.24em] text-transparent sm:text-base">
              {message}
            </p>

            {/* Elegant Divider */}
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />

            {/* Animated Dots */}
            <div className="flex justify-center gap-3">
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-gradient-to-br from-amber-700 to-amber-900 shadow-md shadow-amber-700/30" />

              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-gradient-to-br from-amber-700 to-amber-900 shadow-md shadow-amber-700/30 [animation-delay:150ms]" />

              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-gradient-to-br from-amber-700 to-amber-900 shadow-md shadow-amber-700/30 [animation-delay:300ms]" />
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