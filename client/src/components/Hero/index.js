import React from "react";
import "./assets/style.scss";

function Hero() {
  return (
    <div className="container hero-container">
      <div className="row align-items-center ">
        <div className=" d-flex flex-column  justify-content-around col-md-6 col-sm-12 ">
          <h1 className=" hero-head">
            A piece of nature delivered to your hands.
          </h1>
          <h4 className="hero-text">
            Our plants have a special care regimen and they are cared with the
            richest and healthiest soils.
          </h4>
          <div className="">
            <button className="button">Start shopping</button>
          </div>
        </div>

        <div className="col-md-6 d-none d-sm-block d-md-block  col-sm-12 text-center center-align">
          {" "}
          <img
            className="hero-img img-responsive"
            src={require("./assets/heroimg.png")}
            alt="Bana Leaf image"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
