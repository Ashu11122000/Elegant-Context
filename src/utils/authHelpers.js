// src/utils/authHelpers.js

import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
  STORAGE_TYPES,
} from "./storage";

const AUTH_STORAGE_KEYS = {
  TOKEN: "elegant_auth_token",
  USER: "elegant_auth_user",
};

export function saveAuthToken(token, rememberMe = true) {
  if (!token || typeof token !== "string") {
    return false;
  }

  const storageType = rememberMe
    ? STORAGE_TYPES.LOCAL
    : STORAGE_TYPES.SESSION;

  return setStorageItem(
    AUTH_STORAGE_KEYS.TOKEN,
    token,
    storageType
  );
}

export function getAuthToken() {
  return (
    getStorageItem(
      AUTH_STORAGE_KEYS.TOKEN,
      null,
      STORAGE_TYPES.LOCAL
    ) ||
    getStorageItem(
      AUTH_STORAGE_KEYS.TOKEN,
      null,
      STORAGE_TYPES.SESSION
    )
  );
}

export function removeAuthToken() {
  const localRemoved = removeStorageItem(
    AUTH_STORAGE_KEYS.TOKEN,
    STORAGE_TYPES.LOCAL
  );

  const sessionRemoved = removeStorageItem(
    AUTH_STORAGE_KEYS.TOKEN,
    STORAGE_TYPES.SESSION
  );

  return localRemoved || sessionRemoved;
}

export function saveAuthUser(user, rememberMe = true) {
  if (!user || typeof user !== "object") {
    return false;
  }

  const storageType = rememberMe
    ? STORAGE_TYPES.LOCAL
    : STORAGE_TYPES.SESSION;

  return setStorageItem(
    AUTH_STORAGE_KEYS.USER,
    user,
    storageType
  );
}

export function getAuthUser() {
  return (
    getStorageItem(
      AUTH_STORAGE_KEYS.USER,
      null,
      STORAGE_TYPES.LOCAL
    ) ||
    getStorageItem(
      AUTH_STORAGE_KEYS.USER,
      null,
      STORAGE_TYPES.SESSION
    )
  );
}

export function removeAuthUser() {
  const localRemoved = removeStorageItem(
    AUTH_STORAGE_KEYS.USER,
    STORAGE_TYPES.LOCAL
  );

  const sessionRemoved = removeStorageItem(
    AUTH_STORAGE_KEYS.USER,
    STORAGE_TYPES.SESSION
  );

  return localRemoved || sessionRemoved;
}

export function isAuthenticated() {
  return Boolean(getAuthToken());
}

export function logoutUser() {
  removeAuthToken();
  removeAuthUser();
}

export { AUTH_STORAGE_KEYS };