import React, { useState, useContext } from "react";
import "./assets/style.scss";
import API from "../../Utils/API";
import SelectQty from "../Select/index";
import { CartContext } from "../../CartContex";

function PlantCard(props) {
  const [cart, setCart] = useContext(CartContext);
  const [added, setAdd] = useState(false);
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
    console.log(event);
    let selectedValue = event.target.value;

    setSelect(selectedValue);
  }

  function addToCart(item) {
    console.log(item, "oitem");
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
            console.log(productData);
            
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
    <div className=" container plant-card-container " id="products">
      <div className="row text-center">
        <div className="col mb-3">
          <h2>A variety you only find here</h2>
          <h4>Prices as low as $10.</h4>
          <h4> Same Day delivery for Phoenix</h4>
        </div>
        <div className="row">
          {props.products.map((item) => (
            <div
              className="col-lg-3 col-md-5 col-sm-12 pb-4 
        "
            >
              <div
                class="card card-item-description  mb-2 "
                style={{ width: "16rem" }}
              >
                <img
                  key={item._id}
                  className="card-img-top plant-img"
                  src={item.image}
                  alt="Plant Image"
                />
                <div class="card-body  ">
                  <div className="plant-card ">
                    <h6 class="card-title">{item.name}</h6>
                    <p className="card-link">${item.price}</p>
                    <div className="row">
                      <div className="col">
                        <SelectQty
                          handleChange={handleChange}
                          selected={selected}
                          arrayOfData={arrayOfData}
                        />
                      </div>
                      <div className="col">
                        <button
                          className="add-to-cart-btn btn card-link"
                          onClick={() => addToCart(item)}
                        >
                          {" "}
                          <i class="fas fa-plus pr-1"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
