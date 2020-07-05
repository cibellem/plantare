import React, { useState, useContext } from "react";
import "./assets/style.scss";
import API from "../../Utils/API";
import SelectQty from "../Select/index";
import { CartContext } from "../../CartContex";

function PlantCard(props) {
  const [cart, setCart] = useContext(CartContext);
  const [added, setAdd] = useState(false);
  const [selected, setSelect] = useState(0);

  function handleChange(event) {
    console.log(event);
    let selectedValue = event.target.value;
    setSelect(selectedValue);
  }

  function addToCart(item) {
    const productData = {
      name: item.name,
      price: item.price,
      image: item.image,
      id: item._id,
      quantity: selected,
    };
    API.addToCart(productData).then((res) => {
      console.log(res);
    });
    setCart((currentState) => [...currentState, productData]);
    // let result = cart.some((el) => productData.name === el.name);
    // if (result) {
    //   console.log(productData);
    //   let id = productData.name;
    //   let data = productData.quantity;
    //   console.log(data);

    //   API.updateCart(id, productData).then((res) => {
    //     console.log(res);
    //   });
    //   setCart((currentState) => [...currentState, productData]);
    // } else {
    //   console.log(isNaN(productData.quantity));
    //   productData.quantity = 1;
    //   console.log(productData);
    // }

    //...the spread oprator makes a copy of the array
  }

  return (
    <div className=" container plant-card-container " id="products">
      <div className="row text-center">
        <div className="col mb-3">
          <h2>A variety you only find here</h2>
          <h4>Prices as low as $10.</h4>
          <h4> Same Day delivery for Phoenix</h4>
        </div>
        <div className="row">
          {props.products.map((item) => (
            <div
              className="col-lg-3 col-md-5 col-sm-12 pb-4 
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
                    <SelectQty
                      handleChange={handleChange}
                      selected={selected}
                    />

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
    </div>
  );
}

export default PlantCard;
