"use client";

import React, { useState } from "react";
import Image from "next/image";
import { logoimg, signinimg } from "../../lib/lib";
import style from "../../styles/auth.module.scss";
import InputField from "../InputField";
import Button from "../Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormValidation = () => {
    let valid = true;
    const checkError = { email: "", password: "" };
    if (!email) {
      checkError.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      checkError.email = "Email is invalid.";
      valid = false;
    }
    if (!password) {
      checkError.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      checkError.password = "Password must be more than 5 characters.";
      valid = false;
    }

    setError(checkError);
    return valid;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleFormValidation()) {
      console.log("form submitted");
    }
  };

  return (
    <div className={style.signin}>
      <main className={style.signin_main}>
        <div className={style.signin_main_left}>
          <div className={style.signin_logocont}>
            <Image className={style.signin_logoimg} src={logoimg} alt="logo" />
          </div>
          <div className={style.signin_leftCont}>
            <Image src={signinimg} alt="signinimg" layout="responsive" />
          </div>
        </div>

        <div className={style.signin_rightCont}>
          <div>
            <h1 className={style.signin_rightCont_header}>Welcome!</h1>
            <p className={style.signin_rightCont_text}>
              Enter details to login.
            </p>
          </div>
          <form
            className={style.signin_rightCont_inputCont}
            onSubmit={handleFormSubmit}>
            <InputField
              placeholder="Email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              error={error.email}
            />
            {error.email && <p className={style.errorText}>{error.email}</p>}
            <InputField
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={error.password}
            />
            {error.password && (
              <p className={style.errorText}>{error.password}</p>
            )}
            <p className={style.signin_rightCont_inputCont_forgotPassword}>
              Forgot password?
            </p>
            <Button text="LOG IN" className="button-signup" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
