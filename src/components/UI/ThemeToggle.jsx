import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle({ className = "" }) {
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
        className={`h-11 w-11 rounded-full border border-[#edbf68]/10 bg-white/5 ${className}`}
      />
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
      className={`group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#edbf68]/20 bg-white/5 text-[#edbf68] shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#edbf68]/20 ${className}`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#edbf68]/10 to-transparent opacity-80" />

      {/* Icon */}
      <span className="relative z-10 transition-transform duration-500 group-hover:rotate-180">
        {isDark ? (
          <FaSun size={16} />
        ) : (
          <FaMoon size={16} />
        )}
      </span>
    </button>
  );
}

ThemeToggle.propTypes = {
  className: PropTypes.string,
};

export default ThemeToggle;