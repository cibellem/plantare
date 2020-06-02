import React from "react";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./_style.scss";
import Home from "./views/home/home";
import Checkout from "./views/checkout/index";
import Signup from "./views/login/login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Signup} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
