import React from "react";

export const generateRewards = (diff: string) => {
  const baseGold = 100;
  const baseExp = 1000;

  let multipliers = new Map();
  multipliers.set("S", 5);
  multipliers.set("A", 4);
  multipliers.set("B", 3);
  multipliers.set("C", 2.5);
  multipliers.set("D", 2);
  multipliers.set("E", 1.5);
  multipliers.set("F", 1);

  const multiplier = multipliers.get(diff);
  const goldReward = baseGold * multiplier;
  const expReward = baseExp * multiplier;

  return {gold: goldReward, exp: expReward};
};
