import React, { useState } from "react";
import GraphData, {
  GraphOptions,
  GraphEvents,
} from "../components/skillTree/graphData";
import BackHeader from "../components/headers/BackHeader";
import Graph from "react-graph-vis";

function SkillTree() {
  const graph = GraphData;
  const options = GraphOptions;
  const events = GraphEvents;
    let network: any;

  const setNetworkInstance = (nw: any) => {
      network = nw;
      network.fit({
          nodes: [0],
          minZoomLevel: 1,
          maxZoomLevel: 2,
          animation: true,
      })
  };

  return (
    <div className="skilltree-page">
      <BackHeader pageTitle="Skill Tree" prevPageLink="/user" />
      <div className="main-content">
        <div className="filter"></div>
        <div className="skilltree">
          <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={setNetworkInstance}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillTree;
