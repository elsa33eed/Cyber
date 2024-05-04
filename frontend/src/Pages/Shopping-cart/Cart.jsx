import React from "react";
import "./cart.css";
import ProductCart from "../../Components/Product-cart/ProductCart";
import Blackbutton from "./../../Components/Buttons/BlackButton/Blackbutton";

export default function Cart() {
  return (
    <>
      <section className="cart">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-12 col-lg-7">
                <h2 className="text-md-start">Shopping Cart</h2>
                <ProductCart></ProductCart>
                <ProductCart></ProductCart>
                <ProductCart></ProductCart>
                <ProductCart></ProductCart>
                <ProductCart></ProductCart>
              </div>
              <div className="col-12 col-lg-5 p-5  summary">
                <h4 className="mb-4 text-start">Order Summary</h4>
                <div className="form d-flex flex-column">
                  <div className="promo mb-3 d-flex flex-column ">
                    <label className="text-start" htmlFor="promo">
                      Discount code / Promo code
                    </label>
                    <input
                      type="text"
                      name="promo"
                      id="promo"
                      placeholder="Code"
                    />
                  </div>
                  <div className="bonus mb-3 d-flex flex-column ">
                    <label className="text-start" htmlFor="promo">
                      Your bonus card number
                    </label>
                    <input
                      type="text"
                      name="bonus"
                      id="bonus"
                      placeholder="Enter Code Number"
                    />
                  </div>
                </div>
                <div className="info mb-5">
                  <div className="sub-total d-flex justify-content-between align-items-center ">
                    <h5>Subtotal</h5>
                    <h6>$2354</h6>
                  </div>
                  <div className="tax d-flex justify-content-between align-items-center">
                    <p className="m-0">Estimated Tax</p>
                    <h6>$23</h6>
                  </div>
                  <div className="shipping d-flex justify-content-between align-items-center">
                    <p className="m-0">Estimated shipping & Handling</p>
                    <h6>$33</h6>
                  </div>
                  <div className="total d-flex justify-content-between align-items-center mt-2">
                    <h5>Total</h5>
                    <h6>$3562</h6>
                  </div>
                </div>
                <div className="btn w-100">
                  <Blackbutton link="/cart/stepOne">Checkout</Blackbutton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
