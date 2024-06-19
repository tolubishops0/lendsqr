"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import Users from "../components/User/User";
import "../styles/globals.scss";

const Dashboard = () => {
  const [toggleSideBar, setTogleSideBar] = useState<boolean>(false);
  const handleToggleSidebar = (): void => {
    setTogleSideBar(!toggleSideBar);
  };

 

  return (
    <div className="grid_container">
      <Header
        toggleSideBar={toggleSideBar}
        handleToggleSidebar={handleToggleSidebar}
      />
      <SideBar
        toggleSideBar={toggleSideBar}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Users />
    </div>
  );
};

export default Dashboard;
