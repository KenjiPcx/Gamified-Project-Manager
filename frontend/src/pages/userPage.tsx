import React from "react";
import Header from "../components/headers/Header";
import Image from "react-bootstrap/Image";
import ProfilePic from "../assets/kenji.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

interface UserObj {
  name: string;
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

function UserPage() {
  const user: UserObj = {
    name: "Kenji Phang",
    job: "CS Student",
    title: "The Creator",
    // profilePic: <Image src={ProfilePic} roundedCircle className="pic" />,
    level: {
      level: 100,
      exp: 100070,
    },
    stats: {
      strength: 100,
      health: 100,
      stamina: 100,
      agility: 100,
      intelligence: 100,
    },
    skills: ["Web Dev", "Design", "Machine Learning"],
    achievements: ["Coding Warrior", "Fitness Spartan"],
    statistics: {
      dayStreak: 100,
      questCompleted: 100,
    },
  };

  console.log(JSON.stringify(user));
  const {
    name,
    job,
    title,
    profilePic,
    level,
    stats,
    skills,
    achievements,
    statistics,
  } = user;

  return (
    <div className="user-page">
      <Header pageTitle="User Profile" />
      <div className="main-content">
        <div className="user-card">
          <div className="highlight"></div>
          <div className="card-details">
            <div className="basic-info-container">
              <div className="name label">{name}</div>
              <div className="basic-info">
                <div className="attribute nospace">{`Job:  ${job}`}</div>
                <div className="attribute nospace">{`Title:  ${title}`}</div>
              </div>
              <div className="level-bar">
                <div className="level">Level {level.level}</div>
                <ProgressBar
                  now={level.exp % 100}
                  label={`${level.exp % 100}%`}
                  className="bar"
                />
                <div className="exp-rem">{`EXP to next lvl ${
                  100 - (level.exp % 100)
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
                  <div className="attribute">Strength: {stats.strength}</div>
                  <div className="attribute">Health: {stats.health}</div>
                </div>
                <div className="stats-row">
                  <div className="attribute">Stamina: {stats.stamina}</div>
                  <div className="attribute">Agility: {stats.agility}</div>
                </div>
                <div className="stats-row">
                  <div className="attribute">
                    Intelligence: {stats.intelligence}
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
                {skills.map((skill, key) => {
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
                {achievements.map((achievement, key) => {
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
                  Day Streak: {statistics.dayStreak}
                </div>
                <div className="quest-completed">
                  Day Streak: {statistics.questCompleted}
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
