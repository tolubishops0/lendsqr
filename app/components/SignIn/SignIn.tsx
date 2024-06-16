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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={style.signin}>
      <div className={style.signin_logocont}>
        <Image className={style.signin_logoimg} src={logoimg} alt="logo" />
      </div>

      <main className={style.signin_main}>
        <div className={style.signin_leftCont}>
          <Image src={signinimg} alt="signinimg" />
        </div>
        <div className={style.signin_rightCont}>
          <div>
            <h1 className={style.signin_rightCont_header}>Welcome!</h1>
            <p className={style.signin_rightCont_text}>
              Enter details to login.
            </p>
          </div>
          <form className={style.signin_rightCont_inputCont}>
            <InputField
              placeholder="Email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <InputField
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
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
