import React from "react";
import "./stepthree.css";
import { Link } from "react-router-dom";
import Whitebutton from "../../../Components/Buttons/whiteButton/Whitebutton";
import Blackbutton from "../../../Components/Buttons/BlackButton/Blackbutton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import TextField from "@mui/material/TextField";

export default function StepThree() {
  return (
    <>
      <section className="step-three overflow-hidden">
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
          <div className="payment py-5">
            <div className="row">
              <div
                style={{ border: "1px solid #EBEBEB", borderRadius: "7px" }}
                className="col-md-6 p-3 d-none d-md-block"
              >
                <div className="subject">
                  <h4 className="text-start mb-4">Summary</h4>
                </div>
                <div className="products">
                  <div
                    className="product d-flex gap-3 mb-2 align-items-center justify-content-between p-2"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      backgroundColor: "#F6F6F6",
                      borderRadius: "7px",
                    }}
                  >
                    <div className="info d-flex gap-3 align-items-center">
                      <div className="image">
                        <img
                          src="/Images/Product Image.png"
                          alt="Product Images"
                        />
                      </div>
                      <p>Apple iPhone 14 Pro Max 128Gb </p>
                    </div>
                    <div className="price">$1399</div>
                  </div>
                  <div
                    className="product d-flex mb-2 gap-3 align-items-center justify-content-between p-2"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      backgroundColor: "#F6F6F6",
                      borderRadius: "7px",
                    }}
                  >
                    <div className="info d-flex gap-3 align-items-center">
                      <div className="image">
                        <img
                          src="/Images/Product Image.png"
                          alt="Product Images"
                        />
                      </div>
                      <p>Apple iPhone 14 Pro Max 128Gb </p>
                    </div>
                    <div className="price">$1399</div>
                  </div>
                  <div
                    className="product d-flex mb-2 gap-3 align-items-center justify-content-between p-2"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      backgroundColor: "#F6F6F6",
                      borderRadius: "7px",
                    }}
                  >
                    <div className="info d-flex gap-3 align-items-center">
                      <div className="image">
                        <img
                          src="/Images/Product Image.png"
                          alt="Product Images"
                        />
                      </div>
                      <p>Apple iPhone 14 Pro Max 128Gb </p>
                    </div>
                    <div className="price">$1399</div>
                  </div>
                </div>
                <div className="products-info ">
                  <div className="info d-flex flex-column text-start">
                    <div className="address  mb-4">
                      <h6 style={{ color: "#545454", fontSize: "14px" }}>
                        Address
                      </h6>
                      <p style={{ fontWeight: "500" }}>
                        1131 Dusty Townline, Jacksonville, TX 40322
                      </p>
                    </div>
                    <div className="shipment-method mb-4">
                      <h6 style={{ color: "#545454", fontSize: "14px" }}>
                        Shipment method
                      </h6>
                      <p style={{ fontWeight: "500" }}>Free</p>
                    </div>
                  </div>
                  <div className="prices">
                    <div className="sub-total d-flex justify-content-between align-items-center ">
                      <h5>Subtotal</h5>
                      <h6>$2354</h6>
                    </div>
                    <div className="tax d-flex justify-content-between align-items-center">
                      <p
                        style={{
                          color: "#545454",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                        className="m-0"
                      >
                        Estimated Tax
                      </p>
                      <h6>$23</h6>
                    </div>
                    <div className="shipping d-flex justify-content-between align-items-center">
                      <p
                        style={{
                          color: "#545454",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                        className="m-0"
                      >
                        Estimated shipping & Handling
                      </p>
                      <h6>$33</h6>
                    </div>
                    <div className="total d-flex justify-content-between align-items-center mt-2">
                      <h5>Total</h5>
                      <h6>$3562</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 px-4">
                <div className="subject mb-4">
                  <h6 className="text-start">Payment</h6>
                </div>
                <ul className="lists">
                  <li>
                    <Link>Credit Card</Link>
                  </li>
                  <li>
                    <Link>Paypal</Link>
                  </li>
                  <li>
                    <Link>Cash</Link>
                  </li>
                </ul>
                <div className="images d-flex mb-4">
                  <img
                    src="/Images/Credit Card_Image.png"
                    className="img-fluid"
                    alt="Payment Way"
                  />
                </div>
                <form className="form">
                  <div className="row">
                    <div className="col-12 mb-4">
                      <TextField
                        id="outlined-basic"
                        label="Cardholder Name"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <TextField
                        id="outlined-basic"
                        label="Card Number"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <TextField
                        id="outlined-basic"
                        label="EXP Date"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <TextField
                        id="outlined-basic"
                        label="CVV"
                        variant="outlined"
                        sx={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </form>
                <div className="btns d-flex justify-content-end align-items-center gap-3">
                  <Whitebutton link="/cart/stepTwo">Back</Whitebutton>
                  <Blackbutton link="/pay">Pay</Blackbutton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
