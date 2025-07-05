export function calculateNetPrice(price: number): number {
  let totalPrice: number;
  let discountPrice: number;
  if (price > 1000) {
    return (discountPrice = price * 0.9);
  } else if (price >= 500) {
    return (discountPrice = price * 0.95);
  } else if (price >= 1) {
    return (discountPrice = price);
  } else {
    return 0;
  }
  return (totalPrice = price - discountPrice);
}
