"use client";

import React, { useState } from "react";
import Image from "next/image";
import { dashboardTableData, filter, more } from "../lib/lib";
import { DataDetails } from "../types/type";
import { parseISO, format } from "date-fns";
import Pagination from "./Pagination";
import Filters from "./Filters";

interface DataProps {
  dataList: DataDetails[];
}

const Table = ({ dataList }: DataProps) => {
  const DateFormatter = (date: string) => {
    const parsedDate = parseISO(date?.replace(/\s+/g, ""));
    return format(parsedDate, "MMM dd, yyyy hh:mm a");
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    organization: "",
    date: "",
    status: "",
    phoneNumber: "",
  });

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newFilters: {
    name: string;
    email: string;
    organization: string;
    date: string;
    status: string;
    phoneNumber: string;
  }) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const filteredData = dataList.filter((item) => {
    console.log(item)
   
    const expectedEmail = `${item.firstName.toLowerCase()}@${item.company.toLowerCase()}.com`;

    return (
      (filters.name === "" ||
        item.firstName.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.email === "" ||
        expectedEmail.includes(filters.email.toLowerCase())) &&
      (filters.organization === "" ||
        item.company
          .toLowerCase()
          .includes(filters.organization.toLowerCase())) &&
      // (filters.date === "" ||
      //   DateFormatter(item.dateJoined) === DateFormatter(filters.date)) &&
      (filters.status === "" ||
        item.status.toLowerCase() === filters.status.toLowerCase()) &&
      (filters.phoneNumber === "" ||
        (item.phoneNumber &&
          item.phoneNumber.toString().includes(filters.phoneNumber)))
    );
  });
  const itemsPerPage = 10;
  const totalPages = Math.ceil(dataList?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
      <Filters onFilterChange={handleFilterChange} />
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
                <td>
                  {item.firstName}@{item.company.toLocaleLowerCase()}.com
                </td>
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        dataListLength={filteredData.length}
        onPageChange={handlePageClick}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

export default Table;
