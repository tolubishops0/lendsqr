"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  sworgicn,
  arrdownicn,
  dashbrdicn,
  cutomersFeature,
  businessFeatures,
  settings,
} from "@/app/lib/lib";
import "../../styles/componentStyles.scss";

const SideBarList = () => {
  const [activeNav, setActiveNav] = useState<string>("Users");
  const [toggleCustomerSubList, setToggleCustomerSubList] =
    useState<boolean>(false);
  const [toggleBusinessSubList, setTogleBusinessSubList] =
    useState<boolean>(false);
  const handleCustomerSubListToggle = () => {
    setToggleCustomerSubList(!toggleCustomerSubList);
  };
  const handleBusinessSubListToggle = () => {
    setTogleBusinessSubList(!toggleBusinessSubList);
  };

  const ActiveBar = () => {
    return <div className="active-bar"></div>;
  };

  return (
    <div className="sidebar-list-container">
      <div className="sidebar-headers">
        <div className="sidebar-header-main">
          <Image src={sworgicn} alt="switch-org-icon" />
          <span>Switch Organization</span>
          <Image src={arrdownicn} alt="switch-org-icon" />
        </div>
        <div className="sidebar-header-main dashboard-container ">
          <Image src={dashbrdicn} alt="Dashboard-icon" />
          <span>Dashboard</span>
        </div>
      </div>
      <div
        onClick={handleCustomerSubListToggle}
        className="list-title">
        <span>CUSTOMER</span>
        <Image className="arr-icn" src={arrdownicn} alt="switch-org-icon" />
      </div>
      {toggleCustomerSubList && (
        <div className="sidebar-sublist-sm ">
          <ul className="">
            {cutomersFeature.map((item, index) => (
              <li
                onClick={() => setActiveNav(item.label)}
                key={index}
                className={`sidebar-header-main  ${
                  activeNav === item.label
                    ? "active-nav"
                    : "dashboard-container "
                } `}>
                <div className="list-item">
                  <Image src={item.icon} alt="Dashboard-icon" />
                  <span>{item.label}</span>
                </div>
                {activeNav === item.label && <ActiveBar />}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="sidebar-sublist-lg">
        {cutomersFeature.map((item, index) => (
          <li
            onClick={() => setActiveNav(item.label)}
            key={index}
            className={`sidebar-header-main  ${
              activeNav === item.label ? "active-nav" : "dashboard-container "
            } `}>
            <div className="list-item">
              <Image src={item.icon} alt="Dashboard-icon" />
              <span>{item.label}</span>
            </div>
            {activeNav === item.label && <ActiveBar />}
          </li>
        ))}
      </ul>
      <div onClick={handleBusinessSubListToggle} className=" list-title">
        <span>BUSINESSES</span>
        <Image className="arr-icn" src={arrdownicn} alt="switch-org-icon" />
      </div>

      {toggleBusinessSubList && (
        <div className="sidebar-sublist-sm">
          <ul className="">
            {businessFeatures.map((item, index) => (
              <li
                onClick={() => setActiveNav(item.label)}
                key={index}
                className={`sidebar-header-main  ${
                  activeNav === item.label
                    ? "active-nav"
                    : "dashboard-container "
                } `}>
                <div className="list-item">
                  <Image src={item.icon} alt="Dashboard-icon" />
                  <span>{item.label}</span>
                </div>
                {activeNav === item.label && <ActiveBar />}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="sidebar-sublist-lg">
        {businessFeatures.map((item, index) => (
          <li
            onClick={() => setActiveNav(item.label)}
            key={index}
            className={`sidebar-header-main  ${
              activeNav === item.label ? "active-nav" : "dashboard-container "
            } `}>
            <div className="list-item">
              <Image src={item.icon} alt="Dashboard-icon" />
              <span>{item.label}</span>
            </div>
            {activeNav === item.label && <ActiveBar />}
          </li>
        ))}
      </ul>

      <div className=" list-title">
        <span>SETTINGS</span>
      </div>
      <ul>
        {settings.map((item, index) => (
          <li
            onClick={() => setActiveNav(item.label)}
            key={index}
            className={`sidebar-header-main  ${
              activeNav === item.label ? "active-nav" : "dashboard-container "
            } `}>
            <div className="list-item">
              <Image src={item.icon} alt="Dashboard-icon" />
              <span>{item.label}</span>
            </div>
            {activeNav === item.label && <ActiveBar />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarList;
