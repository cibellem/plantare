import React from "react";
import "./assets/style.scss";

function OrderCard() {
  return (
    <div className="card order-card" style={{ width: "20rem" }}>
      <div class="card-body">
        <h5 class="card-title">Price Details</h5>
        <p class="card-text">Card Total</p>
        <p class="card-text">Estimated Tax</p>
        <p class="card-text">Delivery</p>
        <div className="border"></div>
        <p class="card-text">Order Total</p>
        <button className="btn place-order-btn">Place Order</button>
      </div>
    </div>
  );
}

export default OrderCard;
