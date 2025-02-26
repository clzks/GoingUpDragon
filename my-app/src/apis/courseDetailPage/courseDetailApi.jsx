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

// 강사의 리뷰 개수 가져오기
export const getInstructorReviewCount = async (instructorId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/reviews/count/instructor/${instructorId}`
    );
    return response.data; // 리뷰 개수 반환
  } catch (error) {
    console.error("강사 리뷰 개수 가져오기 실패:", error);
    return 0; // 에러 발생 시 기본값 0 반환
  }
};

// 강사의 평균 평점 가져오기
export const getInstructorReviewRate = async (instructorId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/reviews/rate/instructor/${instructorId}`
    );
    return response.data; // 평균 평점 반환
  } catch (error) {
    console.error("강사 평균 평점 가져오기 실패:", error);
    return 0; // 에러 발생 시 기본값 0 반환
  }
};

// ✅ 강사의 수강평 리스트 가져오기
export const getInstructorReviews = async (instructorId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/reviews/instructor/${instructorId}`
    );
    return response.data; // 리뷰 리스트 반환
  } catch (error) {
    console.error("❌ 강사 수강평 가져오기 실패:", error);
    return []; // 에러 발생 시 빈 배열 반환
  }
};
