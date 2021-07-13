import PythonLogo from "./PythonLogo.png";
import JavaScriptLogo from "./JavaScriptLogo.png";
import JavaLogo from "./JavaLogo.png";
import CppLogo from "./C++Logo.png";
import MongoDBLogo from "./MongodbLogo.png";
import MysqlLogo from "./MysqlLogo.png";
import FigmaLogo from "./FigmaLogo.png";
import ReactLogo from "./ReactLogo.png";
import NodeJsLogo from "./NodeJsLogo.png";
import DjangoLogo from "./DjangoLogo.png";

export interface SkillObj {
  id: number;
  name: string;
  type: string;
  parentId: number;
  useFrequency: number;
  image?: string;
  level?: number;
  exp?: number;
}

const SkillData: SkillObj[] = [
  {
    id: 1,
    name: "Frontend \nDevelopment",
    type: "Category Label",
    parentId: 0,
    useFrequency: 10,
  },
  {
    id: 2,
    name: "Backend \nDevelopment",
    type: "Category Label",
    parentId: 0,
    useFrequency: 10,
  },
  {
    id: 3,
    name: "Artificial \nIntelligence",
    type: "Category Label",
    parentId: 0,
    useFrequency: 10,
  },
  {
    id: 4,
    name: "Coding \nLanguages",
    type: "Category Label",
    parentId: 0,
    useFrequency: 10,
  },
  {
    id: 5,
    name: "Web \nDevelopment",
    type: "Subcategory Label",
    parentId: 1,
    useFrequency: 10,
  },
  {
    id: 6,
    name: "Mobile \nDevelopment",
    type: "Subcategory Label",
    parentId: 1,
    useFrequency: 10,
  },
  {
    id: 7,
    name: "Software \nDevelopment",
    type: "Subcategory Label",
    parentId: 1,
    useFrequency: 10,
  },
  {
    id: 8,
    name: "Game \nDevelopment",
    type: "Category Label",
    parentId: 0,
    useFrequency: 10,
  },
  {
    id: 9,
    name: "Database \nSystem",
    type: "Subcategory Label",
    parentId: 2,
    useFrequency: 10,
  },
  {
    id: 10,
    name: "Server \nDevelopment",
    type: "Subcategory Label",
    parentId: 2,
    useFrequency: 10,
  },
  {
    id: 11,
    name: "Python",
    type: "Image",
    image: PythonLogo,
    parentId: 4,
    useFrequency: 10,
  },
  {
    id: 12,
    name: "Javascript",
    type: "Image",
    image: JavaScriptLogo,
    parentId: 4,
    useFrequency: 10,
  },
  {
    id: 13,
    name: "Java",
    type: "Image",
    image: JavaLogo,
    parentId: 4,
    useFrequency: 10,
  },
  {
    id: 14,
    name: "C++",
    type: "Image",
    image: CppLogo,
    parentId: 4,
    useFrequency: 10,
  },
  {
    id: 15,
    name: "MongoDB",
    type: "Image",
    image: MongoDBLogo,
    parentId: 9,
    useFrequency: 10,
  },
  {
    id: 16,
    name: "Mysql",
    type: "Image",
    image: MysqlLogo,
    parentId: 9,
    useFrequency: 10,
  },
  {
    id: 17,
    name: "Product \nDesign",
    type: "Category",
    parentId: 0,
    useFrequency: 10,
  },
  {
    id: 18,
    name: "Figma",
    type: "Image",
    image: FigmaLogo,
    parentId: 17,
    useFrequency: 10,
  },
  {
    id: 19,
    name: "Node",
    type: "Image",
    image: NodeJsLogo,
    parentId: 10,
    useFrequency: 10,
  },
  {
    id: 20,
    name: "Django",
    type: "Image",
    image: DjangoLogo,
    parentId: 10,
    useFrequency: 10,
  },
  {
    id: 21,
    name: "React",
    type: "Image",
    image: ReactLogo,
    parentId: 5,
    useFrequency: 10,
  },
];

export default SkillData;
