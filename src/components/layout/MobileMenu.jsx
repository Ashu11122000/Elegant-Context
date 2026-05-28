import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiHome,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";

const navLinks = [
  {
    path: "/",
    label: "Home",
    icon: FiHome,
    description: "Luxury fashion landing",
  },
  {
    path: "/products",
    label: "Products",
    icon: FiShoppingBag,
    description: "Discover premium collections",
  },
  {
    path: "/wishlist",
    label: "Wishlist",
    icon: FiHeart,
    description: "Saved luxury picks",
  },
  {
    path: "/cart",
    label: "Cart",
    icon: FiShoppingBag,
    description: "Review your selections",
  },
];

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
      {/* Luxury Overlay */}
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Ambient Glow */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-hidden border-l border-amber-500/10 bg-gradient-to-b from-stone-950 via-[#17120c] to-stone-950 shadow-[0_0_60px_rgba(0,0,0,0.65)]">
        {/* Premium Top Border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/5 px-6 py-6">
          <div>
            <h2 className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-2xl font-black tracking-[0.22em] text-transparent">
              ELEGANT
            </h2>

            <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-stone-500">
              Premium Fashion
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close mobile menu"
            className="group relative overflow-hidden rounded-2xl border border-amber-500/10 bg-white/[0.03] p-3 text-stone-300 backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:border-amber-400/30 hover:bg-amber-500/10 hover:text-[#2B1D0E]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-yellow-200/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <FiX className="relative z-10 text-2xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="relative flex flex-1 flex-col gap-3 px-5 py-8">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group relative overflow-hidden rounded-3xl border p-4 transition-all duration-300 ${
                    isActive
                      ? "border-amber-400/20 bg-gradient-to-r from-amber-400/20 to-yellow-500/10 shadow-[0_10px_30px_rgba(251,191,36,0.12)]"
                      : "border-white/5 bg-white/[0.02] hover:-translate-y-0.5 hover:border-amber-500/20 hover:bg-white/[0.04]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-200/0 to-yellow-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-amber-300/10 group-hover:via-amber-200/5 group-hover:to-yellow-200/10" />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                            isActive
                              ? "border-amber-300/30 bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E]"
                              : "border-white/5 bg-stone-900/80 text-amber-200 group-hover:border-amber-500/20 group-hover:bg-amber-500/10 group-hover:text-[#2B1D0E]"
                          }`}
                        >
                          <Icon className="text-xl" />
                        </div>

                        <div>
                          <h3
                            className={`text-base font-semibold tracking-wide transition-colors duration-300 ${
                              isActive
                                ? "text-amber-100"
                                : "text-stone-200 group-hover:text-amber-100"
                            }`}
                          >
                            {link.label}
                          </h3>

                          <p className="mt-1 text-xs text-stone-500">
                            {link.description}
                          </p>
                        </div>
                      </div>

                      <FiArrowRight
                        className={`text-lg transition-all duration-300 ${
                          isActive
                            ? "translate-x-1 text-amber-200"
                            : "text-stone-500 group-hover:translate-x-1 group-hover:text-amber-200"
                        }`}
                      />
                    </div>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div className="relative border-t border-white/5 px-6 py-6">
          <div className="overflow-hidden rounded-3xl border border-amber-500/10 bg-gradient-to-br from-amber-400/15 via-yellow-500/10 to-transparent p-5 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_45%)]" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
                Exclusive
              </p>

              <h3 className="mt-2 text-lg font-bold text-amber-50">
                Luxury Fashion Experience
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                Explore premium collections crafted with elegance,
                sophistication, and timeless aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;