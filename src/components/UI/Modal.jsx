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
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
      {/* Cinematic luxury overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

      {/* Overlay click layer */}
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={handleOverlayClick}
        aria-label="Close modal overlay"
      />

      {/* Modal */}
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title || "Modal"}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#3f2d12_0%,#241807_45%,#120c04_100%)] shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-3xl animate-[fadeIn_0.35s_cubic-bezier(0.22,1,0.36,1)]"
      >
        {/* Background overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/20" />

        {/* Ambient luxury glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-200/[0.05] blur-3xl" />

        {/* Metallic top border glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />

        {/* Inner premium border */}
        <div className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.04]" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-7 py-6 backdrop-blur-xl">
          <div className="space-y-2">
            {title && (
              <h2 className="text-[1.55rem] font-semibold tracking-[0.02em] text-stone-100">
                {title}
              </h2>
            )}

            <div className="h-px w-20 bg-gradient-to-r from-amber-300/70 to-transparent" />
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] text-stone-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:rotate-90 hover:border-amber-300/30 hover:bg-amber-200/10 hover:text-amber-100 hover:shadow-[0_18px_45px_rgba(217,119,6,0.24)] focus:outline-none focus:ring-4 focus:ring-amber-200/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <FaTimes className="relative z-10 text-sm transition-transform duration-500" />
          </button>
        </header>

        {/* Body */}
        <div className="custom-scrollbar relative z-10 max-h-[78vh] overflow-y-auto px-7 py-7">
          <div className="space-y-6">
            {children}
          </div>
        </div>

        {/* Bottom subtle glow */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
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