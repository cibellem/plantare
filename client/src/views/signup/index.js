import React from "react";
import SignupComponent from "../../components/Signup";
import Nav from "../../components/Nav";
import "./assets/style.scss";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-logo-signup">
            <img src={require("./logo.svg")} alt="" />

            <h3>
              <Link className="back-home-link" to={"/"}>
                <i class="fas fa-long-arrow-alt-left pr-2"></i>Home
              </Link>
            </h3>
          </div>
          <div className="col-md-6 col-sm-12col-logo-signup">
            <SignupComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
