import React, { useState } from "react";
import BackHeaderWithEdit from "../components/headers/BackHeaderWithEdit";
import ProjectsData from "../components/projectComponents/ProjectsListData";
import Pill from "../components/customUIComponents/Pill";
import { ProgressBar } from "react-bootstrap";

function Project() {
  const [showEdit, setShowEdit] = useState(false);

  const toggleShowEdit = () => {
    setShowEdit(!setShowEdit);
  };

  const {
    title,
    type,
    term,
    icon,
    startDate,
    description,
    dependencies,
    skillsInvolved,
    progress,
    status,
  } = ProjectsData[0];

  const getDate = () => {
    let date = new Date(startDate);
    const day = date.getUTCDay();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const sortedSkills = skillsInvolved.sort((a, b) => a.length - b.length);

  return (
    <div className="project-details-page">
      <BackHeaderWithEdit
        pageTitle="Projects Details"
        prevPageLink="/projectlist"
        edit={toggleShowEdit}
      />
      <div className="main-content">
        <div className="project-details-container">
          <div className="project-details-main">
            <div className="highlight"></div>
            <div className="project-details">
              <div className="project-header">
                <div className="project-title">{title}</div>
                <div className="project-icon">{icon}</div>
              </div>
              <div className="project-date">
                <div className="label">Date Started:</div>
                {getDate()}
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
                  {sortedSkills.map((skill, key) => {
                    return (
                      <Pill
                        id={key}
                        key={key}
                        removable={false}
                        label={skill}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="project-progress-info">
            <div className="highlight"></div>
            <div className="progress-wrapper">
              <div className="progress-header">
                <div className="label">Progress: </div>
                <div className="logs-btn">Logs</div>
              </div>
              <ProgressBar
                now={progress}
                label={`${progress}%`}
                className="progress-bar-container"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
