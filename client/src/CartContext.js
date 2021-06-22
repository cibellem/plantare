import React, { useState, useEffect } from "react";

import Axios from "axios";
export const CartContext = React.createContext();

export const CartProvider = (props) => {
  //set up the how the shopping cart will be diplayed

  const [cart, setCart] = useState([]);
  useEffect(() => {
    Axios.get("api/cart").then((res) => {
      setCart(res.data);
    });
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
