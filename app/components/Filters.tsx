"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { FiltersProps } from "../types/type";
import { parseISO, format } from "date-fns";
import "../styles/componentStyles.scss";
import { DataDetails } from "../types/type";
import { arrdownblue, calendar } from "../lib/lib";

interface DataProps {
  dataList: DataDetails[];
  handleFilterChange: FiltersProps["handleFilterChange"];
  toggleFilter: boolean;
  setToglefilter: Dispatch<SetStateAction<boolean>>;
}

const Filters = ({
  handleFilterChange,
  dataList,
  setToglefilter,
}: DataProps) => {
  const initialFilters = {
    name: "",
    email: "",
    organization: "",
    date: "",
    status: "",
    phoneNumber: "",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [orgs, setOrgs] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);

  useEffect(() => {
    const extractedOr = Array.from(
      new Set(dataList.map((item) => item.company))
    );
    const extractedStatus = Array.from(
      new Set(dataList.map((item) => item.status))
    );
    setOrgs(extractedOr);
    setStatus(extractedStatus);
  }, [dataList]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  console.log(filters, "state");

  const handleFilterClick = () => {
    setToglefilter(false);
    const filteredPhoneNumber = filters.phoneNumber.startsWith("0")
      ? filters.phoneNumber.substring(1)
      : filters.phoneNumber;

    handleFilterChange({
      ...filters,
      phoneNumber: filteredPhoneNumber,
    });
  };

  const handleResetClick = () => {
    setFilters(initialFilters);
    handleFilterChange(initialFilters);
  };

  return (
    <div className="filters">
      <div className="input-container">
        <label className="table-header-content">Organization</label>
        <select
          name="organization"
          value={filters.organization}
          onChange={handleChange}
          className="input-filters custom-dropdown">
          <option
            value=""
            className="select-paceholder"
            selected
            disabled
            hidden>
            Select
          </option>
          {orgs.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>{" "}
      <div className="input-container">
        <label className="table-header-content">username</label>
        <input
          type="text"
          name="name"
          placeholder="username"
          value={filters.name}
          onChange={handleChange}
          className="input-filters"
        />
      </div>
      <div className="input-container">
        <label className="table-header-content">email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={filters.email}
          onChange={handleChange}
          className="input-filters"
        />
      </div>
      <div className="input-container calenar">
        <label className="table-header-content">date</label>
        {filters.date ? (
          <>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={filters.date}
              onChange={handleChange}
              className="input-filters custom-calendar"
            />
            <p className="date-placeholder ">{filters.date}</p>
          </>
        ) : (
          <>
            <input
              type="date"
              name="date"
              placeholder="Date"
              onChange={handleChange}
              className="input-filters custom-calendar calenar"
            />
            <p className="date-placeholder {">date</p>
          </>
        )}
      </div>
      <div className="input-container">
        <label className="table-header-content"> phone number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={filters.phoneNumber}
          onChange={handleChange}
          className="input-filters"
        />
      </div>
      <div className="input-container">
        <label className="table-header-content"> status</label>
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="input-filters custom-dropdown">
          <option value="" disabled selected hidden>
            Select
          </option>
          {status.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-buttons-container">
        <button className="filter-buttons reset" onClick={handleResetClick}>
          Reset
        </button>
        <button className="filter-buttons filter" onClick={handleFilterClick}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
