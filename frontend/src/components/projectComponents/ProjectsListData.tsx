export interface ProjectObj {
  title: string;
  type: string;
  term: string;
  description: string;
  dependencies: string[]
  progress: number;
  status: string;
}

const ProjectsData: ProjectObj[] = [
  {
    title: "Project Data",
    type: "Project",
    term: "Long",
    description: "Collect Data on self to study behaviour",
    dependencies: [],
    progress: 20,
    status: "Building",
  },
  {
    title: "Project Prime",
    type: "Project",
    term: "Long",
    description: "Train body to prime performancce",
    dependencies: [],
    progress: 25,
    status: "Building",
  },
  {
    title: "Life Skill Manager",
    type: "Coding",
    term: "Long",
    description: "Productivity web app",
    dependencies: [],
    progress: 20,
    status: "Building",
  },
  {
    title: "Prime Stamina",
    type: "Fitness",
    term: "Short",
    description: "Gain stamina",
    dependencies: [],
    progress: 10,
    status: "Building",
  },
  {
    title: "Flexible Body",
    type: "Fitness",
    term: "Short",
    description: "Productivity web app",
    dependencies: [],
    progress: 30,
    status: "Building",
  },
  {
    title: "Peak Strength",
    type: "Fitness",
    term: "Short",
    description: "Build Strength",
    dependencies: [],
    progress: 100,
    status: "Building",
  },
];

export default ProjectsData;
