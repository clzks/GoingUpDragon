// GoingUpDragon/my-app/src/components/courseDetailPage/main/reviewSection/ReviewSortOption.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/common/utilities
import SortOption from "../../../common/utilities/SortOption";

const ReviewSortOption = () => {
  function handleDropdownSelect(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <StyledSortOption>
      {/* 드롭다운 1 */}
      <SortOption
        options={["정확도순", "인기순", "최신순", "평점순", "좋아요순"]}
        defaultOption="정확도순"
        onSelect={handleDropdownSelect}
      ></SortOption>
    </StyledSortOption>
  );
};

const StyledSortOption = styled.div`
  position: absolute;
  right: 100px;
  top: 40px;
`;

export default ReviewSortOption;
