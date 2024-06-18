import React from "react";
import Image from "next/image";
import { searchicon } from "../lib/lib";

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for anything"
      />
      <button className="button-searchbar" aria-label="Search button">
        <Image src={searchicon} alt="search-button" />
      </button>
    </form>
  );
};

export default SearchBar;
