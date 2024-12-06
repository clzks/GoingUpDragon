import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const SearchPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 이전 페이지로 이동
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

    // 페이지 버튼들을 동적으로 계산
    const getPaginationButtons = () => {
      const buttons = [];
      const maxButtons = 5;
      const sideButtons = 1;
  
      if (totalPages <= maxButtons) {
        for (let i = 1; i <= totalPages; i++) {
          buttons.push(i);
        }
      } else if (currentPage <= sideButtons + 2) {
        for (let i = 1; i <= 4; i++) {
          buttons.push(i);
        }
        buttons.push("...");
        buttons.push(totalPages);
      } else if (currentPage >= totalPages - (sideButtons + 1)) {
        buttons.push(1);
        buttons.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          buttons.push(i);
        }
      } else {
        buttons.push(1);
        buttons.push("...");
        for (
          let i = currentPage - sideButtons;
          i <= currentPage + sideButtons;
          i++
        ) {
          buttons.push(i);
        }
        buttons.push("...");
        buttons.push(totalPages);
      }
  
      return buttons;
    };
  
    const handlePageChange = (page) => {
      if (typeof page === "number" && page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

  return (
    <PaginationContainer>
      {/* 이전 버튼 */}
      <NavButton onClick={handlePrevPage} disabled={currentPage === 1}>
        <FaChevronLeft></FaChevronLeft>
      </NavButton>

      {/* 페이지 버튼 */}
      {getPaginationButtons().map((page, index) => (
        <PageButton
          key={index}
          onClick={() => handlePageChange(page)}
          isActive={currentPage === page}
          isEllipsis={page === "..."}>
          {page}
        </PageButton>
      ))}

      {/* 다음 버튼 */}
      <NavButton onClick={handleNextPage} disabled={currentPage === totalPages}>
        <FaChevronRight></FaChevronRight>
      </NavButton>
    </PaginationContainer>
  );
};
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? "#7CD0D5" : "#fff")};
  color: ${({ isActive, isEllipsis }) =>
    isActive ? "#fff" : isEllipsis ? "#000" : "#000"};
  border: ${({ isEllipsis }) => (isEllipsis ? "none" : "1px solid #ddd")};
  padding: 8px 12px;
  margin: 0 5px;
  cursor: ${({ isEllipsis }) => (isEllipsis ? "default" : "pointer")};
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? "#5aa1a4" : "#f5f5f5"};
    color: #000;
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #aaa;
    cursor: not-allowed;
  }
`;

const NavButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid #ddd;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    color: #000;
  }
  &:disabled {
    background-color: #e0e0e0;
    color: #aaa;
    cursor: not-allowed;
  }
`;

export default SearchPagination;
