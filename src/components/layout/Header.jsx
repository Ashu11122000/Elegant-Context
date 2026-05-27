import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHeart,
  FiMenu,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import ROUTES from "../../config/routes";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const wishlistCount = 2;
  const cartCount = 3;

  const handleSearch = (query) => {
    if (!query.trim()) {
      return;
    }

    navigate(`${ROUTES.SEARCH_RESULTS}?q=${query}`);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-amber-900/20 bg-stone-950/95 backdrop-blur-md shadow-lg">
        <div className="app-container flex h-20 items-center justify-between gap-4 lg:gap-8">
          {/* Brand */}
          <Link
            to={ROUTES.HOME}
            className="shrink-0"
            aria-label="Go to homepage"
          >
            <div>
              <h1 className="text-2xl font-bold tracking-[0.2em] text-amber-200 sm:text-3xl">
                ELEGANT
              </h1>

              <p className="hidden text-[10px] uppercase tracking-[0.35em] text-stone-400 sm:block">
                Premium Fashion
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navbar />

          {/* Search */}
          <div className="hidden flex-1 justify-center lg:flex">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              to={ROUTES.WISHLIST}
              aria-label="Wishlist"
              className="relative rounded-full p-2 text-stone-200 transition-all duration-300 hover:bg-white/10 hover:text-amber-200"
            >
              <FiHeart size={22} />

              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-900 px-1 text-[10px] font-semibold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              to={ROUTES.CART}
              aria-label="Cart"
              className="relative rounded-full p-2 text-stone-200 transition-all duration-300 hover:bg-white/10 hover:text-amber-200"
            >
              <FiShoppingBag size={22} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-900 px-1 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to={ROUTES.LOGIN}
              aria-label="Account"
              className="hidden rounded-full p-2 text-stone-200 transition-all duration-300 hover:bg-white/10 hover:text-amber-200 sm:flex"
            >
              <FiUser size={22} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="rounded-full p-2 text-amber-200 transition-all hover:bg-white/10 lg:hidden"
              aria-label="Open mobile menu"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Header;