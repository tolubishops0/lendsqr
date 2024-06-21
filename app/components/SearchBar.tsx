"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { searchicon } from "../lib/lib";
import { DataDetails } from "@/app/types/type";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [dataList, setDataList] = useState<DataDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<DataDetails[]>([]);
  const [userId, setUserId] = useState<number>();
  const [isSearchTerm, setIsSearchTerm] = useState<boolean>(false);

  useEffect(() => {
    const dataString = localStorage.getItem("dashboardData");
    if (dataString) {
      const data = JSON.parse(dataString) as DataDetails[];
      setDataList(data);
    } else {
      setDataList([]);
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = dataList.filter((data) =>
        data?.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  }, [searchTerm, dataList]);

  useEffect(() => {
    if (searchTerm === "") {
      setIsSearchTerm(false);
    }
  }, [searchTerm]);

  const handleSearch = (item: DataDetails) => {
    setSearchTerm(item.firstName.toLowerCase());
    setUserId(item.id);
    setIsSearchTerm(true);
  };
  
  const handleRouting = (e: any): void => {
    e.preventDefault();
    if (pathname.includes("user")) {
      router.push(`/user/${userId}`);
    } else {
      router.push(`/user/${userId}`);
    }
  };

  return (
    <form className="search-bar" onSubmit={(e) => handleRouting(e)}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for anything"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="button-searchbar"
        aria-label="Search button">
        <Image src={searchicon} alt="search-button" />
      </button>

      {filteredData.length > 0 && !isSearchTerm && (
        <ul className="autocomplete-list">
          {filteredData.map((item, index) => (
            <li
              key={index}
              className="autocomplete-item"
              onClick={() => handleSearch(item)}>
              {item.firstName}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
