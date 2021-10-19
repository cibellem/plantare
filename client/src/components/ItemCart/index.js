import React from "react";
import "./assets/style.scss";

function ItemCart(props) {
  return (
    <div className="item-cart">
      {props.items.map((item, i) => (
        <div className="container card-item-checkout card-item card">
          <div className="row " key={i}>
            <div className="col-4 p-3">
              {" "}
              <img
                className="item-img-cart img-responsive"
                src={item.image}
                alt="Plant Image"
              />
            </div>
            <div className="col-8 col-item-description ">
              <div className="row">
                <div className="col font-weight-bold">
                  {" "}
                  <h5>{item.name}</h5>
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
                  <p>
                    <span className="font-weight-bold">Qty:</span>{" "}
                    {item.quantity}{" "}
                    <span className="pr-2">
                      <i
                        class="fas fa-minus count "
                        onClick={(e) => props.removeOne((i, item))}
                      ></i>
                    </span>
                    <span>
                      <i
                        class="fas fa-plus count"
                        value={item}
                        onClick={(e) => props.addOne((i, item))}
                      ></i>
                    </span>
                  </p>
                </div>
              </div>
              <div className="row remove-row">
                <div className="col  ">
                  <p
                    id={item._id}
                    value={item}
                    className="remove"
                    onClick={props.deleteItem}
                  >
                    <i class="fas fa-minus-circle pr-2"></i> Remove
                  </p>
                </div>
                {/* <div className="col  ">
                  <p className="wishlist" onClick={props.addtoWishList}>
                    <i class="fas fa-star pr-2"></i> Wishlist
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCart;
