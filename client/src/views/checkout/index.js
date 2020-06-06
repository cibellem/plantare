import React, { useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard";
import ItemCart from "../../components/ItemCart";
import axios from "axios";

function Checkout() {
  const [items, setItems] = useState("");

  useEffect(() => {
    axios.get("/api/cart").then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <h3>My cart</h3>
        <OrderCard />
        <ItemCart items={items} />
      </div>
    </>
  );
}

export default Checkout;
