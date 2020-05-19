import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./_style.scss";
import Home from "./views/home/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
