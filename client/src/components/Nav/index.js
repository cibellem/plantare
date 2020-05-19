import React from "react";
import { Link } from "react-router-dom";
import "./assets/style.scss";

function Nav() {
  return (
    <nav className=" container navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header ml-0">
          <a className="navbar-brand logo" href="#">
            <img
              className="logo-img img-responsive"
              src={require("./assets/images/logo.svg")}
              alt="App Logo"
            />
            Plantare
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link className="nav-link" to="">
              Sign up
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="">
              Sign in
            </Link>
          </li>
          <li>
            <Link className="nav-link " to="">
              {" "}
              <i class="fas fa-shopping-bag mx-3"></i>My cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
