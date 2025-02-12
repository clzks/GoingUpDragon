export const logout = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/logout", {  // ✅ 절대 경로 사용
            method: "POST",
            credentials: "include",
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`로그아웃 실패: ${errorMessage}`);
        }

        return true;
    } catch (error) {
        console.error("Logout error:", error);
        return false;
    }
};


