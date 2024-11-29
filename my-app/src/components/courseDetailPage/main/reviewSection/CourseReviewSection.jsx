import React from "react";
import styled from "styled-components";
import ReviewSortOption from "./ReviewSortOption";
import ReviewBanner from "./ReviewBanner";

const CourseReviewSection = () => {
  return (
    <StyledReviewContainer>
      <StyledTitleText>수강평</StyledTitleText>
      <ReviewSortOption></ReviewSortOption>
      <ReviewBanner></ReviewBanner>
    </StyledReviewContainer>
  );
};

const StyledReviewContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 200px;
`;

const StyledTitleText = styled.h2`
  margin-top: 60px;
  margin-bottom: 60px;
  font-weight: 700; /* 굵은 글씨 */
`;

export default CourseReviewSection;
