// GoingUpDragon/my-app/src/apis/loginPage/LoginApi.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api';  // 수정된 API 기본 URL

// 로그인 API 요청 함수
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;  // 응답 데이터 반환
    } catch (error) {
        // Provide more meaningful error handling
        if (error.response) {
            throw new Error(error.response.data.message || "로그인 요청 중 오류 발생");
        } else {
            throw new Error("서버 연결 오류가 발생했습니다.");
        }
    }
};
