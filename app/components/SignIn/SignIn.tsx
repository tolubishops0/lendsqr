"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { logoimg, signinimg } from "../../lib/lib";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../../styles/auth.module.scss";
import InputField from "../../components/InputField";
import Button from "../Button";
import Loader from "../Loader";

const SignIn = () => {
  const router = useRouter();
  const url = "https://run.mocky.io/v3/f05513be-810c-4ed9-a942-f15b19680803";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState({ email: "", password: "" });
  const [isLoadng, setIsLoading] = useState<boolean>(false);

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

  const getDataList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response?.json();
      localStorage.setItem("dashboardData", JSON.stringify(data));
      setIsLoading(false);
      toast.success("signed in successfully");
      router.push("/dashboard");
    } catch (err: any) {
      setIsLoading(false);
      toast.error("Please try again");
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleFormValidation()) {
      getDataList();
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoadng && <Loader />}
      <div className={style.signin}>
        <div className={style.signin_logocontainer}>
          <Image layout="responsive" src={logoimg} alt="logo" />
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
              className={
                style.signin_maincontainer_formsection_headercontainer
              }>
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
              <Button text={"LOG IN"} className="button-signup" />
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default SignIn;
