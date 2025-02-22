import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const getInstructorMyPageInfo = async (infoId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/myPage/instructor/${infoId}`
    ); // ✅ 올바른 엔드포인트로 수정!
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "강사 마이페이지 정보 조회 실패"
    );
  }
};

export const getInstructorMyPageSampleInfo = async (infoId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/myPage/instructor/sample/${infoId}`
    ); // ✅ 올바른 엔드포인트로 수정!
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "강사 마이페이지 샘플 정보 조회 실패"
    );
  }
};
