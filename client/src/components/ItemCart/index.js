import React from "react";

function ItemCart(props) {
  console.log(props);
  return (
    <div className="cart">
      {/* {props.items.map((item) => ( */}
      <div className="container">
        <div className="row">
          {/* <div className="col">{item.img}</div> */}
          <div className="col">
            <div className="row">{}</div>
            <div className="row">Qty:</div>
            <div className="row">Remove</div>
            <div className="row">Add to Wishlist</div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default ItemCart;
