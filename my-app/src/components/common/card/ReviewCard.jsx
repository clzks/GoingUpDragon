// GoingUpDragon/my-app/src/components/common/card/ReviewCard.jsx
import React, { useState, useEffect } from "react";

// 외부 라이브러리
import styled from "styled-components";
import { FaRegThumbsUp } from "react-icons/fa";

// GoingUpDragon/my-app/src/components/common
import RatingStarList from "../icons/RatingStarList";
import LikeButton from "../utilities/LikeButton";
import ShareButton from "../utilities/ShareButton";
import { getLikesForReview } from "../../../apis/common/likeApi";

const ReviewCard = ({ review }) => {
  var reviewId = review.reviewId;
  var nickName = review.nickName;
  var content = review.comment;
  var rating = review.rate;
  var date = review.createdAt;
  var reply = review.reply;
  var replyDate = review.replyCreatedAt;
  var isMyPage = false;

  const [likeCount, setLikeCount] = useState(0); // ✅ 초기값 설정

  useEffect(() => {
    getLikesForReview(reviewId)
      .then((data) => setLikeCount(data.length))
      .catch((error) => console.error("리뷰 좋아요 가져오기 실패:", error));
  }, [reviewId, likeCount]); // ✅ 좋아요가 변경될 때만 실행됨

  return (
    <CardWrapper>
      <Header>
        {isMyPage ? <></> : <ProfileCircle></ProfileCircle>}
        <NickName>{nickName}</NickName>
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
          <Likes>{likeCount || 0}</Likes>
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

const NickName = styled.h3`
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
  font-size: 16px;
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
