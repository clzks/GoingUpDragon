import axios from "axios";

const BASE_URL = "http://localhost:8080/courses"; // 백엔드 API 기본 URL

export const getCourse = async (courseId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const getCourseList = async (instructorId) => {
  try {
    const response = await axios.get(`${BASE_URL}/instructor/${instructorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courseList:", error);
    throw error;
  }
};

// 평점 3.5점 이상인 강의를 limit만큼 랜덤하게 받아오는 함수. infoId가 존재하는 경우 (학생의 경우) 수강중인 강의는 제외
export const getHighRatingCourseList = async (infoId = -1, limit = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-rated`, {
      params: { infoId, limit }, // ✅ Query Parameter로 `infoId, limit` 전달
    });

    return response.data; // ✅ 응답 데이터 반환
  } catch (error) {
    console.error("🚨 Error fetching top-rated courses:", error);
    return []; // ✅ 에러 시 빈 배열 반환
  }
};

// 무료 강의를 limit만큼 랜덤하게 받아오는 함수. infoId가 존재하는 경우 (학생의 경우) 수강중인 강의는 제외
export const getFreeCourseList = async (infoId = -1, limit = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/free`, {
      params: { infoId, limit }, // ✅ Query Parameter로 `infoId, limit` 전달
    });

    return response.data;
  } catch (error) {
    console.error("🚨 Error fetching free courses:", error);
    return []; // ✅ 에러 시 빈 배열 반환
  }
};

export const getCourseListByLevel = async (
  courseLevel = "입문",
  infoId = -1,
  limit = 10
) => {
  try {
    const response = await axios.get(`${BASE_URL}/level`, {
      params: { courseLevel, infoId, limit }, // ✅ Query Parameter로 `courseLevel, infoId, limit` 전달
    });

    return response.data;
  } catch (error) {
    console.error("🚨 Error fetching level of courses:", error);
    return []; // ✅ 에러 시 빈 배열 반환
  }
};

export const getCoursesByFilterAndSort = async ({
  mainCategory,
  subCategory,
  level = "모두",
  language = "모두",
  timeFilter = null,
  selectedTags = [],
  sortBy = "latest",
  size = 32,
  offset = 0,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}/filtered`, {
      params: {
        mainCategory,
        subCategory,
        level,
        language,
        timeFilter,
        selectedTags: selectedTags.length > 0 ? selectedTags.join(",") : null, // 리스트를 문자열로 변환
        sortBy,
        size,
        offset,
      },
    });
    return response.data; // 받은 데이터 반환
  } catch (error) {
    console.error("Error fetching courses:", error);
    return null;
  }
};

export const getInstructorCoursesCount = async (instructorId) => {
  try {
    const response = await axios.get(`${BASE_URL}/count/${instructorId}`);
    return response.data; // 강의 개수 반환
  } catch (error) {
    console.error("Error fetching instructor course count:", error);
    return 0; // 에러 발생 시 기본값 0 반환
  }
};
