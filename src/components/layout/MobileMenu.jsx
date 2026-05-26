import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/wishlist", label: "Wishlist" },
    { path: "/cart", label: "Cart" },
];

function MobileMenu({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/70 md:hidden">
            <div className="absolute right-0 h-full w-72 bg-[#382e1b] p-6 shadow-2xl">
                <div className="mb-10 flex justify-end">
                    <button onClick={onClose}>
                        <FiX className="text-3xl text-[#edbf68]" />
                    </button>
                </div>

                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={onClose}
                            className="text-lg font-medium text-[#f3e7d4] hover:text-[#edbf68]"
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
}

MobileMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default MobileMenu;