"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  sworgicn,
  arrdownicn,
  dashbrdicn,
  cutomersFeature,
  businessFeatures,
  settings,
  systemicn,
  signouticn,
  divericn,
} from "@/app/lib/lib";
import { SiderBarListProps } from "@/app/types/type";

import "../../styles/componentStyles.scss";

const SideBarList = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [updateSideBarList, setUpdateSodebarlist] = useState<
    SiderBarListProps[] | null
  >(settings);

  const settingLastTab = {
    label: "System Messages",
    icon: systemicn,
  };

  useEffect(() => {
    if (pathname.includes("user")) {
      setUpdateSodebarlist([...settings, settingLastTab]);
    } else {
      setUpdateSodebarlist(settings);
    }
  }, [pathname]);

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

  const handleLogout = () => {
    router.push("/");
    localStorage.removeItem('dashboardData');
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
      <div onClick={handleCustomerSubListToggle} className="list-title">
        <span>CUSTOMERS</span>
        <Image className="arr-icn" src={arrdownicn} alt="switch-org-icon" />
      </div>

      

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
        {updateSideBarList?.map((item, index) => (
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

      {pathname.includes("user") && (
        <div className="logout-container">
          <Image src={divericn} alt="divider-icon" />
          <div
            onClick={handleLogout}
            className="logout-tab">
            <Image src={signouticn} alt="divider-icon" />
            <span>Logout</span>
          </div>
          <span className="version">v1.2.0</span>
        </div>
      )}
    </div>
  );
};

export default SideBarList;
