// GoingUpDragon/my-app/src/components/mainPage/OvalButton.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

const OvalButton = ({ isActive, onClick, label }) => {
  return (
    <StyledOvalButton
      className={`tag ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </StyledOvalButton>
  );
};

const StyledOvalButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  color: #6c757d;
  font-size: 18px;
  font-weight: 300;
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  /* active 상태 스타일 */
  &.active {
    background-color: #ffffff; /* 배경색을 흰색으로 설정 */
    color: rgba(
      234,
      8,
      241,
      0.685
    ); /* 텍스트 색상을 반투명한 핑크색으로 설정 */
    border-color: rgba(
      234,
      8,
      241,
      0.685
    ); /* 테두리 색상을 반투명한 핑크색으로 설정 */
  }

  /* hover 상태 스타일 */
  &:hover {
    background-color: #e2e6ea;
  }
`;

export default OvalButton;
