import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./_style.scss";
import Home from "./views/home/home";
import Login from "./views/login/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
