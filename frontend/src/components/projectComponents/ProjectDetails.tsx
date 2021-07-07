import React from "react";
import Pill from "../customUIComponents/Pill";

interface ProjectDetailsProps {
  title: string;
  icon?: JSX.Element;
  date: string;
  term: string;
  description: string;
  dependencies: string[];
  skills: string[];
}

function ProjectDetails({
  title,
  icon,
  date,
  term,
  description,
  dependencies,
  skills,
}: ProjectDetailsProps) {
  return (
    <div className="project-details-main">
      <div className="project-details">
        <div className="project-header">
          <div className="project-title">{title}</div>
          <div className="project-icon">{icon}</div>
        </div>
        <div className="project-date">
          <div className="label">Date Started:</div>
          {date}
        </div>
        <div className="project-term">
          <div className="label">Term:</div>
          {term}
        </div>
        <div className="project-description">
          <div className="label">Description:</div>
          <div className="description">{description}</div>
        </div>
        <div className="project-quests">
          <div className="label">Quests:</div>
          <ul className="quests">
            {dependencies.map((quest, key) => {
              return <li key={key}>{quest}</li>;
            })}
          </ul>
        </div>
        <div className="project-skills">
          <div className="label">Skills Involved:</div>
          <div className="skills">
            {skills.map((skill, key) => {
              return (
                <Pill id={key} key={key} removable={false} label={skill} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
