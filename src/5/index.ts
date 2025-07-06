export type OrderItem = {
  name: string;
  weightKg: number;
  price: number;
  fragile: boolean;
};
export function calculateShippingCost(items: OrderItem[]) {
  if (items.length === 0) {
    return 0;
  }

  let totalWeightKg = 0;
  let totalPrice = 0;
  let fragileItemCount = 0;

  for (const item of items) {
    totalWeightKg += item.weightKg;
    totalPrice += item.price;
    if (item.fragile) {
      fragileItemCount++;
    }
  }

  let shippingCost = 50;

  if (totalWeightKg > 20) {
    shippingCost += (totalWeightKg - 20) * 10;
  }

  shippingCost += fragileItemCount * 30;

  if (totalPrice > 1000) {
    shippingCost *= 0.9;
  }

  return shippingCost;
}
