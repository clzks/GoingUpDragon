import React from "react";
import styled from "styled-components";
import CourseThumnail from "./CourseThumnail";
import { Container } from "react-bootstrap";

const DetailCourseBanner = ({ lectureData, enrollmentData }) => {
  const { mainCategory, secondaryCategory, title, keyPoint, tags } =
    lectureData;
  const { instructor, rating, reviews, students } = enrollmentData;

  return (
    <div>
      <StyledBanner>
        <CourseThumnail></CourseThumnail>
        <StyledCategoryText>
          {mainCategory} / {secondaryCategory}
        </StyledCategoryText>
        <StyledBannerText>ㅇㅇ</StyledBannerText>
        <StyledBannerText>ㅇㅇ</StyledBannerText>
      </StyledBanner>
    </div>
  );
};

const StyledBanner = styled(Container)`
  min-height: 900px;
  position: relative;
  flex-direction: column;
  color: white;
`;

const StyledBannerText = styled.span`
  justify-content: flex-start; /* 왼쪽 정렬 */
  padding-left: 100px; /* 왼쪽 여백 */
  margin-top: 20px;
`;

const StyledCategoryText = styled(StyledBannerText)`
  margin-top: 80px;
  color: gray;
  font-size: 30px;
`;

const StyledBannerTitle = styled(StyledBannerText)`
  margin-top: 150px;
`;

export default DetailCourseBanner;
