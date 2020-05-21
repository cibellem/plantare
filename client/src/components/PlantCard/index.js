import React from "react";
import "./assets/style.scss";
function PlantCard(props) {
  console.log(props.products);

  return (
    <div className="container plant-card-container ">
      <div className="row text-center">
        <div className="col mb-4">
          <h2>A variety you only find here</h2>
          <h4>Prices as low as $10.</h4>
          <h4> Same Day delivery for Phoenix</h4>
        </div>
      </div>
      <div className="row text-center plant-card  ">
        {props.products.map((item) => (
          <div className="col-4 ">
            <div className="card mb-2">
              <img
                key={item._id}
                className="img-responsive"
                src={item.image}
                alt="Plant Image"
              />
              <p>{item.name}</p>
              <div className="row text-center">
                <div className="col">
                  <a href="">Add to cart</a>
                </div>
                <div className="col">
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-balls">
        <img src={require("../../images/balls.png")} alt="" />
      </div>
    </div>
  );
}

export default PlantCard;
