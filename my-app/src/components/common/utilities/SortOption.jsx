// GoingUpDragon/my-app/src/components/common/utilities/SortOption.jsx
import React, { useState } from "react";

// 외부 라이브러리
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import { FaExchangeAlt } from "react-icons/fa";

const SortOption = ({ options, defaultOption, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState(defaultOption); // 기본 선택된 아이템
  const [activeItem, setActiveItem] = useState(null); // 선택된 아이템 추적 상태

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
    setActiveItem(eventKey); // 클릭된 아이템을 활성화

    let transformedValue = eventKey; // 기본적으로 선택된 값을 유지

    // 한글 → 영문 변환
    if (eventKey === "최신순") {
      transformedValue = "latest";
    } else if (eventKey === "인기순") {
      transformedValue = "popularity";
    } else if (eventKey === "평점순") {
      transformedValue = "rating";
    } else if (eventKey === "좋아요순") {
      transformedValue = "likes";
    }

    // 부모 컴포넌트로 변환된 값 전달
    if (onSelect) {
      onSelect(transformedValue);
    }

    console.log("📌 SortOption에서 변환된 값:", transformedValue); // 값 확인
  };

  return (
    <>
      <Dropdown onSelect={handleSelect}>
        <CustomDropdownToggle id="dropdown-basic">
          {selectedItem}
          <FaExchangeAlt
            style={{ transform: "rotate(90deg)", color: "#000000" }}
          />
        </CustomDropdownToggle>

        <CustomDropdownMenu>
          {options.map((option, index) => (
            <CustomDropdownItem
              eventKey={option}
              key={index}
              isActive={activeItem === option} // 선택된 아이템에 스타일을 추가
            >
              {option}
            </CustomDropdownItem>
          ))}
        </CustomDropdownMenu>
      </Dropdown>
    </>
  );
};

export default SortOption;

// Styled-Components로 드롭다운 스타일 커스터마이징
const CustomDropdownToggle = styled(Dropdown.Toggle)`
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  border: 1px solid #edede9;

  &::after {
    background-color: #ffffff;
    display: none; /* 기본 화살표 숨기기 */
  }

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #22223b;
  }

  &:active {
    background-color: #ffffff !important; /* 클릭 시 배경색을 하얀색으로 설정 */
    color: #000000 !important; /* 클릭 시 텍스트 색상을 검정으로 설정 */
    border: 1px solid #22223b !important; /* 클릭 시 테두리 색상 설정 */
  }

  &:focus {
    background-color: #ffffff !important;
    color: #000000 !important;
    border: 1px solid #22223b !important;
    outline: none; /* 포커스 외곽선 제거 */
  }
`;

const CustomDropdownMenu = styled(Dropdown.Menu)`
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CustomDropdownItem = styled(Dropdown.Item)`
  color: #333;
  background-color: ${(props) =>
    props.isActive ? "#007bff" : "transparent"}; /* 선택된 항목에 배경색 추가 */
  color: ${(props) =>
    props.isActive ? "#fff" : "#333"}; /* 선택된 항목에 글자색 변경 */

  &:hover {
    background-color: #f8f9fa;
    color: #000000;
  }

  &.active {
    background-color: #ffffff !important; /* 클릭 후 배경색을 하얀색으로 */
    color: #000000 !important; /* 글자색을 검정으로 */
  }

  &:focus {
    background-color: #ffffff !important;
    color: #000000 !important;
  }
`;
