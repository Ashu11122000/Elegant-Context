/**
 * Calculates discount percentage
 *
 * Example:
 * originalPrice = 2000
 * salePrice = 1500
 * result = 25
 */

export function calculateDiscount(originalPrice = 0, salePrice = 0) {
  const original = Number(originalPrice);
  const sale = Number(salePrice);

  if (
    Number.isNaN(original) ||
    Number.isNaN(sale) ||
    original <= 0 ||
    sale < 0 ||
    sale > original
  ) {
    return 0;
  }

  const discount = ((original - sale) / original) * 100;

  return Math.round(discount);
}

export default calculateDiscount;