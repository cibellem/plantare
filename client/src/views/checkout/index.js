import React, { useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard";
import ItemCart from "../../components/ItemCart";
import axios from "axios";
import Nav from "../../components/Nav";
import "./assets/style.scss";

function Checkout() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState();

  useEffect(() => {
    axios.get("/api/cart").then((res) => {
      let data = res.data;
      setCount(data.length);
      setItems(res.data);
    });
  }, []);
  return (
    <>
      {" "}
      <Nav count={count} />
      <div className=" container item-container ">
        <div className="row">
          <h3>My cart</h3>
        </div>
        <div className="row item-cart-container ">
          <div className="col-md-6   col-sm-12">
            {" "}
            <ItemCart items={items} />
          </div>
          <div className="col-md-6 m-auto col-sm-12">
            {" "}
            <OrderCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
