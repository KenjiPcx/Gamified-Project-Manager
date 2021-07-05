import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface ProjectsListItemProps {
  title: string;
  type: string;
  description: string;
  progress: number;
  status: string;
  removeHandler: (label: string) => void;
}

function ProjectsListItem({
  title,
  type,
  description,
  progress,
  status,
  removeHandler,
}: ProjectsListItemProps) {
  const [showDelete, setShowDelete] = useState(false);

  const handleClick = () => {
    setShowDelete(!showDelete);
  };

  return (
    <div className="projects-list-item" onClick={handleClick}>
      <div
        className={`${showDelete ? "delete-btn" : "hide"}`}
        onClick={() => removeHandler(title)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="highlight"></div>
      <div className="project-info">
        <div className="wrapper">
          <div className="project-type">{type}</div>
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
        </div>
        <div className="project-status">Status: {status}</div>
      </div>
      <div className="project-progress">
        <CircularProgressbar value={progress} text={`${progress}%`} />
      </div>
    </div>
  );
}

export default ProjectsListItem;
