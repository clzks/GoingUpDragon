// GoingUpDragon/my-app/src/components/mainPage/ArrowButton.jsx
import React, { useState } from "react";

// 외부 라이브러리
import { SlArrowUp, SlArrowDown } from "react-icons/sl"; // SlArrowUp, SlArrowDown 아이콘 import
import styled from "styled-components";

const ArrowButton = ({ onClick }) => {
  const [isClick, SetClick] = useState(false);

  function handleClick() {
    SetClick((prev) => !prev);
  }

  return (
    <StyledArrowButton
      onClick={() => {
        handleClick();
        onClick && onClick(); // 여기서 onClick()은 부모에서 전달받은 prop
      }}
    >
      {isClick ? <SlArrowUp /> : <SlArrowDown />}{" "}
      {/* 안눌렀을때는 SlArrowDown 아이콘, 눌렀을 경우  SlArrowUp 아이콘 사용*/}
    </StyledArrowButton>
  );
};

const StyledArrowButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: #ffffff; /* 배경을 하얀색으로 설정 */
  border: 1px solid #a9a9a9; /* 회색 외곽선 추가 */
  color: #a9a9a9; /* 화살표 아이콘 색상을 회색으로 설정 */
  box-shadow: none; /* 그림자 제거 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f0f0; /* 마우스 오버 시 배경색을 연회색으로 변경 */
    border-color: #a9a9a9; /* 마우스 오버 시 외곽선 색상 변경 */
    color: #a9a9a9; /* 마우스 오버 시 화살표 아이콘 색상 변경 */
  }

  &:focus {
    outline: none;
    box-shadow: none; /* 포커스 시 그림자 제거 */
  }
`;

export default ArrowButton;
