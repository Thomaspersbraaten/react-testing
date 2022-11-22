import React from "react";
import defaultImage from "../images/example.png";

function DefaultProfilePic(props) {
  return <img src={defaultImage} alt={props.alt}></img>;
}

export default DefaultProfilePic;
