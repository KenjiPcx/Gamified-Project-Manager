import React, { useState, useEffect, FormEvent } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Pill from "../customUIComponents/Pill";
import { QuestObj } from "../questComponents/QuestListData";

interface NewQuestFormProps {
  show: boolean;
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
  updateQuests: React.Dispatch<React.SetStateAction<QuestObj[]>>;
}

function NewQuestForm({ show, toggleShow, updateQuests }: NewQuestFormProps) {
  const [questName, setQuestName] = useState("");
  const [questType, setQuestType] = useState("");
  const [questDiff, setQuestDiff] = useState("");
  const [questDesc, setQuestDesc] = useState("");
  const [questTask, setQuestTask] = useState("");
  const [questSkill, setQuestSkill] = useState("");
  const [questSkills, setQuestSkills] = useState<string[]>([]);

  const addToSkills = () => {
    if (questSkill !== "") {
      setQuestSkill("");
      setQuestSkills((prevQuestSkills) => [...questSkills, questSkill]);
    }
  };

  const removeFromSkills = (label: string) => {
    setQuestSkills((prevQuestSkills) =>
      questSkills.filter((skill) => skill !== label)
    );
  };

  const resetForm = () => {
    setQuestName("");
    setQuestType("");
    setQuestDiff("");
    setQuestDesc("");
    setQuestTask("");
    setQuestSkills([]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const quest: QuestObj = {
      name: questName,
      type: questType,
      diff: questDiff,
      description: questDesc,
      task: questTask,
      skills: questSkills,
    };
    updateQuests((prevQuests) => [...prevQuests, quest]);
    toggleShow(false);
  };

  useEffect(() => {
    if (!show) {
      resetForm();
    }
  }, [show])

  return (
    <Form
      className={`${show ? "main-form" : "hide"}`}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="overflow-container">
        <Form.Row>
          <Col xs={9}>
            <Form.Label>Quest Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Quest Name"
              className="form-input"
              size="sm"
              value={questName}
              onChange={(e) => setQuestName(e.target.value)}
            />
          </Col>
        </Form.Row>
        <br />
        <br />
        <Form.Row>
          <Col xs={4}>
            <Form.Label>Quest Type</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              value={questType}
              onChange={(e) => setQuestType(e.target.value)}
            >
              <option>Choose Type</option>
              <option>Projects</option>
              <option>Coding</option>
              <option>Fitness</option>
              <option>Academic</option>
            </Form.Control>
          </Col>
          <Col xs={1}></Col>
          <Col xs={4}>
            <Form.Label>Quest Diff</Form.Label>
            <Form.Control
              as="select"
              size="sm"
              value={questDiff}
              onChange={(e) => setQuestDiff(e.target.value)}
            >
              <option>Choose Diff</option>
              <option>S</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
              <option>F</option>
            </Form.Control>
          </Col>
        </Form.Row>
        <br />
        <br />
        <Form.Row>
          <Col xs={10}>
            <Form.Label>Quest Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Description"
              size="sm"
              value={questDesc}
              onChange={(e) => setQuestDesc(e.target.value)}
            />
          </Col>
        </Form.Row>
        <br />
        <br />
        <Form.Row>
          <Col xs={10}>
            <Form.Label>Quest Task</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="Enter Task"
              size="sm"
              value={questTask}
              onChange={(e) => setQuestTask(e.target.value)}
            />
          </Col>
        </Form.Row>
        <br />
        <br />
        <Form.Label>Skills Involved:</Form.Label>

        <div className="custom-form-row">
          <Form.Control
            type="text"
            placeholder="Enter Skill Name"
            className="form-input skill-input"
            size="sm"
            value={questSkill}
            onChange={(e) => setQuestSkill(e.target.value)}
          />
          <div className="add-btn-container">
            <Button
              variant="secondary"
              size="sm"
              className="add-btn"
              onClick={addToSkills}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </div>
        <div className="pill-area">
          {questSkills.map((skill, key) => {
            return (
              <Pill
                id={key}
                label={skill}
                removable={true}
                removeHandler={removeFromSkills}
                key={key}
              />
            );
          })}
        </div>
      </div>

      <Button
        variant="primary"
        type="submit"
        className="submit-btn"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </Button>
    </Form>
  );
}

export default NewQuestForm;