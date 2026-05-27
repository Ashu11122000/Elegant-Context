// src/utils/debounce.js

function debounce(callback, delay = 300, immediate = false) {
  if (typeof callback !== "function") {
    throw new TypeError("Debounce requires a valid callback function.");
  }

  let timeoutId = null;

  function debounced(...args) {
    const context = this;
    const shouldCallNow = immediate && timeoutId === null;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      timeoutId = null;

      if (!immediate) {
        callback.apply(context, args);
      }
    }, delay);

    if (shouldCallNow) {
      callback.apply(context, args);
    }
  }

  debounced.cancel = function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  debounced.flush = function flush(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      callback.apply(this, args);
    }
  };

  return debounced;
}

export default debounce;