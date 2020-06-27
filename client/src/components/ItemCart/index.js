import React from "react";
import "./assets/style.scss";
import API from "../../Utils/API";

function ItemCart(props) {
  function deleteItem(e) {
    let id = e.target.id;

    API.removeFromCart(id)
      .then((res) => {
        console.log(res);
      })
      .catch();
  }

  function addtoWishList() {
    console.log("wishlist link working");
  }
  return (
    <div className="item-cart">
      {props.items.map((item) => (
        <div className="container card-item card">
          <div className="row">
            <div className="col-4">
              {" "}
              <img
                key={item._id}
                className="item-img-cart img-responsive"
                src={item.image}
                alt="Plant Image"
              />
            </div>
            <div className="col-8 col-item-description ">
              <div className="row">
                <div className="col">
                  {" "}
                  <h6>{item.name}</h6>
                </div>
                <div className="col">
                  {" "}
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="row">
                {" "}
                <div className="col">
                  {" "}
                  <p>Qty:</p>
                </div>
              </div>
              <div className="row remove-row">
                <div className="col  ">
                  <p id={item._id} className="remove" onClick={deleteItem}>
                    Remove
                  </p>
                </div>
                <div className="col  ">
                  <p className="wishlist" onClick={addtoWishList}>
                    Wishlist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCart;
