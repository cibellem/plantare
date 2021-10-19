import React, { useState, useContext } from "react";

//Custom Components
import SelectQty from "../Select/index";

//Context and API
import { CartContext } from "../../CartContext";
import { ProductContext } from "../../ProductsContext";
import API from "../../Utils/API";

//Styles
import "./assets/style.scss";

function PlantCard() {
  const [cart, setCart] = useContext(CartContext);
  const [products] = useContext(ProductContext);
  const [selected, setSelect] = useState(0);

  const arrayOfData = [
    {
      id: "1",
      qty: 1,
    },
    {
      id: "2",
      qty: 2,
    },
    {
      id: "3 ",
      qty: 3,
    },
    {
      id: "4 ",
      qty: 4,
    },
    {
      id: "5 ",
      qty: 5,
    },
  ];

  function handleChange(event) {
    let selectedValue = event.target.value;
    setSelect(selectedValue);
  }

  function addToCart(item) {
    const productData = {
      name: item.name,
      price: item.price,
      image: item.image,
      id: item._id,
      tagNumber: item.tagNumber,
      quantity: parseInt(selected),
    };

    if (productData.quantity !== 0) {
      API.getCart().then((res) => {
        let shoppingCart = res.data;
        let result = shoppingCart.some(
          (el) => productData.tagNumber === el.tagNumber
        );

        //quantity it's not updating, why? at least it's not being duplicated.
        if (result) {
          let id = item.tagNumber;
          API.updateCart(id, productData).then((req, res) => {});
        } else {
          API.addToCart(productData).then((req, res) => {
            setCart([...cart, productData]);
          });
        }
      });
    } else {
      return;
    }

    //...the spread oprator makes a copy of the array
  }

  return (
    <div className="container" id="products">
      <div>
        <h2>A variety you only find here</h2>

        <h4 className="hero-text">
          Prices as low as $10. Same Day delivery for Phoenix.
        </h4>
      </div>

      <div className="plants-container">
        {products.map((item) => (
          <div className="plants-item">
            <img
              key={item._id}
              className="card-img-top plant-img"
              src={item.image}
              alt="Plant Image"
            />
            <div>
              <h6 className="card-title">{item.name}</h6>
              <p className="card-link">${item.price}</p>
              <div>
                <SelectQty
                  handleChange={handleChange}
                  selected={selected}
                  arrayOfData={arrayOfData}
                />
                <button
                  className="add-to-cart-btn btn card-link"
                  onClick={() => addToCart(item)}
                >
                  {" "}
                  <i classNames="fas fa-plus pr-1"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantCard;
