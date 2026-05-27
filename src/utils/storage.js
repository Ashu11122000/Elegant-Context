// src/utils/storage.js

const isBrowser = typeof window !== "undefined";

const STORAGE_TYPES = {
  LOCAL: "local",
  SESSION: "session",
};

function getStorage(storageType = STORAGE_TYPES.LOCAL) {
  if (!isBrowser) return null;

  return storageType === STORAGE_TYPES.SESSION
    ? window.sessionStorage
    : window.localStorage;
}

function serialize(value) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    console.error("Storage serialization failed:", error);
    return null;
  }
}

function deserialize(value, fallback = null) {
  if (!value) return fallback;

  try {
    return JSON.parse(value);
  } catch (error) {
    console.error("Storage deserialization failed:", error);
    return fallback;
  }
}

export function setStorageItem(
  key,
  value,
  storageType = STORAGE_TYPES.LOCAL
) {
  if (!key || typeof key !== "string") {
    throw new Error("Storage key must be a valid string.");
  }

  const storage = getStorage(storageType);

  if (!storage) return false;

  const serializedValue = serialize(value);

  if (serializedValue === null) return false;

  try {
    storage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error(`Failed to set storage item "${key}":`, error);
    return false;
  }
}

export function getStorageItem(
  key,
  fallback = null,
  storageType = STORAGE_TYPES.LOCAL
) {
  if (!key || typeof key !== "string") {
    return fallback;
  }

  const storage = getStorage(storageType);

  if (!storage) return fallback;

  try {
    const value = storage.getItem(key);
    return deserialize(value, fallback);
  } catch (error) {
    console.error(`Failed to get storage item "${key}":`, error);
    return fallback;
  }
}

export function removeStorageItem(
  key,
  storageType = STORAGE_TYPES.LOCAL
) {
  if (!key || typeof key !== "string") {
    return false;
  }

  const storage = getStorage(storageType);

  if (!storage) return false;

  try {
    storage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Failed to remove storage item "${key}":`, error);
    return false;
  }
}

export function clearStorage(storageType = STORAGE_TYPES.LOCAL) {
  const storage = getStorage(storageType);

  if (!storage) return false;

  try {
    storage.clear();
    return true;
  } catch (error) {
    console.error("Failed to clear storage:", error);
    return false;
  }
}

export function hasStorageItem(
  key,
  storageType = STORAGE_TYPES.LOCAL
) {
  if (!key || typeof key !== "string") {
    return false;
  }

  const storage = getStorage(storageType);

  if (!storage) return false;

  try {
    return storage.getItem(key) !== null;
  } catch (error) {
    console.error(`Failed to check storage item "${key}":`, error);
    return false;
  }
}

export { STORAGE_TYPES };