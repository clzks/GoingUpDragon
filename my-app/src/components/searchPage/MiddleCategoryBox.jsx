// GoingUpDragon/my-app/src/components/searchPage/MiddleCategoryBox.jsx
import React, { useState, useRef } from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components
import ArrowButtonLeft from "../common/icons/ArrowButtonLeft";
import ArrowButtonRight from "../common/icons/ArrowButtonRight";

const categories = [
  { id: 1, title: "전체" },
  { id: 2, title: "html" },
  { id: 3, title: "css" },
  { id: 4, title: "JavaScript" },
  { id: 5, title: "React" },
  { id: 6, title: "Java" },
  { id: 7, title: "PHP" },
  { id: 8, title: "node.js" },
  { id: 9, title: "전체" },
  { id: 10, title: "html" },
  { id: 11, title: "css" },
  { id: 12, title: "css" },
];

const MiddleCategoryBox = () => {
  const [selectedSkillTagId, setSelectedSkillTagId] = useState(null);
  const innerContainerRef = useRef(null); // InnerContainer ref

  // Handle CategoryItem click
  const handleCategoryClick = (id) => {
    setSelectedSkillTagId(id);
  };

  // Scroll functions to move 1 item at a time
  const scrollLeft = () => {
    if (innerContainerRef.current) {
      innerContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (innerContainerRef.current) {
      innerContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <OuterContainer>
      <ArrowButtonLeft scrollLeft={scrollLeft} />
      <InnerContainer ref={innerContainerRef}>
        {categories.map((item) => (
          <CategoryItem
            key={item.id}
            onClick={() => handleCategoryClick(item.id)}
            isSelected={selectedSkillTagId === item.id}
          >
            <CategoryIcon isSelected={selectedSkillTagId === item.id}>
              {item.title}
            </CategoryIcon>
          </CategoryItem>
        ))}
      </InnerContainer>
      <ArrowButtonRight scrollRight={scrollRight} />
    </OuterContainer>
  );
};

export default MiddleCategoryBox;

// Styled Components
const OuterContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  max-width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: hidden;
  scroll-behavior: smooth;
  white-space: nowrap; /* 항목이 줄 바꿈 되지 않도록 설정 */
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 100px; /* 각 항목의 너비를 고정 */
  max-width: 100px; /* 항목이 커지지 않도록 제한 */
  text-align: center; /* 텍스트 가운데 정렬 */
  overflow: hidden; /* 텍스트가 넘칠 경우 숨기기 */
  text-overflow: ellipsis; /* 텍스트가 넘치면 '...' 표시 */

  &:hover {
    background-color: #e6f7ff;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #e6f7ff;
    color: black;
  `}
`;

const CategoryIcon = styled.div`
  font-size: 16px; /* 텍스트 크기 조정 */
  transition: font-weight 0.3s ease;

  ${({ isSelected }) =>
    isSelected &&
    `
    font-weight: bold;
  `}
`;