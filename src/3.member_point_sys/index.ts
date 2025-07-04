export function calculateMemberPoints(
  amount: number,
  memberType: "Normal" | "Gold" | "Platinum"
): number {
  const basePoints = Math.floor(amount / 20);

  let bonusMultiplier = 0;

  if (memberType === "Gold") {
    bonusMultiplier = 0.5;
  } else if (memberType === "Platinum") {
    bonusMultiplier = 1;
  }

  const bonusPoints = Math.floor(basePoints * bonusMultiplier);

  return basePoints + bonusPoints;
}
