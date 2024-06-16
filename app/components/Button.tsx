import React from "react";
import { ButtonProps } from "../types/type";
import "../styles/componentStyles.scss";

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button className={`button ${className}`}>
      {text && <span> {text}</span>}
    </button>
  );
};

export default Button;
