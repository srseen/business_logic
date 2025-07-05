import { calculateShipping, ShippingInput } from "./index.js";

describe("calculateShipping", () => {
  it("should calculate correct total for inProvince without promo", () => {
    const input: ShippingInput = {
      weightKg: 1,
      destination: "inProvince",
    };
    const result = calculateShipping(input);

    expect(result.basePrice).toBe(30);
    expect(result.finalPrice).toBe(30);
    expect(result.discount).toBe(0);
    expect(result.totalPrice).toBe(30);
  });

  it("should apply FREESHIP50 promo correctly when final price >= 50", () => {
    const input: ShippingInput = {
      weightKg: 3,
      destination: "outOfProvince",
      promoCode: "FREESHIP50",
    };
    const result = calculateShipping(input);

    expect(result.basePrice).toBe(50); // 30 + (3-1)*10
    expect(result.finalPrice).toBe(60); // 50 * 1.2
    expect(result.discount).toBe(50);
    expect(result.totalPrice).toBe(10);
  });

  it("should apply full discount when final price < 50", () => {
    const input: ShippingInput = {
      weightKg: 1,
      destination: "inProvince",
      promoCode: "FREESHIP50",
    };
    const result = calculateShipping(input);

    expect(result.finalPrice).toBe(30);
    expect(result.discount).toBe(30);
    expect(result.totalPrice).toBe(0);
  });

  it("should calculate remoteArea with both multipliers", () => {
    const input: ShippingInput = {
      weightKg: 2,
      destination: "remoteArea",
    };
    const result = calculateShipping(input);

    const base = 30 + (2 - 1) * 10; // = 40
    const expectedFinal = base * 1.2 * 1.3; // 40 * 1.2 = 48 → 48 * 1.3 = 62.4

    expect(result.basePrice).toBe(40);
    expect(result.finalPrice).toBeCloseTo(expectedFinal);
    expect(result.totalPrice).toBeCloseTo(expectedFinal);
  });
});
