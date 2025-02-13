// GoingUpDragon/my-app/src/components/searchPage/MainCategoryDatas.jsx
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../apis/common/categoryApi"; // API 호출 함수 가져오기

// 외부 라이브러리
import {
  FaRegCopy,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaPhp,
  FaNode,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import styled from "styled-components";

// 아이콘 순서를 유지하는 배열
const MainCategoryDatas1 = [
  { id: 0, icon: <FaRegCopy />, label: "전체" }, // "전체"는 고정
  { id: 1, icon: <FaHtml5 />, label: "" },
  { id: 2, icon: <FaCss3Alt />, label: "" },
  { id: 3, icon: <FaJsSquare />, label: "" },
  { id: 4, icon: <FaPython />, label: "" },
  { id: 5, icon: <FaJava />, label: "" },
  { id: 6, icon: <FaPhp />, label: "" },
  { id: 7, icon: <FaNode />, label: "" },
  { id: 8, icon: <FaReact />, label: "" },
  { id: 9, icon: <FaSwift />, label: "" },
];

const MainCategoryDatas = ({ onCategorySelect, onSubCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  // 클릭된 아이콘을 추적하는 상태
  const [selectedIconId, setSelectedIconId] = useState(null);

  // API에서 카테고리 데이터 가져오기
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data); // 가져온 데이터 상태에 저장
        console.log(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadCategories();
  }, []);

  // 기존 배열에 API에서 가져온 라벨 값만 적용 (아이콘 순서 유지)
  const combinedCategories = MainCategoryDatas1.map((item, index) => ({
    ...item,
    label:
      index === 0 ? "전체" : categories[index - 1]?.categoryName || "기본값",
  }));

  // 아이콘 클릭 시 선택된 아이콘 상태 변경
  const handleIconClick = (id) => {
    setSelectedIconId(id);
    const selectedCategory = categories.find(
      (category) => category.categoryId === id
    );
    console.log("Selected Category:", selectedCategory);
    onCategorySelect(id); // 상위 카테고리 선택
    console.log("Subcategories:", selectedCategory?.subCategories);
    onSubCategorySelect(selectedCategory?.subCategories || []); // 해당 서브 카테고리 데이터 전달
  };

  return (
    <StyledStack>
      {combinedCategories.map((item) => (
        <StyledIconLabelCenter key={item.id}>
          <IconButton
            onClick={() => handleIconClick(item.id)} // 클릭 시 상태 변경
            isSelected={selectedIconId === item.id} // 선택된 아이콘인지 확인
          >
            <StyledIcon>{item.icon}</StyledIcon>
            <StyledSpanSearch>{item.label}</StyledSpanSearch>
          </IconButton>
        </StyledIconLabelCenter>
      ))}
    </StyledStack>
  );
};

export default MainCategoryDatas;

const StyledStack = styled.div`
  display: flex;
  gap: 2rem; /* 간격 1rem = 16px */
`;

const StyledIconLabelCenter = styled.div`
  display: flex;
  flex-direction: column; /* 수직 */
  align-items: center; /* 가운데 정렬 */
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  gap: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  justify-content: center; /* 수직 가운데 정렬 */
  align-items: center;
  color: #333;
  position: relative; /* 밑줄 위치를 위해 relative 설정 */

  /* 밑줄 설정 */
  &::after {
    content: "";
    position: absolute;
    bottom: -17px; /* 텍스트 바로 아래에 밑줄을 위치 */
    left: 0;
    width: 100%; /* 버튼의 전체 너비에 맞춰 밑줄 추가 */
    height: 2px; /* 밑줄 두께 */
    background-color: #333; /* 기본 밑줄 색상 */
    opacity: 0; /* 기본 상태에서는 밑줄을 보이지 않도록 */
    transition: opacity 0.3s ease; /* 부드럽게 나타나도록 설정 */
  }

  &:hover {
    color: #000; /* 호버 시 텍스트 색상 변경 */
  }

  &:hover::after {
    opacity: 1; /* 호버 시 밑줄이 나타나도록 설정 */
  }

  /* 선택된 아이콘에 대한 스타일 */
  ${({ isSelected }) =>
    isSelected &&
    `
    color: #000; /* 클릭된 아이콘은 호버 상태로 유지 */
    font-weight: bold; /* 선택된 아이콘에 대한 추가 스타일 */
    &::after {
      opacity: 1; /* 선택된 아이콘 밑줄 표시 */
    }
  `}
`;

const StyledSpanSearch = styled.span`
  font-size: 1rem;
  white-space: nowrap;
`;

const StyledIcon = styled.div`
  font-size: 2rem; /* 아이콘 크기 조정 */
`;
