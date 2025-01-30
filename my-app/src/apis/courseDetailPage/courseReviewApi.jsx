import axios from "axios";

// 카테고리 데이터를 가져오는 API 함수
export const fetchCourseReviews = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/categories/1");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch reviews");
  }
};
