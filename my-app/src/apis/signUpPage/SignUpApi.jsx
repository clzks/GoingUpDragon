// GoingUpDragon/my-app/src/apis/signUpPage/SignUpApi.jsx

const API_BASE_URL = "http://localhost:8080/api";

export const signup = async (email, password, phoneNumber) => {
  const payload = { email, password, phoneNumber};

  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("회원가입 요청 실패");
    }

    return await response.json(); // 필요한 경우 서버에서 반환된 데이터를 사용
  } catch (error) {
    console.error("회원가입 오류:", error);
    throw error;
  }
};
