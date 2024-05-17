import React from "react";
import "./footer.css";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section
        className="footer py-5"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <div className="container">
          <div className="content ">
            <div className="row">
              <div className="cyber-content py-4 col-12 col-md-4 text-center text-md-start ">
                <img
                  src="/Images/Logo/color-White.png"
                  className="img-fluid mb-4"
                  alt="Logo"
                />
                <p style={{ maxWidth: "500px" }}>
                  We are a residential interior design firm located in Portland.
                  Our boutique-studio offers more than
                </p>
              </div>
              <div className="services py-4 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                <ul>
                  <h5>Services</h5>
                  <li>Bonus program</li>
                  <li>Gift cards</li>
                  <li>Credit and payment</li>
                  <li>service contacts</li>
                  <li>Non-cash account</li>
                  <li>Payment</li>
                </ul>
              </div>
              <div className="Assistance py-4 col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                <ul>
                  <h6>Assistance to the buyer</h6>
                  <li>Find an order</li>
                  <li>Terms of delivery</li>
                  <li>Exchange and return of goods</li>
                  <li>Guarantee</li>
                  <li>Frequently asked questions</li>
                  <li>Terms of use of the site</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social-links d-flex justify-content-center justify-content-md-start gap-5">
            <Link to="#">
              <XIcon></XIcon>
            </Link>
            <Link to="#">
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </Link>
            <Link to="#">
              <InstagramIcon></InstagramIcon>
            </Link>
            <Link to="#">
              <YouTubeIcon></YouTubeIcon>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
