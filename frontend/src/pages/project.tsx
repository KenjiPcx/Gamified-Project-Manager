import React, { useState, useEffect, useRef } from "react";
import BackHeaderWithEdit from "../components/headers/BackHeaderWithEdit";
import {
  BlankProject,
  ProjectObj,
} from "../components/projectComponents/ProjectsListData";
import ProjectDetails from "../components/projectComponents/ProjectDetails";
import UpdateProjectForm from "../components/projectComponents/UpdateProjectForm";
import { ProgressBar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getProjectIcon } from "../components/gameSystem/GameFunctions";
import axios from "axios";

function Project() {
  const isMounted = useRef<boolean | null>(null);
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectObj>(BlankProject);
  const [loading, setLoading] = useState(true);
  const URL = `http://localhost:5000/projects/${id}`;

  const [showEdit, setShowEdit] = useState(false);
  const [projectName, setProjectName] = useState(project.title);
  const [projectDescription, setProjectDescription] = useState(
    project.description
  );
  const [projectType, setProjectType] = useState(project.type);
  const [projectTerm, setProjectTerm] = useState(project.term);
  const [projectQuests, setProjectQuests] = useState<string[]>(
    project.dependencies
  );
  const [projectSkills, setProjectSkills] = useState<string[]>(
    project.skillsInvolved
  );

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  // const getDate = () => {
  //   let date = new Date(startDate);
  //   const day = date.getUTCDay();
  //   const month = date.getUTCMonth();
  //   const year = date.getUTCFullYear();
  //   return `${day}/${month}/${year}`;
  // };

   useEffect(() => {
     isMounted.current = true;
     axios.get(URL).then((res) => {
       if (isMounted.current) {
         setProject(res.data);
         setTimeout(() => {
           if (isMounted.current) {
             setLoading(false);
           }
         }, 500);
       }
     });

     return () => {
       isMounted.current = false;
     };
   }, []);

  useEffect(() => {
    project.skillsInvolved.sort((a, b) => a.length - b.length);
  }, [project.skillsInvolved]);

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
              description={projectDescription}
              quests={projectQuests}
              skillsInvolved={projectSkills}
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
              description={projectDescription}
              dependencies={projectQuests}
              skills={projectSkills}
            />
          )}

          <div className="project-progress-info">
            <div className="progress-wrapper">
              <div className="progress-header">
                <div className="label">Progress: </div>
                <div className="logs-btn">
                  <Link to="/logs">Logs</Link>
                </div>
              </div>
              <ProgressBar
                now={project.progress}
                label={`${project.progress}%`}
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
