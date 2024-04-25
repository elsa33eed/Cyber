import React from "react";
import "./Home.css";

import Blackbutton from "../../Components/Buttons/BlackButton/Blackbutton";
import Whitebutton from "../../Components/Buttons/whiteButton/Whitebutton";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-6 d-md-flex flex-md-column justify-content-md-center
 align-items-md-start mt-5 mt-md-0 text"
            >
              <h6 style={{ color: "#888" }}>Pro.Beyond.</h6>
              <h2>IPhone 14 Pro</h2>
              <p className="text-md-start" style={{ color: "#888" }}>
                Create to change everything for better. For everyone
              </p>
              <Blackbutton>Shop Now</Blackbutton>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center image">
              <img
                src="Images/Iphone Image.png"
                className="img-fluid"
                alt="IPhone"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="banners overflow-hidden">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="row">
              <div
                style={{ backgroundColor: "#ffffff" }}
                className="col-lg-12 col-md-4 col-12"
              >
                <div className="playstation d-flex flex-column flex-lg-row align-items-center overflow-hidden">
                  <div className="playstation-banner">
                    <img
                      src="/Images/PlayStation.png"
                      className="img-fluid"
                      alt="Playstation"
                    />
                  </div>
                  <div className="playstation-info">
                    <h3
                      className="text-center text-lg-start"
                      style={{ fontWeight: "bold" }}
                    >
                      Playstation 5
                    </h3>
                    <p
                      className="text-center text-lg-start"
                      style={{
                        width: "18rem",
                      }}
                    >
                      Incredibly powerful CPUs, GPUs, and an SSD with integrated
                      I/O will redefine your PlayStation experience.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-4 col-lg-6 d-lg-flex"
                style={{ backgroundColor: "#EDEDED" }}
              >
                <div className="headphone d-lg-flex align-items-lg-center overflow-hidden">
                  <div className="headphone-banner mt-3">
                    <img
                      src="/Images/headphone.png"
                      className="img-fluid"
                      alt="Head Phone"
                    />
                  </div>
                  <div className="headphone-info">
                    <h3>
                      <span className="d-lg-block">Apple</span> AirPods
                      <span style={{ fontWeight: "bold" }}> Max</span>
                    </h3>
                    <p>Computational audio. Listen, it's powerful</p>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-4 col-lg-6 overflow-hidden d-lg-flex"
                style={{ backgroundColor: "#353535", color: "#ffffff" }}
              >
                <div className="var m-2 d-lg-flex align-items-lg-center">
                  <div className="var-banner">
                    <img
                      src="/Images/VarGlasses.png"
                      className="img-fluid"
                      alt="Var Glasses"
                    />
                  </div>
                  <div className="var-info w-100">
                    <h3 className="text-lg-start">
                      <span className="d-lg-block">Apple</span> Vision{" "}
                      <span style={{ fontWeight: "bold" }}>Pro</span>
                    </h3>
                    <p className="text-lg-start">
                      An immersive way to experience entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#EDEDED" }}
            className="col-12 col-lg-6 overflow-hidden d-lg-flex"
          >
            <div className="mac d-lg-flex flex-lg-row-reverse align-items-lg-center">
              <div className="mac-banner">
                <img
                  src="/Images/MacBookPro14.png"
                  className="img-fluid d-inline-block d-lg-none"
                  alt="Mac book"
                />
                <img
                  src="Images/MacBook Pro14-2.png"
                  className="img-fluid d-none d-lg-inline-block"
                  alt="MacBook"
                  style={{ height: "75vh" }}
                />
              </div>
              <div className="mac-info mb-2">
                <h3 style={{ fontWeight: "300" }}>
                  Macbook <span style={{ fontWeight: "bold" }}>Air</span>
                </h3>
                <p>
                  The new 15-inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.
                </p>
                <Whitebutton>Shop Now</Whitebutton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
