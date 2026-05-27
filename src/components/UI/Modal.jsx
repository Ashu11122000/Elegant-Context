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
      document.addEventListener(
        "keydown",
        handleEscape
      );
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
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
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Premium cinematic overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={handleOverlayClick}
        aria-label="Close modal overlay"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-label={title || "Modal"}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-[#edbf68]/20 bg-gradient-to-br from-[#2f220d] via-[#241a09] to-[#181105] shadow-2xl shadow-black/50 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#edbf68]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6">
          {title && (
            <h2 className="text-2xl font-semibold tracking-wide text-[#f8f3e9]">
              {title}
            </h2>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f8f3e9] transition-all duration-300 hover:rotate-90 hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#edbf68]/30"
          >
            <FaTimes className="transition-transform duration-300" />
          </button>
        </header>

        {/* Body */}
        <div className="relative z-10 max-h-[75vh] overflow-y-auto px-6 py-6">
          {children}
        </div>
      </section>
    </div>
  );

  return createPortal(
    modalContent,
    document.body
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeOnOverlayClick: PropTypes.bool,
};

export default Modal;