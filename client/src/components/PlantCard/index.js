import React, { useState } from "react";
import "./assets/style.scss";
import { Link } from "react-router-dom";
import API from "../../Utils/API";
function PlantCard(props) {
  console.log(props);
  const [cart, setCart] = useState("");
  const [quantity, setQty] = useState(0);

  function addToCart(item) {
    const productData = {
      name: item.name,
      price: item.price,
      image: item.image,
    };

    API.addToCart(productData).then((res) => {
      setCart(res.data);
      setQty(quantity + 1);
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
      <div className="row">
        {props.products.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card plant-card   mb-2 " style={{ width: "18rem" }}>
              <img
                key={item._id}
                className="card-img-top plant-img"
                src={item.image}
                alt="Plant Image"
              />
              <div class="card-body   ">
                <h5 class="card-title">{item.name}</h5>
                <div className="plant-card">
                  <button
                    className="add-to-cart-btn btn card-link"
                    onClick={() => addToCart(item)}
                  >
                    {" "}
                    Add to cart
                  </button>

                  <p className="card-link">${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-balls">
          <img src={require("../../images/balls.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
