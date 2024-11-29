// src/components/myPage/card/ReviewCard.jsx
import React from "react";
import styled from "styled-components";
import { FaStar, FaRegThumbsUp } from "react-icons/fa";

const ReviewCard = ({ title, content, rating, date, likes }) => {
  return (
    <CardWrapper>
      <Header>
        <LectureTitle>{title}</LectureTitle>
        <ReviewDate>{date}</ReviewDate>
      </Header>

      <RatingWrapper>
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
        <RatingNumber>{rating}</RatingNumber>
      </RatingWrapper>

      <ReviewContent>{content}</ReviewContent>

      <Footer>
        <Recommendation>
          <FaRegThumbsUp />
          <Likes>{likes || 0}</Likes>
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

const StarIcon = styled(FaStar)`
  color: ${({ filled }) => (filled ? "#FFD700" : "#ddd")};
  margin-right: 2px;
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
