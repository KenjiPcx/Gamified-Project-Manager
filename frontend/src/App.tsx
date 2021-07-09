import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import dashboard from "./pages/dashboard";
import ProjectsList from "./pages/projectsList";
import Project from "./pages/project";
import QuestList from "./pages/questList";
import Quest from "./pages/quest";
import Logs from "./pages/logs";
import rewardsShop from "./pages/rewardsShop";
import userPage from "./pages/userPage";
import skillTree from "./pages/skillTree";
import achievements from "./pages/achievements";

import MobileNavbar from "./components/navbars/MobileNavbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={dashboard} />
          <Route path="/projectlist" component={ProjectsList} />
          <Route path="/project" component={Project} />
          <Route path="/questlist" component={QuestList} />
          <Route path="/quest" component={Quest} />
          <Route path="/logs" component={Logs} />
          <Route path="/rewards" component={rewardsShop} />
          <Route path="/user" component={userPage} />
          <Route path="/skilltree" component={skillTree} />
          <Route path="/achievements" component={achievements} />
        </Switch>
        <MobileNavbar />
      </Router>
    </div>
  );
}

export default App;
