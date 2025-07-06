import { calculateShippingCost, OrderItem } from "./index.js";

describe("calculateShippingCost", () => {
  it("should return 0 if no items", () => {
    expect(calculateShippingCost([])).toBe(0);
  });

  it("should return base cost for normal order", () => {
    const items: OrderItem[] = [
      { name: "Book", weightKg: 1, price: 300, fragile: false },
      { name: "Shoes", weightKg: 2, price: 1200, fragile: false },
    ];
    expect(calculateShippingCost(items)).toBe(50);
  });

  it("should add overweight cost", () => {
    const items: OrderItem[] = [
      { name: "Barbell", weightKg: 25, price: 3000, fragile: false },
    ];
    expect(calculateShippingCost(items)).toBe(100);
  });

  it("should add fragile item cost", () => {
    const items: OrderItem[] = [
      { name: "Vase", weightKg: 1, price: 500, fragile: true },
      { name: "Plate", weightKg: 2, price: 700, fragile: true },
    ];
    expect(calculateShippingCost(items)).toBe(110);
  });

  it("should apply 10% discount for high value order", () => {
    const items: OrderItem[] = [
      { name: "Laptop", weightKg: 2, price: 6000, fragile: false },
    ];
    expect(calculateShippingCost(items)).toBe(45);
  });

  it("should combine all rules", () => {
    const items: OrderItem[] = [
      { name: "TV", weightKg: 10, price: 3000, fragile: true },
      { name: "Speaker", weightKg: 15, price: 4000, fragile: false },
    ];
    expect(calculateShippingCost(items)).toBe(117);
  });
});
