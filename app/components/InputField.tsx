"use client";
import React, { useState } from "react";
import "../styles/componentStyles.scss";
import { InputFieldProps } from "../types/type";

export const InputField = ({
  placeholder,
  type,
  value,
  onChange,
}: InputFieldProps) => {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <div className="inputfield">
      {type === "password" ? (
        <>
          <input
            value={value}
            type={toggleIcon ? "text" : "password"}
            placeholder={placeholder}
            className="inutfield"
            onChange={onChange}
            role="textbox"
          />
          {placeholder === "Password" && (
            <p onClick={() => setToggleIcon(!toggleIcon)}>
              {toggleIcon ? "hide" : "show"}
            </p>
          )}
        </>
      ) : (
        <>
          <input
            value={value}
            type={type}
            placeholder={placeholder}
            className="inutfield"
            onChange={onChange}
            role="textbox"
          />
        </>
      )}
    </div>
  );
};

export default InputField;
