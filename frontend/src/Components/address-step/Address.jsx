import React from "react";
import "./address.css";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

export default function Address() {
  return (
    <>
      <div className="address-info d-flex justify-content-between align-items-center mb-3">
        <div className="text">
          <div className="title d-flex mb-3 align-items-center">
            <input type="radio" name="Check" id="address-check" />
            <label htmlFor="address-check">245 Mandarah, Alexandria</label>
            <h6 className="mb-0 ms-3">Home</h6>
          </div>
          <div className="address-details">
            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            <p>(209) 555-0104</p>
          </div>
        </div>
        <div className="address-icon d-flex justify-content-center align-items-center">
          <div className="edit me-4">
            <EditIcon></EditIcon>
          </div>
          <div className="dele">
            <CloseIcon></CloseIcon>
          </div>
        </div>
      </div>
    </>
  );
}
