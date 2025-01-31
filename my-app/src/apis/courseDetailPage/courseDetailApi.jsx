import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

// 모든 리뷰 조회
export const getCourseReviews = async (courseId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/reviews/courses/${courseId}`
    ); // ✅ 올바른 엔드포인트로 수정!
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch reviews");
  }
};

// 리뷰 작성
export const postReview = (courseId, reviewData) =>
  axios.post(`${API_BASE_URL}/courses/${courseId}/reviews`, reviewData);

// 리뷰 수정
export const updateReview = (reviewId, reviewData) =>
  axios.put(`${API_BASE_URL}/reviews/${reviewId}`, reviewData);

// 리뷰 삭제
export const deleteReview = (reviewId) =>
  axios.delete(`${API_BASE_URL}/reviews/${reviewId}`);
