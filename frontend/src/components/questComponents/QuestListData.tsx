import React from "react";

interface RewardsObj {
  gold: number;
  exp: number;
}

export interface QuestObj {
  _id: string;
  name: string;
  category: string;
  type: string;
  series: string;
  diff: string;
  description: string;
  clearConditions: string[];
  skills: string[];
  rewards: RewardsObj;
}

export const BlankQuest = {
  _id: "0",
  name: "",
  type: "",
  series: "",
  category: "",
  diff: "",
  description:
    "",
  clearConditions: [""],
  skills: [""],
  rewards: {
    gold: 0,
    exp: 0,
  },
};

const QuestsData: QuestObj[] = [
  {
    _id: "1",
    name: "Plan Project",
    type: "Main",
    series: "Project Data",
    category: "Studies",
    diff: "C",
    description:
      "Planning is essential for smooth work down the line. Plan the project. ",
    clearConditions: ["Plan frontend", "Plan backend"],
    skills: ["Brain Power", "Management"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    _id: "1",
    name: "Design Project",
    type: "Main",
    series: "Project Data",
    category: "Coding",
    diff: "B",
    description: "Plan the project",
    clearConditions: ["Design frontend", "Design backend"],
    skills: ["Figma", "Database"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    _id: "1",
    name: "Build Project",
    type: "Main",
    series: "Project Data",
    category: "Coding",
    diff: "A",
    description: "Plan the project",
    clearConditions: ["Build frontend", "Build backend"],
    skills: ["React", "MongoDB"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    _id: "1",
    name: "Pushup x20",
    type: "Daily",
    series: "Basic Fitness",
    category: "Fitness",
    diff: "E",
    description: "Plan the project",
    clearConditions: ["Plan frontend", "Plan backend"],
    skills: ["Push", "Discipline"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    _id: "1",
    name: "Clean Room",
    type: "Weekly",
    series: "Chore",
    category: "Chore",
    diff: "F",
    description: "Plan the project",
    clearConditions: ["Plan frontend", "Plan backend"],
    skills: ["Cleanliness", "Management"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
  {
    _id: "1",
    name: "Job",
    type: "Weekly",
    series: "Life Goals",
    category: "Studies",
    diff: "S",
    description: "Plan the project",
    clearConditions: ["Plan frontend", "Plan backend"],
    skills: ["Cleanliness", "Management"],
    rewards: {
      gold: 1000,
      exp: 1000,
    },
  },
];

export default QuestsData;
