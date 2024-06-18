"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  sworgicn,
  arrdownicn,
  dashbrdicn,
  cutomersFeature,
    businessFeatures,
  settings
} from "@/app/lib/lib";
import "../../styles/componentStyles.scss";

const SideBarList = () => {
  const [activeNav, setActiveNav] = useState<string>("Users");

  return (
    <div className="sidebar-list-container">
      <div className="sidebar-headers">
        <div className="sidebar-header-main">
          <Image src={sworgicn} alt="switch-org-icon" />
          <span>Switch Organization</span>
          <Image src={arrdownicn} alt="switch-org-icon" />
        </div>
        <div className="sidebar-header-main dashboard-container">
          <Image src={dashbrdicn} alt="Dashboard-icon" />
          <span>Dashboard</span>
        </div>
      </div>
      <div className="sidebar-header-small">
        <div className="sidebar-header-main list-title">
          <span>CUSTOMER</span>
        </div>
      </div>
      <ul>
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
          </li>
        ))}
      </ul>
      <div className="sidebar-header-small">
        <div className="sidebar-header-main list-title">
          <span>BUSINESSES</span>
        </div>
      </div>
      <ul>
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
          </li>
        ))}
      </ul>

      <div className="sidebar-header-small">
        <div className="sidebar-header-main list-title">
          <span>SETTINGS</span>
        </div>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarList;
