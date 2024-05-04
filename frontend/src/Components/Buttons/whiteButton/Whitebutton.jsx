import React from "react";
import { Link } from "react-router-dom";
import "./whitebutton.css";

export default function Whitebutton(props) {
  return (
    <Link to={props.link}>
      <button className="btn-white mb-5">{props.children}</button>
    </Link>
  );
}
