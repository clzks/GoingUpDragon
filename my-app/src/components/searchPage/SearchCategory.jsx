// components/searchPage/SearchCategory.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchCategory = () => {
  return (
    <StyledIconLabelCenter>
      <StyledFaSearch></StyledFaSearch>
      <StyledSpanSearch>검색</StyledSpanSearch>
    </StyledIconLabelCenter>
  );
}

export default SearchCategory;

const StyledIconLabelCenter = styled.div`
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  align-items: center; /* 가운데 정렬 */
`;

const StyledFaSearch = styled(FaSearch)`
  font-size: 24px; /* 아이콘 크기 조정 */
  margin-bottom: 8px; /* 아이콘과 텍스트 간 간격 */
`;

const StyledSpanSearch = styled.span`
  font-size: 16px;
`;