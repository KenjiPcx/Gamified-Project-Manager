import React from "react";
import SkillData, { SkillObj } from "./skillData";
import Logo from "./kenji.jpeg";

export interface NodeObj {
  id: number;
  label: string;
  title: string;
  shape?: string;
  image?: string;
  size?: number;
  imagePadding?: number;
}

export interface EdgeObj {
  id: number;
  from: number;
  to: number;
}

export interface GraphObj {
  nodes: NodeObj[];
  edges: EdgeObj[];
}

const GraphData: GraphObj = {
  nodes: [
    {
      id: -1,
      label: "Orphans",
      title: "No parents found",
      shape: "box",
    },
    {
      id: 0,
      label: "Kenji",
      title: "You",
      shape: "circularImage",
      image: Logo,
      size: 25,
      imagePadding: 0,
    },
  ],
  edges: [],
};

export const mapSkill = (skill: SkillObj) => {
  let node: NodeObj = mapSkillNode(skill);
  const edge: EdgeObj = mapSkillEdge(skill, GraphData.edges);
  GraphData.nodes.push(node);
  GraphData.edges.push(edge);
};

export const mapSkillNode = (skill: SkillObj) => {
  let node: NodeObj = {
    id: skill.id,
    label: skill.name,
    title: `${skill.name} was used ${skill.useFrequency} times.`,
  };
  if (skill.type === "Image") {
    node = {
      ...node,
      shape: "circularImage",
      image: skill.image,
    };
  } else if (skill.type === "Category Label") {
    node = {
      ...node,
      shape: "eclipsse",
    };
  } else if (skill.type === "Subcategory Label") {
    node = {
      ...node,
      shape: "box",
    };
  }
  return node;
};

export const mapSkillEdge = (skill: SkillObj, graphEdges: EdgeObj[]) => {
  const edge: EdgeObj = {
    id: graphEdges.length + 1,
    from: skill.parentId,
    to: skill.id,
  };
  return edge;
};

SkillData.forEach((skill) => mapSkill(skill));

export const GraphOptions = {
  layout: {
    hierarchical: false,
  },
  nodes: {
    brokenImage: Logo,
    borderWidth: 0,
    shape: "ellipse",
    shapeProperties: {
      borderRadius: 10, // only for box shape
      interpolation: false, // only for image and circularImage shapes
      useImageSize: false, // only for image and circularImage shapes
      useBorderWithImage: false, // only for image shape
      coordinateOrigin: "center", // only for image and circularImage shapes
    },
    imagePadding: 5,
    size: 20,
    margin: {
      top: 5,
      right: 20,
      bottom: 5,
      left: 20,
    },
    color: "#FFF",
  },
  edges: {
    color: "#000000",
    smooth: true,
  },
  autoResize: true,
  height: "100%",
  width: "100%",
};

export default GraphData;
