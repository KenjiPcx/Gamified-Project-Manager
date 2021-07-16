import React, { useState, useEffect, FormEvent } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import NewQuestForm from "./NewQuestForm";
import Pill from "../customUIComponents/Pill";
import { ProjectObj } from "./ProjectsListData";
import { QuestObj } from "../questComponents/QuestListData";

interface NewProjectFormProps {
  show: boolean;
  toggleShow: () => void;
  updateProjects: React.Dispatch<React.SetStateAction<ProjectObj[]>>;
}

function NewProjectForm({
  show,
  toggleShow,
  updateProjects,
}: NewProjectFormProps) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectTerm, setProjectTerm] = useState("");
  const [showQuestForm, setShowQuestForm] = useState(false);
  const [quests, setQuests] = useState<QuestObj[]>([]);

  const removeQuest = (label: string) => {
    setQuests((prevQuests) => quests.filter((quest) => quest.name !== label));
  };

  const resetForm = () => {
    setProjectName("");
    setProjectDescription("");
    setProjectType("Choose Type");
    setProjectTerm("Choose Term");
    setQuests([]);
  };

  const exitForm = () => {
    if (showQuestForm) {
      setShowQuestForm(false);
    }
    resetForm();
    toggleShow();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let skills: string[] = [];
    quests.forEach((quest) => {
      skills = [...skills, ...quest.skills];
    });

    const project: ProjectObj = {
      _id: "",
      title: projectName,
      type: projectType,
      term: projectTerm,
      description: projectDescription,
      dependencies: quests.map((quest) => quest.name),
      progress: 0,
      status: "Initialized Project",
      skillsInvolved: skills,
    };
    updateProjects((prevProjects) => [...prevProjects, project]);
    toggleShow();
  };

  const disabled =
    projectName === "" &&
    (projectType === "Choose Type" || projectType === "") &&
    (projectTerm === "Choose Term" || projectType === "") &&
    projectDescription === "" 

  useEffect(() => {
    if (!show) {
      resetForm();
    }
  }, [show]);

  return (
    <div className={`${show ? "new-project-form" : "hide"}`}>
      <div className="form-controls">
        {showQuestForm ? (
          <>
            <Button
              variant="secondary"
              onClick={() => setShowQuestForm(false)}
              className="close-btn"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            </Button>
            <div className="title">{"New Project Quest"}</div>
          </>
        ) : (
          <div className="title">New Project</div>
        )}
        <Button variant="danger" onClick={exitForm} className="close-btn">
          <FontAwesomeIcon icon={faTimes} className="icon" />
        </Button>
      </div>
      <div className="form-container">
        <div className="highlight"></div>
        <NewQuestForm
          show={showQuestForm}
          toggleShow={setShowQuestForm}
          updateQuests={setQuests}
        />
        <Form
          className={`${showQuestForm ? "hide" : "main-form"}`}
          onSubmit={handleSubmit}
        >
          <div className="overflow-container">
            <Form.Row>
              <Col xs={9}>
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Project Name"
                  className="form-input"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Please enter a suitable name.
                </Form.Text>
              </Col>
            </Form.Row>
            <br />
            <br />
            <Form.Row>
              <Col xs={11}>
                <Form.Label>Project Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Enter Description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Please enter a short description (1-2 Lines).
                </Form.Text>
              </Col>
            </Form.Row>
            <br />
            <br />
            <Form.Row>
              <Col xs={5}>
                <Form.Label>Project Type</Form.Label>
                <Form.Control
                  as="select"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                >
                  <option>Choose Type</option>
                  <option>Projects</option>
                  <option>Coding</option>
                  <option>Fitness</option>
                  <option>Academic</option>
                </Form.Control>
              </Col>
              <Col xs={1}></Col>
              <Col xs={5}>
                <Form.Label>Project Term</Form.Label>
                <Form.Control
                  as="select"
                  value={projectTerm}
                  onChange={(e) => setProjectTerm(e.target.value)}
                >
                  <option>Choose Term</option>
                  <option>Short (1 Month)</option>
                  <option>Mid (6-12Months)</option>
                  <option>Long (1-5Years)</option>
                </Form.Control>
              </Col>
            </Form.Row>
            <br />
            <br />
            <div className="custom-form-row">
              <div className="label">
                <Form.Label>Child Dependencies</Form.Label>
              </div>
              <div className="add-btn-container">
                <Button
                  variant="secondary"
                  size="sm"
                  className="add-btn"
                  onClick={() => setShowQuestForm(true)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </div>
            </div>
            <ol className="quest-list">
              {quests.length > 0
                ? quests.map((quest, key) => {
                    return (
                      <li key={key}>
                        <Pill
                          id={key}
                          label={quest.name}
                          removable={true}
                          removeHandler={removeQuest}
                        />
                      </li>
                    );
                  })
                : "None"}
            </ol>
          </div>
          <Button
            variant="primary"
            type="submit"
            disabled={disabled}
            className="submit-btn"
            onClick={(e) => handleSubmit(e)}
          >
            Create Project
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default NewProjectForm;
