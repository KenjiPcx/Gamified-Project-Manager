import React, { useState, useEffect } from "react";
import BackHeaderWithEdit from "../components/headers/BackHeaderWithEdit";
import ProjectsData from "../components/projectComponents/ProjectsListData";
import ProjectDetails from "../components/projectComponents/ProjectDetails";
import UpdateProjectForm from "../components/projectComponents/UpdateProjectForm";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Project() {
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

  const [showEdit, setShowEdit] = useState(false);
  const [projectName, setProjectName] = useState(title);
  const [projectDescription, setProjectDescription] = useState(description);
  const [projectType, setProjectType] = useState(type);
  const [projectTerm, setProjectTerm] = useState(term);
  const [projectQuests, setProjectQuests] = useState<string[]>(dependencies);
  const [projectSkills, setProjectSkills] = useState<string[]>(skillsInvolved);

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

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
        pageTitle="Project Details"
        prevPageLink="/projectlist"
        showEdit={showEdit}
        edit={toggleShowEdit}
      />
      <div className="main-content">
        <div className="project-details-container">
          {showEdit ? (
            <UpdateProjectForm
              name={projectName}
              type={projectType}
              term={projectTerm}
              icon={icon}
              description={projectDescription}
              quests={projectQuests}
              skillsInvolved={projectSkills}
              date={getDate()}
              setProjectName={setProjectName}
              setProjectType={setProjectType}
              setProjectTerm={setProjectTerm}
              setProjectDescription={setProjectDescription}
              setProjectQuests={setProjectQuests}
              setProjectSkills={setProjectSkills}
            />
          ) : (
            <ProjectDetails
              title={projectName}
              term={projectTerm}
              icon={icon}
              description={projectDescription}
              dependencies={projectQuests}
              skills={projectSkills}
              date={getDate()}
            />
          )}

          <div className="project-progress-info">
            <div className="progress-wrapper">
              <div className="progress-header">
                <div className="label">Progress: </div>
                <div className="logs-btn"><Link to="/logs">Logs</Link></div>
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
