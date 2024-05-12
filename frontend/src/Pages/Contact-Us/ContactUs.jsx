import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import Blackbutton from "./../../Components/Buttons/BlackButton/Blackbutton";

export default function ContactUs() {
  return (
    <>
      <section className="contact-us">
        <div className="container">
          <div className="page-info py-5">
            <h2 style={{ fontWeight: "bold" }}>Contact Us</h2>
            <p style={{ color: "#717171" }}>
              Any question or remarks? Just write us a message!
            </p>
          </div>
          <div className="contact-window pb-5 ">
            <div className="row">
              <div
                className="col-12 col-md-4"
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "7px 0px 0px 7px",
                }}
              >
                <div className="contact-info ms-4 my-5 text-start">
                  <h4>Contact Information</h4>
                  <p style={{ color: "#C9C9C9", fontSize: "12px" }}>
                    24 hours Customer Services For You.
                  </p>
                </div>
                <div className="information py-5">
                  <div className="phone d-flex align-items-center text-start ms-3 gap-3 my-3">
                    <div className="icon">
                      <PhoneInTalkIcon></PhoneInTalkIcon>
                    </div>
                    <div className="number">+1012 3456 789</div>
                  </div>
                  <div className="email d-flex align-items-center text-start ms-3 gap-3 my-3">
                    <div className="icon">
                      <EmailIcon></EmailIcon>
                    </div>
                    <div className="mail">demo@gmail.com</div>
                  </div>
                  <div className="location d-flex align-items-center text-start ms-3 gap-3 my-3">
                    <div className="icon">
                      <LocationOnIcon></LocationOnIcon>
                    </div>
                    <div className="address">
                      132 Dartmouth Street Boston, Massachusetts 02156 United
                      States
                    </div>
                  </div>
                </div>
                <div className="social d-flex align-items-center gap-4 py-5">
                  <div className="facebook">
                    <Link style={{ color: "#ffffff" }}>
                      <FacebookOutlinedIcon></FacebookOutlinedIcon>
                    </Link>
                  </div>
                  <div className="X">
                    <Link style={{ color: "#ffffff" }}>
                      <XIcon></XIcon>
                    </Link>
                  </div>
                  <div className="instagram">
                    <Link style={{ color: "#ffffff" }}>
                      <InstagramIcon></InstagramIcon>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-8 d-flex justify-content-center py-5"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "0px 7px 7px 0px",
                }}
              >
                <div className="row ">
                  <div className="col-12 col-md-6">
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      variant="standard"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <TextField
                      id="standard-basic"
                      label="Last Name"
                      variant="standard"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <TextField
                      id="standard-basic"
                      label="E-mail"
                      variant="standard"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <TextField
                      id="standard-basic"
                      label="Phone Number"
                      variant="standard"
                    />
                  </div>
                  <div className="col-12 w-75 m-auto d-flex justify-content-center">
                    <TextField
                      id="standard-basic"
                      sx={{ width: "100%", marginBottom: "30px" }}
                      label="Your Message"
                      rows={4}
                      variant="standard"
                    />
                  </div>
                  <div className="col-12 btn text-end p-relative pe-5 d-flex flex-column">
                    <div className="button">
                      <Blackbutton>Send Message</Blackbutton>
                    </div>
                    <div className="image">
                      <img
                        src="/Images/letter_send 1.png"
                        className="img-fluid"
                        alt="Send Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
