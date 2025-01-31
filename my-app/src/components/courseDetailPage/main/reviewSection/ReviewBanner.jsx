// GoingUpDragon/my-app/src/components/courseDetailPage/main/reviewSection/ReviewBanner.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components
import RatingStarList from "../../../common/icons/RatingStarList";

const ReviewBanner = ({ reviewData }) => {
  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0; // 리뷰가 없으면 0 반환
    const sum = reviews.reduce((acc, review) => acc + review.rate, 0);
    return (sum / reviews.length).toFixed(1); // 소수점 1자리까지 반환
  };

  return (
    <StyledBanner>
      <StyledRankText>{calculateAverageRating(reviewData)}</StyledRankText>
      <StyledRatingStarPanel>
        <RatingStarList
          rating={calculateAverageRating(reviewData)}
          size={"48px"}
        ></RatingStarList>
      </StyledRatingStarPanel>
      <StyledCountPanel>{reviewData.length}개의 수강평</StyledCountPanel>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  width: 90%;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  margin-top: 100px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  justify-content: center;
  align-items: center;
`;

const StyledRankText = styled.div`
  font-size: 60px;
  margin-bottom: 10px;
`;

const StyledRatingStarPanel = styled.div`
  margin-bottom: 30px;
`;

const StyledCountPanel = styled.div`
  color: gray;
`;

export default ReviewBanner;
