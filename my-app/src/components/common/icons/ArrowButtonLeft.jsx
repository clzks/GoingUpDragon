import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";

const ArrowButtonLeft = ( {scrollLeft} ) => {
  return (
    <StyledArrowButton onClick={scrollLeft}>
      <FaChevronLeft />
    </StyledArrowButton>
  );
};

export default ArrowButtonLeft;

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
