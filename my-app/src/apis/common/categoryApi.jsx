import axios from 'axios';

// 카테고리 데이터를 가져오는 API 함수
export const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/categories/1");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch categories');
  }
};

// import axios from "axios";

// const API_BASE_URL = "http://localhost:8080/api/categories/1";

// /**
//  * 카테고리 데이터를 가져오는 함수
//  * @param {boolean} fetchSubCategories - 서브 카테고리만 반환할지 여부
//  * @returns {Object|Array} 전체 카테고리 데이터 또는 서브 카테고리 배열
//  */
// export const fetchCategories = async (fetchSubCategories = false) => {
//   try {
//     const response = await axios.get(API_BASE_URL);
//     return fetchSubCategories ? response.data.subCategories || [] : response.data;
//   } catch (error) {
//     console.error("Failed to fetch categories:", error);
//     throw new Error(error.response?.data?.message || "Failed to fetch categories");
//   }
// };

