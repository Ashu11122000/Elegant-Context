import { ENV } from "./env";

export const APP_CONFIG = {
    name: ENV.APP_NAME,
    version: ENV.APP_VERSION,
    apiBaseUrl: ENV.API_BASE_URL,
};