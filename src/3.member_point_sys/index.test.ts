import { calculateMemberPoints } from "./index.js";

describe("calculateMemberPoints", () => {
  it("should give 1 point for 39 THB with Normal member", () => {
    expect(calculateMemberPoints(39, "Normal")).toBe(1);
  });

  it("should give 2 points for 40 THB with Normal member", () => {
    expect(calculateMemberPoints(40, "Normal")).toBe(2);
  });

  it("should give 3 points for 40 THB with Gold member", () => {
    expect(calculateMemberPoints(40, "Gold")).toBe(3);
  });

  it("should give 4 points for 40 THB with Platinum member", () => {
    expect(calculateMemberPoints(40, "Platinum")).toBe(4);
  });

  it("should give 7 points for 99 THB with Gold member", () => {
    expect(calculateMemberPoints(99, "Gold")).toBe(6);
  });

  it("should give 10 points for 100 THB with Platinum member", () => {
    expect(calculateMemberPoints(100, "Platinum")).toBe(10);
  });

  it("should give 0 point for 0 THB with any member", () => {
    expect(calculateMemberPoints(0, "Normal")).toBe(0);
    expect(calculateMemberPoints(0, "Gold")).toBe(0);
    expect(calculateMemberPoints(0, "Platinum")).toBe(0);
  });

  it("should give correct points for edge cases", () => {
    expect(calculateMemberPoints(19, "Normal")).toBe(0);
    expect(calculateMemberPoints(20, "Gold")).toBe(1);
    expect(calculateMemberPoints(20, "Platinum")).toBe(2);
  });
});
