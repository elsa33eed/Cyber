import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import Blackbutton from "../../Components/Buttons/BlackButton/Blackbutton";
import Whitebutton from "../../Components/Buttons/whiteButton/Whitebutton";
import Card from "../../Components/Card/Card";

export default function Home() {
  //#region State for when i click on element make it active
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (category) => {
    setActiveButton(category);
  };
  //#endregion

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
                  style={{ height: "60vh" }}
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
      <section className="category overflow-hidden py-5">
        <div className="container ">
          <div className="header text-md-start">
            <h4>Browse By Category</h4>
          </div>
          <div className="content">
            <ul className="mt-4">
              <li>
                <Link to="/">
                  <PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon> <br />{" "}
                  Phones
                </Link>
              </li>
              <li>
                <Link to="/">
                  <WatchOutlinedIcon></WatchOutlinedIcon> <br /> Smart Watches
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CameraAltOutlinedIcon></CameraAltOutlinedIcon> <br /> Cameras
                </Link>
              </li>
              <li>
                <Link to="/">
                  <HeadsetOutlinedIcon></HeadsetOutlinedIcon> <br /> Headphones
                </Link>
              </li>
              <li>
                <Link to="/">
                  <DesktopWindowsOutlinedIcon></DesktopWindowsOutlinedIcon>{" "}
                  <br />
                  Computers
                </Link>
              </li>
              <li>
                <Link to="/">
                  <SettingsOutlinedIcon></SettingsOutlinedIcon> <br /> Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="shop py-5 overflow-hidden">
        <div className="container">
          <div className="search-category">
            <ul className="search-menu">
              <li
                className={
                  activeButton === null || activeButton === "Category1"
                    ? "active"
                    : ""
                }
                onClick={() => handleClick("Category1")}
              >
                New Arrival
              </li>
              <li
                className={activeButton === "Category2" ? "active" : ""}
                onClick={() => handleClick("Category2")}
              >
                Bestseller
              </li>
              <li
                className={activeButton === "Category3" ? "active" : ""}
                onClick={() => handleClick("Category3")}
              >
                Featured Product
              </li>
            </ul>
          </div>
          <div className="cards">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </section>
      <section className="shop-category overflow-hidden py-4">
        <div className="content d-flex justify-content-start">
          <div className="row">
            <div className="popular-product p-5 col-12 col-md-6 col-lg-3">
              <div className="popular-product-image h-75">
                <img
                  src="/Images/popular-product.png"
                  className="img-fluid card-img-top"
                  alt="Popular product"
                />
              </div>
              <div className="popular-product-info text-start">
                <h3>Popular Product</h3>
                <p>
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <Whitebutton>Shop Now</Whitebutton>
              </div>
            </div>
            <div
              className="ipad-pro  p-5 col-12 col-md-6 col-lg-3"
              style={{
                backgroundColor: "#F9F9F9",
              }}
            >
              <div className="ipad-pro-image h-75">
                <img
                  src="/Images/Ipad.png"
                  className="img-fluid card-img-top"
                  alt="Ipad Pro"
                />
              </div>
              <div className="ipad-pro-info text-start">
                <h3>Ipad Pro</h3>
                <p>
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <Whitebutton>Shop Now</Whitebutton>
              </div>
            </div>
            <div
              className="samsung  p-5 col-12 col-md-6 col-lg-3"
              style={{
                backgroundColor: "#EAEAEA",
              }}
            >
              <div className="samsung-image h-75">
                <img
                  src="/Images/samsung.png"
                  className="img-fluid card-img-top"
                  alt="Samsung Galaxy"
                />
              </div>
              <div className="samsung-info text-start">
                <h3>Samsung Galaxy</h3>
                <p>
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <Whitebutton>Shop Now</Whitebutton>
              </div>
            </div>
            <div
              className="macbook-pro  p-5 col-12 col-md-6 col-lg-3"
              style={{
                backgroundColor: "#2C2C2C",
                color: "#ffffff",
              }}
            >
              <div className="macbook-pro-image h-75">
                <img
                  src="/Images/Macbook-1.png"
                  className="img-fluid card-img-top"
                  alt="Popular product"
                />
              </div>
              <div className="macbook-pro-info text-start">
                <h3>Macbook Pro</h3>
                <p>
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <Whitebutton>Shop Now</Whitebutton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="discounts py-5">
        <div className="container">
          <div className="search-category">
            <h5 className="text-start ps-5 pb-3">Discounts up to -50%</h5>
          </div>
          <div className="cards">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </section>
      <section
        className="sale overflow-hidden d-flex flex-column flex-md-row justify-content-center align-items-center"
        style={{
          backgroundColor: "#787878",
          backgroundImage: "linear-gradient(to left, #2E2E2E 0%, #000000 100%)",
          color: "#ffffff",
          height: "75vh",
        }}
      >
        <div className="group-left-image">
          <img src="/Images/image 6.png" className="img-fluid" alt="Devices" />
          <img src="/Images/image 18.png" className="img-fluid" alt="Devices" />
          <img
            src="/Images/jbl_jr_310bt_blue 1.png"
            className="img-fluid"
            alt="Devices"
          />
        </div>
        <div className="content d-flex flex-column justify-content-center align-items-center">
          <h2
            style={{
              fontWeight: "300",
              fontSize: "50px",
              width: "max-content",
            }}
          >
            Big Summer <span style={{ fontWeight: "bold" }}>Sale</span>
          </h2>
          <p
            style={{ fontSize: "12px", color: "#787878", width: "max-content" }}
          >
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <Blackbutton>Shop Now</Blackbutton>
        </div>
        <div className="group-right-image">
          <img src="/Images/image 7.png" className="img-fluid" alt="Devices" />
          <img src="/Images/image 8.png" className="img-fluid" alt="Devices" />
        </div>
      </section>
    </>
  );
}
