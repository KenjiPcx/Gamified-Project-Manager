import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCode,
  faDumbbell,
  faBroom,
  faUserGraduate,
  faFistRaised
} from "@fortawesome/free-solid-svg-icons";

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

  return { gold: goldReward, exp: expReward };
};

export const getIcon = (category: string) => {
  if (category === "Studies") return <FontAwesomeIcon icon={faBook} />;
  if (category === "Coding") return <FontAwesomeIcon icon={faCode} />;
  if (category === "Fitness") return <FontAwesomeIcon icon={faDumbbell} />;
  if (category === "Chore") return <FontAwesomeIcon icon={faBroom} />;
};

export const getProjectIcon = (type: string) => {
  if (type === "Project") return <FontAwesomeIcon icon={faUserGraduate} />;
  if (type === "Fitness") return <FontAwesomeIcon icon={faFistRaised} />;
  if (type === "Coding") return <FontAwesomeIcon icon={faCode} />;
}