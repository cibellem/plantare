import React from "react";
import "./assets/style.scss";

function Hero() {
  return (
    <div className="container pt-4 hero-container">
      <div className="hero-wrapper">
        <div className="hero-header-wrapper">
          <h1 className="hero-head">
            A piece of nature delivered to your hands.
          </h1>

          <h4 className="hero-text">
            Our plants have a special care regimen and they are cared with the
            richest and healthiest soils.
          </h4>
          <button className="hero-btn">Start Shopping</button>
        </div>

        <div className="hero-img-wrapper">
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
