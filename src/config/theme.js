// src/config/theme.js

const THEME = {
  colors: {
    primary: {
      DEFAULT: "bg-amber-900",
      hover: "hover:bg-amber-950",
      text: "text-white",
      border: "border-amber-900",
    },

    secondary: {
      DEFAULT: "bg-amber-100",
      hover: "hover:bg-amber-200",
      text: "text-amber-900",
      border: "border-amber-200",
    },

    accent: {
      DEFAULT: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-300",
    },

    surface: {
      primary: "bg-white",
      secondary: "bg-stone-50",
      muted: "bg-stone-100",
      dark: "bg-stone-900",
    },

    text: {
      primary: "text-stone-900",
      secondary: "text-stone-600",
      muted: "text-stone-500",
      inverse: "text-white",
      accent: "text-amber-700",
    },

    border: {
      light: "border-stone-200",
      DEFAULT: "border-stone-300",
      dark: "border-stone-700",
      accent: "border-amber-300",
    },

    state: {
      success: "text-green-600",
      warning: "text-yellow-600",
      error: "text-red-600",
      info: "text-blue-600",
    },
  },

  spacing: {
    section: "py-12 md:py-16 lg:py-20",
    container: "px-4 sm:px-6 lg:px-8",
    card: "p-4 md:p-6",
  },

  radius: {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl",
    full: "rounded-full",
  },

  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    luxury: "shadow-lg hover:shadow-2xl transition-shadow duration-300",
  },

  transitions: {
    fast: "transition-all duration-200",
    normal: "transition-all duration-300",
    slow: "transition-all duration-500",
  },

  typography: {
    heading: "font-serif tracking-tight",
    body: "font-sans",
    price: "font-semibold",
    button: "font-medium tracking-wide",
  },

  layout: {
    container: "max-w-7xl mx-auto",
    narrowContainer: "max-w-5xl mx-auto",
    wideContainer: "max-w-screen-2xl mx-auto",
  },

  zIndex: {
    dropdown: "z-20",
    sticky: "z-30",
    overlay: "z-40",
    modal: "z-50",
    toast: "z-[60]",
  },
};

export default THEME;