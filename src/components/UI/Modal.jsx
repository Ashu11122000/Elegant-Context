import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function Modal({
  isOpen,
  onClose,
  title,
  children,
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

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div
        className="absolute inset-0"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      <div
        className="
          relative z-10 w-full max-w-2xl rounded-2xl
          border border-[#edbf68]/20
          bg-[#2a1f0a]
          p-6
          shadow-2xl
        "
        role="dialog"
        aria-modal="true"
        aria-label={title || "Modal"}
      >
        <div className="mb-6 flex items-center justify-between">
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

        <div>{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeOnOverlayClick: PropTypes.bool,
};

export default Modal;