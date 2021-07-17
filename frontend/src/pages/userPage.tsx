import React, { useState, useRef, useEffect } from "react";
import Header from "../components/headers/Header";
import Image from "react-bootstrap/Image";
import ProfilePic from "../assets/kenji.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import axios from "axios";

interface UserObj {
  userName: string;
  job: string;
  title: string;
  profilePic?: JSX.Element;
  level: {
    level: number;
    exp: number;
  };
  stats: {
    strength: number;
    health: number;
    stamina: number;
    agility: number;
    intelligence: number;
  };
  skills: string[];
  achievements: string[];
  statistics: {
    dayStreak: number;
    questCompleted: number;
  };
}

const blankUser: UserObj = {
  userName: "",
  job: "",
  title: "",
  level: {
    level: 0,
    exp: 0,
  },
  stats: {
    strength: 0,
    health: 0,
    stamina: 0,
    agility: 0,
    intelligence: 0,
  },
  skills: [],
  achievements: [],
  statistics: {
    dayStreak: 0,
    questCompleted: 0,
  },
};

function UserPage() {
  const URL = `http://localhost:5000/user/`;
  const isMounted = useRef<boolean | null>(null);
  const profilePic = <Image src={ProfilePic} roundedCircle className="pic" />;
  const [user, setUser] = useState<UserObj>(blankUser);

  useEffect(() => {
    isMounted.current = true;
    axios.get(URL).then((res) => {
      if (isMounted.current) {
        setUser({
          ...res.data,
          skills: ["Not Implemented"],
          achievements: ["Not Implemented"],
        });
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className="user-page">
      <Header pageTitle="User Profile" />
      <div className="main-content">
        <div className="user-card">
          <div className="highlight"></div>
          <div className="card-details">
            <div className="basic-info-container">
              <div className="name label">{user.userName}</div>
              <div className="basic-info">
                <div className="attribute nospace">{`Job:  ${user.job}`}</div>
                <div className="attribute nospace">{`Title:  ${user.title}`}</div>
              </div>
              <div className="level-bar">
                <div className="level">Level {user.level.level}</div>
                <ProgressBar
                  now={user.level.exp % 100}
                  label={`${user.level.exp % 100}%`}
                  className="bar"
                />
                <div className="exp-rem">{`EXP to next lvl ${
                  100 - (user.level.exp % 100)
                }`}</div>
              </div>
            </div>
            <div className="profile-pic">{profilePic}</div>
            <div className="stats-container">
              <div className="stats-header">
                <div className="label">Stats:</div>
                <div className="cbtn cstats-btn">CStats</div>
                <div className="cbtn fstats-btn">FStats</div>
              </div>
              <div className="stats">
                <div className="stats-row">
                  <div className="attribute">
                    Strength: {user.stats.strength}
                  </div>
                  <div className="attribute">Health: {user.stats.health}</div>
                </div>
                <div className="stats-row">
                  <div className="attribute">Stamina: {user.stats.stamina}</div>
                  <div className="attribute">Agility: {user.stats.agility}</div>
                </div>
                <div className="stats-row">
                  <div className="attribute">
                    Intelligence: {user.stats.intelligence}
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-container">
              <div className="custom-header">
                <div className="label">Skills</div>
                <div className="custom-btn skill-tree-btn">
                  <Link to="/skilltree">Skill Tree</Link>
                </div>
              </div>
              <div className="list">
                {user.skills.map((skill, key) => {
                  return (
                    <div className="list-item" key={key}>
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="custom-container">
              <div className="custom-header">
                <div className="label">Achievements:</div>
                <div className="custom-btn achievements-btn">
                  <Link to="/achievements">More</Link>
                </div>
              </div>
              <div className="list">
                {user.achievements.map((achievement, key) => {
                  return (
                    <div className="list-item" key={key}>
                      {achievement}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="statistics-container">
              <div className="statistics-header">
                <div className="label">Statistics</div>
                <div className="statistics-btn">More</div>
              </div>
              <div className="statistics">
                <div className="day-streak">
                  Day Streak: {user.statistics.dayStreak}
                </div>
                <div className="quest-completed">
                  Day Streak: {user.statistics.questCompleted}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
