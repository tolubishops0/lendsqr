"use client";
import React, { useState, useEffect } from "react";
import { DataDetails } from "../types/type";
import Image from "next/image";
import {
  emptyavatatricn,
  fullstart,
  ptystart,
  line2,
  bankAcctivity,
} from "../lib/lib";

interface DataProps {
  userData: DataDetails[];
}

const UserBankdetails = ({ userData }: DataProps) => {
  const [data, setData] = useState<DataDetails | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>("General Details");

  useEffect(() => {
    if (userData) {
      setData(userData[0]);
    }
  }, [userData]);

  const handleActiveTab = (item: string) => {
    setActiveTab(item);
  };
  const ActiveBar = () => {
    return <div className="active-tab"></div>;
  };

  return (
    <div>
      <div className="userbank-container">
        <div className="userbank">
          <Image src={emptyavatatricn} alt="emptyavatatricn-icon" />
          <div className="username">
            <span className=" user-name">
              <p>{data?.firstName}</p>
              <p>{data?.lastName}</p>
            </span>
            <p className="user-id">{data?.userId}</p>
          </div>
          <Image src={line2} alt="line2-icon" />
          <div className="username">
            <p className="user-tier">User's Tier</p>
            <span>
              <Image src={fullstart} alt="star-icon" />
              <Image src={ptystart} alt="star-icon" />
              <Image src={ptystart} alt="star-icon" />
            </span>
          </div>
          <Image src={line2} alt="line2-icon" />
          <div className="username">
            <p className="balance">{data?.balance}</p>
            <span className="acct">
              {data?.accNumber}/
              {data?.bank}
            </span>
          </div>
        </div>
        <div className="user-activity">
          {bankAcctivity.map((item, index) => (
            <span
              className={`tab-lik ${item === activeTab ? "active-link " : ""}`}
              onClick={() => handleActiveTab(item)}
              key={index}>
              {item}
              {item === activeTab && <ActiveBar />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBankdetails;
