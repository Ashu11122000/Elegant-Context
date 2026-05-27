import PropTypes from "prop-types";
import { FiArrowRight, FiSearch } from "react-icons/fi";
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
      className={`relative flex min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-[#edbf68]/15 bg-gradient-to-br from-[#2f220d] via-[#241a09] to-[#181105] px-6 py-14 text-center shadow-2xl shadow-black/20 ${className}`}
    >
      {/* Ambient luxury glow */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[#edbf68]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

      {/* Icon */}
      <div className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#edbf68]/20 bg-white/5 shadow-xl backdrop-blur-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#edbf68]/20 to-white/5">
          <FiSearch className="text-3xl text-[#edbf68]" />
        </div>
      </div>

      {/* Title */}
      <h2 className="relative z-10 mb-4 text-3xl font-semibold tracking-tight text-[#f8f3e9] sm:text-4xl">
        {title}
      </h2>

      {/* Message */}
      <p className="relative z-10 mb-10 max-w-2xl text-sm leading-relaxed text-[#cbbd9b] sm:text-base">
        {message}
      </p>

      {/* Action */}
      {showAction && (
        <div className="relative z-10">
          <Button
            variant="primary"
            size="md"
            onClick={onAction}
            icon={<FiArrowRight />}
          >
            {actionLabel}
          </Button>
        </div>
      )}
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