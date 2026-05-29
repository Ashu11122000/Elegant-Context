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
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const navigate = useNavigate();

  const wishlistCount = 2;
  const cartCount = 3;

  const handleSearch = (query) => {
    if (!query.trim()) {
      return;
    }

    navigate(
      `${ROUTES.SEARCH_RESULTS}?q=${query}`
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 overflow-hidden border-b border-amber-500/10 bg-[#050403]/95 backdrop-blur-2xl">
        {/* Premium Top Shine */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

        {/* Ambient Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_50%)]" />

        {/* Luxury Mesh Background */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:80px_80px]" />

        {/* Main Header */}
        <div className="relative mx-auto flex h-24 w-full max-w-[1700px] items-center justify-between px-5 sm:px-8 xl:px-12">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-8 2xl:gap-12">
            {/* Logo */}
            <Link
              to={ROUTES.HOME}
              className="group relative shrink-0"
              aria-label="Go to homepage"
            >
              {/* Logo Glow */}
              <div className="absolute inset-0 bg-amber-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Brand */}
                <h1 className="bg-gradient-to-r from-[#f8df9e] via-[#fff4d6] to-[#c8922e] bg-clip-text text-3xl font-black tracking-[0.28em] text-transparent transition-all duration-500 group-hover:brightness-110">
                  ELEGANT
                </h1>

                {/* Subtitle */}
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-amber-500 via-amber-300 to-transparent" />

                  <p className="hidden text-[10px] font-medium uppercase tracking-[0.38em] text-stone-500 xl:block">
                    Luxury Fashion House
                  </p>
                </div>
              </div>
            </Link>

            {/* Navigation + Search */}
            <div className="hidden items-center lg:flex">
              {/* Navbar */}
              <Navbar />

              {/* Searchbar */}
              <div className="ml-8 mr-8 w-[360px] 2xl:w-[400px]">
                <SearchBar
                  onSearch={handleSearch}
                />
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex shrink-0 items-center gap-4 pl-2">
            {/* Wishlist */}
            <Link
              to={ROUTES.WISHLIST}
              aria-label="Wishlist"
              className="group relative flex h-[60px] w-[60px] items-center justify-center overflow-visible rounded-[22px] border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-white/[0.02] text-stone-300 shadow-[0_10px_30px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-400/25 hover:bg-amber-500/10 hover:text-[#f8e7be]"
            >
              {/* Premium Glow */}
              <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <FiHeart
                size={21}
                className="relative z-10 transition-all duration-500 group-hover:scale-110"
              />

              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 z-30 flex h-6 min-w-[24px] items-center justify-center rounded-full border border-amber-200/40 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 px-1 text-[10px] font-black leading-none text-[#2B1D0E] shadow-[0_6px_18px_rgba(251,191,36,0.45)]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to={ROUTES.CART}
              aria-label="Cart"
              className="group relative flex h-[60px] w-[60px] items-center justify-center overflow-visible rounded-[22px] border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-white/[0.02] text-stone-300 shadow-[0_10px_30px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-400/25 hover:bg-amber-500/10 hover:text-[#f8e7be]"
            >
              {/* Premium Glow */}
              <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <FiShoppingBag
                size={21}
                className="relative z-10 transition-all duration-500 group-hover:scale-110"
              />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 z-30 flex h-6 min-w-[24px] items-center justify-center rounded-full border border-amber-200/40 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 px-1 text-[10px] font-black leading-none text-[#2B1D0E] shadow-[0_6px_18px_rgba(251,191,36,0.45)]">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              to={ROUTES.LOGIN}
              aria-label="Account"
              className="group hidden h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[22px] border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-white/[0.02] text-stone-300 shadow-[0_10px_30px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-400/25 hover:bg-amber-500/10 hover:text-[#f8e7be] sm:flex"
            >
              {/* Premium Glow */}
              <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <FiUser
                size={21}
                className="relative z-10 transition-all duration-500 group-hover:scale-110"
              />
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() =>
                setIsMenuOpen(true)
              }
              className="flex h-[60px] w-[60px] items-center justify-center rounded-[22px] border border-amber-500/10 bg-amber-500/10 text-amber-200 transition-all duration-500 hover:border-amber-400/30 hover:bg-amber-400/20 lg:hidden"
              aria-label="Open mobile menu"
            >
              <FiMenu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() =>
          setIsMenuOpen(false)
        }
      />
    </>
  );
}

export default Header;