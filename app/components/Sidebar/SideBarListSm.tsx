"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
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
} from "@/app/lib/lib";
import { SiderBarListProps } from "@/app/types/type";

import "../../styles/componentStyles.scss";

interface ToggleProps {
  toggleSideBar: boolean;
  handleToggleSidebar: () => void;
}
const SideBarListSm = ({ handleToggleSidebar, toggleSideBar }: ToggleProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeNav, setActiveNav] = useState<string>("Users");

  const [updateSideBarList, setUpdateSodebarlist] = useState<
    SiderBarListProps[] | null
  >(settings);
  const [toggleCustomerSubList, setToggleCustomerSubList] =
    useState<boolean>(false);
  const [toggleSettingSubList, setToggleSettingSubList] =
    useState<boolean>(false);
  const [toggleBusinessSubList, setTogleBusinessSubList] =
    useState<boolean>(false);
  const handleCustomerSubListToggle = () => {
    setToggleCustomerSubList(!toggleCustomerSubList);
  };
  const handleBusinessSubListToggle = () => {
    setTogleBusinessSubList(!toggleBusinessSubList);
  };
  const handleSettingsSubListToggle = () => {
    setToggleSettingSubList(!toggleSettingSubList);
  };
  const handleLogout = () => {
    router.push("/");
    localStorage.removeItem("dashboardData");
  };
  const handleNavLinkSelection = (item: string) => {
    if (toggleSideBar) {
      handleToggleSidebar();
    }
    setActiveNav(item);
  };

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

  return (
    <div>
      <div className="sm-sidebar-container">
        <div className="sm-sidebar-headers">
          <div className="sidebar-header">
            <Image src={sworgicn} alt="switch-org-icon" />
            <span>Switch Organization</span>
            <Image src={arrdownicn} alt="switch-org-icon" />
          </div>
          <div className="sidebar-header">
            <Image src={dashbrdicn} alt="Dashboard-icon" />
            <span>Dashboard</span>
          </div>
          <div className="side-rows">
            <div>
              <div className="sidebar-header header-toggle">
                <span onClick={handleCustomerSubListToggle}>CUSTOMER</span>
                <Image src={arrdownicn} alt="switch-org-icon" />
              </div>

              {toggleCustomerSubList && (
                <div className="sidebar-sublist-toggle">
                  <ul className="">
                    {cutomersFeature.map((item, index) => (
                      <li
                        onClick={() => handleNavLinkSelection(item.label)}
                        key={index}
                        className={`${
                          activeNav === item.label ? "active-nav" : ""
                        } `}>
                        <div className="list-item-sm">
                          <Image src={item.icon} alt="Dashboard-icon" />
                          <span>{item.label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="sidebar-header header-toggle">
                <span onClick={handleBusinessSubListToggle}>BUSINESSES</span>
                <Image src={arrdownicn} alt="switch-org-icon" />
              </div>
              {toggleBusinessSubList && (
                <div className="sidebar-sublist-toggle">
                  <ul className="">
                    {businessFeatures.map((item, index) => (
                      <li
                        onClick={() => handleNavLinkSelection(item.label)}
                        key={index}
                        className={`${
                          activeNav === item.label ? "active-nav" : ""
                        } `}>
                        <div className="list-item-sm">
                          <Image src={item.icon} alt="Dashboard-icon" />
                          <span>{item.label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="sidebar-header header-toggle">
                <span onClick={handleSettingsSubListToggle}>SETTINGS</span>
                <Image src={arrdownicn} alt="switch-org-icon" />
              </div>
              {toggleSettingSubList && (
                <div className="sidebar-sublist-toggle">
                  <ul className="">
                    {updateSideBarList?.map((item, index) => (
                      <li
                        onClick={() => handleNavLinkSelection(item.label)}
                        key={index}
                        className={`${
                          activeNav === item.label ? "active-nav" : ""
                        } `}>
                        <div className="list-item-sm">
                          <Image src={item.icon} alt="Dashboard-icon" />
                          <span>{item.label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="logout-container">
              <div onClick={handleLogout} className="sidebar-header logout">
                <Image src={signouticn} alt="divider-icon" />
                <span>Logout</span>
              </div>
              <span className="sidebar-header">v1.2.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarListSm;
