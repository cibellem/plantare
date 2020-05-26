import React from "react";
import LoginComponent from "../../components/Login";
import Nav from "../../components/Nav";
import "./assets/style.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      {/* <Nav /> */}
      <div className="container-login-parent container">
        <div className="col-md-6">
          {" "}
          <Link to="/">
            {" "}
            <img
              className="logo-img-login  img-responsive"
              src={require("./assets/logo.svg")}
              alt="Logo"
            />
          </Link>
          <div>
            <h3 className="logo text-left">Plantare</h3>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <LoginComponent />
        </div>
      </div>
    </>
  );
}

export default Login;
