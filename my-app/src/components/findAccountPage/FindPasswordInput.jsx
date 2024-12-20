// GoingUpDragon/my-app/src/components/findAccountPage/FindPassWordInput.jsx

// 외부 라이브러리
import React, { useState } from 'react'; // React 및 상태 관리 훅
import styled from 'styled-components'; // 스타일드 컴포넌트

/* -------------------------------- */
/* FindPassWordInPut 컴포넌트 정의 */
/* -------------------------------- */

const FindPasswordInput = ({ onSuccess }) => {
  // 이메일 입력 상태 관리
  const [email, setEmail] = useState(''); // 입력된 이메일 주소
  const [error, setError] = useState(''); // 입력 오류 메시지

  /**
   * 이메일 입력값 변경 핸들러
   * 사용자가 입력창에 텍스트를 입력할 때 호출됩니다.
   * @param {Event} e - 이벤트 객체
   */
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  /**
   * 메일 전송 버튼 클릭 핸들러
   * 이메일 유효성을 검사하고, 성공 시 부모 컴포넌트의 onSuccess 함수 호출.
   */
  function handleSend() {
    // 이메일 유효성 검사 (정규식)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("유효한 이메일 주소를 입력하세요."); // 오류 메시지 설정
    } else {
      setError(""); // 오류 메시지 초기화
      onSuccess(); // 성공 시 콜백 호출
    }
  }

  return (
    <>
      {/* 이메일 입력 영역 */}
      <StyledInputContainer>
        {/* 설명 텍스트 */}
        <StyledInputLabel>이메일(아이디) 입력</StyledInputLabel>

        {/* 이메일 입력창과 전송 버튼 */}
        <StyledInputWrapper>
          <StyledInput
            type="text" // 텍스트 입력창
            placeholder="example@gmail.com" // 힌트 텍스트
            value={email} // 입력 상태 연결
            onChange={handleEmailChange} // 입력 변경 핸들러
          />
          <StyledSendButton onClick={handleSend}>
            메일 전송
          </StyledSendButton>
        </StyledInputWrapper>
      </StyledInputContainer>

      {/* 오류 메시지 표시 */}
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </>
  );
};

export default FindPasswordInput;

/* ------------------------------------- */
/* 스타일드 컴포넌트 정의 (하단에 위치) */
/* ------------------------------------- */

// 이메일 입력 설명 텍스트 스타일
const StyledInputLabel = styled.label`
  display: block;
  font-size: 0.8em;
  font-weight: bold;
  color: grey; /* 텍스트 색상 설정 */
  margin-bottom: 10px; /* 아래 여백 추가 */
`;

// 이메일 입력 영역 컨테이너
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column; /* 입력창과 설명 텍스트를 세로 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
  gap: 10px; /* 입력창과 설명 텍스트 사이 간격 */
  margin-left: 150px; /* 전체 컨테이너 왼쪽 여백 */
`;

// 이메일 입력창과 버튼 래퍼
const StyledInputWrapper = styled.div`
  display: flex; /* 가로 정렬 */
  gap: 10px; /* 입력창과 버튼 간격 */
  align-items: center; /* 수직 중앙 정렬 */
`;

// 이메일 입력창 스타일
const StyledInput = styled.input`
  width: 350px; /* 입력창 너비 */
  padding: 10px; /* 내부 여백 */
  font-size: 1em; /* 텍스트 크기 */
  border: 1px solid #ccc; /* 테두리 색상 */
  border-radius: 4px; /* 테두리 둥글기 */

  /* 포커스 상태 스타일 */
  &:focus {
    outline: none; /* 기본 아웃라인 제거 */
    border-color: #b0e8f1; /* 포커스 시 테두리 색상 변경 */
  }
`;

// 메일 전송 버튼 스타일
const StyledSendButton = styled.button`
  width: 120px; /* 버튼 너비 */
  padding: 10px; /* 내부 여백 */
  font-size: 1em; /* 텍스트 크기 */
  background-color: #ffffff; /* 버튼 배경색 */
  color: black; /* 텍스트 색상 */
  border: 1px solid #ccc; /* 테두리 색상 */
  border-radius: 4px; /* 테두리 둥글기 */
  cursor: pointer; /* 포인터 커서 표시 */

  /* 호버 상태 스타일 */
  &:hover {
    background-color: #f0f0f0; /* 배경색 변경 */
  }
`;

// 오류 메시지 스타일
const StyledErrorMessage = styled.p`
  color: red; /* 텍스트 색상 */
  font-size: 0.8em; /* 텍스트 크기 */
  margin-top: 5px; /* 위 여백 */
  margin-left: 150px; /* 왼쪽 여백 */
`;
