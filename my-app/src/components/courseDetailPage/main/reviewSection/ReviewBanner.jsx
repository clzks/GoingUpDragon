import React from "react";
import styled from "styled-components";
import RatingStarList from "../../../common/icons/RatingStarList";

const ReviewBanner = () => {
  const rating = 4.8;
  const reviewCount = 113;

  return (
    <StyledBanner>
      <StyledRankText>{rating}</StyledRankText>
      <StyledRatingStarPanel>
        <RatingStarList rating={rating} size={"48px"}></RatingStarList>
      </StyledRatingStarPanel>
      <StyledCountPanel>{reviewCount}개의 수강평</StyledCountPanel>
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
