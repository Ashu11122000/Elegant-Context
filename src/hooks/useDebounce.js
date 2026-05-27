// src/hooks/useDebounce.js

import { useEffect, useMemo } from "react";
import debounce from "../utils/debounce";

function useDebounce(callback, delay = 300, immediate = false) {
  const debouncedCallback = useMemo(
    () => debounce(callback, delay, immediate),
    [callback, delay, immediate]
  );

  useEffect(() => {
    return () => {
      debouncedCallback.cancel();
    };
  }, [debouncedCallback]);

  return debouncedCallback;
}

export default useDebounce;