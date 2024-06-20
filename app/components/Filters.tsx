import React, { useState } from "react";
import { FiltersProps } from "../types/type";

const Filters = ({ onFilterChange }: FiltersProps) => {
  const initialFilters = {
    name: "",
    email: "",
    organization: "",
    date: "",
    status: "",
    phoneNumber: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    onFilterChange({
      ...filters,
      phoneNumber: filteredPhoneNumber,
    });
  };

  const handleResetClick = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={filters.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={filters.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization"
        value={filters.organization}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={filters.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={filters.status}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={filters.phoneNumber}
        onChange={handleChange}
      />
      <div className="filter-buttons">
        <button onClick={handleFilterClick}>Filter</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default Filters;
