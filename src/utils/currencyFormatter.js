/**
 * Formats numeric values into Indian Rupee currency format
 *
 * Example:
 * 12999 -> ₹12,999
 * 4999.5 -> ₹4,999.50
 */

export function currencyFormatter(amount = 0) {
  const numericAmount = Number(amount);

  if (Number.isNaN(numericAmount)) {
    return "₹0";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(numericAmount);
}

export default currencyFormatter;