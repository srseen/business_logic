export type MemberType = "Normal" | "Gold" | "Platinum";

export function calculateMemberPoints(
  amount: number,
  memberType: MemberType
): number {
  if (amount <= 0) return 0;

  const basePoints = Math.floor(amount / 20);

  let bonusMultiplier = 0;
  switch (memberType) {
    case "Gold":
      bonusMultiplier = 0.5;
      break;
    case "Platinum":
      bonusMultiplier = 1;
      break;
    case "Normal":
    default:
      bonusMultiplier = 0;
      break;
  }

  const bonusPoints = Math.floor(basePoints * bonusMultiplier);

  return basePoints + bonusPoints;
}
