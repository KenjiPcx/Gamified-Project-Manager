import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import dashboard from "./pages/dashboard";
import ProjectsList from "./pages/projectsList";
import project from "./pages/project";
import questList from "./pages/questList";
import quest from "./pages/quest";
import logs from "./pages/logs";
import rewardsShop from "./pages/rewardsShop";
import userPage from "./pages/userPage";
import skillTree from "./pages/skillTree";
import achievements from "./pages/achievements";

import Header from "./components/headers/Header";
import MobileNavbar from "./components/navbars/MobileNavbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={dashboard} />
          <Route path="/projectlist" component={ProjectsList} />
          <Route path="/project" component={project} />
          <Route path="/questlist" component={questList} />
          <Route path="/quest" component={quest} />
          <Route path="/logs" component={logs} />
          <Route path="/rewards" component={rewardsShop} />
          <Route path="/user" component={userPage} />
          <Route path="/skilltree" component={skillTree} />
          <Route path="/achievements" component={achievements} />
        </Switch>
      </Router>
      <MobileNavbar />
    </div>
  );
}

export default App;
