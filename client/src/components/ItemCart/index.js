import React, { useState, useContext } from "react";
import "./assets/style.scss";
import API from "../../Utils/API";
import { CartContext } from "../../CartContex";

function ItemCart(props) {
  const [cart, setCart] = useContext(CartContext);

  function deleteItem(e) {
    console.log(cart, "cart");

    let id = e.target.id;
    cart.splice(id, 1);
    setCart([...cart]);

    console.log(cart);
    //...the spread oprator makes a copy of the array

    API.removeFromCart(id)
      .then((res) => {})
      .catch();
  }

  function addtoWishList() {
    console.log("wishlist link working");
  }
  return (
    <div className="item-cart">
      {props.items.map((item) => (
        <div className="container card-item-checkout card-item card">
          <div className="row p-3">
            <div className="col-4 ">
              {" "}
              <img
                key={item._id}
                className="item-img-cart img-responsive"
                src={item.image}
                alt="Plant Image"
              />
            </div>
            <div className="col-8 col-item-description ">
              <div className="row">
                <div className="col">
                  {" "}
                  <h6>{item.name}</h6>
                </div>
                <div className="col">
                  {" "}
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="row">
                {" "}
                <div className="col">
                  {" "}
                  <p>Qty:</p>
                </div>
              </div>
              <div className="row remove-row">
                <div className="col  ">
                  <p id={item._id} className="remove" onClick={deleteItem}>
                    Remove
                  </p>
                </div>
                <div className="col  ">
                  <p className="wishlist" onClick={addtoWishList}>
                    Wishlist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCart;
