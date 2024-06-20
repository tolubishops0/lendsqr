"use client";
import React, { useState, useEffect, ReactHTMLElement } from "react";
import { FiltersProps } from "../types/type";
import { parseISO, format } from "date-fns";
import "../styles/componentStyles.scss";
import InputField from "./InputField";
import { DataDetails } from "../types/type";

interface DataProps {
  dataList: DataDetails[];
  onFilterChange: FiltersProps["onFilterChange"];
}

const Filters = ({ onFilterChange, dataList }: DataProps) => {
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

  useEffect(() => {
    const extractedOr = Array.from(
      new Set(dataList.map((item) => item.company))
    );
    setOrgs(extractedOr);
  }, [dataList]);

  console.log(orgs);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterClick = () => {
    const filteredPhoneNumber = filters.phoneNumber.startsWith("0")
      ? filters.phoneNumber.substring(1)
      : filters.phoneNumber;

    const filteredDate = parseISO(filters.date);
    const formattedDate = format(filteredDate, "yyyy-MM-dd");

    onFilterChange({
      ...filters,
      phoneNumber: filteredPhoneNumber,
      date: formattedDate,
    });
  };

  const handleResetClick = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  return (
    <div className="filters">
      <div className="input-container">
        <label className="table-header-content">Organization</label>
        <select
          name="organization"
          value={filters.organization}
          onChange={handleChange}
          className="input-filters">
          <option value="" disabled selected>
            <p className="select">select</p>
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
          name="username"
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
      <div className="input-container">
        <label className="table-header-content">date</label>
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={filters.date}
          onChange={handleChange}
          className="input-filters"
        />
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
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={filters.status}
          onChange={handleChange}
          className="input-filters"
        />
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
