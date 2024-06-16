"use client";

import React, { useState } from "react";
import Image from "next/image";
import { logoimg, signinimg } from "../../lib/lib";
import style from "../../styles/auth.module.scss";
import InputField from "../../components/InputField";
import Button from "../Button";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const [isLoadng, setIsLoading] = useState(false);

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

  console.log(isLoadng);

  const getDataList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/bad2d66d-7344-4e1f-9123-2bf7f2231b3c"
      );
      const data = await response.json();
      localStorage.setItem("dashboardData", JSON.stringify(data));
      setIsLoading(false);
      console.log(data);
      router.push("/dashboard");
    } catch (err: any) {
      setIsLoading(false);
      console.error("Error fetching data:", err.message);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleFormValidation()) {
      getDataList();
    }
  };

  return (
    <div className={style.signin}>
      <div className={style.signin_logocontainer}>
        <Image layout="respoonsive" src={logoimg} alt="logo" />
      </div>
      <main className={style.signin_maincontainer}>
        <div className={style.signin_maincontainer_imgcontainer}>
          <Image
            src={signinimg}
            className={style.signin_maincontainer_imgcontainer_image}
            alt="signin-img"
            layout="responsive"
          />
        </div>

        <section className={style.signin_maincontainer_formsection}>
          <div
            className={style.signin_maincontainer_formsection_headercontainer}>
            <h1
              className={
                style.signin_maincontainer_formsection_headercontainer_header
              }>
              Welcome!
            </h1>
            <p
              className={
                style.signin_maincontainer_formsection_headercontainer_text
              }>
              Enter details to login.
            </p>
          </div>
          <form
            className={style.signin_maincontainer_formsection_formarea}
            onSubmit={handleFormSubmit}>
            <InputField
              placeholder="Email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              error={error.email}
            />
            {error.email && (
              <span
                className={
                  style.signin_maincontainer_formsection_formarea_errorText
                }>
                {error.email}
              </span>
            )}
            <InputField
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={error.password}
            />
            {error.password && (
              <span
                className={
                  style.signin_maincontainer_formsection_formarea_errorText
                }>
                {error.password}
              </span>
            )}
            <span
              className={
                style.signin_maincontainer_formsection_formarea_forgotPassword
              }>
              Forgot password?
            </span>
            <Button
              text={isLoadng ? "Loading..." : "LOG IN"}
              className="button-signup"
            />
          </form>
        </section>
      </main>

      {/* <main className={style.signin_main}>
        <div className={style.signin_main_left}>
          <div className={style.signin_logocont}>
            <Image className={style.signin_logoimg} src={logoimg} alt="logo" />
          </div>
          <div className={style.signin_leftCont}>
            <Image
              src={signinimg}
              className={style.signin_leftCont_image}
              alt="signinimg"
              layout="responsive"
            />
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
            <Button
              text={isLoadng ? "Loading..." : "LOG IN"}
              className="button-signup"
            />
          </form>
        </div>
      </main> */}
    </div>
  );
};

export default SignIn;
