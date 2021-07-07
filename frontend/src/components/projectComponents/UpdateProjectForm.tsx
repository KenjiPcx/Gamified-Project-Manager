import React, { useState } from "react";
import { Form, Dropdown, DropdownButton } from "react-bootstrap";
import Pill from "../customUIComponents/Pill";
import { QuestObj } from "../questComponents/QuestListData";

interface UpdateProjectFormProps {
  title: string;
  date: string;
    type: string;
    term: string;
  icon?: JSX.Element;
  description: string;
  quests: string[];
  skillsInvolved: string[];
}

function UpdateProjectForm({
  title,
  date,
    type,
  term,
  icon,
  description,
  quests,
  skillsInvolved,
}: UpdateProjectFormProps) {
  const [projectName, setProjectName] = useState(title);
  const [projectDescription, setProjectDescription] = useState(description);
  const [projectType, setProjectType] = useState(type);
  const [projectTerm, setProjectTerm] = useState(term);
  const [showQuestForm, setShowQuestForm] = useState(false);
  const [projectQuests, setProjectQuests] = useState<string[]>(quests);
  const [projectSkills, setProjectSkills] = useState<string[]>(skillsInvolved);

  return (
    <div className="project-details-main">
      <Form className="project-details">
        <div className="project-header">
          <Form.Control
            type="text"
            className="project-title"
            placeholder="Enter email"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <div className="project-icon">{icon}</div>
          <Form.Control
            as="select"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option>Projects</option>
            <option>Coding</option>
            <option>Fitness</option>
            <option>Academic</option>
          </Form.Control>
        </div>
        <div className="project-date">
          <div className="label">Date Started:</div>
          {date}
        </div>
        <div className="project-term">
          <div className="label">Term:</div>
          <Form.Control
            as="select"
            value={projectTerm}
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
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div className="project-quests">
          <div className="label">Quests:</div>
          <ul className="quests">
            {projectQuests.map((quest, key) => {
              return <li key={key}>{quest}</li>;
            })}
          </ul>
        </div>
        <div className="project-skills">
          <div className="label">Skills Involved:</div>
          <div className="skills">
            {projectSkills.map((skill, key) => {
              return <Pill id={key} key={key} removable={true} label={skill} />;
            })}
          </div>
        </div>
      </Form>
    </div>
  );
}

export default UpdateProjectForm;
