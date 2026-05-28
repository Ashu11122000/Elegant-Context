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
      <header className="sticky top-0 z-40 border-b border-amber-700/10 bg-stone-950/90 backdrop-blur-2xl">
        {/* Premium Top Glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_45%)]" />

        <div className="app-container relative flex h-20 items-center justify-between gap-4 lg:h-24 lg:gap-8">
          {/* Brand */}
          <Link
            to={ROUTES.HOME}
            className="group relative shrink-0"
            aria-label="Go to homepage"
          >
            <div className="relative">
              {/* Luxury Accent Blur */}
              <div className="absolute -left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-amber-500/10 blur-2xl transition-all duration-500 group-hover:bg-amber-400/20" />

              <h1 className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-2xl font-black tracking-[0.28em] text-transparent transition-all duration-500 group-hover:scale-[1.02] sm:text-3xl">
                ELEGANT
              </h1>

              <div className="mt-1 flex items-center gap-2">
                <div className="h-px w-6 bg-gradient-to-r from-amber-500 to-transparent" />

                <p className="hidden text-[10px] font-medium uppercase tracking-[0.38em] text-stone-500 sm:block">
                  Luxury Fashion House
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navbar />

          {/* Search */}
          <div className="hidden flex-1 justify-center px-4 lg:flex">
            <div className="w-full max-w-2xl">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Wishlist */}
            <Link
              to={ROUTES.WISHLIST}
              aria-label="Wishlist"
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-stone-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/20 hover:bg-amber-500/10 hover:text-[#2B1D0E] hover:shadow-[0_10px_30px_rgba(251,191,36,0.12)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-300/0 to-amber-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-amber-400/30 group-hover:via-amber-300/10 group-hover:to-amber-200/20" />

              <FiHeart
                size={21}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              />

              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 z-20 flex h-5 min-w-[20px] items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-br from-amber-300 to-yellow-500 px-1 text-[10px] font-bold text-[#2B1D0E] shadow-lg shadow-amber-500/20">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to={ROUTES.CART}
              aria-label="Cart"
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-stone-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/20 hover:bg-amber-500/10 hover:text-[#2B1D0E] hover:shadow-[0_10px_30px_rgba(251,191,36,0.12)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-300/0 to-amber-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-amber-400/30 group-hover:via-amber-300/10 group-hover:to-amber-200/20" />

              <FiShoppingBag
                size={21}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 z-20 flex h-5 min-w-[20px] items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-br from-amber-300 to-yellow-500 px-1 text-[10px] font-bold text-[#2B1D0E] shadow-lg shadow-amber-500/20">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              to={ROUTES.LOGIN}
              aria-label="Account"
              className="group relative hidden overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-stone-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/20 hover:bg-amber-500/10 hover:text-[#2B1D0E] hover:shadow-[0_10px_30px_rgba(251,191,36,0.12)] sm:flex"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-300/0 to-amber-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-amber-400/30 group-hover:via-amber-300/10 group-hover:to-amber-200/20" />

              <FiUser
                size={21}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="group relative overflow-hidden rounded-2xl border border-amber-500/10 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 p-3 text-amber-200 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-amber-400/30 hover:shadow-[0_10px_30px_rgba(251,191,36,0.18)] lg:hidden"
              aria-label="Open mobile menu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 to-yellow-200/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <FiMenu
                size={26}
                className="relative z-10 transition-transform duration-300 group-hover:rotate-3"
              />
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