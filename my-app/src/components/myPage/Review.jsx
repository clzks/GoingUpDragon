import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewCard from "../common/card/ReviewCard";
import Pagination from "../common/utilities/Pagination";
import axios from "axios";

const Review = ({ reviewList }) => {
  //const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //const [loading, setLoading] = useState(true);
  const reviewsPerPage = 5;

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await axios.get("/api/user/reviews");
  //       setReviews(response.data);
  //     } catch (error) {
  //       console.error("수강평 데이터를 불러오지 못했습니다:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchReviews();
  // }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewList?.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ReviewWrapper>
      <Title>수강평</Title>
      <ReviewList>
        {reviewList?.length > 0 ? (
          currentReviews.map((review) => (
            <ReviewCard key={review.reviewId} review={review}></ReviewCard>
          ))
        ) : (
          <NoReviewText>등록된 수강평이 없습니다.</NoReviewText>
        )}
      </ReviewList>
      {reviewList?.length > 0 && (
        <Pagination
          items={reviewList}
          itemsPerPage={reviewsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
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
  width: 100%;
  margin: 40px 0;
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

const NoReviewText = styled.div`
  text-align: center;
  font-size: 14px;
  color: #888;
  margin: 20px 0;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 20px 0;
`;
