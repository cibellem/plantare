import React, { useState, useContext } from "react";
import "./assets/style.scss";
import API from "../../Utils/API";
import { CartContext } from "../../CartContex";

function PlantCard(props) {
  const [cart, setCart] = useContext(CartContext);
  const [quantity, setQty] = useState(0);
  const [added, setAdd] = useState(false);

  function addToCart(item) {
    const productData = {
      name: item.name,
      price: item.price,
      image: item.image,
      id: item._id,
    };

    setCart((currentState) => [...currentState, productData]);
    //...the spread oprator makes a copy of the array
    console.log(cart);

    API.addToCart(productData).then((res) => {
      setQty(quantity + 1);
    });
  }

  return (
    <div className="container plant-card-container " id="products">
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
              class="card card-item-description  mb-2 "
              style={{ width: "16rem" }}
            >
              <img
                key={item._id}
                className="card-img-top plant-img"
                src={item.image}
                alt="Plant Image"
              />
              <div class="card-body  ">
                <div className="plant-card ">
                  <h6 class="card-title">{item.name}</h6>
                  <p className="card-link">${item.price}</p>

                  <button
                    className="add-to-cart-btn btn card-link"
                    onClick={() => addToCart(item)}
                  >
                    {" "}
                    <i class="fas fa-check-circle pr-3"></i>
                    Add to Cart
                  </button>
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
