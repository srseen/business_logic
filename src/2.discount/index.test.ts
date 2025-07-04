// discount.test.ts
import { calculateNetPrice } from "./index.js";

describe("calculateNetPrice", () => {
  it("should apply 10% discount for price > 1000", () => {
    expect(calculateNetPrice(1500)).toBe(1350);
  });

  it("should apply 5% discount for price between 500 and 1000", () => {
    expect(calculateNetPrice(700)).toBe(665);
  });

  it("should not apply discount for price < 500", () => {
    expect(calculateNetPrice(400)).toBe(400);
  });

  it("should apply 5% discount for price exactly 500", () => {
    expect(calculateNetPrice(500)).toBe(475);
  });

  it("should apply 5% discount for price exactly 1000", () => {
    expect(calculateNetPrice(1000)).toBe(950);
  });
});
