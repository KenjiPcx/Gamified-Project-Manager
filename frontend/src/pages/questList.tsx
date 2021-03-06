import React, { useState, useEffect, useRef } from "react";
import ListHeader from "../components/headers/ListHeader";
import QuestsData, {
  QuestObj,
} from "../components/questComponents/QuestListData";
import QuestsListItem from "../components/questComponents/QuestListItem";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function QuestList() {
  const isMounted = useRef<boolean | null>(null);
  const URL = "http://localhost:5000/quests/";
  const [loading, setLoading] = useState(true);
  const [quests, setQuests] = useState([]);
  const [filteredQuests, setFilteredQuests] = useState(QuestsData);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("All");

  const updateType = (state: string) => {
    setType(state);
  };

  const resetType = () => {
    setType("");
  };

  const handleClick = (state: string) => {
    if (type !== state) {
      updateType(state);
    } else {
      resetType();
    }
  };

  const searchFilter = (quests: QuestObj[]) => {
    return quests.filter(
      (quest) =>
        quest.name.toLowerCase().includes(search) ||
        quest.series?.toLowerCase().includes(search)
    );
  };

  const typeFilter = (quests: QuestObj[]) => {
    if (type !== "") {
      return quests.filter((quest) => quest.type === type);
    }
    return quests;
  };

  const categoryFilter = (quests: QuestObj[]) => {
    if (category !== "All") {
      return quests.filter((quest) => quest.category === category);
    }
    return quests;
  };

  useEffect(() => {
    isMounted.current = true;
    axios.get(URL).then((res) => {
      if (isMounted.current) {
        setQuests(res.data);
        setTimeout(() => {
          if (isMounted.current) {
            setLoading(false);
          }
        }, 500);
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setFilteredQuests(searchFilter(categoryFilter(typeFilter(quests))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, type, category, quests]);

  return (
    <div className="quest-list-page">
      <ListHeader
        pageTitle={"Quests"}
        types={["All", "Studies", "Coding", "Fitness", "Chore"]}
        setSearch={setSearch}
        setType={setCategory}
      />
      <div className="main-content">
        <div className="quest-list-container">
          {loading ? (
            <Spinner animation="border" className="spinner"></Spinner>
          ) : (
            <div className={"quest-list"}>
              <div className="list-controls">
                <div
                  className={`daily ${type === "Daily" ? "active" : ""}`}
                  onClick={() => handleClick("Daily")}
                >
                  Daily
                </div>
                <div
                  className={`weekly ${type === "Weekly" ? "active" : ""}`}
                  onClick={() => handleClick("Weekly")}
                >
                  Weekly
                </div>
                <div
                  className={`main ${type === "Main" ? "active" : ""}`}
                  onClick={() => handleClick("Main")}
                >
                  Main
                </div>
              </div>
              <div className="list">
                {filteredQuests.map((quest, key) => {
                  return (
                    <QuestsListItem
                      id={quest._id}
                      name={quest.name}
                      diff={quest.diff}
                      category={quest.category}
                      series={quest.series}
                      rewards={quest.rewards}
                      key={key}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestList;
