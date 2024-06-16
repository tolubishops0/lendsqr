import React from "react";
import Image from "next/image";
import { logoimg, signinimg } from "../lib/lib";

const SignIn = () => {
  return (
    <div>
      <div>
        <Image src={logoimg} alt="logo" />{" "}
      </div>
    </div>
  );
};

export default SignIn;
