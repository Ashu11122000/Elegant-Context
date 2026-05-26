import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("luxury-dark");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("elegant-theme") || "luxury-dark";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme =
      theme === "luxury-dark"
        ? "luxury-light"
        : "luxury-dark";

    setTheme(nextTheme);

    localStorage.setItem("elegant-theme", nextTheme);

    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className={`
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-[#edbf68]/20
        bg-[#2a1f0a]
        text-[#edbf68]
        transition-all duration-300
        hover:scale-105
        hover:bg-[#3a2a0d]
        ${className}
      `}
      aria-label="Toggle theme"
    >
      {theme === "luxury-dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

ThemeToggle.propTypes = {
  className: PropTypes.string,
};

export default ThemeToggle;