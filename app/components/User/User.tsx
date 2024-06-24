"use client";
import React, { useState, useEffect } from "react";
import "../../styles/componentStyles.scss";
import Card from "../Card";
import Table from "../Table";
import { DataDetails } from "@/app/types/type";

const User = () => {
  const [dataList, setDataList] = useState<DataDetails[]>([]);

  useEffect(() => {
    const dataString = localStorage.getItem("dashboardData");
    if (dataString) {
      const data = JSON.parse(dataString) as DataDetails[];
      setDataList(data);
    } else {
      setDataList([]);
    }
  }, []);

  return (
    <main className="body">
      <div className="body-container">
        <div className="page-title">
          <h3 className="page-title-header">Users</h3>
        </div>
        <Card />
        <Table dataList={dataList} />
      </div>
    </main>
  );
};

export default User;
