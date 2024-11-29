import React from "react";
import styled from "styled-components";

const ReviewBanner = () => {
  const rank = 4;

  return (
    <StyledBanner>
      <StyledRankText></StyledRankText>
      <StyledRatingStarPanel></StyledRatingStarPanel>
      <StyledCountPanel></StyledCountPanel>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  width: 90%;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  margin-top: 100px;

  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: flex-start; /* 좌측 정렬, 필요에 따라 변경 */
`;

const StyledRankText = styled.div``;

const StyledRatingStarPanel = styled.div``;

const StyledCountPanel = styled.div``;

export default ReviewBanner;
