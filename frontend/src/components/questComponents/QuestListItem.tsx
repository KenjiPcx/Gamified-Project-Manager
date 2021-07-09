import React from "react";
import { getIcon } from "../gameSystem/GameFunctions";
import { useHistory } from "react-router-dom";

interface QuestsListItemProps {
  name: string;
  category: string;
  series: string;
  diff: string;
  rewards: { gold: number; exp: number };
}

function QuestsListItem({
  name,
  category,
  series,
  diff,
  rewards,
}: QuestsListItemProps) {
  let history = useHistory();

  const handleRedirect = () => {
    history.push("/quest");
  };

  return (
    <div id={name} className="quests-list-item" onClick={handleRedirect}>
      <div className={`highlight ${diff}`}></div>
      <div className="quest-info">
        <div className="wrapper">
          <div className={`quest-series ${diff}`}>{series}</div>
          <div className="quest-name">{name}</div>
          <div className="quest-rewards">
            {`R: ${rewards.gold}G, ${rewards.exp}EXP`}{" "}
          </div>
        </div>
      </div>
      <div className="icon-container">
        <div className={`icon ${diff}`}>{getIcon(category)}</div>
      </div>
    </div>
  );
}

export default QuestsListItem;
