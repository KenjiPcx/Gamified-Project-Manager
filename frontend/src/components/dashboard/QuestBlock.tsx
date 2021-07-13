import React from "react";
import { getIcon } from "../gameSystem/GameFunctions";
import { Link } from "react-router-dom";

interface QuestBlockProps {
  name: string;
  diff: string;
  category: string;
  rewards: { gold: number; exp: number };
}

function QuestBlock({ name, diff, category, rewards }: QuestBlockProps) {
  return (
    <Link to="/quest" className={`quest-block ${diff}`}>
      <div className="name">{name}</div>
      <div className="icon">{getIcon(category)}</div>
      <div className="rewards">
        <div className="gold">{`${rewards.gold} G`}</div>
        <div className="exp">{`${rewards.exp} Exp`}</div>
      </div>
    </Link>
  );
}

export default QuestBlock;
