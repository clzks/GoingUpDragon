import React, { useState } from "react";
import styled from "styled-components";
import ReviewCard from "../common/card/ReviewCard";
import { reviewItems } from "./card/ReviewCardItem";
import Pagination from "../common/utilities/Pagination"; 

const Review = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewItems.slice(indexOfFirstReview, indexOfLastReview);

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
      <Pagination
        items={reviewItems} 
        itemsPerPage={reviewsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  margin: 20px 0;
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
