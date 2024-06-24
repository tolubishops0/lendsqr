"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import SideBar from "@/app/components/Sidebar/SideBar";
import Header from "@/app/components/Header/Header";
import UserData from "@/app/components/UserDetails/UserData";
import "../../styles/componentStyles.scss";

const UserDetails = () => {
  const { userId } = useParams();
  const [toggleSideBar, setTogleSideBar] = useState<boolean>(false);
  const parsedUserId = Array.isArray(userId) ? userId[0] : userId;

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
      <UserData userId={parsedUserId} />
    </div>
  );
};

export default UserDetails;
