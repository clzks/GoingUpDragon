import React from "react";
import styled from "styled-components";
import CourseThumnail from "./CourseThumnail";
import { Container } from "react-bootstrap";
import RatingStar from "../../common/icons/RatingStar";
import { FaUser } from "react-icons/fa";
import SharpTagComponent from "../../common/utilities/tag/SharpTagComponent";

const DetailCourseBanner = ({ lectureData, enrollmentData }) => {
  const { mainCategory, secondaryCategory, title, keyPoint, tags } =
    lectureData;
  const { instructor, rating, reviews, students } = enrollmentData;

  const reviewText = ` 수강평 ${reviews.toLocaleString()}개`;
  const studentText = ` 수강생 ${students.toLocaleString()}명`; // 천 단위로 , 추가를 위해 toLocaleString 사용

  return (
    <StyledBannerBackground>
      <StyledBannerContainer>
        <CourseThumnail></CourseThumnail>
        <StyledCategoryTextContainer>
          <StyledCategoryText>{mainCategory}</StyledCategoryText>/
          <StyledCategoryText>{secondaryCategory}</StyledCategoryText>
        </StyledCategoryTextContainer>
        <StyledBannerTitle>{title}</StyledBannerTitle>
        <StyledBannerKeyPoint>{keyPoint}</StyledBannerKeyPoint>
        <StyledEnrollmentContainer>
          <RatingStar></RatingStar>
          <StyledEnrollmentText>{rating}</StyledEnrollmentText>
          <StyledReviewText>{reviewText}</StyledReviewText>
          <StyledEnrollmentText>{studentText}</StyledEnrollmentText>
        </StyledEnrollmentContainer>
        <StyledEnrollmentContainer>
          <FaUser></FaUser>
          <StyledReviewText>{instructor}</StyledReviewText>
        </StyledEnrollmentContainer>
        <SharpTagComponent tags = {tags}></SharpTagComponent>
      </StyledBannerContainer>
    </StyledBannerBackground>
  );
};

const StyledBannerBackground = styled.div`
  background-color: black;
  min-height: 100px;
  height: auto;
  position: relative;
  color: white;
`;

const StyledBannerContainer = styled(Container)`
  flex-direction: column;
  display: flex;
  padding-bottom : 30px;
`;

const StyledCategoryTextContainer = styled.button`
  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 제거 */
  margin-top: 60px;
  display: flex;
  padding-left: 45px; /* 왼쪽 여백 */
`;

const StyledCategoryText = styled.span`
  color: gray;
  font-size: 20px;
  text-decoration: underline; /* 테스트 밑줄 */
  text-underline-offset: 4px; /* 간격 설정 */
  padding-right: 5px;
  padding-left: 5px;
`;

const StyledBannerText = styled.span`
  margin-left: 50px;
  margin-top: 20px;
  justify-content: flex-start; /* 왼쪽 정렬 */
`;

const StyledBannerTitle = styled(StyledBannerText)`
  font-size: 40px;
  width: 640px; /* 컨테이너 너비 */
  overflow-wrap: break-word; /* 단어를 강제로 줄바꿈 */
  word-break: keep-all; /* 띄어쓰기가 없는 단어는 한 줄에 유지 */
`;

const StyledBannerKeyPoint = styled(StyledBannerText)`
  font-size: 20px;
  width: 640px;
  overflow-wrap: break-word; /* 단어를 강제로 줄바꿈 */
  word-break: keep-all; /* 띄어쓰기가 없는 단어는 한 줄에 유지 */
  color: gray;
`;

const StyledEnrollmentContainer = styled.div`
  padding-left: 50px; /* 왼쪽 여백 */
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

const StyledEnrollmentText = styled.span`
  font-size: 20px;
  padding-left: 8px;
`;

const StyledReviewText = styled.button`
  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 제거 */
  padding-left: 10px;
  text-decoration: underline; /* 테스트 밑줄 */
  text-underline-offset: 3px; /* 간격 설정 */
  color: white;
`;

export default DetailCourseBanner;
