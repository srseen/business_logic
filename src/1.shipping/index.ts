export interface ShippingInput {
  weightKg: number;
  destination: "inProvince" | "outOfProvince" | "remoteArea";
  promoCode?: string;
}
interface ShippingResult {
  basePrice: number;
  finalPrice: number;
  discount: number;
  totalPrice: number;
}

export function calculateShipping(input: ShippingInput): ShippingResult {
  const { weightKg, destination, promoCode } = input;

  const calculateBasePrice = (weightKg: number): number => {
    if (weightKg <= 1) {
      return 30;
    } else if (weightKg <= 5) {
      return 30 + (weightKg - 1) * 10;
    } else {
      return 70 + (weightKg - 5) * 15;
    }
  };

  const calculateFinalPrice = (basePrice: number): number => {
    switch (destination) {
      case "inProvince":
        return basePrice;
      case "outOfProvince":
        return basePrice * 1.2;
      case "remoteArea":
        return basePrice * 1.2 * 1.3;
      default:
        throw new Error("Invalid destination");
    }
  };

  const calculateDiscount = (finalPrice: number): number => {
    if (promoCode === "FREESHIP50") {
      return Math.min(finalPrice, 50);
    }
    return 0;
  };

  const basePrice = calculateBasePrice(weightKg);
  const finalPrice = calculateFinalPrice(basePrice);
  const discount = calculateDiscount(finalPrice);
  const totalPrice = finalPrice - discount;

  return {
    basePrice,
    finalPrice,
    discount,
    totalPrice,
  };
}
