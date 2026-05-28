import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiSearch,
} from "react-icons/fi";

import Button from "./Button";

function NoDataFound({
  title = "Nothing matched your search",
  message = "We couldn’t discover anything matching your request. Refine your search, adjust filters, or explore our curated premium collections.",
  actionLabel = "",
  onAction = null,
  className = "",
}) {
  const showAction =
    actionLabel &&
    typeof onAction === "function";

  return (
    <section
      className={`group relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#3d2a0f_0%,#241807_45%,#120c04_100%)] px-6 py-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-3xl transition-all duration-500 ${className}`}
    >
      {/* Premium overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/20" />

      {/* Luxury ambient glows */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:bg-amber-300/15" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-200/[0.05] blur-3xl" />

      {/* Metallic top shine */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      {/* Icon Section */}
      <div className="relative z-10 mb-10">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-amber-300/20 blur-3xl" />

        {/* Outer ring */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-amber-200/15 bg-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          {/* Inner circle */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f6d48f]/30 via-[#edbf68]/20 to-transparent ring-1 ring-amber-200/10">
            <FiSearch className="text-[2.2rem] text-amber-200" />
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="relative z-10 mb-5 inline-flex items-center rounded-full border border-amber-200/15 bg-amber-300/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-200 shadow-[0_8px_24px_rgba(217,119,6,0.15)]">
        Premium Discovery Experience
      </div>

      {/* Title */}
      <h2 className="relative z-10 max-w-3xl text-[2.2rem] font-semibold leading-tight tracking-[-0.03em] text-stone-100 sm:text-5xl">
        {title}
      </h2>

      {/* Elegant divider */}
      <div className="relative z-10 my-6 h-px w-28 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />

      {/* Message */}
      <p className="relative z-10 max-w-2xl text-[15px] leading-8 text-stone-400 sm:text-base">
        {message}
      </p>

      {/* Action */}
      {showAction && (
        <div className="relative z-10 mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={onAction}
            icon={<FiArrowRight />}
          >
            {actionLabel}
          </Button>
        </div>
      )}

      {/* Bottom subtle fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}

NoDataFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  className: PropTypes.string,
};

export default NoDataFound;