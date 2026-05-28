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
      "right-0 animate-[slideInRight_0.45s_cubic-bezier(0.22,1,0.36,1)] border-l",

    left:
      "left-0 animate-[slideInLeft_0.45s_cubic-bezier(0.22,1,0.36,1)] border-r",
  };

  const drawerContent = (
    <div className="fixed inset-0 z-[100]">
      {/* Premium cinematic overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-xl" />

      {/* Overlay click layer */}
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={handleOverlayClick}
        aria-label="Close drawer overlay"
      />

      {/* Drawer */}
      <section
        className={`absolute top-0 h-full w-full max-w-[440px] overflow-hidden border-white/10 bg-[radial-gradient(circle_at_top,#3d2a0f_0%,#241807_45%,#110c04_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-3xl ${
          positionClasses[position]
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Drawer"}
      >
        {/* Luxury overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/20" />

        {/* Golden ambient glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-orange-200/[0.05] blur-3xl" />

        {/* Top metallic shine */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />

        {/* Inner border */}
        <div className="pointer-events-none absolute inset-[1px] rounded-none border border-white/[0.04]" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-7 py-6 backdrop-blur-xl">
          <div className="space-y-1">
            {title && (
              <h2 className="text-[1.3rem] font-semibold tracking-[0.03em] text-stone-100">
                {title}
              </h2>
            )}

            <div className="h-px w-16 bg-gradient-to-r from-amber-300/70 to-transparent" />
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] text-stone-200 shadow-[0_10px_25px_rgba(0,0,0,0.22)] transition-all duration-500 hover:rotate-90 hover:border-amber-300/30 hover:bg-amber-200/10 hover:text-amber-100 hover:shadow-[0_16px_40px_rgba(217,119,6,0.22)] focus:outline-none focus:ring-4 focus:ring-amber-200/20"
            aria-label="Close drawer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <FaTimes className="relative z-10 text-sm transition-transform duration-500" />
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="custom-scrollbar relative z-10 h-[calc(100%-97px)] overflow-y-auto px-7 py-7">
          <div className="space-y-6">
            {children}
          </div>
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