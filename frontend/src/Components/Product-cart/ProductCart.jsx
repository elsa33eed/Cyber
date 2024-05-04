import React, { useState } from "react";
import "./productCart.css";
import CloseIcon from "@mui/icons-material/Close";

export default function ProductCart() {
  //#region make counter for number of product
  const [count, setCount] = useState(1);

  function decrementCount() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  //#endregion

  return (
    <>
      <div className="product-cart p-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="group-one d-flex align-items-center">
          <div className="images-product pe-3">
            <img src="/Images/image 56.png" alt="Product" />
          </div>
          <div className="description text-start">
            <h5 style={{ width: "fit-content", fontSize: "17" }}>
              Apple iPhone 14 Pro Max 128Gb Deep Purple
            </h5>
            <p style={{ fontSize: "12px" }} className="id">
              #25139526913984
            </p>
          </div>
        </div>

        <div className="group-two ps-5 ps-md-0 pt-1 d-flex align-items-center">
          <div className="counter d-flex align-items-center px-2">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="price">
            <h4 className="m-0 px-4 px-md-1">$1342</h4>
          </div>
          <div className="icon ps-md-3">
            <CloseIcon></CloseIcon>
          </div>
        </div>
      </div>
    </>
  );
}
