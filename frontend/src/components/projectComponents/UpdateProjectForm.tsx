import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Pill from "../customUIComponents/Pill";
import { QuestObj } from "../questComponents/QuestListData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NewQuestForm from "./NewQuestForm";

interface UpdateProjectFormProps {
  name: string;
  type: string;
  term: string;
  icon?: JSX.Element;
  description: string;
  quests: string[];
  newQuests: QuestObj[];
  skillsInvolved: string[];
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  setProjectDescription: React.Dispatch<React.SetStateAction<string>>;
  setProjectType: React.Dispatch<React.SetStateAction<string>>;
  setProjectTerm: React.Dispatch<React.SetStateAction<string>>;
  setProjectQuests: React.Dispatch<React.SetStateAction<string[]>>;
  setNewQuests: React.Dispatch<React.SetStateAction<QuestObj[]>>;
  setProjectSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

function UpdateProjectForm({
  name,
  type,
  term,
  icon,
  description,
  quests,
  newQuests,
  skillsInvolved,
  setProjectName,
  setProjectDescription,
  setProjectType,
  setProjectTerm,
  setProjectQuests,
  setNewQuests,
  setProjectSkills,
}: UpdateProjectFormProps) {
  const [showQuestForm, setShowQuestForm] = useState(false);

  const toggleShow = () => {
    setShowQuestForm(!showQuestForm);
  };

  const updateQuests = () => {
    const questNames = newQuests.map((quest) => quest.name);
    setProjectQuests((quests) => [...quests, ...questNames]);
  };

  const updateSkills = () => {
    const skillNames = newQuests.map((quest) => quest.skills).flat();
    setProjectSkills((skills) => [...skills, ...skillNames]);
  };

  useEffect(() => {
    updateQuests();
    updateSkills();
  }, [newQuests]);

  return (
    <div className="project-details-main">
      {showQuestForm ? (
        <>
          <div className="header">Add a new Quest</div>
          <NewQuestForm
            show={showQuestForm}
            toggleShow={toggleShow}
            updateQuests={setNewQuests}
          />
        </>
      ) : (
        <Form className="project-details">
          <div className="project-header">
            <Form.Control
              type="text"
              size="sm"
              className="project-title"
              value={name}
              onChange={(e) => setProjectName(e.target.value)}
            />

            <div className="project-icon">
              <div className="icon">{icon}</div>
            </div>
          </div>
          <div className="project-type">
            <div className="label">Type:</div>
            <Form.Control
              as="select"
              className="w-75"
              size="sm"
              value={type}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option>Project</option>
              <option>Coding</option>
              <option>Fitness</option>
              <option>Academic</option>
            </Form.Control>
          </div>
          <div className="project-term">
            <div className="label">Term:</div>
            <Form.Control
              as="select"
              size="sm"
              className="w-75"
              value={term}
              onChange={(e) => setProjectTerm(e.target.value)}
            >
              <option>Long</option>
              <option>Short</option>
            </Form.Control>
          </div>
          <div className="project-description">
            <div className="label">Description:</div>
            <Form.Control
              as="textarea"
              className="description"
              rows={3}
              value={description}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>
          <div className="project-quests">
            <div className="quest-header">
              <div className="label">Quests:</div>
              <div className="add-btn" onClick={toggleShow}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <ul className="quests">
              {quests.map((quest, key) => {
                return <li key={key}>{quest}</li>;
              })}
            </ul>
          </div>
          <div className="project-skills">
            <div className="label">Skills Involved:</div>
            <div className="skills">
              {skillsInvolved.map((skill, key) => {
                return (
                  <Pill id={key} key={key} removable={true} label={skill} />
                );
              })}
            </div>
          </div>
        </Form>
      )}
    </div>
  );
}

export default UpdateProjectForm;
