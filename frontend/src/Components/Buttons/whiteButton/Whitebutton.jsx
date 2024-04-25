import React from "react";
import { Link } from "react-router-dom";
import "./whitebutton.css";

export default function Whitebutton(props) {
  return (
    <Link to="#">
      <button>{props.children}</button>
    </Link>
  );
}
