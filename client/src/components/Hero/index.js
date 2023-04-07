import React from "react";
import "./assets/style.scss";

function Hero() {
  return (
    <article className="container pt-4">
      <div className="hero-wrapper">
        <div className="hero-header-wrapper">
          <h1 className="hero-head">
            A piece of nature delivered to your hands.
          </h1>

          <h2 className="hero-text">
            Our plants have a special care regimen and they are cared with the
            richest and healthiest soils.
          </h2>
          <button className="hero-btn">Check our catalogue</button>
        </div>

        <div className="hero-img-wrapper">
          {" "}
          <img
            className="hero-img img-responsive"
            src={require("./assets/heroimg.png")}
            alt=""
          />
        </div>
      </div>
    </article>
  );
}
export default Hero;
