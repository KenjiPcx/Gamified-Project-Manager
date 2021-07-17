import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

export interface ProjectObj {
  _id: string;
  title: string;
  type: string;
  term: string;
  description: string;
  dependencies: string[];
  skillsInvolved: string[];
  progress: number;
  status: string;
  createdAt: string;
  updatedAt?: string;
  _v?: string;
}

export const BlankProject: ProjectObj = {
  _id: "Blank",
  title: "Blank",
  type: "Blank",
  term: "Blank",
  description: "Blank",
  dependencies: ["Blank"],
  skillsInvolved: ["Blank"],
  progress: 0,
  status: "Blank",
  createdAt: ""
};

const ProjectsData: ProjectObj[] = [
  {
    _id: "Preset",
    title: "Project Data",
    type: "Project",
    term: "Long",
    description: "Collect Data on self. Use data to analyse performance",
    dependencies: [
      "Plan the Data",
      "Build the Data Collector",
      "Get the Data",
      "Analyse the Data",
      "Use the Data",
    ],
    skillsInvolved: [
      "Python",
      "CS",
      "test sciece",
      "Data Science",
      "Analysis",
      "Improvement",
    ],
    progress: 20,
    status: "Building",
    createdAt: "",
  },
  {
    _id: "Preset",
    title: "Project Prime",
    type: "Project",
    term: "Long",
    description: "Train body to prime.",
    dependencies: [],
    skillsInvolved: [],
    progress: 25,
    status: "Building",
    createdAt: "",
  },
  {
    _id: "Preset",
    title: "Life Skill Manager",
    type: "Coding",
    term: "Long",
    description: "Productivity web app.",
    dependencies: [],
    skillsInvolved: [],
    progress: 20,
    status: "Building",
    createdAt: "",
  },
  {
    _id: "Preset",
    title: "Prime Stamina",
    type: "Fitness",
    term: "Short",
    description: "Gain stamina.",
    dependencies: [],
    skillsInvolved: [],
    progress: 10,
    status: "Building",
    createdAt: "",
  },
  {
    _id: "Preset",
    title: "Flexible Body",
    type: "Fitness",
    term: "Short",
    description: "Productivity web app.",
    dependencies: [],
    skillsInvolved: [],
    progress: 30,
    status: "Building",
    createdAt: "",
  },
  {
    _id: "Preset",
    title: "Peak Strength",
    type: "Fitness",
    term: "Short",
    description: "Build Strength.",
    dependencies: [],
    skillsInvolved: [],
    progress: 100,
    status: "Building",
    createdAt: "",
  },
];

export default ProjectsData;
