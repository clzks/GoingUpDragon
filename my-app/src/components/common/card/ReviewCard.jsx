// src/components/myPage/card/ReviewCard.jsx
import React from "react";
import styled from "styled-components";
import { FaRegThumbsUp } from "react-icons/fa";
import RatingStarList from "../icons/RatingStarList";
import LikeButton from "../utilities/LikeButton";
import ShareButton from "../utilities/ShareButton";

const ReviewCard = ({
  title = "C++ 프로그래밍",
  content = "기초부터 고급 개념까지 차근차근 설명한 강의였습니다.",
  rating = 3.6,
  date = "2023.10.15",
  likes = 7,
  isMyPage = true,
}) => {
  return (
    <CardWrapper>
      <Header>
        {isMyPage ? <></> : <ProfileCircle></ProfileCircle>}
        <LectureTitle>{title}</LectureTitle>
        <ReviewDate>{date}</ReviewDate>
      </Header>

      <RatingWrapper>
        <RatingStarList rating={rating}></RatingStarList>
        <RatingNumber>{rating}</RatingNumber>
      </RatingWrapper>

      <ReviewContent>{content}</ReviewContent>

      <Footer>
        <Recommendation>
          <LikeButton></LikeButton>
          <Likes>{likes || 0}</Likes>
          {isMyPage ? <></> : <ShareButton></ShareButton>}
        </Recommendation>
      </Footer>
    </CardWrapper>
  );
};

export default ReviewCard;

// 스타일 정의
const CardWrapper = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  margin: 0 20px;
  &:last-child {
    border-bottom: none;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LectureTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const ReviewDate = styled.span`
  font-size: 14px;
  color: #000;
  margin-left: 10px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RatingNumber = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 5px;
`;

const ReviewContent = styled.p`
  font-size: 14px;
  color: #444;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Recommendation = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;

  svg {
    margin-right: 5px;
  }
`;

const Likes = styled.span`
  font-size: 14px;
  color: #444;
`;

const ProfileCircle = styled.div`
  width: 40px; // 원하는 크기
  height: 40px; // 원하는 크기
  border-radius: 50%; // 동그라미 모양
  background-color: #ccc; // 임시 배경색
  display: inline-block; // 레이아웃에 맞게 조정
  background-image: url("/path/to/profile.jpg"); // 프로필 이미지 추가 가능
  background-size: cover; // 이미지가 꽉 차도록
  background-position: center; // 이미지를 가운데 정렬
`;
