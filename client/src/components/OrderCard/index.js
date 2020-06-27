import React, { useState } from "react";
import "./assets/style.scss";
import { useEffect } from "react";
import API from "../../Utils/API";
import Axios from "axios";

function OrderCard() {
  const [total, setTotal] = useState();

  useEffect(() => {
    Axios.get("api/cart").then(function (res) {
      let data = res.data;
      let prices = [];
      let price = data.forEach((item) => {
        prices.push(item.price);
      });

      let reducer = (a, b) => a + b;
      setTotal(prices.reduce(reducer));
    });
  }, []);
  return (
    <div className="card ml-auto order-card" style={{ width: "20rem" }}>
      <div class="card-body">
        <h6 class="card-title">Price Details</h6>
        <p class="card-text">Card Total: $</p>
        <p class="card-text">Estimated Tax: $</p>
        <p class="card-text">Delivery: FREE</p>
        <div className="border"></div>
        <p class="card-text">Order Total: ${total}</p>
        <div>
          <button className="btn place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
