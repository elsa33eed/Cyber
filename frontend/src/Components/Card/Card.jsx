import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Blackbutton from "../Buttons/BlackButton/Blackbutton";

export default function Card() {
  return (
    <>
      <div
        className="card-item p-3"
        style={{
          width: "250px",
          borderRadius: "5px",
          backgroundColor: "#f6f6f6",
        }}
      >
        <div className="icon text-end">
          <FavoriteBorderOutlinedIcon
            sx={{ cursor: "pointer" }}
          ></FavoriteBorderOutlinedIcon>
        </div>
        <div className="img py-4">
          <img
            src="/Images/Iphone14shop.png"
            className="img-fluid"
            alt="Product"
          />
        </div>
        <div className="text-des" style={{ fontSize: "14px" }}>
          <h6>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</h6>
        </div>
        <div className="price">
          <h2>$900</h2>
        </div>
        <div className="button">
          <Blackbutton>Buy Now</Blackbutton>
        </div>
      </div>
    </>
  );
}
