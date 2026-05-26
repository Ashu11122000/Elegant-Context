import { NavLink } from "react-router-dom";

const navLinks = [
    {path:"/", label: "Home"},
    {path:"/products", label: "Products"},
    {path:"/wishlist", label: "Wishlist"},
    {path:"/cart", label: "Cart"},
];

function Navbar() {
    return (
        <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <NavLink 
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                    `font-medium transition ${
                        isActive
                            ? "text-[#edbf68]"
                            : "text-[#f3e7d4] hover:text-[#edbf68]"
                    }`}
                >{link.label}</NavLink>
            ))}
        </nav>
    );
}

export default Navbar;