import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function Drawer({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
  closeOnOverlayClick = true,
}) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const positionClasses = {
    right: "right-0",
    left: "left-0",
  };

  const drawerContent = (
    <div className="fixed inset-0 z-50 bg-black/70">
      <div
        className="absolute inset-0"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      <div
        className={`
          absolute top-0 h-full w-full max-w-md
          border-[#edbf68]/20
          bg-[#2a1f0a]
          shadow-2xl
          ${positionClasses[position]}
          ${position === "right" ? "border-l" : "border-r"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Drawer"}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          {title && (
            <h2 className="text-xl font-semibold text-[#f8f3e9]">
              {title}
            </h2>
          )}

          <button
            type="button"
            onClick={onClose}
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              text-[#f8f3e9]
              transition-all duration-300
              hover:bg-white/10
            "
          >
            <FaTimes />
          </button>
        </div>

        <div className="h-[calc(100%-88px)] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
}

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["left", "right"]),
  closeOnOverlayClick: PropTypes.bool,
};

export default Drawer;