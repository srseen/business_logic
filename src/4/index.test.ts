import { calculateDiscountedPrice } from "./index.js";

describe("calculateDiscountedPrice", () => {
  it("should return the same price if under 1000", () => {
    expect(calculateDiscountedPrice(999, "Regular")).toBe(999);
  });

  it("should apply 5% discount for Regular customer between 1000-5000", () => {
    expect(calculateDiscountedPrice(2000, "Regular")).toBe(1900);
  });

  it("should apply 10% discount for Regular customer over 5000", () => {
    expect(calculateDiscountedPrice(6000, "Regular")).toBe(5400);
  });

  it("should apply extra 5% for Gold customer", () => {
    expect(calculateDiscountedPrice(2000, "Gold")).toBe(1805); // 2000 * 0.95 = 1900 → * 0.95 = 1805
    expect(calculateDiscountedPrice(6000, "Gold")).toBe(5130); // 6000 * 0.9 = 5400 → * 0.95 = 5130
  });

  it("should return same price for Gold customer under 1000", () => {
    expect(calculateDiscountedPrice(800, "Gold")).toBe(800);
  });
});
