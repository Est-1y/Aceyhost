import React from "react";
import { FaLocationArrow } from "react-icons/fa";


const LocationPin = ({ text }) => (
  <div className="pin">
    <FaLocationArrow className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)
export default LocationPin;
