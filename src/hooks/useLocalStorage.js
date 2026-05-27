// src/hooks/useLocalStorage.js

import { useCallback, useState } from "react";
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
  STORAGE_TYPES,
} from "../utils/storage";

function useLocalStorage(
  key,
  initialValue,
  storageType = STORAGE_TYPES.LOCAL
) {
  const getInitialValue = useCallback(() => {
    if (!key || typeof key !== "string") {
      return initialValue;
    }

    const storedValue = getStorageItem(
      key,
      initialValue,
      storageType
    );

    return storedValue ?? initialValue;
  }, [initialValue, key, storageType]);

  const [storedValue, setStoredValue] = useState(getInitialValue);

  const setValue = useCallback(
    (value) => {
      if (!key || typeof key !== "string") {
        return;
      }

      const valueToStore =
        typeof value === "function"
          ? value(storedValue)
          : value;

      const success = setStorageItem(
        key,
        valueToStore,
        storageType
      );

      if (success) {
        setStoredValue(valueToStore);
      }
    },
    [key, storedValue, storageType]
  );

  const removeValue = useCallback(() => {
    if (!key || typeof key !== "string") {
      return;
    }

    const success = removeStorageItem(key, storageType);

    if (success) {
      setStoredValue(initialValue);
    }
  }, [initialValue, key, storageType]);

  return [
    storedValue,
    setValue,
    removeValue,
  ];
}

export default useLocalStorage;