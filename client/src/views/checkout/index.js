import React, { useEffect, useState, useContext } from "react";
import OrderCard from "../../components/OrderCard";
import ItemCart from "../../components/ItemCart";
import axios from "axios";
import Nav from "../../components/Nav";
import "./assets/style.scss";
import API from "../../Utils/API";
import { CartContext } from "../../CartContex";

function Checkout() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState();
  const [tax, setTax] = useState();
  const [totalPlusTax, setTotalPlusTax] = useState();

  function deleteItem(e, item) {
    let id = e.target.id;
    // console.log(cart);
    // console.log(item);

    API.removeFromCart(id)

      .then((res) => {
        cart.splice(id, 1);
        setCart([...cart]);
      })
      .catch();
  }
  function updateCart(e, item) {
    console.log(e.target.value);
  }

  function addtoWishList() {
    console.log("wishlist link working");
  }

  useEffect(() => {
    axios.get("/api/cart").then((res) => {
      let data = res.data;
      setItems(res.data);
      let prices = [];
      let price = data.forEach((item) => {
        prices.push(item.price);
      });
      if (prices.length === 0) {
        setTotal(0);
        setTax(0);
        setTotalPlusTax(0);
        return;
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
  }, [cart]);

  return (
    <>
      {" "}
      <Nav />
      <div className=" container mt-5 ">
        <div className="row">
          <div className="col">
            <h3>My cart</h3>
          </div>
        </div>

        <div className="row item-cart-container ">
          <div className="col-md-6  col-sm-12">
            {" "}
            <ItemCart items={items} deleteItem={deleteItem} />
          </div>
          <div className="col-md-6 m-auto col-sm-12">
            {" "}
            <OrderCard total={total} tax={tax} totalPlusTax={totalPlusTax} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
