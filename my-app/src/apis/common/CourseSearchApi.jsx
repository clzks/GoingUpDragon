// apis/searchPage/SearchApi.js
export const fetchCourses = async (searchQuery) => {
    try {
      const response = await fetch(`http://localhost:8080/courses/search?searchQuery=${searchQuery}`);
      const data = await response.json();
      return data; // 서버로부터 받은 강의 데이터 반환
    } catch (error) {
      console.error("검색 API 호출 실패:", error);
      throw error; // 에러 발생 시 처리
    }
  };
  