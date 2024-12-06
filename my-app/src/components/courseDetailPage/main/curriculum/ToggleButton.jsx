// components/courseDetailPage/main/curriculum/ToggleButton.jsx
import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const ToggleButton = ({ onClick, isExpanded }) => {
  return (
    <StyledToggleButton onClick={onClick}>
      {isExpanded ? (
        <>
          <FaChevronUp></FaChevronUp>
          <span> 모두 접기</span>
        </>
      ) : (
        <>
          <FaChevronDown></FaChevronDown>
          <span> 모두 펼치기</span>
        </>
      )}
    </StyledToggleButton>
  );
};

const StyledToggleButton = styled.button`
  position: absolute;
  right: 0;
  top: 40px;

  height: 50px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
`;

export default ToggleButton;
