import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import Users from "../components/User/User";
import "../styles/globals.scss";

const Dashboard = () => {
  return (
    <div className="grid_container">
      <Header />
      {/* <SideBar />
      <Users /> */}
    </div>
  );
};

export default Dashboard;
