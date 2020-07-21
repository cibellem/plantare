import React, { useState, useContext } from "react";
import "./assets/style.scss";

function ItemCart(props) {
  console.log(props, "props");
  return (
    <div className="item-cart">
      {props.items.map((item) => (
        <div className="container card-item-checkout card-item card">
          <div className="row ">
            <div className="col-4 p-3">
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
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="row remove-row">
                <div className="col  ">
                  <p
                    id={item._id}
                    value={item}
                    className="remove"
                    onClick={props.deleteItem}
                  >
                    <i class="fas fa-minus-circle pr-2"></i> Remove
                  </p>
                </div>
                {/* <div className="col  ">
                  <p className="wishlist" onClick={props.addtoWishList}>
                    <i class="fas fa-star pr-2"></i> Wishlist
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCart;
