import axios from "axios";

const BASE_URL = "http://localhost:8080/likes"; // 백엔드 API 기본 URL

// ✅ 특정 강의(courseId)의 좋아요 목록 조회
export const getLikesForCourse = async (courseId) => {
  try {
    const response = await axios.get(`${BASE_URL}/courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course likes:", error);
    throw error;
  }
};

// ✅ 특정 리뷰(reviewId)의 좋아요 목록 조회
export const getLikesForReview = async (reviewId) => {
  try {
    const response = await axios.get(`${BASE_URL}/reviews/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching review likes:", error);
    throw error;
  }
};

// ✅ 특정 QnA(qnaId)의 좋아요 목록 조회
export const getLikesForQnA = async (qnaId) => {
  try {
    const response = await axios.get(`${BASE_URL}/qna/${qnaId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching QnA likes:", error);
    throw error;
  }
};
