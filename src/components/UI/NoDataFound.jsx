import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";

function NoDataFound({
  title = "No Data Found",
  message = "We couldn't find anything matching your request.",
  actionLabel = "",
  onAction = null,
  className = "",
}) {
  return (
    <div
      className={`
        flex min-h-[500px] flex-col items-center justify-center
        rounded-2xl border border-zinc-200 bg-white px-6 py-12
        text-center shadow-sm
        ${className}
      `}
    >
      <div
        className="
          mb-6 flex h-20 w-20 items-center justify-center
          rounded-full bg-zinc-100
        "
      >
        <FiSearch className="text-3xl text-zinc-500" />
      </div>

      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
        {title}
      </h2>

      <p className="mb-8 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
        {message}
      </p>

      {actionLabel && onAction && (
        <Button
          variant="primary"
          size="md"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
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