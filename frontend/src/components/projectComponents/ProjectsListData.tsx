import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

export interface ProjectObj {
  title: string;
  type: string;
  term: string;
  icon?: JSX.Element;
  description: string;
  dependencies: string[];
  skillsInvolved: string[];
  progress: number;
  status: string;
  startDate: number;
}

const startDate = Date.now();

const ProjectsData: ProjectObj[] = [
  {
    title: "Project Data",
    type: "Project",
    term: "Long",
    icon: <FontAwesomeIcon icon={faUserGraduate} className="icon" />,
    description: "Collect Data on self. Use data to analyse performance",
    dependencies: [
      "Plan the Data",
      "Build the Data Collector",
      "Get the Data",
      "Analyse the Data",
      "Use the Data",
    ],
    skillsInvolved: ["Python", "CS", "test sciece", "Data Science", "Analysis", "Improvement"],
    progress: 20,
    status: "Building",
    startDate: startDate,
  },
  {
    title: "Project Prime",
    type: "Project",
    term: "Long",
    description: "Train body to prime.",
    dependencies: [],
    skillsInvolved: [],
    progress: 25,
    status: "Building",
    startDate: startDate,
  },
  {
    title: "Life Skill Manager",
    type: "Coding",
    term: "Long",
    description: "Productivity web app.",
    dependencies: [],
    skillsInvolved: [],
    progress: 20,
    status: "Building",
    startDate: startDate,
  },
  {
    title: "Prime Stamina",
    type: "Fitness",
    term: "Short",
    description: "Gain stamina.",
    dependencies: [],
    skillsInvolved: [],
    progress: 10,
    status: "Building",
    startDate: startDate,
  },
  {
    title: "Flexible Body",
    type: "Fitness",
    term: "Short",
    description: "Productivity web app.",
    dependencies: [],
    skillsInvolved: [],
    progress: 30,
    status: "Building",
    startDate: startDate,
  },
  {
    title: "Peak Strength",
    type: "Fitness",
    term: "Short",
    description: "Build Strength.",
    dependencies: [],
    skillsInvolved: [],
    progress: 100,
    status: "Building",
    startDate: startDate,
  },
];

export default ProjectsData;
