/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0f0a05",
          gold: "#d4a24c",
          cream: "f8f1e7",
          brown: "#3b2414",
          charcoal: "#1f1f1f",
          platinum: "#e5e4e2",
        },
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        premium: "0 10px 40px rgba(0,0,0,0.15)",
      },

      borderRadius: {
        premium: "20px",
      },
    },
  },
  plugins: [],
}