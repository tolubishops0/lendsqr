"use client";

import React, { useState } from "react";
import Image from "next/image";
import { dashboardTableData, filter, more } from "../lib/lib";
import { DataDetails } from "../types/type";
import { parseISO, format } from "date-fns";
import { rightarricn, leftarricn } from "../lib/lib";
interface DataProps {
  dataList: DataDetails[];
}
const Table = ({ dataList }: DataProps) => {
  const DateFormatter = (date: string) => {
    const parsedDate = parseISO(date?.replace(/\s+/g, ""));
    return format(parsedDate, "MMM dd, yyyy hh:mm a");
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataCount, setDataCount] = useState<number>(10);
  console.log(dataCount);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(dataList?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = dataList.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setDataCount(itemsPerPage - 10);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    setDataCount(itemsPerPage + 10);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return (
          <p
            style={{
              borderRadius: "100px",
              padding: "0 0.6rem",
              textAlign: "center",
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "1.875rem",
              color: "#39cd62",
              backgroundColor: "rgba(57, 205, 98, 0.06)",
            }}>
            {status}
          </p>
        );
      case "pending":
        return (
          <p
            style={{
              borderRadius: "100px",
              padding: "0 0.6rem",
              textAlign: "center",
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30px",
              color: "#e9b200",
              backgroundColor: "rgba(233, 178, 0, 0.1)",
            }}>
            {status}
          </p>
        );

      case "blacklisted":
        return (
          <p
            style={{
              borderRadius: "100px",
              padding: "0 0.6rem",
              textAlign: "center",
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30px",
              color: "#e4033b",
              backgroundColor: "rgba(228, 3, 59, 0.1)",
            }}>
            {status}
          </p>
        );
      default:
        return (
          <p
            style={{
              borderRadius: "100px",
              padding: "0 0.6rem",
              textAlign: "center",
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30px",
              color: "#545f7d",
              backgroundColor: "rgba(84, 95, 125, 0.06)",
            }}>
            {status}
          </p>
        );
    }
  };

  return (
    <div className="table-section">
      <div className="table-data">
        <table className="table">
          <thead>
            <tr>
              {dashboardTableData.map((item, index) => (
                <th key={index} className="table-head">
                  <span className="table-header-content">
                    <p>{item}</p>
                    <Image
                      src={filter}
                      alt="filter-icon"
                      className="filter-icon"
                    />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentPageData?.map((item, index) => (
              <tr
                key={item.id}
                className={`table-data-row ${
                  index === currentPageData.length - 1 ? "last-row" : ""
                }`}>
                <td>{item.company}</td>
                <td>{item.firstName}</td>
                <td>{item.firstName}@gmail.com</td>
                <td>0{item.phoneNumber}</td>
                <td>{DateFormatter(item.dateJoined)}</td>
                <td>{handleStatusColor(item.status)}</td>
                <td>
                  <Image src={more} alt="more-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-controls">
        <button
          className="navigate"
          onClick={handlePrevPage}
          disabled={currentPage === 1}>
          <Image src={leftarricn} alt="filter-icon" className="arr-icon" />
        </button>
        {[...Array(0, 2, 3, 15, 16)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            disabled={currentPage === index + 1}
            className={currentPage === index ? "active-page" : "inactive-page"}>
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="navigate">
          <Image src={rightarricn} alt="filter-icon" className="arr-icon" />
        </button>
      </div>

      <div>
        show {Math.abs(dataCount)} of {dataList?.length}
      </div>
    </div>
  );
};

export default Table;
