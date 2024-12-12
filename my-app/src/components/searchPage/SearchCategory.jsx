// GoingUpDragon/my-app/src/components/searchPage/SearchCategory.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchCategory = ( { onClick } ) => {

  return (
    <>
      <IconButton onClick={onClick}>
      <StyledIcon></StyledIcon>
      <StyledSpanSearch>검색</StyledSpanSearch>
      </IconButton>
    </>
  );
}

export default SearchCategory;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  gap: 8px;
  height: 82px;
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
`;

const StyledSpanSearch = styled.span`
  font-size: 1rem;
  white-space: nowrap; /* 줄바꿈 방지 */
`;

const StyledIcon = styled(FaSearch)`
  font-size: 2rem; /* 아이콘 크기 조정 */
`;