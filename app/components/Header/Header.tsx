import React from "react";
import Image from "next/image";
import { logoimg, avatararricn, avataricn, bell, menu } from "@/app/lib/lib";
import "../../styles/componentStyles.scss";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-container">
          <Image layout="responsive" src={menu} alt="logo" />
          {/* <Image layout="responsive" src={logoimg} alt="logo" /> */}
        </div>
        <div className="header-user-container">
          <a href="">Docs</a> <Image src={bell} alt="bell-icon" />
          <Image src={avataricn} alt="avatar" className="header-avatar" />
          <div className="user-icon-avatar">
            <h6>Adedeji</h6>
            <Image src={avatararricn} alt="dropdown" />
          </div>
        </div>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
