import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  FiCompass,
  FiHeart,
  FiHome,
  FiPackage,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import ROUTES from "../../config/routes";

const navLinks = [
  {
    path: ROUTES.HOME,
    label: "Home",
    icon: FiHome,
    description: "Luxury landing",
  },
  {
    path: ROUTES.PRODUCTS,
    label: "Products",
    icon: FiPackage,
    description: "Premium collections",
  },
  {
    path: ROUTES.WISHLIST,
    label: "Wishlist",
    icon: FiHeart,
    badge: 2,
    description: "Saved favorites",
  },
  {
    path: ROUTES.CART,
    label: "Cart",
    icon: FiShoppingBag,
    badge: 3,
    description: "Selected items",
  },
  {
    path: ROUTES.LOGIN,
    label: "Account",
    icon: FiUser,
    description: "Profile & orders",
  },
];

function Navbar({ className = "" }) {
  return (
    <nav
      className={`hidden items-center gap-3 lg:flex ${className}`}
      aria-label="Primary Navigation"
    >
      {/* Premium Explore Badge */}
      <div className="mr-2 flex items-center gap-2 rounded-full border border-amber-500/15 bg-gradient-to-r from-amber-400/10 to-yellow-500/5 px-4 py-2 backdrop-blur-xl">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20">
          <FiCompass size={14} />
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
            Explore
          </p>

          <p className="text-xs font-semibold text-amber-100">
            Luxury Fashion
          </p>
        </div>
      </div>

      {navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `group relative overflow-hidden rounded-2xl border px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "border-amber-400/20 bg-gradient-to-r from-amber-400/20 to-yellow-500/10 shadow-[0_10px_30px_rgba(251,191,36,0.12)]"
                  : "border-white/5 bg-white/[0.03] hover:-translate-y-0.5 hover:border-amber-500/15 hover:bg-white/[0.05]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-200/0 to-yellow-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-amber-300/10 group-hover:via-amber-200/5 group-hover:to-yellow-200/10" />

                {/* Active Glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_70%)]" />
                )}

                <div className="relative z-10 flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className={`relative flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-amber-300/30 bg-gradient-to-br from-amber-300 to-yellow-500 text-[#2B1D0E] shadow-lg shadow-amber-500/20"
                        : "border-white/5 bg-stone-900/80 text-amber-200 group-hover:border-amber-500/20 group-hover:bg-amber-500/10 group-hover:text-[#2B1D0E]"
                    }`}
                  >
                    <Icon
                      size={17}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Notification Badge */}
                    {link.badge ? (
                      <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-br from-amber-300 to-yellow-500 px-1 text-[10px] font-bold text-[#2B1D0E] shadow-lg shadow-amber-500/20">
                        {link.badge}
                      </span>
                    ) : null}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <span
                      className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "text-amber-100"
                          : "text-stone-200 group-hover:text-amber-100"
                      }`}
                    >
                      {link.label}
                    </span>

                    <span
                      className={`text-[11px] transition-colors duration-300 ${
                        isActive
                          ? "text-amber-200/70"
                          : "text-stone-500 group-hover:text-stone-400"
                      }`}
                    >
                      {link.description}
                    </span>
                  </div>
                </div>

                {/* Bottom Shine */}
                <div
                  className={`absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-500 ${
                    isActive
                      ? "w-3/4"
                      : "group-hover:w-1/2"
                  }`}
                />
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;