import axios from 'axios';

// Axios 인스턴스 설정
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// 로그인된 사용자만 헤더에 Authorization 추가
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // 토큰을 Authorization 헤더에 추가
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;
