import React from "react";
import "./steptwo.css";
import Whitebutton from "../../../Components/Buttons/whiteButton/Whitebutton";
import Blackbutton from "../../../Components/Buttons/BlackButton/Blackbutton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

export default function StepTwo() {
  return (
    <>
      <section className="step-two overflow-hidden">
        <div className="container">
          <div className="steps py-5 d-flex justify-content-between align-items-center">
            <div className="address-step d-flex align-items-center">
              <div className="icon">
                <LocationOnIcon></LocationOnIcon>
              </div>
              <div className="info text-start">
                <p className="m-0">step 1</p>
                <h5>Address</h5>
              </div>
            </div>
            <div className="shipping-step d-flex align-items-center">
              <div className="icon">
                <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon>
              </div>
              <div className="info text-start">
                <p className="m-0">step 2</p>
                <h5>Shipping</h5>
              </div>
            </div>
            <div className="payment-step d-flex align-items-center">
              <div className="icon">
                <AccountBalanceOutlinedIcon></AccountBalanceOutlinedIcon>
              </div>
              <div className="info text-start">
                <p className="m-0">step 3</p>
                <h5>Payment</h5>
              </div>
            </div>
          </div>
          <div className="shipping py-5">
            <h5 className="text-start mb-4">Shipment Method</h5>
            <div className="choose-shipping-plan">
              <div className="regular-shipping">
                <div className=" ">
                  <input type="radio" name="regular" id="regular" />
                  <label htmlFor="regular">
                    <p>
                      <span style={{ fontWeight: "bold", margin: "0px 10px" }}>
                        $25{" "}
                      </span>{" "}
                      Regulary shipment
                    </p>
                  </label>
                </div>
                <p style={{ fontSize: "14px" }}>6 May, 2024</p>
              </div>
              <div className="soon-shipping">
                <div className="d-flex d-md-block flex-wrap">
                  <input type="radio" name="soon" id="soon" />
                  <label htmlFor="soon">
                    <p>
                      <span style={{ fontWeight: "bold", margin: "0px 10px" }}>
                        $50{" "}
                      </span>{" "}
                      Get your delivery as soon as possible
                    </p>
                  </label>
                </div>
                <p style={{ fontSize: "14px" }}>1 May, 2024</p>
              </div>
            </div>
          </div>

          <div className="btns d-flex justify-content-end align-items-center gap-3">
            <Whitebutton link="/cart/stepOne">Back</Whitebutton>
            <Blackbutton link="/cart/stepThree">Next</Blackbutton>
          </div>
        </div>
      </section>
    </>
  );
}
