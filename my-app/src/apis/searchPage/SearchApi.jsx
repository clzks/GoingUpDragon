import axios from "axios";



export const saveSearchQuery = async (searchQuery, token) => {
  
  const API_URL = `http://localhost:8080/api/search/save?searchQuery=${encodeURIComponent(searchQuery)}`; // 백엔드 주소

  try {
    const response = await axios.post(
      API_URL,
      { searchQuery }, // 요청 바디
      {
        headers: {
          Authorization: `Bearer ${token}`, // JWT 토큰 추가
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("검색 저장 실패:", error);
    return null;
  }
};
