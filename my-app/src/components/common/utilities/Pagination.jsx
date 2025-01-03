// GoingUpDragon/my-app/src/components/common/utilities/Pagination.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

const Pagination = ({ items, itemsPerPage, paginate, currentPage }) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);

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
      paginate(page);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationControls>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </PaginationButton>
        {getPaginationButtons().map((page, index) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(page)}
            isActive={currentPage === page}
            isEllipsis={page === "..."}
          >
            {page}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </PaginationButton>
      </PaginationControls>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  margin: 2rem 0;
  padding: 1rem 0;
  text-align: center;
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 1rem;
`;

const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.isActive ? "#7CD0D5" : "#fff")};
  color: ${(props) =>
    props.isActive ? "#fff" : props.isEllipsis ? "#000" : "#000"};
  border: ${(props) => (props.isEllipsis ? "none" : "1px solid #ccc")};
  cursor: ${(props) => (props.isEllipsis ? "default" : "pointer")};
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:disabled {
    background-color: #f0f0f0;
    color: #999;
    cursor: not-allowed;
  }

  &:hover:not(:disabled):not(.ellipsis) {
    background-color: ${(props) => (props.isActive ? "#5aa1a4" : "#f0f0f0")};
  }
`;

export default Pagination;
