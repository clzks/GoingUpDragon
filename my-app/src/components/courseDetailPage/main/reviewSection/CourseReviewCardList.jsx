// GoingUpDragon/my-app/src/components/courseDetailPage/main/reviewSection/CourseReviewCardList.jsx
import React, { useState } from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/common/card/ReviewCard.jsx
import ReviewCard from "../../../common/card/ReviewCard";

const CourseReviewCardList = ({ reviewData }) => {
  const [visibleCount, setVisibleCount] = useState(5); // 처음에는 5개만 보여줌

  function handleLoadMore() {
    setVisibleCount((prev) => Math.min(prev + 5, reviewData.length)); // 최대 count까지 증가
  }

  return (
    <div>
      {reviewData.slice(0, visibleCount).map(
        (
          review // ✅ reviewData 전달
        ) => (
          <ReviewCard key={review.reviewId} review={review} isMyPage={false} />
        )
      )}
      {visibleCount < reviewData.length && (
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
