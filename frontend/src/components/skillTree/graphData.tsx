import React from "react";
import SkillData, { SkillObj } from "./skillData";
import Logo from "./kenji.jpeg";

interface NodeObj {
  id: number;
  label: string;
  title: string;
  shape?: string;
  image?: string;
  size?: number;
  imagePadding?: number;
}

interface GraphObj {
  nodes: NodeObj[];
  edges: {
    from: number;
    to: number;
  }[];
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

const mapSkill = (skill: SkillObj) => {
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
  GraphData.nodes.push(node);
  GraphData.edges.push({
    from: skill.parentId,
    to: skill.id,
  });
};

SkillData.forEach((skill) => mapSkill(skill));

export const GraphOptions = {
  layout: {
    hierarchical: false,
  },
  nodes: {
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

export const GraphEvents = {
  select: function (event: any) {
    let { nodes, edges } = event;
  },
};

export default GraphData;
