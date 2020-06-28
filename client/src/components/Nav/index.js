import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./assets/style.scss";
import { AuthContext } from "../../Auth";
import { CartContext } from "../../CartContex";
import app from "../../firebase";

function Nav(props) {
  const { currentUser } = useContext(AuthContext);
  const [cart, setCart] = useContext(CartContext);

  console.log(props);
  console.log(currentUser);
  return (
    <nav className="  navbar  navbar-expand-lg">
      <div className="container">
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

          <li>
            <Link className="nav-link " to="/cart">
              {" "}
              <i class="fas fa-shopping-bag mx-3"></i>My cart {cart.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
