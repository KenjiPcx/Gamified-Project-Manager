import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackHeader from "../components/headers/BackHeader";
import QuestsData from "../components/questComponents/QuestListData";
import { getIcon } from "../components/gameSystem/GameFunctions";
import Pill from "../components/customUIComponents/Pill";

function Quest() {
  const {
    name,
    type,
    category,
    series,
    diff,
    description,
    clearConditions,
    rewards,
    skills,
  } = QuestsData[0];

  return (
    <div className="quest-details-page">
      <BackHeader pageTitle="Quest Details" prevPageLink="/questlist" />
      <div className="main-content">
        <div className="quest-details-container">
          <div className="quest-details-main">
            <div className="quest-details">
              <div className="quest-header">
                <div className="quest-title">{name}</div>
                <div className={`quest-diff ${diff}`}>
                  <div className="diff">{diff}</div>
                </div>
              </div>
              <div className="quest-series">
                <div className="label">Series: </div>
                {series}
              </div>
              <div className="quest-description">
                <div className="label">Details: </div>
                <div className="description">{description}</div>
              </div>
              <div className="quest-skills">
                <div className="label">Skills Involved: </div>
                <div className="skills">
                  {skills.map((skill, key) => {
                    return (
                      <Pill
                        key={key}
                        id={key}
                        label={skill}
                        removable={false}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="quest-conditions">
                <div className="label">Clear Conditions:</div>
                <div className="conditions">
                  {clearConditions.map((cond, key) => {
                    return <div key={key}>{cond}</div>;
                  })}
                </div>
              </div>
              <div className="quest-rewards">
                <div className="label">Rewards:</div>
                <div className="rewards">
                  <div className="gold">{rewards.gold}G,</div>
                  <div className="exp">{rewards.exp} EXP</div>
                </div>
              </div>
              <div className={`bottom-corner ${diff}`}>
                <div className="icon">{getIcon(category)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quest;
