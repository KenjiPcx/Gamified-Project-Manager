import React from "react";
import { getIcon } from "../gameSystem/GameFunctions";
import { Link } from "react-router-dom";

interface QuestsListItemProps {
  id: string;
  name: string;
  category: string;
  series: string;
  diff: string;
  rewards: { gold: number; exp: number };
}

function QuestsListItem({
  id,
  name,
  category,
  series,
  diff,
  rewards,
}: QuestsListItemProps) {
  return (
    <Link to={`/quest/${id}`} id={id} className="quests-list-item">
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
    </Link>
  );
}
export default QuestsListItem;
