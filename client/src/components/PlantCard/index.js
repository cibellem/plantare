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
        <div className="col pt-5 mb-4">
          <h2>A variety you only find here</h2>
          <h4>Prices as low as $10.</h4>
          <h4> Same Day delivery for Phoenix</h4>
        </div>
      </div>
      <div className="row text-center">
        {props.products.map((item) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 pb-4
        "
          >
            <div
              class="card plant-card card-item-description  mb-2 "
              style={{ width: "16rem" }}
            >
              <img
                key={item._id}
                className="card-img-top plant-img"
                src={item.image}
                alt="Plant Image"
              />
              <div class="card-body py-2 pb-1 ">
                <h6 class="card-title">{item.name}</h6>
                <div className="plant-card py-2">
                  <button
                    className="add-to-cart-btn btn card-link"
                    onClick={() => addToCart(item)}
                  >
                    {" "}
                    <i class="fas fa-plus-circle pr-3"></i>
                    Add to cart
                  </button>

                  <p className="card-link">${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantCard;
