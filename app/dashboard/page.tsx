"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import Users from "../components/User/User";
import "../styles/globals.scss";

const Dashboard = () => {
  const [toggleSideBar, setTogleSideBar] = useState<boolean>(true);
  const [viewportWidth, setViewportWidth] = useState<number>(10);

  const handleToggleSidebar = (): void => {
    setTogleSideBar(!toggleSideBar);
  };

  const handleResize = () => {
    setViewportWidth(window?.innerWidth);
  };

  useEffect(() => {
    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid_container">
      <Header
        toggleSideBar={toggleSideBar}
        handleToggleSidebar={handleToggleSidebar}
      />
      <SideBar
        viewportWidth={viewportWidth}
        toggleSideBar={toggleSideBar}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Users />
    </div>
  );
};

export default Dashboard;
