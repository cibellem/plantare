import React from "react";
import "./assets/style.scss";
import { Link } from "react-router-dom";
import API from "../../Utils/API";
function PlantCard(props) {
  function addToCart(item) {
    const productData = {
      name: item.name,
      price: item.price,
      image: item.image,
    };
    
    API.addToCart(productData).then((res) => {
      console.log(res);
    });
  }
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
          <div className="col-md-4 col-sm-12">
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
                  <Link to="" onClick={() => addToCart(item)}>
                    Add to cart
                  </Link>
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
