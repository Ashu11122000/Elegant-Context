// src/components/common/Loader.jsx

import PropTypes from "prop-types";
import Spinner from "./Spinner";

function Loader({
  message = "Loading elegant experience...",
  fullScreen = false,
  className = "",
}) {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 min-h-screen bg-stone-950/40 backdrop-blur-sm"
    : "min-h-[300px]";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-4 ${containerClasses} ${className}`}
    >
      <Spinner size="lg" />

      <div className="text-center">
        <p className="font-medium tracking-wide text-amber-900">
          {message}
        </p>
      </div>
    </div>
  );
}

Loader.propTypes = {
  message: PropTypes.string,
  fullScreen: PropTypes.bool,
  className: PropTypes.string,
};

export default Loader;