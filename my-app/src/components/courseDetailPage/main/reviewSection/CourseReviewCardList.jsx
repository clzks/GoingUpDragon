// GoingUpDragon/my-app/src/components/courseDetailPage/main/reviewSection/CourseReviewCardList.jsx
import React, { useState } from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/common/card/ReviewCard.jsx
import ReviewCard from "../../../common/card/ReviewCard";

const CourseReviewCardList = ({ count }) => {
  const [visibleCount, setVisibleCount] = useState(5); // 처음에는 5개만 보여줌

  function handleLoadMore() {
    setVisibleCount((prev) => Math.min(prev + 5, count)); // 최대 count까지 증가
  }

  return (
    <div>
      {Array.from({ length: visibleCount }).map((_, index) => (
        <ReviewCard key={index} isMyPage={false} />
      ))}
      {visibleCount < count && ( // 모든 카드를 보여줬다면 버튼 숨기기
        <StyledButton onClick={handleLoadMore}>더보기</StyledButton>
      )}
    </div>
  );
};

const StyledButton = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1px solid #343434;
`;

export default CourseReviewCardList;
