import React, { useState, useEffect } from "react";
import BackHeaderWithEdit from "../components/headers/BackHeaderWithEdit";
import ProjectsData from "../components/projectComponents/ProjectsListData";
import Pill from "../components/customUIComponents/Pill";
import ProjectDetails from "../components/projectComponents/ProjectDetails";
import UpdateProjectForm from "../components/projectComponents/UpdateProjectForm";
import { ProgressBar } from "react-bootstrap";
import { type } from "os";

function Project() {
  const [showEdit, setShowEdit] = useState(false);

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const {
    title,
    term,
    type,
    icon,
    startDate,
    description,
    dependencies,
    skillsInvolved,
    progress,
  } = ProjectsData[0];

  const getDate = () => {
    let date = new Date(startDate);
    const day = date.getUTCDay();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    skillsInvolved.sort((a, b) => a.length - b.length);
  }, [skillsInvolved]);

  return (
    <div className="project-details-page">
      <BackHeaderWithEdit
        pageTitle="Projects Details"
        prevPageLink="/projectlist"
        edit={toggleShowEdit}
      />
      <div className="main-content">
        <div className="project-details-container">
          {showEdit ? (
            <UpdateProjectForm
              title={title}
              type={type}
              term={term}
              icon={icon}
              description={description}
              quests={dependencies}
              skillsInvolved={skillsInvolved}
              date={getDate()}
            />
          ) : (
            <ProjectDetails
              title={title}
              term={term}
              icon={icon}
              description={description}
              dependencies={dependencies}
              skills={skillsInvolved}
              date={getDate()}
            />
          )}

          <div className="project-progress-info">
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
            <div className="delete-btn">Delete Project</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
