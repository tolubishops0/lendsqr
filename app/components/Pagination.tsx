import React from "react";
import Image from "next/image";
import { leftarricn, rightarricn, arrdownicn } from "../lib/lib";
import "../styles/componentStyles.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  itemsPerPage: number;
  dataListLength: number;
  onPageChange: (page: number) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  dataListLength,
  itemsPerPage,
  onPageChange,
  onPrevPage,
  onNextPage,
}: PaginationProps) => {
  return (
    <div className="pagination-section">
      <div className="table-info">
        <p className="style-showing">Showing </p>
        <p className="style-count">
          {currentPage * itemsPerPage}
          <Image src={arrdownicn} alt="filter-icon" className="arr-icon" />
        </p>
        <p className="style-showing">out of {dataListLength}</p>
      </div>
      <div className="pagination-controls">
        <button
          className="navigate"
          onClick={onPrevPage}
          disabled={currentPage === 1}>
          <Image src={leftarricn} alt="previous" className="arr-icon" />
        </button>
        {[...Array(1, 2, 3, 499, 500)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={
              currentPage === index + 1 ? "active-page" : "inactive-page"
            }>
            {index + 1}
          </button>
        ))}
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="navigate">
          <Image src={rightarricn} alt="next" className="arr-icon" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
