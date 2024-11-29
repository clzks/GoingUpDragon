import React, { useState } from "react";
import styled from "styled-components";
import ReviewCard from "./card/ReviewCard";
import { reviewItems } from "./card/ReviewCardItem";
import Pagination from "../common/utilities/Pagination"; // Pagination 컴포넌트 가져오기

const Review = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // 페이지에 맞는 리뷰 목록 추출
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewItems.slice(indexOfFirstReview, indexOfLastReview);

  // 페이지 변경 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ReviewWrapper>
      <Title>작성한 수강평</Title>
      <ReviewList>
        {currentReviews.map((review) => (
          <ReviewCard
            key={review.id}
            title={review.title}
            content={review.content}
            rating={review.rating}
            date={review.date}
            likes={review.likes}
          />
        ))}
      </ReviewList>
      {/* 페이지네이션 컴포넌트 */}
      <Pagination
        items={reviewItems} // Pagination에 reviewItems 전달
        itemsPerPage={reviewsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </ReviewWrapper>
  );
};

export default Review;

// 스타일 정의
const ReviewWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
