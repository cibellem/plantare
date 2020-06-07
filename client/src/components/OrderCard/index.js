import React from "react";
import "./assets/style.scss";

function OrderCard() {
  return (
    <div className="card ml-auto order-card" style={{ width: "20rem" }}>
      <div class="card-body">
        <h6 class="card-title">Price Details</h6>
        <p class="card-text">Card Total</p>
        <p class="card-text">Estimated Tax</p>
        <p class="card-text">Delivery</p>
        <div className="border"></div>
        <p class="card-text">Order Total</p>
        <div>
          <button className="btn place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
