import React from "react";
import "./stepone.css";
import Address from "../../Components/address-step/Address";
import Whitebutton from "./../../Components/Buttons/whiteButton/Whitebutton";
import Blackbutton from "./../../Components/Buttons/BlackButton/Blackbutton";

export default function StepOne() {
  return (
    <>
      <section className="step-one overflow-hidden">
        <div className="container">
          <div className="steps py-5 d-flex justify-content-between align-items-center">
            <div className="address-step">
              <div className="icon"></div>
              <div className="info text-start">
                <p className="m-0">step 1</p>
                <h5>Address</h5>
              </div>
            </div>
            <div className="shipping">
              <div className="icon"></div>
              <div className="info text-start">
                <p className="m-0">step 2</p>
                <h5>Shipping</h5>
              </div>
            </div>
            <div className="payment">
              <div className="icon"></div>
              <div className="info text-start">
                <p className="m-0">step 3</p>
                <h5>Payment</h5>
              </div>
            </div>
          </div>
          <div className="address py-5">
            <h5 className="text-start mb-4">Select Address</h5>
            <Address></Address>
            <Address></Address>
          </div>
          <div className="add-address d-flex align-items-center flex-column justify-content-center">
            <div className="icon d-flex">
              <h5>+</h5>
            </div>
            <div className="text">
              <p>Add New Address</p>
            </div>
          </div>
          <div className="btns d-flex justify-content-end align-items-center gap-3">
            <Whitebutton link="/cart">Back</Whitebutton>
            <Blackbutton link="/cart/stepTwo">Next</Blackbutton>
          </div>
        </div>
      </section>
    </>
  );
}
