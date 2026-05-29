import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

ThemeContext.displayName = "ThemeContext";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

const THEME_STORAGE_KEY = "elegant-theme";

function getSystemTheme() {
  if (typeof window === "undefined") {
    return THEMES.LIGHT;
  }

  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? THEMES.DARK
    : THEMES.LIGHT;
}

function getStoredTheme() {
  if (typeof window === "undefined") {
    return THEMES.SYSTEM;
  }

  try {
    const storedTheme = localStorage.getItem(
      THEME_STORAGE_KEY
    );

    const validThemes = Object.values(THEMES);

    return validThemes.includes(storedTheme)
      ? storedTheme
      : THEMES.SYSTEM;
  } catch (error) {
    console.error(
      "Theme storage read failed:",
      error
    );

    return THEMES.SYSTEM;
  }
}

function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(
    getStoredTheme
  );

  const [systemTheme, setSystemTheme] =
    useState(getSystemTheme);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleThemeChange = (event) => {
      setSystemTheme(
        event.matches
          ? THEMES.DARK
          : THEMES.LIGHT
      );
    };

    mediaQuery.addEventListener(
      "change",
      handleThemeChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleThemeChange
      );
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        THEME_STORAGE_KEY,
        theme
      );
    } catch (error) {
      console.error(
        "Theme storage write failed:",
        error
      );
    }
  }, [theme]);

  const resolvedTheme = useMemo(() => {
    if (theme === THEMES.SYSTEM) {
      return systemTheme;
    }

    return theme;
  }, [theme, systemTheme]);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle(
      "dark",
      resolvedTheme === THEMES.DARK
    );

    root.setAttribute(
      "data-theme",
      resolvedTheme
    );
  }, [resolvedTheme]);

  const setTheme = useCallback((newTheme) => {
    if (
      !Object.values(THEMES).includes(newTheme)
    ) {
      console.warn(
        `Invalid theme provided: ${newTheme}`
      );

      return;
    }

    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((currentTheme) => {
      const activeTheme =
        currentTheme === THEMES.SYSTEM
          ? systemTheme
          : currentTheme;

      return activeTheme === THEMES.DARK
        ? THEMES.LIGHT
        : THEMES.DARK;
    });
  }, [systemTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      systemTheme,

      isDarkMode:
        resolvedTheme === THEMES.DARK,

      setTheme,
      toggleTheme,

      themes: THEMES,
    }),
    [
      theme,
      resolvedTheme,
      systemTheme,
      setTheme,
      toggleTheme,
    ]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used within ThemeProvider"
    );
  }

  return context;
}

export {
  ThemeProvider,
  useThemeContext,
};