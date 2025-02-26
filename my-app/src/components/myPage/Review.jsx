import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReviewCard from "../common/card/ReviewCard";
import Pagination from "../common/utilities/Pagination";
import { getInstructorReviews } from "../../apis/courseDetailPage/courseDetailApi";

const Review = ({ reviewList, isHome }) => {
  const [reviews, setReviews] = useState(reviewList || []);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;
  const { infoId } = useParams();

  console.log("리뷰리스트 :", reviews);

  useEffect(() => {
    if (isHome) {
      setReviews(reviewList);
    } else {
      if (infoId) {
        setLoading(true);
        getInstructorReviews(infoId)
          .then((data) => {
            console.log("✅ 강사 리뷰 불러오기 성공:", data);
            setReviews(data || []); // 데이터가 없을 경우 빈 배열로 설정
          })
          .catch((error) => {
            console.error("강사 리뷰 가져오기 실패:", error);
            setReviews([]); // 오류 발생 시 빈 배열 설정
          })
          .finally(() => setLoading(false)); // 로딩 종료
      }
    }
  }, [isHome, infoId, reviewList]);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = Array.isArray(reviews)
    ? reviews?.slice(indexOfFirstReview, indexOfLastReview)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ReviewWrapper>
      <Title>수강평</Title>
      {loading ? (
        <LoadingText>수강평 불러오는 중...</LoadingText>
      ) : (
        <>
          <ReviewList>
            {reviews?.length > 0 ? (
              currentReviews.map((review) => (
                <ReviewCard key={review.reviewId} review={review} />
              ))
            ) : (
              <NoReviewText>등록된 수강평이 없습니다.</NoReviewText>
            )}
          </ReviewList>
          {reviews?.length > 5 && (
            <Pagination
              items={reviews}
              itemsPerPage={reviewsPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </>
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
