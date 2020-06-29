import React, { useState } from "react";
import "./assets/style.scss";
import { useEffect } from "react";
import API from "../../Utils/API";
import Axios from "axios";

function OrderCard() {
  const [total, setTotal] = useState();
  const [tax, setTax] = useState();
  const [totalPlusTax, setTotalPlusTax] = useState();

  useEffect(() => {
    Axios.get("api/cart").then(function (res) {
      let data = res.data;
      let prices = [];
      let price = data.forEach((item) => {
        prices.push(item.price);
      });
      if (prices.length === 0) {
        console.log("empty cart");
      } else {
        let tax = 5.6;
        let reducer = (a, b) => a + b;
        setTotal(prices.reduce(reducer));

        let result = prices.reduce(reducer);
        let taxResult = Math.round(result * tax) / 100;
        setTax(taxResult);

        setTotalPlusTax(taxResult + result);
      }
    });
  }, []);
  return (
    <div className="card ml-auto order-card" style={{ width: "20rem" }}>
      <div class="">
        <h6 class="card-title">Price Details</h6>
        <p class="card-text">Card Total: ${total} </p>
        <p class="card-text">Estimated Tax: ${tax}</p>
        <p class="card-text">Delivery: FREE</p>
        <div className="border"></div>
        <p class="card-text">Order Total: ${totalPlusTax}</p>
        <div>
          <button className="btn place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
