import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

// 🔹 특정 강의(courseId)에 대한 QnA 조회
export const getQnAsByCourseId = async (courseId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/qna/course/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "QnA 불러오기 실패");
  }
};
// 🔹 특정 QnA(qnaId)에 조회
export const getQnA = async (qnaId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/qna/${qnaId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "QnA 불러오기 실패");
  }
};

// 🔹 특정 QnA(qnaId)에 대한 좋아요 개수 조회
export const getQnALikeCount = async (qnaId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/qna/${qnaId}/likes`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "좋아요 개수 불러오기 실패"
    );
  }
};

// 🔹 QnA 작성 (질문 등록)
export const createQnA = async (qnaData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/qna`, qnaData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "QnA 작성 실패");
  }
};

// 특정 강의와 같은 MainCategoryId를 가진 랜덤 QnA 5개 조회
export const getRandomQnAsByMainCategory = async (courseId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/qna/related/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("랜덤 QnA 가져오기 실패:", error);
    throw new Error(error.response?.data?.message || "QnA 조회 실패");
  }
};

export const getReplyList = async (qnaId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/qna/${qnaId}/replies`);
    return response.data;
  } catch (error) {
    console.error("QnA 답변 가져오기 실패:", error);
    throw new Error(error.response?.data?.message || "QnA 답변 조회 실패");
  }
};

export const getInstructorQnACount = async (instructorId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/qna/count/instructor/${instructorId}`
    );
    return response.data; // QnA 개수 반환
  } catch (error) {
    console.error("QnA 개수 가져오기 실패:", error);
    return 0; // 에러 발생 시 기본값 0 반환
  }
};

export const getQnAByinstructorId = async (instructorId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/qna/instructor/${instructorId}`
    );
    return response.data; // QnA 리스트 반환
  } catch (error) {
    console.error("❌ 강사 QnA 가져오기 실패:", error);
    return []; // 에러 발생 시 빈 배열 반환
  }
};
