import React from "react";
import { Link } from "react-router-dom";
import "./Blackbutton.css";

export default function Blackbutton(props) {
  return (
    <Link to={props.link}>
      <button className="btn-black mb-5">{props.children}</button>
    </Link>
  );
}
