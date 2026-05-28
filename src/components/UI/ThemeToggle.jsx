import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

function ThemeToggle({
  className = "",
}) {
  const [theme, setTheme] =
    useState("luxury-dark");

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    const savedTheme =
      window.localStorage.getItem(
        "elegant-theme"
      ) || "luxury-dark";

    setTheme(savedTheme);

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme =
      theme === "luxury-dark"
        ? "luxury-light"
        : "luxury-dark";

    setTheme(nextTheme);

    window.localStorage.setItem(
      "elegant-theme",
      nextTheme
    );

    document.documentElement.setAttribute(
      "data-theme",
      nextTheme
    );
  };

  if (!mounted) {
    return (
      <div
        className={`relative h-12 w-12 overflow-hidden rounded-2xl border border-amber-200/10 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl ${className}`}
      >
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/[0.05] to-transparent" />
      </div>
    );
  }

  const isDark =
    theme === "luxury-dark";

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      aria-label={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      className={`group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-amber-200/15 bg-white/[0.05] text-amber-200 shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-300/30 hover:shadow-[0_18px_44px_rgba(217,119,6,0.22)] focus:outline-none focus:ring-4 focus:ring-amber-200/15 active:scale-[0.96] ${className}`}
    >
      {/* Background glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/10" />

      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-amber-300/15 blur-2xl transition-all duration-700 group-hover:scale-125" />
      </div>

      {/* Metallic top shine */}
      <div className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70" />

      {/* Icon wrapper */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Sun Icon */}
        <span
          className={`absolute transition-all duration-700 ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-180 opacity-0"
          }`}
        >
          <FaSun
            size={16}
            className="drop-shadow-[0_0_12px_rgba(237,191,104,0.55)]"
          />
        </span>

        {/* Moon Icon */}
        <span
          className={`transition-all duration-700 ${
            isDark
              ? "scale-0 -rotate-180 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
        >
          <FaMoon
            size={15}
            className="text-stone-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
          />
        </span>
      </div>

      {/* Hover glow layer */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-white/[0.03]" />
      </div>
    </button>
  );
}

ThemeToggle.propTypes = {
  className: PropTypes.string,
};

export default ThemeToggle;