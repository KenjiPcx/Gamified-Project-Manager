import React, { useState, useEffect } from "react";

// Components
import ListHeader from "../components/headers/ListHeader";
import ProjectsListItem from "../components/projectComponents/ProjectsListItem";
import ProjectsData, {
  ProjectObj,
} from "../components/projectComponents/ProjectsListData";
import NewProjectForm from "../components/projectComponents/NewProjectForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

function ProjectsList() {
  const [projects, setProjects] = useState(ProjectsData);
  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("All");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setFilteredProjects(searchFilter(termFilter(typeFilter(projects))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, type, term, projects]);

  const resetType = (state: string) => {
    type !== state ? setType(state) : setType("All");
  };

  const searchFilter = (projects: ProjectObj[]) => {
    return projects.filter((project) =>
      project.title.toLowerCase().includes(search)
    );
  };

  const termFilter = (projects: ProjectObj[]) => {
    if (term !== "All") {
      return projects.filter((project) => project.term === term);
    }
    return projects;
  };

  const typeFilter = (projects: ProjectObj[]) => {
    if (type !== "All") {
      if (type === "Ongoing") {
        return projects.filter((project) => project.progress < 100);
      }
      if (type === "Completed") {
        return projects.filter((project) => project.progress === 100);
      }
    }
    return projects;
  };

  const toggleShow = () => {
    setShow(!show);
  };

  const removeProject = (label: string) => {
    setProjects((prevProjects) =>
      projects.filter((project) => project.title !== label)
    );
  };

  const getShortDesc = (desc: string) => {
    const index = desc.indexOf(".");
    return desc.substr(0, index);
  };

  return (
    <div className="project-list-page">
      <ListHeader
        pageTitle={"Projects"}
        types={["All", "Long", "Short"]}
        setSearch={setSearch}
        setType={setTerm}
      />
      <div className="main-content">
        <div className="project-list-container">
          <div className={show ? "hide" : "project-list"}>
            <div className="list-controls">
              <div
                className={`ongoing ${type === "Ongoing" ? "active" : ""}`}
                onClick={() => resetType("Ongoing")}
              >
                Ongoing
              </div>
              <div
                className={`completed ${type === "Completed" ? "active" : ""}`}
                onClick={() => resetType("Completed")}
              >
                Completed
              </div>
              <Button
                variant="success"
                className="add-btn"
                onClick={toggleShow}
              >
                <FontAwesomeIcon icon={faPlus} className="icon" />
              </Button>
            </div>
            <div className="list">
              {filteredProjects.map((project, key) => {
                return (
                  <ProjectsListItem
                    type={project.type}
                    title={project.title}
                    description={getShortDesc(project.description)}
                    status={project.status}
                    progress={project.progress}
                    key={key}
                    removeHandler={removeProject}
                  />
                );
              })}
            </div>
          </div>
          <NewProjectForm
            show={show}
            toggleShow={toggleShow}
            updateProjects={setProjects}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
