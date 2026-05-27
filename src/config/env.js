export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "Elegant Context",
  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "",
  NODE_ENV: import.meta.env.MODE || "development",
};