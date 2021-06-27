import React, { useState, useEffect } from "react";
import CheckoutForm from "../CheckoutForm/index";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./assets/style.scss";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const promise = loadStripe(
  "pk_test_51Gym5nCvJ2UDgQ5SYanes7eTM2PppoUV41lS4P074iIIOeJmkKXZD0uJPkcjtzwTjMeZcj5VRTbnypNy57HuKtP00027OUjVda"
);

function OrderCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(props.totalPlusTax);
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          {" "}
          <Elements stripe={promise}>
            <CheckoutForm price={price} />
          </Elements>
        </Modal.Body>
        <Modal.Footer className="text-center ">
          <h6>Test Card Numbers</h6>
          <p>Number: 4242 4242 4242 4242</p>
          <p>CVC: Any 3 digits</p>
          <p>Date: Any future date</p>
        </Modal.Footer>
      </Modal>

      <div className="p-4 card ml-auto order-card" style={{ width: "20rem" }}>
        <div class="">
          <h6 class="card-title">Price Details</h6>
          <p class="card-text">Cart Total: ${props.total} </p>
          <p class="card-text">Estimated Tax: ${props.tax}</p>
          <p class="card-text">Delivery: FREE</p>
          <div className="border"></div>
          <p class="card-text">Order Total: ${props.totalPlusTax}</p>
          <div>
            {" "}
            <Link className="btn place-order-btn" onClick={handleShow}>
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
