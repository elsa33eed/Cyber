import React from "react";
import { Link } from "react-router-dom";
import "./Blackbutton.css";

export default function Blackbutton(props) {
  return (
    <Link to="#">
      <button>{props.children}</button>
    </Link>
  );
}
