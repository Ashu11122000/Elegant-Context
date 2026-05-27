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

  const positionClasses = {
    right:
      "right-0 animate-[slideInRight_0.35s_ease-out]",
    left:
      "left-0 animate-[slideInLeft_0.35s_ease-out]",
  };

  const drawerContent = (
    <div className="fixed inset-0 z-50">
      {/* Premium overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={handleOverlayClick}
        aria-label="Close drawer overlay"
      />

      <section
        className={`absolute top-0 h-full w-full max-w-md overflow-hidden border-[#edbf68]/20 bg-gradient-to-b from-[#2f220d] via-[#241a09] to-[#181105] shadow-2xl shadow-black/50 backdrop-blur-xl ${
          positionClasses[position]
        } ${
          position === "right"
            ? "border-l"
            : "border-r"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Drawer"}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#edbf68]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6">
          {title && (
            <h2 className="text-xl font-semibold tracking-wide text-[#f8f3e9]">
              {title}
            </h2>
          )}

          <button
            type="button"
            onClick={onClose}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f8f3e9] transition-all duration-300 hover:rotate-90 hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#edbf68]/30"
            aria-label="Close drawer"
          >
            <FaTimes className="transition-transform duration-300" />
          </button>
        </header>

        {/* Content */}
        <div className="relative z-10 h-[calc(100%-92px)] overflow-y-auto px-6 py-6">
          {children}
        </div>
      </section>
    </div>
  );

  return createPortal(
    drawerContent,
    document.body
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    "left",
    "right",
  ]),
  closeOnOverlayClick: PropTypes.bool,
};

export default Drawer;