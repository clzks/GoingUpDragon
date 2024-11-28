import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const ArrowButtonRight = ( {scrollRight} ) => {
  return (
    <StyledArrowButton onClick={scrollRight}>
      <FaChevronRight />
    </StyledArrowButton>
  );
};

export default ArrowButtonRight;

const StyledArrowButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #a9a9a9;
  color: #a9a9a9;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
  position: relative; /* 또는 absolute */
  z-index: 10; /* 숫자가 클수록 앞에 위치 */

  &:hover {
    background-color: #f0f0f0;
    border-color: #a9a9a9;
    color: #a9a9a9;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
