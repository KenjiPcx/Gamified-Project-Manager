import React, { useState, useEffect, useRef } from "react";
import BackHeaderWithEdit from "../components/headers/BackHeaderWithEdit";
import {
  BlankProject,
  ProjectObj,
} from "../components/projectComponents/ProjectsListData";
import ProjectDetails from "../components/projectComponents/ProjectDetails";
import UpdateProjectForm from "../components/projectComponents/UpdateProjectForm";
import { ProgressBar } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { getProjectIcon } from "../components/gameSystem/GameFunctions";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { QuestObj } from "../components/questComponents/QuestListData";

function Project() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const URL = `http://localhost:5000/projects/${id}`;
  const createQuestURL = `http://localhost:5000/quests/`;
  const isMounted = useRef<boolean | null>(null);
  const [project, setProject] = useState<ProjectObj>(BlankProject);
  const [loading, setLoading] = useState(true);

  const [showEdit, setShowEdit] = useState(false);
  const [projectName, setProjectName] = useState(project.title);
  const [date, setDate] = useState("");
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
  const [newQuests, setNewQuests] = useState<QuestObj[]>([]);

  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const getDate = (date: string) => {
    const day = date.substring(8, 10);
    const month = date.substring(5, 7);
    const year = date.substring(0, 4);
    return `${day}/${month}/${year}`;
  };

  const handleDelete = () => {
    axios.delete(URL).then(() => {
      history.push("/projectlist");
    });
  };

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

  useEffect(() => {
    setProjectName(project.title);
    setProjectType(project.type);
    setProjectTerm(project.term);
    setProjectDescription(project.description);
    setProjectQuests(project.dependencies);
    setProjectSkills(project.skillsInvolved);
    setDate(getDate(project.createdAt));
  }, [project]);

  useEffect(() => {
    if (!showEdit && projectName !== "Blank") {
      newQuests.forEach((quest) => {
        axios.post(createQuestURL, quest).then(() => {
          console.log("Created quest")
        }).catch((err) => {
          console.log(err)
        })
      })
      const updatedProject: ProjectObj = {
        _id: id,
        title: projectName,
        type: projectType,
        term: projectTerm,
        description: projectDescription,
        dependencies: projectQuests,
        skillsInvolved: projectSkills,
        createdAt: "",
        status: "",
        progress: 0,
      };
      axios
        .patch(URL, updatedProject)
        .then(() => {
          console.log("Updated");
        })
        .catch(() => {
          console.log("Failed");
        });
    }
  }, [showEdit]);

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
          {loading ? (
            <Spinner animation="border" className="spinner"></Spinner>
          ) : (
            <>
              {showEdit ? (
                <UpdateProjectForm
                  name={projectName}
                  type={projectType}
                  term={projectTerm}
                  description={projectDescription}
                    quests={projectQuests}
                    newQuests={newQuests}
                  skillsInvolved={projectSkills}
                  icon={getProjectIcon(projectType)}
                  setProjectName={setProjectName}
                  setProjectType={setProjectType}
                  setProjectTerm={setProjectTerm}
                  setProjectDescription={setProjectDescription}
                    setProjectQuests={setProjectQuests}
                    setNewQuests={setNewQuests}
                  setProjectSkills={setProjectSkills}
                />
              ) : (
                <ProjectDetails
                  title={projectName}
                  type={projectType}
                  term={projectTerm}
                  description={projectDescription}
                  dependencies={projectQuests}
                  skills={projectSkills}
                  date={date}
                  icon={getProjectIcon(projectType)}
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
                <div className="delete-btn" onClick={handleDelete}>
                  Delete Project
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
