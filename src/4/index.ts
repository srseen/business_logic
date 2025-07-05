export function calculateDiscountedPrice(
  price: number,
  MemberType: "Regular" | "Gold"
) {
  let discount: number = 0;
  if (price > 5000) {
    discount = price * 0.1;
  } else if (price >= 1000) {
    discount = price * 0.05;
  } else if (price >= 1) {
    discount = price * 0;
  }
  let finalPrice: number;
  switch (MemberType) {
    case "Regular":
      return (finalPrice = price - discount);
    case "Gold":
      if (price < 1000) {
        return (finalPrice = price);
      } else {
        return (finalPrice = (price - discount) * 0.95);
      }
  }
}
