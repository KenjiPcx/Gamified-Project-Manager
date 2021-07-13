import React, { useState, useEffect, useRef, useMemo } from "react";
import GraphData, {
  GraphOptions,
  GraphEvents,
  mapSkillNode,
  mapSkillEdge,
} from "../components/skillTree/graphData";
import SkillData, { SkillObj, getId } from "../components/skillTree/skillData";
import BackHeaderWithEdit from "../components/headers/BackHeaderWithEdit";
import Graph from "react-graph-vis";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function SkillTree() {
  const networkRef = useRef(null);
  const [network, setNetwork] = useState<any>(null);
  const [newNodeId, setNewNodeId] = useState(0);
  const [skillData, setSkillData] = useState(SkillData);
  const [graph, setGraph] = useState(GraphData);
  const [show, setShow] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [type, setType] = useState("");
  const [filePath, setFilePath] = useState("");
  const [parent, setParent] = useState("");
  const options = GraphOptions;
  const events = GraphEvents;

  const setNetworkInstance = (nw: any) => {
    setNetwork(nw);
  };

  const toggleShow = () => {
    setShow(!show);
  };

  const handleAdd = () => {
    let skill: SkillObj = {
      id: skillData.length + 1,
      name: skillName,
      type: type,
      parentId: getId(parent),
      useFrequency: 0,
    };
    if (type === "Image") {
      skill = { ...skill, image: filePath };
    }
    setNewNodeId((prevValue) => skillData.length + 1);
    setSkillData((prevSkillData) => [...prevSkillData, skill]);
    setGraph({
      nodes: [...graph.nodes, mapSkillNode(skill)],
      edges: [...graph.edges, mapSkillEdge(skill)],
    });
    console.log(skill);
    toggleShow();
  };

  const displayGraph = useMemo(() => {
    return (
      <Graph
        ref={networkRef}
        key={Math.random()}
        graph={graph}
        options={options}
        events={events}
        getNetwork={setNetworkInstance}
      />
    );
  }, [graph]);

  useEffect(() => {
    if (network) {
      network.fit({
        nodes: [newNodeId],
        minZoomLevel: 1,
        maxZoomLevel: 2,
        animation: true,
      });
      if (newNodeId !== 0) {
        setTimeout(() => {
          network.fit({
            nodes: [0],
            minZoomLevel: 1,
            maxZoomLevel: 2,
            animation: true,
          });
        }, 2000);
      }
    }
  }, [network]);

  return (
    <>
      <div className="skilltree-page">
        <BackHeaderWithEdit
          pageTitle="Skill Tree"
          prevPageLink="/user"
          showEdit={show}
          edit={toggleShow}
        />
        <div className="main-content">
          <div className="filter"></div>
          <div className="skilltree">{displayGraph}</div>
        </div>
      </div>

      <Modal show={show} onHide={toggleShow} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Skill Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Skill"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Category Label</option>
                <option>Subcategory Label</option>
                <option>Image</option>
              </Form.Control>
            </Form.Group>
            {type === "Image" ? (
              <Form.Group>
                <Form.Label>Upload Image</Form.Label>
                <Form.File
                  onChange={(e: any) => setFilePath(e.target.files[0].name)}
                />
              </Form.Group>
            ) : (
              ""
            )}
            <Form.Group>
              <Form.Label>Parent</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Parent Name"
                value={parent}
                onChange={(e) => setParent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="custom-btn close-btn" onClick={toggleShow}>
            Close
          </div>
          <div className="custom-btn confirm-btn" onClick={handleAdd}>
            Add Skill
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SkillTree;
