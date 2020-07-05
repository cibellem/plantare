import React, { useState } from "react";
import "./assets/style.scss";
import { useEffect } from "react";
import API from "../../Utils/API";
import Axios from "axios";

function OrderCard(props) {
 
  return (
    <div className="p-4 card ml-auto order-card" style={{ width: "20rem" }}>
      <div class="">
        <h6 class="card-title">Price Details</h6>
        <p class="card-text">Card Total: ${props.total} </p>
        <p class="card-text">Estimated Tax: ${props.tax}</p>
        <p class="card-text">Delivery: FREE</p>
        <div className="border"></div>
        <p class="card-text">Order Total: ${props.totalPlusTax}</p>
        <div>
          <button className="btn place-order-btn" onClick={props.checkout}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
