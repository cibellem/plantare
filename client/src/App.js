import React from "react";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./_style.scss";
import Home from "./views/home/home";
import Checkout from "./views/checkout/index";
import Signup from "./views/signup";
import Login from "./views/login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/cart" component={Checkout} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
