import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
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
  },
  {
    path: ROUTES.PRODUCTS,
    label: "Products",
    icon: FiPackage,
  },
  {
    path: ROUTES.WISHLIST,
    label: "Wishlist",
    icon: FiHeart,
    badge: 2,
  },
  {
    path: ROUTES.CART,
    label: "Cart",
    icon: FiShoppingBag,
    badge: 3,
  },
  {
    path: ROUTES.LOGIN,
    label: "Account",
    icon: FiUser,
  },
];

function Navbar({
  className = "",
}) {
  return (
    <nav
      className={`hidden items-center gap-2 lg:flex ${className}`}
      aria-label="Primary Navigation"
    >
      {navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `group relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                isActive
                  ? "bg-amber-100 text-amber-900 shadow-sm"
                  : "text-stone-200 hover:bg-white/10 hover:text-amber-200"
              }`
            }
          >
            <Icon size={17} />

            <span>{link.label}</span>

            {link.badge ? (
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-900 px-1.5 text-[10px] font-semibold text-white">
                {link.badge}
              </span>
            ) : null}
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