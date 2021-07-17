import React, { useEffect, useRef, useState } from "react";
import QuestsData from "../components/questComponents/QuestListData";
import ShortcutData from "../components/dashboard/ShortcutsData";
import QuestBlock from "../components/dashboard/QuestBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Dashboard() {
  const isMounted = useRef<boolean | null>(null);
  const URL = `http://localhost:5000/user/`;

  const [username, setUsername] = useState("");
  const [level, setLevel] = useState(0);
  const [points, setPoints] = useState(0);
  const appVers = "v0.0";
  const appAge = 0;
  const shortcuts = ShortcutData;
  const quests = QuestsData;

  const getFirstName = (name: string) => {
    const index = name.indexOf(" ");
    return name.substring(0, index);
  };

  useEffect(() => {
    isMounted.current = true;
    axios
      .get(URL)
      .then((res) => {
        if (isMounted.current) {
          setUsername(getFirstName(res.data.userName));
          setLevel(res.data.level.level);
          setPoints(res.data.wallet.gold);
        }
      })
      .catch(console.log);
    return () => {
      isMounted.current = false;
    };
  });
  
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="greeting">{`Welcome ${username}`}</div>
        <div className="details">
          <div className="level sublabel">{`Level ${level}`}</div>
          <div className="points sublabel">{`Gold: ${points}G`}</div>
        </div>
      </div>
      <div className="main-content">
        <div className="shortcuts-menu">
          {shortcuts.map((shortcut, key) => {
            return (
              <div className="shortcut" key={key}>
                <div className="icon">{shortcut.icon}</div>
                <div className="shortcut-label">{shortcut.name}</div>
              </div>
            );
          })}
        </div>
        <div className="daily-quests-container">
          <div className="label">Daily Quests</div>
          <div className="daily-quests">
            {quests.map((quest, key) => {
              return (
                <QuestBlock
                  key={key}
                  name={quest.name}
                  category={quest.category}
                  diff={quest.diff}
                  rewards={quest.rewards}
                />
              );
            })}
          </div>
        </div>
        <div className="app-information">
          <div className="content-wrapper">
            <div className="app-header">App Info</div>
            <div className="info-wrapper">
              <div className="app-version">Version: {appVers}</div>
              <div className="app-age">Day {appAge} (alpha)</div>
            </div>
          </div>
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
