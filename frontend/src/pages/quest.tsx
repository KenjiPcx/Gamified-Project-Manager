import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import BackHeader from "../components/headers/BackHeader";
import {
  QuestObj,
  BlankQuest,
} from "../components/questComponents/QuestListData";
import { getIcon } from "../components/gameSystem/GameFunctions";
import Pill from "../components/customUIComponents/Pill";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function Quest() {
  const isMounted = useRef<boolean | null>(null);
  const { id } = useParams<{ id: string }>();
  const [quest, setQuest] = useState<QuestObj>(BlankQuest);
  const [loading, setLoading] = useState(true);
  const URL = `http://localhost:5000/quests/${id}`;

  useEffect(() => {
    isMounted.current = true;
    axios.get(URL).then((res) => {
      if (isMounted.current) {
        setQuest(res.data);
        setTimeout(() => {
          if (isMounted.current) {
            setLoading(false);
          }
        }, 500);
      }
    });

    return () => {
      isMounted.current = false;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="quest-details-page">
      <BackHeader pageTitle="Quest Details" prevPageLink="/questlist" />
      <div className="main-content">
        <div className="quest-details-container">
          {loading ? (
            <Spinner animation="border" className="spinner"></Spinner>
          ) : (
            <div className="quest-details-main">
              <div className="quest-details">
                <div className="quest-header">
                  <div className="quest-title">{quest.name}</div>
                  <div className={`quest-diff ${quest.diff}`}>
                    <div className="diff">{quest.diff}</div>
                  </div>
                </div>
                <div className="quest-series">
                  <div className="label">Series: </div>
                  {quest.series}
                </div>
                <div className="quest-description">
                  <div className="label">Details: </div>
                  <div className="description">{quest.description}</div>
                </div>
                <div className="quest-skills">
                  <div className="label">Skills Involved: </div>
                  <div className="skills">
                    {quest.skills.map((skill, key) => {
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
                    {quest.clearConditions.map((cond, key) => {
                      return <div key={key}>{cond}</div>;
                    })}
                  </div>
                </div>
                <div className="quest-rewards">
                  <div className="label">Rewards:</div>
                  <div className="rewards">
                    <div className="gold">{quest.rewards.gold}G,</div>
                    <div className="exp">{quest.rewards.exp} EXP</div>
                  </div>
                </div>
                <div className={`bottom-corner ${quest.diff}`}>
                  <div className="icon">{getIcon(quest.category)}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quest;
