import React, { useEffect, useState, useContext } from "react";
import OrderCard from "../../components/OrderCard";
import ItemCart from "../../components/ItemCart";
import axios from "axios";
import Nav from "../../components/Nav";
import "./assets/style.scss";
import API from "../../Utils/API";
import { CartContext } from "../../CartContext";
import Axios from "axios";

function Checkout() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState();
  const [tax, setTax] = useState();
  const [totalPlusTax, setTotalPlusTax] = useState();

  function deleteItem(e, item) {
    let id = e.target.id;

    API.removeFromCart(id)
      .then((res) => {
        console.log(res);
        cart.splice(id, 1);
        setCart([...cart]);
      })
      .catch();
  }

  function removeOne(item, i) {
    let quantity = item.quantity;

    const productData = {
      quantity: quantity - 1,
    };
    let id = item._id;
    API.updateCart(id, productData).then((res) => {
      Axios.get("api/cart").then((res) => {
        let result = res.data;
        setCart(result);
        setItems(result);
        generateTotal();
      });
    });
  }

  function addOne(item, i) {
    let quantity = item.quantity;

    const productData = {
      quantity: quantity + 1,
    };

    let id = item._id;
    console.log(productData);
    API.updateCart(id, productData).then((response) => {
      console.log(response);
      Axios.get("api/cart").then((res) => {
        let result = res.data;
        console.log(result);
        setCart(result);
        setItems(result);

        generateTotal();
      });
    });
  }

  function handleChange(e) {
    console.log(e);
  }

  function generateTotal() {
    Axios.get("api/cart").then((res) => {
      let result = res.data;

      let prices = [];
      let price = result.forEach((item) => {
        let qtyPrice = item.quantity * item.price;
        prices.push(qtyPrice);
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
  }
  useEffect(() => {
    Axios.get("api/cart").then((res) => {
      let result = res.data;
      setCart(result);
      setItems(result);
    });
    generateTotal();
  }, []);

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
            <ItemCart
              addOne={addOne}
              removeOne={removeOne}
              items={items}
              deleteItem={deleteItem}
              handleChange={handleChange}
            />
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
