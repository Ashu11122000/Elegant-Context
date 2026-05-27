/**
 * Checks if a value is empty
 */
export function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim() === "";
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
}

/**
 * Validates email format
 */
export function isEmail(email = "") {
  if (typeof email !== "string") {
    return false;
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email.trim());
}

/**
 * Checks minimum length
 */
export function minLength(value = "", min = 0) {
  if (typeof value !== "string") {
    return false;
  }

  return value.trim().length >= min;
}

/**
 * Checks maximum length
 */
export function maxLength(value = "", max = Infinity) {
  if (typeof value !== "string") {
    return false;
  }

  return value.trim().length <= max;
}

/**
 * Checks if two values match
 */
export function matches(value1 = "", value2 = "") {
  return value1 === value2;
}

/**
 * Checks numeric value
 */
export function isNumber(value) {
  return !Number.isNaN(Number(value));
}

/**
 * Validates positive numeric values
 */
export function isPositiveNumber(value) {
  const numericValue = Number(value);

  return !Number.isNaN(numericValue) && numericValue > 0;
}

/**
 * Validates stock quantity
 */
export function isValidStock(value) {
  const numericValue = Number(value);

  return Number.isInteger(numericValue) && numericValue >= 0;
}

/**
 * Checks minimum numeric value
 */
export function minValue(value, min = 0) {
  const numericValue = Number(value);

  if (Number.isNaN(numericValue)) {
    return false;
  }

  return numericValue >= min;
}

/**
 * Checks maximum numeric value
 */
export function maxValue(value, max = Infinity) {
  const numericValue = Number(value);

  if (Number.isNaN(numericValue)) {
    return false;
  }

  return numericValue <= max;
}