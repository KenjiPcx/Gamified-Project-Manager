import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import ProjectsList from "./pages/projectsList";
import Project from "./pages/project";
import QuestList from "./pages/questList";
import Quest from "./pages/quest";
import Logs from "./pages/logs";
import RewardsShop from "./pages/rewardsShop";
import UserPage from "./pages/userPage";
import SkillTree from "./pages/skillTree";
import Achievements from "./pages/achievements";

import MobileNavbar from "./components/navbars/MobileNavbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/projectlist" component={ProjectsList} />
          <Route path="/project/:id" component={Project} />
          <Route path="/questlist" component={QuestList} />
          <Route path="/quest/:id" component={Quest} />
          <Route path="/logs" component={Logs} />
          <Route path="/rewards" component={RewardsShop} />
          <Route path="/user" component={UserPage} />
          <Route path="/skilltree" component={SkillTree} />
          <Route path="/achievements" component={Achievements} />
        </Switch>
        <MobileNavbar />
      </Router>
    </div>
  );
}

export default App;
