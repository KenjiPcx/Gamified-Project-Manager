import React, { useState, useRef, TouchEvent } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

interface ProjectsListItemProps {
  id: string;
  title: string;
  type: string;
  description: string;
  progress: number;
  status: string;
  removeHandler: (label: string) => void;
}

function ProjectsListItem({
  id,
  title,
  type,
  description,
  progress,
  status,
  removeHandler,
}: ProjectsListItemProps) {
  let history = useHistory();
  let timer: NodeJS.Timeout | null = null;
  const [showDelete, setShowDelete] = useState(false);
  const touching = useRef(false);

  const handleRedirect = () => {
    if (showDelete) {
      setShowDelete(false);
    } else if (!showDelete) {
      history.push(`/project/${id}`);
    }
  };

  const handleClick = (e: TouchEvent<HTMLDivElement>) => {
    removeHandler(title);
  };

  const handleLongPressStart = () => {
    touching.current = true;
    timer = setTimeout(() => {
      if (touching.current) {
        setShowDelete(true);
      }
    }, 1000);
  };

  const handleLongPressEnd = () => {
    touching.current = false;
    if (timer) {
      clearTimeout(timer);
    }
  };

  return (
    <div
      id={id}
      className="projects-list-item"
      onTouchStart={handleLongPressStart}
      onTouchEnd={handleLongPressEnd}
      onClick={handleRedirect}
    >
      <div className="highlight"></div>
      <div className="project-info">
        <div className="wrapper">
          <div className="project-type">{type}</div>
          <div className="project-title">{title}</div>
        </div>
        <div className="project-status">Status: {status}</div>
      </div>
      <div className="project-progress">
        <CircularProgressbar value={progress} text={`${progress}%`} />
      </div>
      <div
        className={`${showDelete ? "delete-btn" : "hide"}`}
        onTouchStart={(e) => handleClick(e)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
}

export default ProjectsListItem;
