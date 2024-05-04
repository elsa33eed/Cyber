import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#000000",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/Images/Logo/Color=Black.png" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginBottom: "10px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="user navbar-nav d-flex flex-row justify-content-center mb-2 mb-lg-0">
              <li className="favIcon px-2">
                <Link to="/favorite">
                  <FavoriteBorderIcon
                    sx={{ color: "#000000" }}
                  ></FavoriteBorderIcon>
                </Link>
              </li>
              <li className="cartIcon px-2">
                <Link to="/cart">
                  <ShoppingCartOutlinedIcon
                    sx={{
                      color: "#000000",
                    }}
                  ></ShoppingCartOutlinedIcon>
                </Link>
              </li>
              <li className="userIcon px-2">
                <Link to="/user">
                  <PersonOutlineOutlinedIcon
                    sx={{ color: "#000000" }}
                  ></PersonOutlineOutlinedIcon>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
