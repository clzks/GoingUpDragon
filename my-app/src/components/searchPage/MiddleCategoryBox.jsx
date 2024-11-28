// components/searchPage/MiddleCategoryBox.jsx
import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  { id: 1, title: "전체" },
  { id: 2, title: "html" },
  { id: 3, title: "css" },
  { id: 4, title: "JavaScript" },
  { id: 5, title: "React" },
  { id: 6, title: "Java" },
  { id: 7, title: "PHP" },
  { id: 8, title: "node.js" },
];

const MiddleCategoryBox = () => {
  return (
    <OuterContainer>
      <StyledArrowButton>
        <FaChevronLeft />
      </StyledArrowButton>
      <InnerContainer>
        {categories.map((item) => (
          <CategoryItem key={item.id}>
            <CategoryIcon>{item.title}</CategoryIcon>
          </CategoryItem>
        ))}
      </InnerContainer>
      <StyledArrowButton>
        <FaChevronRight />
      </StyledArrowButton>
    </OuterContainer>
  );
};

export default MiddleCategoryBox;

// Styled Components
const OuterContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  border: 2px solid #ccc; /* 외곽선 */
  border-radius: 10px;
  padding: 10px;
  max-width: 100%; /* 전체 너비 */
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly; /* 아이템 간 균등 간격 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 100%; /* 부모 컨테이너 전체 너비 사용 */
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column; /* 아이콘 위 텍스트 정렬 */
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #e0e0e0; /* 각 아이템 경계선 */
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6f7ff; /* 호버 시 배경색 변경 */
  }
`;

const CategoryIcon = styled.div`
  font-size: 24px;
`;

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