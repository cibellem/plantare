import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./assets/style.scss";
import { AuthContext } from "../../Auth";
import app from "../../firebase";

function Nav() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <nav className="  navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header ">
          <Link className="navbar-brand logo" to={"/"}>
            <img
              className="logo-img img-responsive"
              src={require("./assets/images/logo.svg")}
              alt="App Logo"
            />
            Plantare
          </Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          {!currentUser ? (
            <Link className="nav-link" to="/signup">
              Sign in
            </Link>
          ) : (
            <Link
              className="nav-link"
              to=""
              onClick={() => app.auth().signOut()}
            >
              Sign out
            </Link>
          )}
          <li></li>
          <li></li>
          <li>
            <Link className="nav-link " to="/cart">
              {" "}
              <i class="fas fa-shopping-bag mx-3"></i>My cart(3)
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
