"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { logoimg, avatararricn, avataricn, bell, menu } from "@/app/lib/lib";
import "../../styles/componentStyles.scss";
import SearchBar from "../SearchBar";
import { SideBarProps } from "@/app/types/type";

const Header = ({ handleToggleSidebar, toggleSideBar }: SideBarProps) => {
  return (
    <header
      className="header">
      <div className="header-inner">
        <div className="header-container">
          <div
            className="header-logo-container-sm  "
            onClick={handleToggleSidebar}>
            {toggleSideBar ? (
              <div className="header-logo-container">
                <Image layout="responsive" src={logoimg} alt="logo" />
              </div>
            ) : (
              <div className="header-menu-container">
                <Image layout="responsive" src={menu} alt="logo" />
              </div>
            )}
          </div>
          <div className="header-logo-container-lg">
            <Image layout="resposive" src={logoimg} alt="logo" />
          </div>
          <div className="header-searchbar-lg">
            <SearchBar />
          </div>
          <div className="header-user-container">
            <a href="">Docs</a>{" "}
            <Image src={bell} alt="bell-icon" className="header-bell-icon" />
            <Image
              src={avataricn}
              alt="avatar"
              className="header-icons header-avatar"
            />
            <div className="user-icon-avatar">
              <h6 className="header-user-name">Adedeji</h6>
              <Image src={avatararricn} alt="dropdown" />
            </div>
          </div>
        </div>
        <div className="header-searchbar-sm">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
