import { React, useState } from "react";

import "./product.css";
import Whitebutton from "./../../Components/Buttons/whiteButton/Whitebutton";
import MemoryIcon from "@mui/icons-material/Memory";
import Blackbutton from "./../../Components/Buttons/BlackButton/Blackbutton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Card from "./../../Components/Card/Card";

export default function Product() {
  //#region Make collapsible category
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenCategoryIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  //#endregion

  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product-information">
            <div className="row my-5">
              <div className="col-12 col-md-6">
                <div className="image h-100 d-flex align-items-center justify-content-center">
                  <img
                    src="/Images/Image.png"
                    alt="Phone"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="content text-start">
                  <div className="title mb-3">
                    <h2
                      style={{
                        fontWeight: "bold",

                        letterSpacing: "-1px",
                      }}
                    >
                      Apple iPhone 14 Pro Max
                    </h2>
                  </div>
                  <div className="price mb-3">
                    <h5 style={{ fontWeight: "bold" }}>
                      $1399{" "}
                      <del style={{ color: "#A0A0A0", fontSize: "14px" }}>
                        $1599
                      </del>
                    </h5>
                  </div>
                  <div className="color mb-3">
                    <p style={{ fontSize: "12px", fontWeight: "bold" }}>
                      Select Color:{" "}
                    </p>
                  </div>
                  <div className="size d-flex flex-wrap gap-3 mb-3">
                    <Whitebutton>128GB</Whitebutton>
                    <Blackbutton>256GB</Blackbutton>
                    <Whitebutton>512GB</Whitebutton>
                    <Whitebutton>1TB</Whitebutton>
                  </div>
                  <div className="product-info d-flex gap-2  flex-wrap mb-3">
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        width: "fit-content",
                        borderRadius: "5px",
                      }}
                      className="info d-flex align-items-center py-2 px-3"
                    >
                      <div style={{ color: "#4E4E4E" }} className="icon me-2">
                        <MemoryIcon></MemoryIcon>
                      </div>
                      <div className="text">
                        <h6 style={{ fontSize: "11px", color: "#C4C4C4" }}>
                          CPU
                        </h6>
                        <p style={{ fontSize: "11px", color: "#4E4E4E" }}>
                          Apple A16 Bionic
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        width: "fit-content",
                        borderRadius: "5px",
                      }}
                      className="info d-flex align-items-center py-2 px-3"
                    >
                      <div style={{ color: "#4E4E4E" }} className="icon me-2">
                        <MemoryIcon></MemoryIcon>
                      </div>
                      <div className="text">
                        <h6 style={{ fontSize: "11px", color: "#C4C4C4" }}>
                          CPU
                        </h6>
                        <p style={{ fontSize: "11px", color: "#4E4E4E" }}>
                          Apple A16 Bionic
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        width: "fit-content",
                        borderRadius: "5px",
                      }}
                      className="info d-flex align-items-center py-2 px-3"
                    >
                      <div style={{ color: "#4E4E4E" }} className="icon me-2">
                        <MemoryIcon></MemoryIcon>
                      </div>
                      <div className="text">
                        <h6 style={{ fontSize: "11px", color: "#C4C4C4" }}>
                          CPU
                        </h6>
                        <p style={{ fontSize: "11px", color: "#4E4E4E" }}>
                          Apple A16 Bionic
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        width: "fit-content",
                        borderRadius: "5px",
                      }}
                      className="info d-flex align-items-center py-2 px-3"
                    >
                      <div style={{ color: "#4E4E4E" }} className="icon me-2">
                        <MemoryIcon></MemoryIcon>
                      </div>
                      <div className="text">
                        <h6 style={{ fontSize: "11px", color: "#C4C4C4" }}>
                          CPU
                        </h6>
                        <p style={{ fontSize: "11px", color: "#4E4E4E" }}>
                          Apple A16 Bionic
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        width: "fit-content",
                        borderRadius: "5px",
                      }}
                      className="info d-flex align-items-center py-2 px-3"
                    >
                      <div style={{ color: "#4E4E4E" }} className="icon me-2">
                        <MemoryIcon></MemoryIcon>
                      </div>
                      <div className="text">
                        <h6 style={{ fontSize: "11px", color: "#C4C4C4" }}>
                          CPU
                        </h6>
                        <p style={{ fontSize: "11px", color: "#4E4E4E" }}>
                          Apple A16 Bionic
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        width: "fit-content",
                        borderRadius: "5px",
                      }}
                      className="info d-flex align-items-center py-2 px-3"
                    >
                      <div style={{ color: "#4E4E4E" }} className="icon me-2">
                        <MemoryIcon></MemoryIcon>
                      </div>
                      <div className="text">
                        <h6 style={{ fontSize: "11px", color: "#C4C4C4" }}>
                          CPU
                        </h6>
                        <p style={{ fontSize: "11px", color: "#4E4E4E" }}>
                          Apple A16 Bionic
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-text mb-4">
                    <p style={{ fontSize: "12px", color: "#6C6C6C" }}>
                      Enhanced capabilities thanks toan enlarged display of 6.7
                      inchesand work without rechargingthroughout the day.
                      Incredible photosas in weak, yesand in bright lightusing
                      the new systemwith two cameras
                    </p>
                  </div>
                  <div className="btn p-0 mb-3 d-flex align-items-center gap-5 justify-content-start">
                    <Whitebutton>Add To Wishlist</Whitebutton>
                    <Blackbutton>
                      Add To Cart <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Blackbutton>
                  </div>
                  <div className="shipping-info d-flex align-items-center justify-content-between flex-wrap  ">
                    <div className="info d-flex align-items-center gap-2">
                      <div
                        style={{
                          backgroundColor: "#F6F6F6",
                          color: "#797979",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                        className="icon"
                      >
                        <LocalShippingOutlinedIcon></LocalShippingOutlinedIcon>
                      </div>
                      <div style={{ fontSize: "12px" }} className="text">
                        <h6 style={{ color: "#717171", fontSize: "12px" }}>
                          Free Delivery
                        </h6>
                        <p>1-2 days</p>
                      </div>
                    </div>
                    <div className="info d-flex align-items-center gap-2">
                      <div
                        style={{
                          backgroundColor: "#F6F6F6",
                          color: "#797979",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                        className="icon"
                      >
                        <LocalShippingOutlinedIcon></LocalShippingOutlinedIcon>
                      </div>
                      <div style={{ fontSize: "12px" }} className="text">
                        <h6 style={{ color: "#717171", fontSize: "12px" }}>
                          Free Delivery
                        </h6>
                        <p>1-2 days</p>
                      </div>
                    </div>
                    <div className="info d-flex align-items-center gap-2">
                      <div
                        style={{
                          backgroundColor: "#F6F6F6",
                          color: "#797979",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                        className="icon"
                      >
                        <LocalShippingOutlinedIcon></LocalShippingOutlinedIcon>
                      </div>
                      <div style={{ fontSize: "12px" }} className="text">
                        <h6 style={{ color: "#717171", fontSize: "12px" }}>
                          Free Delivery
                        </h6>
                        <p>1-2 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="details py-5 px-2 px-md-5">
        <div className="container">
          <div className="content p-md-5 p-2">
            <div className="title text-start">
              <h3 className="mb-4">Details</h3>
              <p
                style={{
                  color: "#9D9D9D",
                  fontSize: "12px",
                  marginBottom: "1.5rem",
                }}
              >
                Just as a book is judged by its cover, the first thing you
                notice when you pick up a modern smartphone is the display.
                Nothing surprising, because advanced technologies allow you to
                practically level the display frames and cutouts for the front
                camera and speaker, leaving no room for bold design solutions.
                And how good that in such realities Apple everything is fine
                with displays. Both critics and mass consumers always praise the
                quality of the picture provided by the products of the
                Californian brand. And last year's 6.7-inch Retina panels, which
                had ProMotion, caused real admiration for many.
              </p>
            </div>
            <div className="categories">
              {[0, 1, 2].map((index) => (
                <div className="category mb-3" key={index}>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleDetails(index)}
                    className="category-title d-flex justify-content-between align-items-center mb-2"
                  >
                    <h5>Screen</h5>
                    <span className="arrow">
                      {openCategoryIndex === index ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </span>
                  </div>
                  {openCategoryIndex === index && (
                    <div className="category-text">
                      <div className="category-row p-2 d-flex justify-content-between align-items-center">
                        <h6>Screen diagonal</h6>
                        <p>6.7"</p>
                      </div>
                      <div className="category-row p-2 d-flex justify-content-between align-items-center">
                        <h6>Screen diagonal</h6>
                        <p>6.7"</p>
                      </div>
                      <div className="category-row p-2 d-flex justify-content-between align-items-center">
                        <h6>Screen diagonal</h6>
                        <p>6.7"</p>
                      </div>
                      <div className="category-row p-2 d-flex justify-content-between align-items-center">
                        <h6>Screen diagonal</h6>
                        <p>6.7"</p>
                      </div>
                      <div className="category-row p-2 d-flex justify-content-between align-items-center">
                        <h6>Screen diagonal</h6>
                        <p>6.7"</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="review py-5">
        <div className="container">
          <div className="content text-start">
            <h3 className="mb-4">Review</h3>
            <div className="rating my-5">
              <div className="row">
                <div className="col-12 mb-4 mb-md-0 col-md-3 justify-content-center d-flex">
                  <div className="num-of-rating">
                    <h5>4.8</h5>
                    <p>of 125 reviews</p>
                    <div className="stars">
                      <Rating
                        name="read-only"
                        precision={0.5}
                        value={4.5}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-9 mb-5 d-flex align-items-center ">
                  <div className="bar-progress w-100">
                    <div className="excellent mb-2 d-flex align-items-center gap-5">
                      <div className="text-bar">Excellent</div>
                      <div className="bar w-100">
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Excellent"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="good mb-2 d-flex align-items-center gap-5">
                      <div className="text-bar">Good</div>
                      <div className="bar w-100">
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Good"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "40%" }}
                          >
                            40%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="average mb-2 d-flex align-items-center gap-5">
                      <div className="text-bar">Average</div>
                      <div className="bar w-100">
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Average"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "20%" }}
                          >
                            20%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="below-average mb-2 d-flex align-items-center gap-5">
                      <div className="text-bar">Below Average</div>
                      <div className="bar w-100">
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Below Average"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "30%" }}
                          >
                            30%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="poor mb-2 d-flex align-items-center gap-5">
                      <div className="text-bar">Poor</div>
                      <div className="bar w-100">
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Poor"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "10%" }}
                          >
                            10%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <TextField
                    id="outlined-basic"
                    label="Leave Comment"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    size="small"
                  />
                </div>
              </div>
            </div>
            <div className="comments py-5">
              <div
                style={{ backgroundColor: "#FAFAFA", borderRadius: "7px" }}
                className="comment mb-3 d-flex p-4 gap-3 justify-content-center align-items-start"
              >
                <div className="avatar">
                  <img
                    src="/Images/User Pic.png"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="user-data">
                  <div className="title-data d-flex justify-content-between align-items-start">
                    <div className="title-rate">
                      <h5 className="mb-2 text-bold">Monalisa Adrino</h5>
                      <div className="rate">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="date">
                      <span style={{ fontSize: "12px", color: "#9D9D9D" }}>
                        24 January,2023
                      </span>
                    </div>
                  </div>
                  <div className="user-comment">
                    <p style={{ fontSize: "14px", color: "#7E7E7E" }}>
                      I was a bit nervous to be buying a secondhand phone from
                      Amazon, but I couldn’t be happier with my purchase!! I
                      have a pre-paid data plan so I was worried that this phone
                      wouldn’t connect with my data plan, since the new phones
                      don’t have the physical Sim tray anymore, but couldn’t
                      have been easier! I bought an Unlocked black iPhone 14 Pro
                      Max in excellent condition and everything is PERFECT. It
                      was super easy to set up and the phone works and looks
                      great. It truly was in excellent condition. Highly
                      recommend!!!🖤
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FAFAFA", borderRadius: "7px" }}
                className="comment mb-3 d-flex p-4 gap-3 justify-content-center align-items-start"
              >
                <div className="avatar">
                  <img
                    src="/Images/User Pic.png"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="user-data">
                  <div className="title-data d-flex justify-content-between align-items-start">
                    <div className="title-rate">
                      <h5 className="mb-2 text-bold">Monalisa Adrino</h5>
                      <div className="rate">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="date">
                      <span style={{ fontSize: "12px", color: "#9D9D9D" }}>
                        24 January,2023
                      </span>
                    </div>
                  </div>
                  <div className="user-comment">
                    <p style={{ fontSize: "14px", color: "#7E7E7E" }}>
                      I was a bit nervous to be buying a secondhand phone from
                      Amazon, but I couldn’t be happier with my purchase!! I
                      have a pre-paid data plan so I was worried that this phone
                      wouldn’t connect with my data plan, since the new phones
                      don’t have the physical Sim tray anymore, but couldn’t
                      have been easier! I bought an Unlocked black iPhone 14 Pro
                      Max in excellent condition and everything is PERFECT. It
                      was super easy to set up and the phone works and looks
                      great. It truly was in excellent condition. Highly
                      recommend!!!🖤
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FAFAFA", borderRadius: "7px" }}
                className="comment mb-3 d-flex p-4 gap-3 justify-content-center align-items-start"
              >
                <div className="avatar">
                  <img
                    src="/Images/User Pic.png"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="user-data">
                  <div className="title-data d-flex justify-content-between align-items-start">
                    <div className="title-rate">
                      <h5 className="mb-2 text-bold">Monalisa Adrino</h5>
                      <div className="rate">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="date">
                      <span style={{ fontSize: "12px", color: "#9D9D9D" }}>
                        24 January,2023
                      </span>
                    </div>
                  </div>
                  <div className="user-comment">
                    <p style={{ fontSize: "14px", color: "#7E7E7E" }}>
                      I was a bit nervous to be buying a secondhand phone from
                      Amazon, but I couldn’t be happier with my purchase!! I
                      have a pre-paid data plan so I was worried that this phone
                      wouldn’t connect with my data plan, since the new phones
                      don’t have the physical Sim tray anymore, but couldn’t
                      have been easier! I bought an Unlocked black iPhone 14 Pro
                      Max in excellent condition and everything is PERFECT. It
                      was super easy to set up and the phone works and looks
                      great. It truly was in excellent condition. Highly
                      recommend!!!🖤
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FAFAFA", borderRadius: "7px" }}
                className="comment mb-3 d-flex p-4 gap-3 justify-content-center align-items-start"
              >
                <div className="avatar">
                  <img
                    src="/Images/User Pic.png"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="user-data">
                  <div className="title-data d-flex justify-content-between align-items-start">
                    <div className="title-rate">
                      <h5 className="mb-2 text-bold">Monalisa Adrino</h5>
                      <div className="rate">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="date">
                      <span style={{ fontSize: "12px", color: "#9D9D9D" }}>
                        24 January,2023
                      </span>
                    </div>
                  </div>
                  <div className="user-comment">
                    <p style={{ fontSize: "14px", color: "#7E7E7E" }}>
                      I was a bit nervous to be buying a secondhand phone from
                      Amazon, but I couldn’t be happier with my purchase!! I
                      have a pre-paid data plan so I was worried that this phone
                      wouldn’t connect with my data plan, since the new phones
                      don’t have the physical Sim tray anymore, but couldn’t
                      have been easier! I bought an Unlocked black iPhone 14 Pro
                      Max in excellent condition and everything is PERFECT. It
                      was super easy to set up and the phone works and looks
                      great. It truly was in excellent condition. Highly
                      recommend!!!🖤
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#FAFAFA", borderRadius: "7px" }}
                className="comment mb-3 d-flex p-4 gap-3 justify-content-center align-items-start"
              >
                <div className="avatar">
                  <img
                    src="/Images/User Pic.png"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="user-data">
                  <div className="title-data d-flex justify-content-between align-items-start">
                    <div className="title-rate">
                      <h5 className="mb-2 text-bold">Monalisa Adrino</h5>
                      <div className="rate">
                        <Rating
                          name="half-rating-read"
                          defaultValue={4}
                          precision={0.5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="date">
                      <span style={{ fontSize: "12px", color: "#9D9D9D" }}>
                        24 January,2023
                      </span>
                    </div>
                  </div>
                  <div className="user-comment">
                    <p style={{ fontSize: "14px", color: "#7E7E7E" }}>
                      I was a bit nervous to be buying a secondhand phone from
                      Amazon, but I couldn’t be happier with my purchase!! I
                      have a pre-paid data plan so I was worried that this phone
                      wouldn’t connect with my data plan, since the new phones
                      don’t have the physical Sim tray anymore, but couldn’t
                      have been easier! I bought an Unlocked black iPhone 14 Pro
                      Max in excellent condition and everything is PERFECT. It
                      was super easy to set up and the phone works and looks
                      great. It truly was in excellent condition. Highly
                      recommend!!!🖤
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="related-product text-center py-5">
              <h3 className="mb-5 ms-4">Related Product</h3>
              <div className="one-product d-flex justify-content-center align-items-center flex-wrap gap-4">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
