import React, { useState, useRef, TouchEvent } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClipboard,
  faCode,
  faDumbbell,
  faBroom,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

interface QuestsListItemProps {
  name: string;
  category?: string;
  series?: string;
  diff: string;
  task: string[];
  type: string;
}

function QuestsListItem({
  name,
  category,
  series,
  diff,
  task,
  type,
}: QuestsListItemProps) {
  let history = useHistory();

  const handleRedirect = () => {
    history.push("/quest");
  };

  const getIcon = () => {
    if (category === "Studies") return <FontAwesomeIcon icon={faBook} />;
    if (category === "Coding") return <FontAwesomeIcon icon={faCode} />;
    if (category === "Fitness") return <FontAwesomeIcon icon={faDumbbell} />;
    if (category === "Chore") return <FontAwesomeIcon icon={faBroom} />;
  };

  const getColour = () => {
    
  }

  return (
    <div id={name} className="quests-list-item" onClick={handleRedirect}>
      <div className="highlight"></div>
      <div className="quest-info">
        <div className="wrapper">
          <div className="quest-series">{series}</div>
          <div className="quest-name">{name}</div>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon">{getIcon()}</div>
      </div>
    </div>
  );
}

export default QuestsListItem;
