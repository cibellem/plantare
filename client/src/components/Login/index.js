import React from "react";
import "./assets/style.scss";

function LoginComponent() {
  return (
    <div className="container-login ">
      
        <div className=" ">
          <div class="form-group">
            <h2 className="text-center">Sign in</h2>
            <label for="email">Email:</label>
            <input type="email" className="form-control " id="email" />
          </div>
          <div class="form-group">
            <label for="email">Password:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="text-center button-login">
            <button className="button-login">Submit</button>
          </div>
        </div>
      
    </div>
  );
}

export default LoginComponent;
