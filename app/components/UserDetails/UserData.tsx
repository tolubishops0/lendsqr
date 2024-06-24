"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { backarrow } from "@/app/lib/lib";
import "../../styles/componentStyles.scss";
import UserBankdetails from "./UserBankdetails";
import { DataDetails } from "@/app/types/type";
import UserBioData from "./UserBioData";

interface UserDataProps {
  userId: string | undefined;
}

const userData = ({ userId }: UserDataProps) => {
  const [userData, setuserData] = useState<DataDetails[]>([]);

  useEffect(() => {
    const dataString = localStorage.getItem("dashboardData");
    if (dataString && userId) {
      const data = JSON.parse(dataString) as DataDetails[];
      const userData = data.find((user) => user.id === parseInt(userId));
      if (userData) {
        setuserData([userData]);
      } else {
        setuserData([]);
      }
    } else {
      setuserData([]);
    }
  }, [userId]);

  return (
    <div className="body">
      <div className="user-data-container">
        <Link className="back-link-container" href={"/dashboard"}>
          <span className="back-link">
            <Image src={backarrow} alt="back-arrow" />
            <p className="back-link-text">Back to Users</p>
          </span>
        </Link>
        <div className="top-header-content">
          <div className="page-title">
            <h3 className="page-title-header">User</h3>
          </div>
          <div className="button-use-container">
            <button className="btn-user blacklist">Blacklist User</button>
            <button className="btn-user activate">Activate User</button>
          </div>
        </div>
        <div className="all-user-details">
          <UserBankdetails userData={userData} />
          <UserBioData userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default userData;
