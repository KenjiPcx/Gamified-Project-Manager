import React from "react";

interface RewardsObj {
  gold: number;
  exp: number;
}

export interface QuestObj {
  name: string;
  category?: string;
  type: string;
  series?: string;
  diff: string;
  description: string;
  task: string[];
  skills: string[];
  rewards: RewardsObj;
}

const QuestsData: QuestObj[] = [
  {
    name: "Plan Project",
    type: "Main",
    series: "Project Data",
    category: "Studies",
    diff: "A",
    description: "Plan the project",
    task: ["Plan frontend", "Plan backend"],
    skills: ["Brain Power", "Management"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    name: "Design Project",
    type: "Main",
    series: "Project Data",
    category: "Coding",
    diff: "A",
    description: "Plan the project",
    task: ["Design frontend", "Design backend"],
    skills: ["Figma", "Database"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    name: "Build Project",
    type: "Main",
    series: "Project Data",
    category: "Coding",
    diff: "A",
    description: "Plan the project",
    task: ["Build frontend", "Build backend"],
    skills: ["React", "MongoDB"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    name: "Pushup x20",
    type: "Daily",
    series: "Basic Fitness",
    category: "Fitness",
    diff: "A",
    description: "Plan the project",
    task: ["Plan frontend", "Plan backend"],
    skills: ["Push", "Discipline"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    name: "Clean Room",
    type: "Weekly",
    series: "Chore",
    category: "Chore",
    diff: "A",
    description: "Plan the project",
    task: ["Plan frontend", "Plan backend"],
    skills: ["Cleanliness", "Management"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
];

export default QuestsData;
