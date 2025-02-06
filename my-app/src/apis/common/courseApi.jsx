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
